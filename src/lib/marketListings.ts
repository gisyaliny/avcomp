import type { MarketDataPayload, MarketListing, MarketSortKey } from '@/types/marketListing';
import payload from '@/data/marketDatabase.json';
import { expandMarketListingsToDemo } from '@/lib/marketMockExpansion';

const data = payload as MarketDataPayload;

let cachedExpandedListings: MarketListing[] | null = null;

function getExpandedListings(): MarketListing[] {
    if (!cachedExpandedListings) {
        cachedExpandedListings = expandMarketListingsToDemo(data.listings);
    }
    return cachedExpandedListings;
}

export function getMarketPayload(): MarketDataPayload {
    const listings = getExpandedListings();
    return {
        ...data,
        meta: {
            ...data.meta,
            exportedRecordCount: listings.length,
        },
        listings,
    } as MarketDataPayload;
}

export function getAllListings(): MarketListing[] {
    return getExpandedListings();
}

export function getListingById(id: string): MarketListing | undefined {
    return getExpandedListings().find((x) => x.id === id);
}

export interface ListingQuery {
    q: string;
    /** Empty = any variant. Otherwise row.variant must be in this list. */
    variants: ('XLS' | 'XLS+')[];
    yodMin: number | null;
    yodMax: number | null;
    askMin: number | null;
    askMax: number | null;
    domMin: number | null;
    domMax: number | null;
    /** Empty = any location. Otherwise row.location must equal one entry (exact string). */
    locations: string[];
}

const norm = (s: string | null | undefined) => (s ?? '').toLowerCase();

function rowMatchesFreeText(row: MarketListing, q: string): boolean {
    if (!q.trim()) return true;
    const needle = q.trim().toLowerCase();
    const hay = [
        String(row.sn),
        norm(row.reg),
        norm(row.location),
        norm(row.engineProg),
        norm(row.partsProg),
        norm(row.apuProg),
        row.variant,
    ].join(' ');
    return hay.includes(needle);
}

export function filterListings(listings: MarketListing[], query: ListingQuery): MarketListing[] {
    return listings.filter((row) => {
        if (!rowMatchesFreeText(row, query.q)) return false;
        if (query.variants.length > 0) {
            const v = row.variant;
            if (v !== 'XLS' && v !== 'XLS+') return false;
            if (!query.variants.includes(v)) return false;
        }
        if (query.yodMin != null && (row.yod == null || row.yod < query.yodMin)) return false;
        if (query.yodMax != null && (row.yod == null || row.yod > query.yodMax)) return false;
        if (query.askMin != null) {
            if (row.askTakeUsd == null || row.askTakeUsd < query.askMin) return false;
        }
        if (query.askMax != null) {
            if (row.askTakeUsd == null || row.askTakeUsd > query.askMax) return false;
        }
        if (query.domMin != null && (row.dom == null || row.dom < query.domMin)) return false;
        if (query.domMax != null && (row.dom == null || row.dom > query.domMax)) return false;
        if (query.locations.length > 0) {
            const loc = row.location ?? '';
            if (!query.locations.includes(loc)) return false;
        }
        return true;
    });
}

function sortValue(row: MarketListing, key: MarketSortKey): string | number | null {
    switch (key) {
        case 'sn':
            return row.sn;
        case 'yod':
            return row.yod;
        case 'askTakeUsd':
            return row.askTakeUsd;
        case 'dom':
            return row.dom;
        case 'tsn':
            return row.tsn;
        case 'csn':
            return row.csn;
        case 'reg':
            return norm(row.reg);
        case 'location':
            return norm(row.location);
        default:
            return null;
    }
}

export function sortListings(
    listings: MarketListing[],
    key: MarketSortKey,
    dir: 'asc' | 'desc'
): MarketListing[] {
    const mul = dir === 'asc' ? 1 : -1;
    return [...listings].sort((a, b) => {
        const va = sortValue(a, key);
        const vb = sortValue(b, key);
        if (va == null && vb == null) return 0;
        if (va == null) return 1;
        if (vb == null) return -1;
        if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * mul;
        return String(va).localeCompare(String(vb), undefined, { numeric: true }) * mul;
    });
}

export function uniqueLocations(listings: MarketListing[]): string[] {
    const s = new Set<string>();
    for (const l of listings) {
        if (l.location) s.add(l.location);
    }
    return Array.from(s).sort((a, b) => a.localeCompare(b));
}

export function uniqueVariants(listings: MarketListing[]): ('XLS' | 'XLS+')[] {
    const s = new Set<'XLS' | 'XLS+'>();
    for (const l of listings) {
        if (l.variant === 'XLS' || l.variant === 'XLS+') s.add(l.variant);
    }
    return Array.from(s).sort((a, b) => a.localeCompare(b));
}

/** Numeric average; ignores null / missing. */
export function averageNumeric(
    listings: MarketListing[],
    pick: (r: MarketListing) => number | null | undefined
): number | null {
    const vals: number[] = [];
    for (const r of listings) {
        const v = pick(r);
        if (v != null && typeof v === 'number' && !Number.isNaN(v)) vals.push(v);
    }
    if (!vals.length) return null;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
}

/**
 * Compact USD for UI (avoids long zero runs): e.g. $4.3M, $425K.
 */
export function formatUsdCompact(usd: number): string {
    const v = Math.abs(usd);
    if (v >= 1_000_000) {
        const m = usd / 1_000_000;
        const decimals = m >= 100 ? 0 : m >= 10 ? 1 : 2;
        return `$${m.toFixed(decimals)}M`;
    }
    if (v >= 1_000) {
        const k = usd / 1_000;
        const rounded = Math.round(k * 10) / 10;
        return `$${Number.isInteger(rounded) ? rounded : rounded.toFixed(1)}K`;
    }
    return `$${Math.round(usd).toLocaleString()}`;
}

export function formatAskDisplay(row: MarketListing): string {
    if (row.askTakeUsd != null) {
        return formatUsdCompact(row.askTakeUsd);
    }
    if (row.askTakeRaw == null) return '—';
    if (typeof row.askTakeRaw === 'string') return row.askTakeRaw.toUpperCase() === 'M/O' ? 'M/O' : row.askTakeRaw;
    return formatUsdCompact(Number(row.askTakeRaw));
}

export function formatInspectionDate(iso: string | null): string {
    if (!iso || iso === '-') return '—';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return String(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}
