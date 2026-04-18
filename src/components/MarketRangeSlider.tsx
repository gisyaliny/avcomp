'use client';

import { useEffect, useRef } from 'react';
import noUiSlider from 'nouislider';
import type { API } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import styles from './MarketRangeSlider.module.css';

function parseNumLocal(s: string): number | null {
    if (s == null || s === '') return null;
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
}

function clamp(n: number, lo: number, hi: number) {
    return Math.min(hi, Math.max(lo, n));
}

/** Empty strings when range spans full slider = no filter. */
function rangeToFilterStrings(
    lo: number,
    hi: number,
    minB: number,
    maxB: number,
    step: number
): { minStr: string; maxStr: string } {
    const tol = Math.max(step / 500, 0.01);
    if (lo <= minB + tol && hi >= maxB - tol) {
        return { minStr: '', maxStr: '' };
    }
    return {
        minStr: String(Math.round(lo)),
        maxStr: String(Math.round(hi)),
    };
}

export type MarketRangeSliderProps = {
    label: string;
    minBound: number;
    maxBound: number;
    step: number;
    minStr: string;
    maxStr: string;
    onRangeChange: (minStr: string, maxStr: string) => void;
    formatTooltip: (n: number) => string;
    /** Tighter spacing when sliders sit in a multi-column row. */
    compact?: boolean;
};

export default function MarketRangeSlider({
    label,
    minBound,
    maxBound,
    step,
    minStr,
    maxStr,
    onRangeChange,
    formatTooltip,
    compact = false,
}: MarketRangeSliderProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const onRangeChangeRef = useRef(onRangeChange);
    onRangeChangeRef.current = onRangeChange;

    const startPair = (): [number, number] => {
        if (maxBound <= minBound) return [0, 1];
        const a = parseNumLocal(minStr);
        const b = parseNumLocal(maxStr);
        return [
            a != null ? clamp(a, minBound, maxBound) : minBound,
            b != null ? clamp(b, minBound, maxBound) : maxBound,
        ];
    };

    useEffect(() => {
        const el = rootRef.current as (HTMLElement & { noUiSlider?: API }) | null;
        if (!el || maxBound <= minBound) return;

        noUiSlider.create(el, {
            start: startPair(),
            connect: [false, true, false],
            range: { min: minBound, max: maxBound },
            step,
            tooltips: [{ to: (v) => formatTooltip(Number(v)) }, { to: (v) => formatTooltip(Number(v)) }],
            format: {
                to: (v) => v,
                from: (v) => Number(v),
            },
        });

        const api = el.noUiSlider;
        if (!api) return;

        const onChange = () => {
            const raw = api.get(true) as number[];
            const lo = Number(raw[0]);
            const hi = Number(raw[1]);
            const r = rangeToFilterStrings(lo, hi, minBound, maxBound, step);
            onRangeChangeRef.current(r.minStr, r.maxStr);
        };

        /* `change` (not `slide`) avoids fighting React sync on every pixel while dragging. */
        api.on('change', onChange);

        return () => {
            el.noUiSlider?.destroy();
            el.innerHTML = '';
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- recreate only when scale changes
    }, [minBound, maxBound, step]);

    useEffect(() => {
        const el = rootRef.current as (HTMLElement & { noUiSlider?: API }) | null;
        const api = el?.noUiSlider;
        if (!api || maxBound <= minBound) return;

        const next0 = parseNumLocal(minStr) != null ? clamp(parseNumLocal(minStr)!, minBound, maxBound) : minBound;
        const next1 = parseNumLocal(maxStr) != null ? clamp(parseNumLocal(maxStr)!, minBound, maxBound) : maxBound;
        const cur = api.get(true) as number[];
        if (Math.abs(Number(cur[0]) - next0) < 1e-7 && Math.abs(Number(cur[1]) - next1) < 1e-7) return;

        api.set([next0, next1], false);
    }, [minStr, maxStr, minBound, maxBound]);

    const wrapClass = `${styles.wrap}${compact ? ` ${styles.wrapCompact}` : ''}`;

    if (maxBound <= minBound) {
        return (
            <div className={wrapClass}>
                <div className={styles.label}>{label}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>No data for range.</p>
            </div>
        );
    }

    return (
        <div className={wrapClass}>
            <div className={styles.label}>{label}</div>
            <div ref={rootRef} className={styles.sliderTarget} />
        </div>
    );
}
