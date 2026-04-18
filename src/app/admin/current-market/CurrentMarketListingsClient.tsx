'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    ArrowDown,
    ArrowUp,
    ArrowUpDown,
    Download,
    Filter,
    Inbox,
    RotateCcw,
    Search,
    X,
} from 'lucide-react';
import MarketDbNav from '@/components/MarketDbNav';
import { useListingDetailModal } from '@/components/ListingDetailModalContext';
import SpecComparePanel from '@/components/SpecComparePanel';
import { useUI } from '@/components/UIContext';
import {
    buildViewRow,
    domHeatStyle,
    hourBarPct,
    ratioHeatStyle,
    yearHeatStyle,
    formatInspectionMmYyyy,
    type CurrentMarketViewRow,
} from '@/lib/currentMarketSheet';
import {
    averageNumeric,
    filterListings,
    formatAskDisplay,
    formatInspectionDate,
    formatUsdCompact,
    getAllListings,
    getMarketPayload,
    sortListings,
    uniqueLocations,
    uniqueVariants,
    type ListingQuery,
} from '@/lib/marketListings';
import type { MarketListing, MarketSortKey } from '@/types/marketListing';
import adminStyles from '@/app/admin/admin.module.css';
import AskPriceHistoryCell from '@/components/AskPriceHistoryPopover';
import {
    MARKET_LIST_COLUMNS,
    type MarketListColumnGroup,
    type MarketListColumnId,
} from '@/lib/marketListColumnConfig';
import styles from './current-market.module.css';
import MultiSelectDropdown from '@/components/MultiSelectDropdown';
import MarketRangeSlider from '@/components/MarketRangeSlider';

/** Column header → server sort key (click to sort). */
const COLUMN_SORT_KEYS: Partial<Record<MarketListColumnId, MarketSortKey>> = {
    sn: 'sn',
    yom: 'yod',
    yod: 'yod',
    reg: 'reg',
    base: 'location',
    ask: 'askTakeUsd',
    dom: 'dom',
    aftt: 'tsn',
    cycles: 'csn',
};

const CURRENT_YEAR = new Date().getFullYear();

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as const;

function isBlankProg(s: string | null | undefined) {
    return !s || /^none$/i.test(String(s).trim());
}

function numericApu(v: MarketListing['apuTsn']): number | null {
    if (v == null || v === '' || v === '-') return null;
    const n = typeof v === 'number' ? v : Number(v);
    return Number.isFinite(n) ? n : null;
}

const GROUP_ORDER: MarketListColumnGroup[] = [
    'Aircraft Basic Information',
    'Pricing & DOM',
    'Airframe',
    'Engine & APU',
    'Mx Prog & Insp.',
    'Avionics',
    'P & I',
    'Others',
];

function groupStyleClass(g: MarketListColumnGroup): string {
    switch (g) {
        case 'Aircraft Basic Information':
            return styles.gAircraft;
        case 'Pricing & DOM':
            return styles.gPrice;
        case 'Airframe':
            return styles.gAir;
        case 'Engine & APU':
            return styles.gEng;
        case 'Mx Prog & Insp.':
            return styles.gMx;
        case 'Avionics':
            return styles.gAv;
        case 'P & I':
            return styles.gPi;
        case 'Others':
            return styles.gOther;
        default:
            return styles.gOther;
    }
}

function columnsInGroup(g: MarketListColumnGroup): number {
    return MARKET_LIST_COLUMNS.filter((c) => c.group === g).length;
}

function parseNum(s: string | null): number | null {
    if (s == null || s === '') return null;
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
}

function csvEscape(v: string | null | undefined): string {
    const s = v == null ? '' : String(v);
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
}

/** Filter fields persisted in URL & used for querying after Apply. */
type UrlFilters = {
    q: string;
    variants: ('XLS' | 'XLS+')[];
    locations: string[];
    yodMin: string;
    yodMax: string;
    askMin: string;
    askMax: string;
    domMin: string;
    domMax: string;
};

function emptyUrlFilters(): UrlFilters {
    return {
        q: '',
        variants: [],
        locations: [],
        yodMin: '',
        yodMax: '',
        askMin: '',
        askMax: '',
        domMin: '',
        domMax: '',
    };
}

function parseUrlFilters(sp: URLSearchParams): UrlFilters {
    const q = sp.get('q') ?? '';
    const multiV = sp.getAll('variant').filter((x): x is 'XLS' | 'XLS+' => x === 'XLS' || x === 'XLS+');
    const variants = (
        multiV.length ? [...new Set(multiV)] : (() => {
            const legacy = sp.get('variant');
            return legacy === 'XLS' || legacy === 'XLS+' ? [legacy] : [];
        })()
    ) as ('XLS' | 'XLS+')[];
    const multiLoc = sp.getAll('loc');
    const locations =
        multiLoc.length ? [...new Set(multiLoc)]
        : (() => {
              const legacyLoc = sp.get('loc');
              return legacyLoc?.trim() ?
                      [...new Set(legacyLoc.split(',').map((s) => s.trim()).filter(Boolean))]
                  :   [];
          })();
    return {
        q,
        variants,
        locations,
        yodMin: sp.get('yodMin') ?? '',
        yodMax: sp.get('yodMax') ?? '',
        askMin: sp.get('askMin') ?? '',
        askMax: sp.get('askMax') ?? '',
        domMin: sp.get('domMin') ?? '',
        domMax: sp.get('domMax') ?? '',
    };
}

