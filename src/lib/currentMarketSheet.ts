import type { CSSProperties } from 'react';
import type { MarketListing } from '@/types/marketListing';
import { formatInspectionDate } from '@/lib/marketListings';

export interface CurrentMarketViewRow {
    listing: MarketListing;
    yom: number | null;
    yod: number | null;
    /** AFTT / Cycles */
    afttCyc: number | null;
    eng1: string | null;
    eng2: string | null;
    /** Freeform notes */
    notes: string;
}

const isBlankProg = (s: string | null | undefined) =>
    !s || /^none$/i.test(String(s).trim());

export function buildViewRow(l: MarketListing): CurrentMarketViewRow {
    const tsn = l.tsn != null ? Number(l.tsn) : null;
    const csn = l.csn != null ? Number(l.csn) : null;
    const ratio =
        tsn != null && csn != null && csn > 0 ? Math.round((tsn / csn) * 1000) / 1000 : null;

    const notesParts: string[] = [];
    if (l.pax != null) notesParts.push(`${l.pax} Pax`);
    notesParts.push(l.variant);
    if (l.partsProg && !isBlankProg(l.partsProg)) notesParts.push(`Parts: ${l.partsProg}`);

    return {
        listing: l,
        yom: l.yod,
        yod: l.yod,
        afttCyc: ratio,
        eng1: '—',
        eng2: '—',
        notes: notesParts.join(', '),
    };
}

export function domHeatStyle(dom: number | null, maxDom: number): CSSProperties {
    if (dom == null || maxDom <= 0) return {};
    const t = Math.min(1, dom / maxDom);
    const alpha = 0.08 + t * 0.35;
    return {
        background: `rgba(200, 75, 62, ${alpha})`,
    };
}

export function yearHeatStyle(year: number | null, currentYear: number): CSSProperties {
    if (year == null) return {};
    const age = currentYear - year;
    if (age <= 3) return { background: 'rgba(45, 122, 79, 0.18)' };
    if (age <= 8) return { background: 'rgba(212, 148, 28, 0.12)' };
    return { background: 'rgba(200, 75, 62, 0.15)' };
}

export function ratioHeatStyle(ratio: number | null, minR: number, maxR: number): CSSProperties {
    if (ratio == null || maxR <= minR) return {};
    const t = (ratio - minR) / (maxR - minR);
    const clamped = Math.min(1, Math.max(0, t));
    const g = Math.round(45 + clamped * 110);
    const r = Math.round(200 - clamped * 130);
    return { background: `rgba(${r}, ${g}, 79, 0.16)` };
}

export function priceBarPct(askUsd: number | null, maxAsk: number): number {
    if (askUsd == null || maxAsk <= 0) return 0;
    return Math.min(100, (askUsd / maxAsk) * 100);
}

export function hourBarPct(value: number | null | string, maxV: number): number {
    if (value == null || value === '—') return 0;
    const n = typeof value === 'string' ? parseFloat(value) : value;
    if (!Number.isFinite(n) || maxV <= 0) return 0;
    return Math.min(100, (n / maxV) * 100);
}

export function formatInspectionMmYyyy(iso: string | null): string {
    if (!iso) return '—';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return formatInspectionDate(iso);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${mm}/${yyyy}`;
}
