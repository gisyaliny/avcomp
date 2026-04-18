'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, FileText } from 'lucide-react';
import styles from '@/app/admin/current-market/current-market.module.css';

export type MarketDbNavProps = {
    /** Insert between the title dropdown and the PDF button (e.g. Summary). */
    trailing?: React.ReactNode;
    /** Show “Create PDF Report” on the right. */
    showPdf?: boolean;
};

export default function MarketDbNav({ trailing, showPdf = true }: MarketDbNavProps) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const menuRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const titleLabel = useMemo(() => {
        if (pathname.startsWith('/admin/current-market')) {
            const sheet = searchParams.get('sheet');
            const spec = searchParams.get('spec');
            if (sheet === 'compare') {
                return spec === 'full'
                    ? 'SPECIFICATION COMPARE — FULL SPECS'
                    : 'SPECIFICATION COMPARE — KEY METRICS';
            }
            return 'CURRENT MARKET LISTINGS';
        }
        return 'MARKET DATABASE';
    }, [pathname, searchParams]);

    useEffect(() => {
        const onDoc = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
        };
        document.addEventListener('mousedown', onDoc);
        return () => document.removeEventListener('mousedown', onDoc);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    const goListings = () => {
        router.replace('/admin/current-market');
        closeMenu();
    };

    const goCompareKey = () => {
        router.replace('/admin/current-market?sheet=compare&spec=key');
        closeMenu();
    };

    const goCompareFull = () => {
        router.replace('/admin/current-market?sheet=compare&spec=full');
        closeMenu();
    };

    const active = useMemo(() => {
        if (!pathname.startsWith('/admin/current-market')) return 'listings' as const;
        const sheet = searchParams.get('sheet');
        const spec = searchParams.get('spec');
        if (sheet === 'compare') return spec === 'full' ? ('compare-full' as const) : ('compare-key' as const);
        return 'listings' as const;
    }, [pathname, searchParams]);

    const printReport = () => window.print();

    return (
        <header className={styles.skyToolbar}>
            <div className={styles.titleRow}>
                <div className={styles.titleLeft}>
                    <div ref={menuRef} className={styles.titleDropdownWrap}>
                        <button
                            type="button"
                            className={styles.titleDropdown}
                            onClick={() => setMenuOpen((o) => !o)}
                            aria-expanded={menuOpen}
                            aria-haspopup="true"
                        >
                            {titleLabel}
                            <ChevronDown size={18} strokeWidth={2.5} aria-hidden />
                        </button>
                        {menuOpen ? (
                            <div className={styles.viewMenu} role="menu">
                                <button
                                    type="button"
                                    role="menuitem"
                                    onClick={goListings}
                                    data-active={active === 'listings' ? 'true' : undefined}
                                    className={active === 'listings' ? styles.viewMenuActive : undefined}
                                >
                                    Current market listings
                                </button>
                                <button
                                    type="button"
                                    role="menuitem"
                                    onClick={goCompareKey}
                                    data-active={active === 'compare-key' ? 'true' : undefined}
                                    className={active === 'compare-key' ? styles.viewMenuActive : undefined}
                                >
                                    Specification compare · Key metrics
                                </button>
                                <button
                                    type="button"
                                    role="menuitem"
                                    onClick={goCompareFull}
                                    data-active={active === 'compare-full' ? 'true' : undefined}
                                    className={active === 'compare-full' ? styles.viewMenuActive : undefined}
                                >
                                    Specification compare · Full specs
                                </button>
                            </div>
                        ) : null}
                    </div>
                    {trailing}
                </div>
                {showPdf ? (
                    <button type="button" className={`${styles.pdfBtn} noPrint`} onClick={printReport}>
                        <FileText size={16} />
                        Create PDF Report
                    </button>
                ) : null}
            </div>
        </header>
    );
}