function listingsToCsv(rows: MarketListing[]): string {
    const headers = [
        'S/N',
        'Variant',
        'YOD',
        'Reg',
        'Location',
        'Photo URL',
        'Ask/Take (display)',
        'Ask USD',
        'DOM',
        'TSN',
        'CSN',
        'APU TSN',
        'Engine',
        'Parts',
        'APU',
        '48 mo.',
        'Paint',
        'Interior',
        'Pax',
    ];
    const lines = [headers.join(',')];
    for (const r of rows) {
        const cells = [
            r.sn,
            r.variant,
            r.yod ?? '',
            csvEscape(r.reg),
            csvEscape(r.location),
            csvEscape(r.thumbUrl ?? ''),
            csvEscape(formatAskDisplay(r)),
            r.askTakeUsd ?? '',
            r.dom ?? '',
            r.tsn ?? '',
            r.csn ?? '',
            r.apuTsn ?? '',
            csvEscape(r.engineProg),
            csvEscape(r.partsProg),
            csvEscape(r.apuProg),
            csvEscape(formatInspectionDate(r.inspection48mo)),
            r.paintYear ?? '',
            r.interiorYear ?? '',
            r.pax ?? '',
        ];
        lines.push(cells.join(','));
    }
    return lines.join('\n');
}

