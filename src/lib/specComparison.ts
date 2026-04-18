import type { Aircraft } from '@/types';

/** Muted column tints (sidebar + table), aligned with broker comparison sheets. */
export const COMPARE_COLUMN_TINTS = [
    'rgba(248, 215, 218, 0.55)',
    'rgba(255, 243, 205, 0.65)',
    'rgba(204, 229, 255, 0.65)',
    'rgba(212, 237, 218, 0.65)',
    'rgba(226, 213, 240, 0.55)',
    'rgba(226, 227, 229, 0.75)',
];

export function formatCell(v: string | number | boolean | null | undefined): string {
    if (v === null || v === undefined) return '—';
    if (typeof v === 'boolean') return v ? 'Yes' : 'No';
    if (typeof v === 'number' && !Number.isFinite(v)) return '—';
    return String(v);
}

export function aircraftLabel(a: Aircraft): string {
    return `${a.make} ${a.model} · S/N ${a.sn}`;
}

/** Pull spec values with fallbacks to flat Aircraft fields. */
export function getSpecSnapshot(a: Aircraft) {
    const sp = a.specs?.performance;
    const dim = a.specs?.dimensions;
    const cap = a.specs?.capacity;
    const intr = a.specs?.interior;

    return {
        make: a.make,
        model: a.model,
        sn: a.sn,
        yom: a.yom,
        base: a.base,
        listingAskUsd: a.askPrice,
        aftt: a.aftt,
        cycles: a.cycles,
        engineProgram: a.engineProgram,
        typicalPax: intr?.typicalPAX ?? a.maxPax,
        sleeps: intr?.sleeps,
        cabinLengthFt: dim?.cabinLength ?? a.cabinLength,
        cabinHeightFt: dim?.cabinHeight ?? a.cabinHeight,
        cabinWidthFt: dim?.cabinWidth ?? a.cabinWidth,
        flatFloors: dim?.flatFloors,
        baggageCuFt: cap?.baggageVolume,
        maxCruiseKtas: sp?.maxCruiseSpeed ?? a.cruiseSpeed,
        typicalCruiseKtas: sp?.typicalCruiseSpeed ?? a.cruiseSpeed,
        maxRangeNm: sp?.maxRange ?? a.rangeNm,
        typicalRangeNm: sp?.typicalRange ?? a.rangeNm,
        endurance: sp?.typicalEndurance ?? '—',
        maxAltitudeFt: sp?.maxCruiseAltitude ?? '—',
    };
}
