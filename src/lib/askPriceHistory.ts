import type { AskPriceHistorySegment, MarketListing } from '@/types/marketListing';

export interface ResolvedAskSegment extends AskPriceHistorySegment {
    daysSpan: number | null;
    rangeLabel: string;
}

function parseLocalDate(iso: string): Date {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
}

export function formatUsdDeltaShort(usd: number): string {
    const abs = Math.abs(usd);
    let body: string;
    if (abs >= 1_000_000) body = `$${(abs / 1_000_000).toFixed(2)}M`;
    else if (abs >= 1_000) body = `$${Math.round(abs / 1_000)}K`;
    else body = `$${Math.round(abs).toLocaleString()}`;
    if (usd < 0) return `(${body})`;
    if (usd > 0) return `+${body}`;
    return body;
}

export function resolveAskPriceHistory(listing: MarketListing): ResolvedAskSegment[] {
    const raw = listing.askPriceHistory;
    if (!raw?.length) return [];

    return raw.map((seg) => {
        const start = parseLocalDate(seg.startDate);
        const end = seg.endDate ? parseLocalDate(seg.endDate) : null;
        let daysSpan: number | null = null;
        if (end && !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime())) {
            daysSpan = Math.max(0, Math.round((end.getTime() - start.getTime()) / 86400000));
        }
        const fmt = (d: Date) =>
            `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
        const rangeLabel =
            end != null
                ? `${fmt(start)} - ${fmt(end)}${daysSpan != null ? ` (${daysSpan} Days)` : ''}`
                : `${fmt(start)} - Present`;

        return { ...seg, daysSpan, rangeLabel };
    });
}

export function hasAskPriceHistoryOverlay(listing: MarketListing): boolean {
    return (listing.askPriceHistory?.length ?? 0) > 0;
}