export default function CurrentMarketListingsClient() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sheetView = searchParams.get('sheet') === 'compare' ? 'compare' : 'listings';
    const specMode = searchParams.get('spec') === 'full' ? 'full' : 'key';
    const { compareList, toggleCompare } = useUI();

    const [draftFilters, setDraftFilters] = useState<UrlFilters>(emptyUrlFilters);
    const [appliedFilters, setAppliedFilters] = useState<UrlFilters>(emptyUrlFilters);
    const [sortKey, setSortKey] = useState<MarketSortKey>('sn');
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
    const [pageSize, setPageSize] = useState(10);
    const [pageIndex, setPageIndex] = useState(0);

    const syncFiltersFromUrl = useCallback(() => {
        const parsed = parseUrlFilters(searchParams);
        setDraftFilters(parsed);
        setAppliedFilters(parsed);
        const sk = searchParams.get('sort') as MarketSortKey | null;
        const allowed: MarketSortKey[] = ['sn', 'yod', 'askTakeUsd', 'dom', 'tsn', 'csn', 'reg', 'location'];
        setSortKey(sk && allowed.includes(sk) ? sk : 'sn');
        const d = searchParams.get('dir');
        setSortDir(d === 'desc' ? 'desc' : 'asc');
    }, [searchParams]);

    useEffect(() => {
        syncFiltersFromUrl();
    }, [syncFiltersFromUrl]);

    const payload = useMemo(() => getMarketPayload(), []);

    const allListings = useMemo(() => getAllListings(), []);

    const locOptions = useMemo(() => uniqueLocations(allListings), [allListings]);
    const variantOptions = useMemo(() => uniqueVariants(allListings), [allListings]);

    const rangeExtents = useMemo(() => {
        const ys = allListings.map((l) => l.yod).filter((x): x is number => x != null);
        const asks = allListings.map((l) => l.askTakeUsd).filter((x): x is number => x != null);
        const doms = allListings.map((l) => l.dom).filter((x): x is number => x != null);
        const yr = CURRENT_YEAR + 1;
        const yLo = ys.length ? Math.min(...ys) : 2005;
        const yHi = ys.length ? Math.max(...ys) : yr;
        const askMax = asks.length ? Math.max(...asks) : 15_000_000;
        const domMax = doms.length ? Math.max(...doms) : 400;
        return {
            yod: {
                min: Math.min(1985, Math.floor(yLo) - 1),
                max: Math.max(yr, Math.ceil(yHi) + 1),
                step: 1,
            },
            ask: {
                min: 0,
                max: Math.max(10_000_000, Math.ceil(askMax / 250_000) * 250_000),
                step: 50_000,
            },
            dom: {
                min: 0,
                max: Math.max(365, Math.ceil(domMax / 25) * 25),
                step: 1,
            },
        };
    }, [allListings]);

    const listingQuery: ListingQuery = useMemo(
        () => ({
            q: appliedFilters.q,
            variants: appliedFilters.variants,
            yodMin: parseNum(appliedFilters.yodMin),
            yodMax: parseNum(appliedFilters.yodMax),
            askMin: parseNum(appliedFilters.askMin),
            askMax: parseNum(appliedFilters.askMax),
            domMin: parseNum(appliedFilters.domMin),
            domMax: parseNum(appliedFilters.domMax),
            locations: appliedFilters.locations.filter((loc) => locOptions.includes(loc)),
        }),
        [appliedFilters, locOptions]
    );

    const filteredSortedListings = useMemo(() => {
        const f = filterListings(allListings, listingQuery);
        return sortListings(f, sortKey, sortDir);
    }, [allListings, listingQuery, sortKey, sortDir]);

    const viewRows = useMemo(
        () => filteredSortedListings.map(buildViewRow),
        [filteredSortedListings]
    );

    const filterSortSignature = useMemo(
        () =>
            JSON.stringify({
                q: appliedFilters.q,
                variants: appliedFilters.variants,
                locations: appliedFilters.locations,
                yodMin: appliedFilters.yodMin,
                yodMax: appliedFilters.yodMax,
                askMin: appliedFilters.askMin,
                askMax: appliedFilters.askMax,
                domMin: appliedFilters.domMin,
                domMax: appliedFilters.domMax,
                sortKey,
                sortDir,
            }),
        [appliedFilters, sortKey, sortDir]
    );

    useEffect(() => {
        setPageIndex(0);
    }, [filterSortSignature]);

    const totalRowCount = viewRows.length;
    const pageCount = Math.max(1, Math.ceil(totalRowCount / pageSize));
    const safePageIndex = Math.min(pageIndex, pageCount - 1);
    const pageStart = safePageIndex * pageSize;
    const paginatedRows = viewRows.slice(pageStart, pageStart + pageSize);

    useEffect(() => {
        const pc = Math.max(1, Math.ceil(viewRows.length / pageSize));
        setPageIndex((p) => Math.min(p, pc - 1));
    }, [viewRows.length, pageSize]);

    const maxAsk = useMemo(
        () => Math.max(0, ...viewRows.map((r) => r.listing.askTakeUsd ?? 0)),
        [viewRows]
    );
    const maxDom = useMemo(() => Math.max(0, ...viewRows.map((r) => r.listing.dom ?? 0)), [viewRows]);
    const maxTsn = useMemo(() => Math.max(0, ...viewRows.map((r) => r.listing.tsn ?? 0)), [viewRows]);
    const maxCsn = useMemo(() => Math.max(0, ...viewRows.map((r) => r.listing.csn ?? 0)), [viewRows]);
    const maxApu = useMemo(
        () =>
            Math.max(
                0,
                ...viewRows.map((r) => numericApu(r.listing.apuTsn) ?? 0)
            ),
        [viewRows]
    );

    const ratios = useMemo(
        () => viewRows.map((r) => r.afttCyc).filter((x): x is number => x != null),
        [viewRows]
    );
    const minRatio = ratios.length ? Math.min(...ratios) : 0;
    const maxRatio = ratios.length ? Math.max(...ratios) : 0;

    const [summaryOpen, setSummaryOpen] = useState(false);
    const { openListingDetail } = useListingDetailModal();

    const commitUrl = useCallback(
        (filters: UrlFilters, sk: MarketSortKey, sd: 'asc' | 'desc') => {
            const p = new URLSearchParams();
            const sheet = searchParams.get('sheet');
            const spec = searchParams.get('spec');
            if (sheet === 'compare') {
                p.set('sheet', 'compare');
                if (spec === 'full') p.set('spec', 'full');
            }
            if (filters.q.trim()) p.set('q', filters.q.trim());
            for (const v of filters.variants) p.append('variant', v);
            for (const loc of filters.locations) p.append('loc', loc);
            if (filters.yodMin) p.set('yodMin', filters.yodMin);
            if (filters.yodMax) p.set('yodMax', filters.yodMax);
            if (filters.askMin) p.set('askMin', filters.askMin);
            if (filters.askMax) p.set('askMax', filters.askMax);
            if (filters.domMin) p.set('domMin', filters.domMin);
            if (filters.domMax) p.set('domMax', filters.domMax);
            if (sk !== 'sn') p.set('sort', sk);
            if (sd !== 'asc') p.set('dir', sd);
            const qs = p.toString();
            router.replace(qs ? `/admin/current-market?${qs}` : '/admin/current-market', { scroll: false });
        },
        [searchParams, router]
    );

    const handleApplyFilters = () => {
        const next = { ...draftFilters };
        setAppliedFilters(next);
        commitUrl(next, sortKey, sortDir);
    };

    const resetFilters = () => {
        const empty = emptyUrlFilters();
        setDraftFilters(empty);
        setAppliedFilters(empty);
        setSortKey('sn');
        setSortDir('asc');
        const sheet = searchParams.get('sheet');
        const spec = searchParams.get('spec');
        if (sheet === 'compare') {
            const p = new URLSearchParams();
            p.set('sheet', 'compare');
            if (spec === 'full') p.set('spec', 'full');
            router.replace(`/admin/current-market?${p.toString()}`, { scroll: false });
        } else {
            router.replace('/admin/current-market', { scroll: false });
        }
    };

    const handleColumnSort = (sk: MarketSortKey) => {
        const nextDir = sortKey === sk ? (sortDir === 'asc' ? 'desc' : 'asc') : 'asc';
        setSortKey(sk);
        setSortDir(nextDir);
        commitUrl(appliedFilters, sk, nextDir);
    };

    /** Commit new applied filters + sync draft (e.g. tag dismiss). */
    const commitAppliedFilters = useCallback(
        (next: UrlFilters) => {
            setDraftFilters(next);
            setAppliedFilters(next);
            commitUrl(next, sortKey, sortDir);
        },
        [commitUrl, sortKey, sortDir]
    );

    const exportFilteredCsv = () => {
        const blob = new Blob([listingsToCsv(filteredSortedListings)], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `avcomp-market-${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const listings = useMemo(() => viewRows.map((v) => v.listing), [viewRows]);

    const stats = useMemo(() => {
        const n = listings.length;
        const fleetN = allListings.length;
        const asks = listings.map((l) => l.askTakeUsd).filter((x): x is number => x != null);
        const pct = (pred: (l: MarketListing) => boolean) =>
            n === 0 ? null : Math.round((listings.filter(pred).length / n) * 1000) / 10;

        const yoms = viewRows.map((r) => r.yom).filter((x): x is number => x != null && !Number.isNaN(x));
        const avgYom = yoms.length ? yoms.reduce((a, b) => a + b, 0) / yoms.length : null;

        const pctOfFleetOnMarket =
            fleetN === 0 ? null : Math.round((n / fleetN) * 1000) / 10;

        return {
            count: n,
            pctOfFleetOnMarket,
            avgYom,
            avgYod: averageNumeric(listings, (r) => r.yod),
            avgAsk: averageNumeric(listings, (r) => r.askTakeUsd),
            minAsk: asks.length ? Math.min(...asks) : null,
            maxAsk: asks.length ? Math.max(...asks) : null,
            avgDom: averageNumeric(listings, (r) => r.dom),
            avgPax: averageNumeric(listings, (r) => r.pax),
            pctEngine: pct((l) => !isBlankProg(l.engineProg)),
            pctApuProg: pct((l) => !isBlankProg(l.apuProg)),
            pctParts: pct((l) => !isBlankProg(l.partsProg)),
            avgPaint: averageNumeric(listings, (r) => r.paintYear),
            avgInterior: averageNumeric(listings, (r) => r.interiorYear),
        };
    }, [listings, allListings.length, viewRows]);

    const avgRow = useMemo(() => {
        const asks = listings.filter((l) => l.askTakeUsd != null);
        const avgAskUsd =
            asks.length === 0 ? null : asks.reduce((a, l) => a + (l.askTakeUsd as number), 0) / asks.length;
        const yomVals = viewRows.map((r) => r.yom).filter((v): v is number => v != null && !Number.isNaN(v));
        const avgYom = yomVals.length ? yomVals.reduce((a, b) => a + b, 0) / yomVals.length : null;

        return {
            yom: avgYom,
            yod: averageNumeric(listings, (r) => r.yod),
            ask: avgAskUsd,
            dom: averageNumeric(listings, (r) => r.dom),
            tsn: averageNumeric(listings, (r) => r.tsn),
            csn: averageNumeric(listings, (r) => r.csn),
            ratio:
                ratios.length === 0 ? null : ratios.reduce((a, b) => a + b, 0) / ratios.length,
            apu: averageNumeric(listings, (r) => numericApu(r.apuTsn)),
        };
    }, [listings, ratios, viewRows]);

    const renderDataCell = (cid: MarketListColumnId, row: CurrentMarketViewRow) => {
        const { listing: l } = row;
        const dom = l.dom;
        const tsn = l.tsn;
        const csn = l.csn;
        const apuN = numericApu(l.apuTsn);
        const isCompared = compareList.includes(l.id);
        const sortTd = COLUMN_SORT_KEYS[cid] === sortKey ? styles.colBodySorted : '';
        const tdClass = (cls?: string) => [sortTd, cls].filter(Boolean).join(' ') || undefined;

        switch (cid) {
            case 'cmp':
                return (
                    <td key={cid} className={tdClass(styles.cmpCell)}>
                        <button
                            type="button"
                            className={`${styles.cmpBtn} ${isCompared ? styles.cmpBtnActive : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleCompare(l.id);
                            }}
                        >
                            {isCompared ? 'Added' : '+ Compare'}
                        </button>
                    </td>
                );
            case 'thumb': {
                const src = l.thumbUrl ?? '';
                return (
                    <td key={cid} className={tdClass(styles.thumbCell)}>
                        {src ?
                            <Image
                                src={src}
                                alt=""
                                width={72}
                                height={48}
                                className={styles.thumbImg}
                                unoptimized
                            />
                        :   '—'}
                    </td>
                );
            }
            case 'sn':
                return (
                    <td key={cid} className={tdClass(styles.snCell)}>
                        <button type="button" className={styles.snLink} onClick={() => openListingDetail(l.id)}>
                            {l.sn}
                        </button>
                    </td>
                );
            case 'yom':
                return <td key={cid} className={tdClass()}>{row.yom ?? '—'}</td>;
            case 'yod':
                return <td key={cid} className={tdClass()}>{row.yod ?? '—'}</td>;
            case 'reg':
                return <td key={cid} className={tdClass()}>{l.reg ?? '—'}</td>;
            case 'base':
                return <td key={cid} className={tdClass()}>{l.location ?? '—'}</td>;
            case 'ask':
                return (
                    <td key={cid} className={tdClass()} style={{ position: 'relative' }}>
                        <AskPriceHistoryCell listing={l} maxAsk={maxAsk} />
                    </td>
                );
            case 'dom':
                return (
                    <td key={cid} className={tdClass()} style={domHeatStyle(dom, maxDom)}>
                        {dom ?? '—'}
                    </td>
                );
            case 'aftt':
                return (
                    <td key={cid} className={tdClass()}>
                        <div className={styles.cellBar}>
                            <span
                                className={styles.barFill}
                                style={{ width: `${hourBarPct(tsn, maxTsn)}%` }}
                            />
                            <span className={styles.cellBarInner}>{tsn ?? '—'}</span>
                        </div>
                    </td>
                );
            case 'cycles':
                return (
                    <td key={cid} className={tdClass()}>
                        <div className={styles.cellBar}>
                            <span
                                className={styles.barFill}
                                style={{ width: `${hourBarPct(csn, maxCsn)}%` }}
                            />
                            <span className={styles.cellBarInner}>{csn ?? '—'}</span>
                        </div>
                    </td>
                );
            case 'ratio':
                return (
                    <td key={cid} className={tdClass()} style={ratioHeatStyle(row.afttCyc, minRatio, maxRatio)}>
                        {row.afttCyc ?? '—'}
                    </td>
                );
            case 'eng1':
                return <td key={cid} className={tdClass()}>{row.eng1}</td>;
            case 'eng2':
                return <td key={cid} className={tdClass()}>{row.eng2}</td>;
            case 'apuH':
                return (
                    <td key={cid} className={tdClass()}>
                        <div className={styles.cellBar}>
                            <span
                                className={styles.barFill}
                                style={{ width: `${hourBarPct(apuN, maxApu)}%` }}
                            />
                            <span className={styles.cellBarInner}>
                                {apuN != null ? apuN : l.apuTsn === '-' ? '—' : (l.apuTsn ?? '—')}
                            </span>
                        </div>
                    </td>
                );
            case 'engProg':
                return <td key={cid} className={tdClass()}>{l.engineProg ?? '—'}</td>;
            case 'apuProg':
                return <td key={cid} className={tdClass()}>{l.apuProg ?? '—'}</td>;
            case 'insp':
                return <td key={cid} className={tdClass()}>{formatInspectionMmYyyy(l.inspection48mo)}</td>;
            case 'adsb':
            case 'fans':
            case 'cpdlc':
            case 'wifi':
                return (
                    <td key={cid} className={tdClass(styles.dash)}>
                        —
                    </td>
                );
            case 'paint':
                return (
                    <td key={cid} className={tdClass()} style={yearHeatStyle(l.paintYear, CURRENT_YEAR)}>
                        {l.paintYear ?? '—'}
                    </td>
                );
            case 'interior':
                return (
                    <td key={cid} className={tdClass()} style={yearHeatStyle(l.interiorYear, CURRENT_YEAR)}>
                        {l.interiorYear ?? '—'}
                    </td>
                );
            case 'galley':
                return (
                    <td key={cid} className={tdClass(styles.dash)}>
                        —
                    </td>
                );
            case 'notes':
                return (
                    <td key={cid} className={tdClass(styles.notesCell)}>
                        {row.notes}
                    </td>
                );
            default:
                return <td key={cid} className={tdClass()}>—</td>;
        }
    };

    const renderAvgCell = (cid: MarketListColumnId) => {
        const sortTd = COLUMN_SORT_KEYS[cid] === sortKey ? styles.colBodySorted : '';
        const tdClass = (cls?: string) => [sortTd, cls].filter(Boolean).join(' ') || undefined;

        switch (cid) {
            case 'cmp':
                return <td key={cid} className={tdClass()}>—</td>;
            case 'thumb':
                return <td key={cid} className={tdClass()}>—</td>;
            case 'sn':
                return <td key={cid} className={tdClass()}>Avg.</td>;
            case 'yom':
                return (
                    <td key={cid} className={tdClass()}>
                        {avgRow.yom != null ? avgRow.yom.toFixed(1) : '—'}
                    </td>
                );
            case 'yod':
                return (
                    <td key={cid} className={tdClass()}>
                        {avgRow.yod != null ? avgRow.yod.toFixed(1) : '—'}
                    </td>
                );
            case 'reg':
            case 'base':
                return <td key={cid} className={tdClass()}>—</td>;
            case 'ask':
                return (
                    <td key={cid} className={tdClass()}>
                        {avgRow.ask != null ? `$${(avgRow.ask / 1_000_000).toFixed(2)}M` : '—'}
                    </td>
                );
            case 'dom':
                return (
                    <td key={cid} className={tdClass()}>
                        {avgRow.dom != null ? avgRow.dom.toFixed(0) : '—'}
                    </td>
                );
            case 'aftt':
                return (
                    <td key={cid} className={tdClass()}>
                        {avgRow.tsn != null ? avgRow.tsn.toFixed(0) : '—'}
                    </td>
                );
            case 'cycles':
                return (
                    <td key={cid} className={tdClass()}>
                        {avgRow.csn != null ? avgRow.csn.toFixed(0) : '—'}
                    </td>
                );
            case 'ratio':
                return (
                    <td key={cid} className={tdClass()}>
                        {avgRow.ratio != null ? avgRow.ratio.toFixed(2) : '—'}
                    </td>
                );
            case 'eng1':
            case 'eng2':
                return <td key={cid} className={tdClass()}>—</td>;
            case 'apuH':
                return (
                    <td key={cid} className={tdClass()}>
                        {avgRow.apu != null ? avgRow.apu.toFixed(0) : '—'}
                    </td>
                );
            default:
                return <td key={cid} className={tdClass()}>—</td>;
        }
    };

    return (
        <>
            <div className={`${styles.page} print-area`}>
                <MarketDbNav
                    trailing={
                        sheetView === 'listings' ? (
                            <button
                                type="button"
                                className={`${styles.summaryLink} noPrint`}
                                onClick={() => setSummaryOpen(true)}
                            >
                                Summary
                            </button>
                        ) : null
                    }
                />

                {sheetView === 'compare' ? (
                    <SpecComparePanel specMode={specMode} />
                ) : null}

                {sheetView === 'listings' ? (
                <>
                <div className={`${styles.listToolbar} noPrint`}>
                    <div className={styles.toolbarFilters}>
                        <div className={adminStyles.queryCard}>
                            <div className={styles.filterLayout}>
                                <div className={adminStyles.field}>
                                    <label htmlFor="cmq-search">Search (serial, registration, location, programs…)</label>
                                    <input
                                        id="cmq-search"
                                        value={draftFilters.q}
                                        onChange={(e) =>
                                            setDraftFilters((d) => ({ ...d, q: e.target.value }))
                                        }
                                        placeholder="e.g. 5524, N546CS, US-TX, ESP"
                                    />
                                </div>
                                <div className={styles.filterDropdownsRow}>
                                    <div className={adminStyles.field}>
                                        <label>Variant</label>
                                        <MultiSelectDropdown
                                            label="Filter variants"
                                            options={variantOptions.map((v) => ({ value: v, label: v }))}
                                            selected={draftFilters.variants}
                                            onChange={(next) => {
                                                const nv = next.filter((x): x is 'XLS' | 'XLS+' => x === 'XLS' || x === 'XLS+');
                                                setDraftFilters((d) => ({ ...d, variants: nv }));
                                            }}
                                            noneSummary="Any variant"
                                        />
                                    </div>
                                    <div className={adminStyles.field}>
                                        <label>Location</label>
                                        <MultiSelectDropdown
                                            label="Filter locations"
                                            options={locOptions.map((loc) => ({ value: loc, label: loc }))}
                                            selected={draftFilters.locations}
                                            onChange={(next) => {
                                                setDraftFilters((d) => ({ ...d, locations: next }));
                                            }}
                                            noneSummary="Any location"
                                        />
                                    </div>
                                </div>
                                <div
                                    className={styles.rangeSliderBand}
                                    role="group"
                                    aria-label="Year, price, and days-on-market ranges"
                                >
                                    <div className={styles.rangeSliderBandLegend}>Ranges</div>
                                    <div className={styles.rangeSliderCell}>
                                        <MarketRangeSlider
                                            compact
                                            label="Year of delivery (YOD)"
                                            minBound={rangeExtents.yod.min}
                                            maxBound={rangeExtents.yod.max}
                                            step={rangeExtents.yod.step}
                                            minStr={draftFilters.yodMin}
                                            maxStr={draftFilters.yodMax}
                                            onRangeChange={(yodMin, yodMax) =>
                                                setDraftFilters((d) => ({ ...d, yodMin, yodMax }))
                                            }
                                            formatTooltip={(n) => String(Math.round(n))}
                                        />
                                    </div>
                                    <div className={styles.rangeSliderCell}>
                                        <MarketRangeSlider
                                            compact
                                            label="Ask price (USD)"
                                            minBound={rangeExtents.ask.min}
                                            maxBound={rangeExtents.ask.max}
                                            step={rangeExtents.ask.step}
                                            minStr={draftFilters.askMin}
                                            maxStr={draftFilters.askMax}
                                            onRangeChange={(askMin, askMax) =>
                                                setDraftFilters((d) => ({ ...d, askMin, askMax }))
                                            }
                                            formatTooltip={(n) => formatUsdCompact(Math.round(n))}
                                        />
                                    </div>
                                    <div className={styles.rangeSliderCell}>
                                        <MarketRangeSlider
                                            compact
                                            label="Days on market (DOM)"
                                            minBound={rangeExtents.dom.min}
                                            maxBound={rangeExtents.dom.max}
                                            step={rangeExtents.dom.step}
                                            minStr={draftFilters.domMin}
                                            maxStr={draftFilters.domMax}
                                            onRangeChange={(domMin, domMax) =>
                                                setDraftFilters((d) => ({ ...d, domMin, domMax }))
                                            }
                                            formatTooltip={(n) => String(Math.round(n))}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={adminStyles.actions}>
                                <button
                                    type="button"
                                    className={`${adminStyles.btn} ${adminStyles.btnPrimary}`}
                                    onClick={handleApplyFilters}
                                >
                                    <Search size={16} />
                                    Apply
                                </button>
                                <button type="button" className={adminStyles.btn} onClick={resetFilters}>
                                    <RotateCcw size={16} />
                                    Reset
                                </button>
                                <button
                                    type="button"
                                    className={adminStyles.btn}
                                    onClick={exportFilteredCsv}
                                    disabled={filteredSortedListings.length === 0}
                                >
                                    <Download size={16} />
                                    Export CSV ({filteredSortedListings.length})
                                </button>
                            </div>

                            {appliedFilters.q.trim() ||
                            appliedFilters.variants.length > 0 ||
                            appliedFilters.locations.length > 0 ||
                            appliedFilters.yodMin ||
                            appliedFilters.yodMax ||
                            appliedFilters.askMin ||
                            appliedFilters.askMax ||
                            appliedFilters.domMin ||
                            appliedFilters.domMax ? (
                                <div className={styles.queryTagsRow}>
                                    <span className={styles.queryTagsLabel}>Query tags:</span>
                                    <div className={styles.queryTagsFlow}>
                                    {appliedFilters.q.trim() ? (
                                        <span className={styles.queryTag}>
                                            <Filter size={12} aria-hidden />
                                            Search: {appliedFilters.q.trim()}
                                            <button
                                                type="button"
                                                aria-label="Remove search filter"
                                                onClick={() =>
                                                    commitAppliedFilters({ ...appliedFilters, q: '' })
                                                }
                                            >
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ) : null}
                                    {appliedFilters.variants.map((v) => (
                                        <span key={v} className={styles.queryTag}>
                                            <Filter size={12} aria-hidden />
                                            Variant: {v}
                                            <button
                                                type="button"
                                                aria-label={`Remove variant ${v}`}
                                                onClick={() =>
                                                    commitAppliedFilters({
                                                        ...appliedFilters,
                                                        variants: appliedFilters.variants.filter((x) => x !== v),
                                                    })
                                                }
                                            >
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ))}
                                    {appliedFilters.locations.map((loc) => (
                                        <span key={loc} className={styles.queryTag}>
                                            <Filter size={12} aria-hidden />
                                            Location: {loc}
                                            <button
                                                type="button"
                                                aria-label={`Remove location ${loc}`}
                                                onClick={() =>
                                                    commitAppliedFilters({
                                                        ...appliedFilters,
                                                        locations: appliedFilters.locations.filter((x) => x !== loc),
                                                    })
                                                }
                                            >
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ))}
                                    {appliedFilters.yodMin || appliedFilters.yodMax ? (
                                        <span className={styles.queryTag}>
                                            <Filter size={12} aria-hidden />
                                            YOD: {appliedFilters.yodMin || '…'} –{' '}
                                            {appliedFilters.yodMax || '…'}
                                            <button
                                                type="button"
                                                aria-label="Remove YOD range"
                                                onClick={() =>
                                                    commitAppliedFilters({
                                                        ...appliedFilters,
                                                        yodMin: '',
                                                        yodMax: '',
                                                    })
                                                }
                                            >
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ) : null}
                                    {appliedFilters.askMin || appliedFilters.askMax ? (
                                        <span className={styles.queryTag}>
                                            <Filter size={12} aria-hidden />
                                            Ask USD: {appliedFilters.askMin || '…'} –{' '}
                                            {appliedFilters.askMax || '…'}
                                            <button
                                                type="button"
                                                aria-label="Remove ask range"
                                                onClick={() =>
                                                    commitAppliedFilters({
                                                        ...appliedFilters,
                                                        askMin: '',
                                                        askMax: '',
                                                    })
                                                }
                                            >
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ) : null}
                                    {appliedFilters.domMin || appliedFilters.domMax ? (
                                        <span className={styles.queryTag}>
                                            <Filter size={12} aria-hidden />
                                            DOM: {appliedFilters.domMin || '…'} –{' '}
                                            {appliedFilters.domMax || '…'}
                                            <button
                                                type="button"
                                                aria-label="Remove DOM range"
                                                onClick={() =>
                                                    commitAppliedFilters({
                                                        ...appliedFilters,
                                                        domMin: '',
                                                        domMax: '',
                                                    })
                                                }
                                            >
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ) : null}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div className={`${adminStyles.resultBar} noPrint`}>
                            <span className={adminStyles.resultCount}>
                                Showing <strong>{filteredSortedListings.length}</strong> of {allListings.length} listings
                            </span>
                            <span className={adminStyles.metaLine} style={{ margin: 0 }}>
                                {payload.meta.exportedRecordCount} rows in dataset
                            </span>
                        </div>
                    </div>
                </div>

                {filteredSortedListings.length === 0 ? (
                    <div className={`${styles.emptyState} noPrint`} role="status">
                        <span className={styles.emptyIcon} aria-hidden>
                            <Inbox strokeWidth={1.5} size={40} />
                        </span>
                        <p className={styles.emptyTitle}>No listings match these filters</p>
                        <p className={styles.emptyHint}>
                            Broaden the search text, clear a query tag, or use <strong>Reset</strong> to start over.
                        </p>
                    </div>
                ) : null}

                <div className={styles.tableWrap} id="current-market-sheet" style={{ display: filteredSortedListings.length === 0 ? 'none' : undefined }}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.groupRow}>
                                {GROUP_ORDER.map((g) => {
                                    const n = columnsInGroup(g);
                                    if (n === 0) return null;
                                    return (
                                        <th key={g} className={groupStyleClass(g)} colSpan={n}>
                                            {g}
                                        </th>
                                    );
                                })}
                            </tr>
                            <tr>
                                {MARKET_LIST_COLUMNS.map((c) => {
                                    const sortK = COLUMN_SORT_KEYS[c.id];
                                    const sortedHere = sortK != null && sortKey === sortK;
                                    return (
                                        <th
                                            key={c.id}
                                            scope="col"
                                            className={`${styles.colHead} ${sortK ? styles.colHeadSortable : ''} ${sortedHere ? styles.colHeadSortedColumn : ''}`}
                                            aria-sort={
                                                sortedHere ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined
                                            }
                                        >
                                            {sortK ? (
                                                <button
                                                    type="button"
                                                    className={`${styles.colHeadBtn} ${sortedHere ? styles.colHeadBtnActive : ''}`}
                                                    onClick={() => handleColumnSort(sortK)}
                                                >
                                                    <span className={styles.colHeadBtnLabel}>{c.label}</span>
                                                    <span className={styles.colHeadBtnIcon}>
                                                        {sortedHere ?
                                                            sortDir === 'asc' ?
                                                                <ArrowUp size={14} aria-hidden />
                                                            :   <ArrowDown size={14} aria-hidden />
                                                        :   <ArrowUpDown size={14} aria-hidden />}
                                                    </span>
                                                </button>
                                            ) : (
                                                c.label
                                            )}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody className={styles.screenOnlyTbody}>
                            {paginatedRows.map((row) => (
                                <tr key={row.listing.id}>
                                    {MARKET_LIST_COLUMNS.map((c) => renderDataCell(c.id, row))}
                                </tr>
                            ))}
                        </tbody>
                        <tbody className={styles.printOnlyTbody}>
                            {viewRows.map((row) => (
                                <tr key={`print-${row.listing.id}`}>
                                    {MARKET_LIST_COLUMNS.map((c) => renderDataCell(c.id, row))}
                                </tr>
                            ))}
                        </tbody>
                        <tbody>
                            <tr className={styles.avgRow}>
                                {MARKET_LIST_COLUMNS.map((c) => renderAvgCell(c.id))}
                            </tr>
                        </tbody>
                    </table>
                    <div className={`${styles.tablePagination} noPrint`} role="navigation" aria-label="Table pagination">
                        <div className={styles.paginationLeft}>
                            <label className={styles.paginationLabel} htmlFor="cm-rows-per-page">
                                Rows per page
                            </label>
                            <select
                                id="cm-rows-per-page"
                                className={styles.paginationSelect}
                                value={pageSize}
                                onChange={(e) => {
                                    const n = Number(e.target.value);
                                    setPageSize(Number.isFinite(n) ? n : 10);
                                    setPageIndex(0);
                                }}
                            >
                                {PAGE_SIZE_OPTIONS.map((n) => (
                                    <option key={n} value={n}>
                                        {n}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.paginationRight}>
                            <div className={styles.pageNavCluster} role="group" aria-label="Earlier pages">
                                <button
                                    type="button"
                                    className={styles.pageNavBtn}
                                    disabled={safePageIndex <= 0}
                                    onClick={() => setPageIndex(0)}
                                >
                                    {'<< '}First
                                </button>
                                <button
                                    type="button"
                                    className={styles.pageNavBtn}
                                    disabled={safePageIndex <= 0}
                                    onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
                                >
                                    {'< '}Previous
                                </button>
                            </div>
                            <span className={styles.paginationRange} aria-live="polite">
                                {totalRowCount === 0 ?
                                    '0–0 of 0'
                                :   `${pageStart + 1}–${pageStart + paginatedRows.length} of ${totalRowCount}`}
                            </span>
                            <div className={styles.pageNavCluster} role="group" aria-label="Later pages">
                                <button
                                    type="button"
                                    className={styles.pageNavBtn}
                                    disabled={safePageIndex >= pageCount - 1}
                                    onClick={() =>
                                        setPageIndex((p) => Math.min(Math.max(0, pageCount - 1), p + 1))
                                    }
                                >
                                    Next{' >'}
                                </button>
                                <button
                                    type="button"
                                    className={styles.pageNavBtn}
                                    disabled={safePageIndex >= pageCount - 1}
                                    onClick={() => setPageIndex(Math.max(0, pageCount - 1))}
                                >
                                    Last{' >>'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <p className={`${styles.sheetFootnote} noPrint`}>
                    Per-engine hours are not split per engine in this export — shown as &ldquo;—&rdquo;. Avionics equipage is
                    not mapped from this sheet yet.
                </p>
                </>
                ) : null}
            </div>

            {sheetView === 'listings' && summaryOpen && (
                <div
                    className={styles.modalBackdrop}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="summary-title"
                    onClick={() => setSummaryOpen(false)}
                >
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 id="summary-title">Market summary</h2>
                            <button
                                type="button"
                                className={styles.modalClose}
                                onClick={() => setSummaryOpen(false)}
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <section className={styles.statBlock}>
                                <h3>Current Market Summary</h3>
                                <dl className={styles.statGrid}>
                                    <dt>Aircraft on market</dt>
                                    <dd>{stats.count}</dd>
                                    <dt>Percent of fleet on market</dt>
                                    <dd>
                                        {stats.pctOfFleetOnMarket != null ? `${stats.pctOfFleetOnMarket}%` : '—'}
                                    </dd>
                                    <dt>Average year of model</dt>
                                    <dd>{stats.avgYom != null ? stats.avgYom.toFixed(0) : '—'}</dd>
                                    <dt>Average asking price</dt>
                                    <dd>
                                        {stats.avgAsk != null
                                            ? `$${Math.round(stats.avgAsk).toLocaleString()}`
                                            : '—'}
                                    </dd>
                                    <dt>Asking price range</dt>
                                    <dd>
                                        {stats.minAsk != null && stats.maxAsk != null
                                            ? `$${stats.minAsk.toLocaleString()} – $${stats.maxAsk.toLocaleString()}`
                                            : '—'}
                                    </dd>
                                    <dt>Average days on market</dt>
                                    <dd>{stats.avgDom != null ? stats.avgDom.toFixed(0) : '—'}</dd>
                                </dl>
                                <p className={styles.modalFootnote}>
                                    &ldquo;Fleet&rdquo; uses total aircraft rows in this export ({allListings.length}); filtered
                                    view shows their share after your query.
                                </p>
                            </section>
                            <section className={styles.statBlock}>
                                <h3>Current Market Statistics</h3>
                                <dl className={styles.statGrid}>
                                    <dt>Engine program</dt>
                                    <dd>{stats.pctEngine != null ? `${stats.pctEngine}%` : '—'}</dd>
                                    <dt>APU program</dt>
                                    <dd>{stats.pctApuProg != null ? `${stats.pctApuProg}%` : '—'}</dd>
                                    <dt>Parts program</dt>
                                    <dd>{stats.pctParts != null ? `${stats.pctParts}%` : '—'}</dd>
                                    <dt>Passengers</dt>
                                    <dd>{stats.avgPax != null ? stats.avgPax.toFixed(0) : '—'}</dd>
                                    <dt>Average year of exterior</dt>
                                    <dd>{stats.avgPaint != null ? stats.avgPaint.toFixed(0) : '—'}</dd>
                                    <dt>Average year of interior</dt>
                                    <dd>{stats.avgInterior != null ? stats.avgInterior.toFixed(0) : '—'}</dd>
                                    <dt>Galley (Fwd / Aft)</dt>
                                    <dd>— / —</dd>
                                    <dt>Enhanced navigation</dt>
                                    <dd>—</dd>
                                    <dt>Synthetic vision</dt>
                                    <dd>—</dd>
                                    <dt>Ground based Wi-Fi</dt>
                                    <dd>—</dd>
                                    <dt>Satellite based Wi-Fi</dt>
                                    <dd>—</dd>
                                    <dt>ADS-B Out</dt>
                                    <dd>—</dd>
                                    <dt>FANS 1/A</dt>
                                    <dd>—</dd>
                                    <dt>CPDLC</dt>
                                    <dd>—</dd>
                                </dl>
                                <p className={styles.modalFootnote}>
                                    Share-% rows count listings with a non-empty program field. Avionics and galley splits are
                                    not in this export yet.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
