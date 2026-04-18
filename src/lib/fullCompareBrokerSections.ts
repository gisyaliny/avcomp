import type { Aircraft } from '@/types';
import { getSpecSnapshot } from '@/lib/specComparison';
import {
    formatFullCell,
    rngFloat,
    rngInt,
    rngPick,
    mockWeightLadder,
    engineDisplay,
} from '@/lib/fullCompareSnapshot';

type Row = { label: string; format: (a: Aircraft) => string };
export type BrokerSection = { title: string; rows: Row[] };

function snapFormat(fn: (s: ReturnType<typeof getSpecSnapshot>) => unknown): (a: Aircraft) => string {
    return (a: Aircraft) => formatFullCell(fn(getSpecSnapshot(a)) as never);
}

function priceFormat(a: Aircraft): string {
    if (!a.askPrice || a.askPrice <= 0) return 'Inquire / M/O';
    const m = a.askPrice / 1_000_000;
    return m >= 1 ? `$${m.toFixed(2)}M` : `$${a.askPrice.toLocaleString()}`;
}

/**
 * Full broker-style specification sheet: merge AvComp DB fields with deterministic mock
 * for rows not stored in `Aircraft` / market listing (per product brief).
 */
export const SPEC_COMPARE_SECTIONS_FULL_BROKER: BrokerSection[] = [
    {
        title: 'Aircraft · identity',
        rows: [
            { label: 'Manufacturer', format: snapFormat((s) => s.make) },
            { label: 'Model', format: snapFormat((s) => s.model) },
            { label: 'Serial number', format: snapFormat((s) => s.sn) },
            { label: 'Year (YOM)', format: snapFormat((s) => s.yom) },
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
            { label: 'Typical endurance (sched.)', format: snapFormat((s) => s.endurance) },
            { label: 'Engine program (listing)', format: snapFormat((s) => s.engineProgram) },
        ],
    },
    {
        title: 'Cabin characteristics',
        rows: [
            { label: 'Seating — typical PAX', format: snapFormat((s) => s.typicalPax) },
            {
                label: 'Seating — high density (PAX)',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const p = s.typicalPax != null ? Number(s.typicalPax) : 8;
                    return String(rngInt(a.id, 11, p, p + 3));
                },
            },
            {
                label: 'Wing loading (lb/sq ft)',
                format: (a) => rngFloat(a.id, 12, 77, 95, 1),
            },
            {
                label: 'Power loading (lb/lbf)',
                format: (a) => rngFloat(a.id, 13, 2.45, 3.15, 2),
            },
            {
                label: 'Noise — lateral EPNdB',
                format: (a) => String(rngInt(a.id, 14, 79, 89)),
            },
            {
                label: 'Noise — flyover EPNdB',
                format: (a) => String(rngInt(a.id, 15, 82, 92)),
            },
            {
                label: 'Noise — approach EPNdB',
                format: (a) => String(rngInt(a.id, 16, 88, 96)),
            },
        ],
    },
    {
        title: 'Dimensions — external (ft)',
        rows: [
            { label: 'Length', format: (a) => rngFloat(a.id, 20, 51.5, 56.2, 1) },
            { label: 'Height', format: (a) => rngFloat(a.id, 21, 16.8, 18.6, 1) },
            { label: 'Span', format: (a) => rngFloat(a.id, 22, 54.0, 58.5, 1) },
        ],
    },
    {
        title: 'Dimensions — internal (ft)',
        rows: [
            {
                label: 'Length — gross',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const base = s.cabinLengthFt != null ? Number(s.cabinLengthFt) : 18.5;
                    return (base + Number(rngFloat(a.id, 30, 0.2, 1.1, 1))).toFixed(1);
                },
            },
            {
                label: 'Length — net',
                format: snapFormat((s) =>
                    s.cabinLengthFt != null ? Number(s.cabinLengthFt).toFixed(1) : null
                ),
            },
            {
                label: 'Height (note)',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const h = s.cabinHeightFt != null ? Number(s.cabinHeightFt).toFixed(1) : '5.7';
                    const flat = s.flatFloors ? 'Flat floor' : 'Curved floor';
                    return `${h} (${flat})`;
                },
            },
            {
                label: 'Width — max',
                format: snapFormat((s) =>
                    s.cabinWidthFt != null ? Number(s.cabinWidthFt).toFixed(2) : null
                ),
            },
            {
                label: 'Width — floor',
                format: (a) => rngFloat(a.id, 31, 4.75, 5.35, 2),
            },
        ],
    },
    {
        title: 'Baggage',
        rows: [
            {
                label: 'Internal (cu ft / lb)',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const cu = s.baggageCuFt != null ? Math.round(Number(s.baggageCuFt)) : rngInt(a.id, 40, 65, 115);
                    const lb = rngInt(a.id, 41, Math.round(cu * 6.5), Math.round(cu * 8.2));
                    return `${cu.toLocaleString()} / ${lb.toLocaleString()}`;
                },
            },
            {
                label: 'External (cu ft / lb)',
                format: (a) => {
                    const extCu = rngInt(a.id, 42, 0, 35);
                    const extLb = extCu > 0 ? rngInt(a.id, 43, extCu * 5, extCu * 8) : 0;
                    return extCu > 0 ? `${extCu} / ${extLb}` : '— / —';
                },
            },
        ],
    },
    {
        title: 'Power',
        rows: [
            { label: 'Engines (descr.)', format: (a) => engineDisplay(a) },
            {
                label: 'Output (lb ea.)',
                format: (a) => `${rngInt(a.id, 50, 3800, 5200).toLocaleString()} ea.`,
            },
            {
                label: 'Inspection interval (hrs)',
                format: (a) =>
                    `${rngInt(a.id, 51, 3500, 6000)} / ${rngPick(a.id, 52, ['Hot section', 'CORE', 'MPI'] as const)}`,
            },
        ],
    },
    {
        title: 'Weight (lb)',
        rows: [
            { label: 'Max ramp', format: (a) => mockWeightLadder(a).ramp.toLocaleString() },
            { label: 'Max takeoff', format: (a) => mockWeightLadder(a).mtow.toLocaleString() },
            { label: 'Max landing', format: (a) => mockWeightLadder(a).mlw.toLocaleString() },
            { label: 'Zero fuel', format: (a) => mockWeightLadder(a).zfw.toLocaleString() },
            { label: 'BOW', format: (a) => mockWeightLadder(a).bow.toLocaleString() },
            { label: 'Max payload', format: (a) => mockWeightLadder(a).maxPl.toLocaleString() },
            { label: 'Useful load', format: (a) => mockWeightLadder(a).useful.toLocaleString() },
        ],
    },
    {
        title: 'Limits',
        rows: [
            {
                label: 'Max fuel (lb)',
                format: (a) => rngInt(a.id, 60, 9200, 11200).toLocaleString(),
            },
            {
                label: 'Avail. payload w/ max fuel (lb)',
                format: (a) => rngInt(a.id, 61, 1100, 2400).toLocaleString(),
            },
            {
                label: 'Avail. fuel w/ max payload (lb)',
                format: (a) => rngInt(a.id, 62, 4200, 7800).toLocaleString(),
            },
            {
                label: 'Mmo (Mach)',
                format: (a) => rngFloat(a.id, 63, 0.75, 0.83, 2),
            },
            {
                label: 'Max cert. altitude MSL / cabin ΔP',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const ft =
                        typeof s.maxAltitudeFt === 'number' ? s.maxAltitudeFt : rngInt(a.id, 63, 43000, 47000);
                    const fl = Math.round(ft / 100);
                    return `FL ${fl} / ${rngFloat(a.id, 64, 9.2, 10.2, 1)} psi`;
                },
            },
        ],
    },
    {
        title: 'Airport performance',
        rows: [
            {
                label: 'TOFL — SL / ISA (ft)',
                format: (a) => rngInt(a.id, 70, 4100, 5200).toLocaleString(),
            },
            {
                label: 'TOFL — 5,000 ft @ 25°C (ft)',
                format: (a) => rngInt(a.id, 71, 6200, 7800).toLocaleString(),
            },
            {
                label: 'NBAA IFR takeoff (ft)',
                format: (a) => rngInt(a.id, 72, 4800, 6100).toLocaleString(),
            },
            {
                label: 'Vref @ MLW (KIAS)',
                format: (a) => String(rngInt(a.id, 73, 108, 124)),
            },
            {
                label: 'Landing distance — FAR 91 (ft)',
                format: (a) => rngInt(a.id, 74, 2800, 3600).toLocaleString(),
            },
        ],
    },
    {
        title: 'Climb',
        rows: [
            {
                label: 'Time to FL 370 (min)',
                format: (a) => rngFloat(a.id, 80, 22, 32, 0),
            },
            {
                label: 'FAR 25 one-engine-out ROC (fpm)',
                format: (a) => String(rngInt(a.id, 81, 380, 620)),
            },
            {
                label: 'FAR 25 OEI gradient (ft/NM)',
                format: (a) => rngFloat(a.id, 82, 28, 44, 1),
            },
        ],
    },
    {
        title: 'Ceilings (ft)',
        rows: [
            {
                label: 'Certificated',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    if (typeof s.maxAltitudeFt === 'number') return Math.round(s.maxAltitudeFt).toLocaleString();
                    return String(rngInt(a.id, 90, 43000, 47000));
                },
            },
            {
                label: 'All-engine service',
                format: (a) => String(rngInt(a.id, 91, 43000, 47000)),
            },
            {
                label: 'Engine-out service',
                format: (a) => String(rngInt(a.id, 92, 18000, 26000)),
            },
        ],
    },
    {
        title: 'Cruise — long range',
        rows: [
            {
                label: 'TAS / fuel flow',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const tas =
                        s.typicalCruiseKtas != null
                            ? Math.round(Number(s.typicalCruiseKtas) * 0.92)
                            : rngInt(a.id, 100, 360, 410);
                    const ff = rngInt(a.id, 101, 980, 1450);
                    return `${tas} KTAS / ${ff} lb/hr`;
                },
            },
            {
                label: 'Specific range (NM / 1000 lb)',
                format: (a) => rngFloat(a.id, 102, 42, 58, 1),
            },
        ],
    },
    {
        title: 'Cruise — high speed',
        rows: [
            {
                label: 'TAS / fuel flow',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const tas =
                        s.maxCruiseKtas != null ? Math.round(Number(s.maxCruiseKtas)) : rngInt(a.id, 110, 430, 480);
                    const ff = rngInt(a.id, 111, 1750, 2400);
                    return `${tas} KTAS / ${ff} lb/hr`;
                },
            },
            {
                label: 'Specific range (NM / 1000 lb)',
                format: (a) => rngFloat(a.id, 112, 28, 38, 1),
            },
        ],
    },
    {
        title: 'NBAA IFR ranges — max fuel (w/ avail. payload)',
        rows: [
            {
                label: 'Nautical miles',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const nm =
                        s.maxRangeNm != null ? Math.round(Number(s.maxRangeNm)) : rngInt(a.id, 120, 1400, 2100);
                    return nm.toLocaleString();
                },
            },
            {
                label: 'Average speed (KTAS)',
                format: snapFormat((s) =>
                    s.typicalCruiseKtas != null ? Math.round(Number(s.typicalCruiseKtas)) : null
                ),
            },
            {
                label: 'Trip fuel (lb)',
                format: (a) => rngInt(a.id, 121, 8200, 10400).toLocaleString(),
            },
        ],
    },
    {
        title: 'NBAA IFR ranges — four PAX (w/ avail. fuel)',
        rows: [
            {
                label: 'Nautical miles',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const base =
                        s.typicalRangeNm != null ? Math.round(Number(s.typicalRangeNm)) : rngInt(a.id, 130, 1200, 1850);
                    return base.toLocaleString();
                },
            },
            {
                label: 'Average speed (KTAS)',
                format: (a) => String(rngInt(a.id, 131, 410, 450)),
            },
            {
                label: 'Trip fuel (lb)',
                format: (a) => rngInt(a.id, 132, 6800, 9200).toLocaleString(),
            },
        ],
    },
    {
        title: 'NBAA IFR ranges — ferry',
        rows: [
            {
                label: 'Nautical miles',
                format: (a) => {
                    const s = getSpecSnapshot(a);
                    const ferry =
                        s.maxRangeNm != null
                            ? Math.round(Number(s.maxRangeNm) * 1.08)
                            : rngInt(a.id, 140, 1850, 2300);
                    return ferry.toLocaleString();
                },
            },
            {
                label: 'Average speed (KTAS)',
                format: (a) => String(rngInt(a.id, 141, 390, 430)),
            },
            {
                label: 'Trip fuel (lb)',
                format: (a) => rngInt(a.id, 142, 9800, 11800).toLocaleString(),
            },
        ],
    },
    {
        title: 'Missions (illustrative)',
        rows: [
            {
                label: '300 NM — runway req. (ft) / block time',
                format: (a) =>
                    `${rngInt(a.id, 150, 3200, 4100)} ft / ${rngInt(a.id, 151, 0, 1)}:${String(rngInt(a.id, 152, 40, 58)).padStart(2, '0')}`,
            },
            {
                label: '600 NM — runway req. (ft) / block time',
                format: (a) =>
                    `${rngInt(a.id, 153, 4100, 5100)} ft / ${rngInt(a.id, 154, 1, 2)}:${String(rngInt(a.id, 155, 15, 48)).padStart(2, '0')}`,
            },
            {
                label: '1,000 NM — runway req. (ft) / fuel used (lb)',
                format: (a) =>
                    `${rngInt(a.id, 156, 4800, 6200)} ft / ${rngInt(a.id, 157, 5200, 7200).toLocaleString()}`,
            },
        ],
    },
];
