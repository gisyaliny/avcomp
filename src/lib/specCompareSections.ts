import type { Aircraft } from '@/types';
import { formatCell, getSpecSnapshot } from '@/lib/specComparison';
import { SPEC_COMPARE_SECTIONS_FULL_BROKER } from '@/lib/fullCompareBrokerSections';

export type SpecCompareSectionRow = {
    label: string;
    format: (a: Aircraft) => string;
};

export type SpecCompareSectionDef = {
    title: string;
    rows: SpecCompareSectionRow[];
};

function snapFormat(fn: (s: ReturnType<typeof getSpecSnapshot>) => unknown): (a: Aircraft) => string {
    return (a: Aircraft) => formatCell(fn(getSpecSnapshot(a)) as never);
}

function priceFormat(a: Aircraft): string {
    if (!a.askPrice || a.askPrice <= 0) return 'Inquire / M/O';
    const m = a.askPrice / 1_000_000;
    return m >= 1 ? `$${m.toFixed(2)}M` : `$${a.askPrice.toLocaleString()}`;
}

/** Abbreviated / “key metrics” — identity, listing, core cabin & headline performance. */
export const SPEC_COMPARE_SECTIONS_KEY: SpecCompareSectionDef[] = [
    {
        title: 'Aircraft · identity',
        rows: [
            { label: 'Manufacturer', format: snapFormat((s) => s.make) },
            { label: 'Model', format: snapFormat((s) => s.model) },
            { label: 'Serial number', format: snapFormat((s) => s.sn) },
            { label: 'Year', format: snapFormat((s) => s.yom) },
        ],
    },
    {
        title: 'Listing snapshot',
        rows: [
            { label: 'Base', format: snapFormat((s) => s.base) },
            { label: 'Ask (from DB)', format: priceFormat },
            {
                label: 'AFTT (hrs)',
                format: snapFormat((s) => (s.aftt != null ? Math.round(Number(s.aftt)) : null)),
            },
            {
                label: 'Cycles',
                format: snapFormat((s) => (s.cycles != null ? Math.round(Number(s.cycles)) : null)),
            },
            { label: 'Engine program', format: snapFormat((s) => s.engineProgram) },
        ],
    },
    {
        title: 'Cabin (key)',
        rows: [
            { label: 'Seating — typical PAX', format: snapFormat((s) => s.typicalPax) },
            {
                label: 'Cabin length (ft)',
                format: snapFormat((s) =>
                    s.cabinLengthFt != null ? Number(s.cabinLengthFt).toFixed(1) : null
                ),
            },
            {
                label: 'Cabin height (ft)',
                format: snapFormat((s) =>
                    s.cabinHeightFt != null ? Number(s.cabinHeightFt).toFixed(2) : null
                ),
            },
            {
                label: 'Cabin width — max (ft)',
                format: snapFormat((s) =>
                    s.cabinWidthFt != null ? Number(s.cabinWidthFt).toFixed(2) : null
                ),
            },
        ],
    },
    {
        title: 'Baggage',
        rows: [{ label: 'Baggage volume (cu ft)', format: snapFormat((s) => s.baggageCuFt) }],
    },
    {
        title: 'Performance (key)',
        rows: [
            {
                label: 'Max cruise speed (KTAS)',
                format: snapFormat((s) =>
                    s.maxCruiseKtas != null ? Math.round(Number(s.maxCruiseKtas)) : null
                ),
            },
            {
                label: 'Max range (NM)',
                format: snapFormat((s) =>
                    s.maxRangeNm != null ? Math.round(Number(s.maxRangeNm)).toLocaleString() : null
                ),
            },
            {
                label: 'Max cruise altitude (ft)',
                format: snapFormat((s) =>
                    typeof s.maxAltitudeFt === 'number'
                        ? Math.round(s.maxAltitudeFt).toLocaleString()
                        : s.maxAltitudeFt
                ),
            },
        ],
    },
];

/** Full broker-style sheet — DB-backed fields plus deterministic mock for gaps. */
export const SPEC_COMPARE_SECTIONS_FULL: SpecCompareSectionDef[] = SPEC_COMPARE_SECTIONS_FULL_BROKER;

export function getSpecCompareSections(mode: 'key' | 'full'): SpecCompareSectionDef[] {
    return mode === 'key' ? SPEC_COMPARE_SECTIONS_KEY : SPEC_COMPARE_SECTIONS_FULL;
}
