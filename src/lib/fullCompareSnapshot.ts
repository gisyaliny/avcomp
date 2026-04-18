import type { Aircraft } from '@/types';
import { getSpecSnapshot } from '@/lib/specComparison';

/** Deterministic pseudo-random integers from aircraft id (stable mock per row). */
export function hashSeed(id: string, salt: number): number {
    let h = 2166136261 >>> 0;
    const str = `${id}\0${salt}`;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619) >>> 0;
    }
    return h;
}

export function rngInt(id: string, salt: number, min: number, max: number): number {
    if (max <= min) return min;
    const r = hashSeed(id, salt) / 0xffffffff;
    return min + Math.floor(r * (max - min + 1));
}

export function rngPick<T>(id: string, salt: number, arr: readonly T[]): T {
    return arr[hashSeed(id, salt) % arr.length]!;
}

export function rngFloat(id: string, salt: number, min: number, max: number, decimals: number): string {
    const r = hashSeed(id, salt) / 0xffffffff;
    const v = min + r * (max - min);
    return v.toFixed(decimals);
}

/** Format nm/lb/etc. — uses DB snapshot where present, fills broker-style sheet gaps with mock. */
export function formatFullCell(v: string | number | boolean | null | undefined): string {
    if (v === null || v === undefined) return '—';
    if (typeof v === 'boolean') return v ? 'Yes' : 'No';
    if (typeof v === 'number' && !Number.isFinite(v)) return '—';
    return String(v);
}

/**
 * Coherent weight ladder for light/mid jets (Citation-class), derived from id.
 */
export function mockWeightLadder(a: Aircraft) {
    const id = a.id;
    const mtow = rngInt(id, 101, 16800, 20400);
    const ramp = mtow + rngInt(id, 102, 200, 900);
    const mlw = mtow - rngInt(id, 103, 800, 2200);
    const zfw = mtow - rngInt(id, 104, 5200, 8200);
    const bow = zfw - rngInt(id, 105, 900, 1800);
    const maxPl = mtow - bow - rngInt(id, 106, 4200, 5800);
    const useful = mtow - bow;
    return { ramp, mtow, mlw, zfw, bow, maxPl, useful };
}

export function engineDisplay(a: Aircraft): string {
    const ep = a.engineProgram?.trim();
    if (ep && ep !== '—' && !/^see listing/i.test(ep)) return ep;
    return `2 × Turbofan (${a.model.split(' ').slice(-1)[0] ?? 'series'})`;
}
