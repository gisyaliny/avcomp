'use client';

import { createPortal } from 'react-dom';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { TrendingDown, TrendingUp, X } from 'lucide-react';
import type { MarketListing } from '@/types/marketListing';
import { formatAskDisplay } from '@/lib/marketListings';
import {
    formatUsdDeltaShort,
    hasAskPriceHistoryOverlay,
    resolveAskPriceHistory,
} from '@/lib/askPriceHistory';
import { priceBarPct } from '@/lib/currentMarketSheet';
import styles from './AskPriceHistoryPopover.module.css';

type Props = {
    listing: MarketListing;
    maxAsk: number;
};

export default function AskPriceHistoryCell({ listing, maxAsk }: Props) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const askUsd = listing.askTakeUsd;

    const segments = resolveAskPriceHistory(listing);
    const hasHistory = hasAskPriceHistoryOverlay(listing);

    const reposition = useCallback(() => {
        const el = wrapRef.current;
        if (!el) return;
        const anchor = el.getBoundingClientRect();
        const pw = 340;
        let left = anchor.left + anchor.width / 2 - pw / 2;
        left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
        let top = anchor.bottom + 8;
        const maxTop = window.innerHeight - 380;
        if (top > maxTop && maxTop > 80) {
            top = Math.max(8, anchor.top - 8 - 320);
        }
        setPos({ top, left });
    }, []);

    useLayoutEffect(() => {
        if (!open) return;
        reposition();
    }, [open, reposition, segments.length]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        const onScroll = () => setOpen(false);
        const onResize = () => reposition();
        window.addEventListener('keydown', onKey);
        window.addEventListener('scroll', onScroll, true);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('scroll', onScroll, true);
            window.removeEventListener('resize', onResize);
        };
    }, [open, reposition]);

    const hoverOpenRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hoverCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimers = () => {
        if (hoverOpenRef.current) clearTimeout(hoverOpenRef.current);
        if (hoverCloseRef.current) clearTimeout(hoverCloseRef.current);
        hoverOpenRef.current = null;
        hoverCloseRef.current = null;
    };

    const onEnter = () => {
        clearTimers();
        hoverOpenRef.current = setTimeout(() => setOpen(true), 140);
    };

    const onLeave = () => {
        clearTimers();
        hoverCloseRef.current = setTimeout(() => setOpen(false), 200);
    };

    const onAnchorClick = () => {
        if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
            setOpen((v) => !v);
        }
    };

    useEffect(() => () => clearTimers(), []);

    const popover = open && (
        <div
            className={styles.popover}
            style={{ top: pos.top, left: pos.left }}
            role="dialog"
            aria-label="Asking price history"
            onMouseEnter={() => clearTimers()}
            onMouseLeave={onLeave}
        >
            <div className={styles.popoverHeader}>
                <span>Asking Price History</span>
                <button type="button" className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
                    <X size={16} />
                </button>
            </div>
            <div className={styles.popoverBody}>
                {hasHistory && segments.length > 0 ? (
                    <>
                        {segments.map((seg, i) => (
                            <div key={`${seg.startDate}-${i}`} className={styles.segment}>
                                <div className={styles.range}>{seg.rangeLabel}</div>
                                <div className={styles.priceLine}>
                                    <span className={styles.priceMain}>{seg.priceDisplay}</span>
                                    {seg.reductionFromPriorUsd != null && seg.reductionFromPriorUsd !== 0 && (
                                        <span
                                            className={
                                                seg.reductionFromPriorUsd < 0 ? styles.reduction : styles.increase
                                            }
                                        >
                                            {seg.reductionFromPriorUsd < 0 ? (
                                                <TrendingDown size={14} aria-hidden />
                                            ) : (
                                                <TrendingUp size={14} aria-hidden />
                                            )}
                                            ({formatUsdDeltaShort(seg.reductionFromPriorUsd)})
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                        {listing.askPriceHistoryFooter ? (
                            <div className={styles.footer}>{listing.askPriceHistoryFooter}</div>
                        ) : null}
                    </>
                ) : (
                    <p className={styles.emptyNote}>
                        No price change history on file for this aircraft. Current listing:{' '}
                        <strong>{formatAskDisplay(listing)}</strong>.
                    </p>
                )}
            </div>
        </div>
    );

    return (
        <>
            <div
                ref={wrapRef}
                className={`${styles.anchor} ${styles.anchorInteractive}`}
                style={{ position: 'relative' }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                onClick={onAnchorClick}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpen((v) => !v);
                    }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={open}
                aria-haspopup="dialog"
            >
                <span className={styles.barFill} style={{ width: `${priceBarPct(askUsd, maxAsk)}%` }} />
                <span className={styles.inner}>
                    {formatAskDisplay(listing)}
                    <span className={styles.hint} aria-hidden>
                        ⓘ
                    </span>
                </span>
            </div>
            {typeof document !== 'undefined' && createPortal(popover, document.body)}
        </>
    );
}
