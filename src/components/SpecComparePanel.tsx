'use client';

import { Fragment, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { MOCK_AIRCRAFT } from '@/lib/mockData';
import { getAllListings } from '@/lib/marketListings';
import type { Aircraft } from '@/types';
import { useUI } from '@/components/UIContext';
import { COMPARE_COLUMN_TINTS, aircraftLabel } from '@/lib/specComparison';
import { getSpecCompareSections } from '@/lib/specCompareSections';
import styles from '@/app/compare/compare.module.css';

function assignCompareSlot(
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
    newId: string
) {
    setList((prev) => {
        if (!newId) {
            const n = [...prev];
            n.splice(index, 1);
            return n;
        }
        const without = prev.filter((id) => id !== newId);
        without.splice(index, 0, newId);
        return without.slice(0, 6);
    });
}

export default function SpecComparePanel({ specMode }: { specMode: 'key' | 'full' }) {
    const { compareList, toggleCompare, setCompareList } = useUI();
    const [addSelectKey, setAddSelectKey] = useState('');

    const aircraftById = useMemo(() => {
        const m = new Map<string, Aircraft>();
        for (const a of MOCK_AIRCRAFT) m.set(a.id, a);
        return m;
    }, []);

    const marketOptions = useMemo(() => {
        return [...getAllListings()].sort((a, b) => a.sn - b.sn);
    }, []);

    const sections = useMemo(() => getSpecCompareSections(specMode), [specMode]);

    const atCompareCap = compareList.length >= 6;

    const columns = useMemo(() => {
        const out: { id: string; aircraft: Aircraft; tint: string; index: number }[] = [];
        compareList.slice(0, 6).forEach((id, index) => {
            const ac = aircraftById.get(id);
            if (ac) out.push({ id, aircraft: ac, tint: COMPARE_COLUMN_TINTS[index % COMPARE_COLUMN_TINTS.length], index });
        });
        return out;
    }, [compareList, aircraftById]);

    const labelForListing = (listingId: string) => {
        const ac = aircraftById.get(listingId);
        return ac ? aircraftLabel(ac) : listingId;
    };

    return (
        <div className={styles.compareLayout}>
            <aside className={`${styles.compareSidebar} noPrint`}>
                <h2 className={styles.sidebarHeading}>A/C Make &amp; Model</h2>
                <div className={styles.slotList}>
                    {Array.from({ length: 6 }).map((_, slotIndex) => {
                        const idAtSlot = compareList[slotIndex];
                        const tint = COMPARE_COLUMN_TINTS[slotIndex % COMPARE_COLUMN_TINTS.length];
                        return (
                            <div key={slotIndex} className={styles.slotRow} style={{ borderColor: tint }}>
                                <span className={styles.slotNum}>A/C #{slotIndex + 1}</span>
                                <select
                                    className={styles.slotSelect}
                                    aria-label={`Select aircraft for slot ${slotIndex + 1}`}
                                    value={idAtSlot ?? ''}
                                    onChange={(e) => {
                                        const v = e.target.value;
                                        assignCompareSlot(setCompareList, slotIndex, v);
                                    }}
                                >
                                    <option value="">— Select —</option>
                                    {marketOptions.map((l) => {
                                        const takenElsewhere =
                                            compareList.includes(l.id) && compareList[slotIndex] !== l.id;
                                        return (
                                            <option key={l.id} value={l.id} disabled={takenElsewhere}>
                                                S/N {l.sn}
                                                {l.reg ? ` · ${l.reg}` : ''}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        );
                    })}
                </div>
                <button
                    type="button"
                    className={styles.clearAllBtn}
                    onClick={() => setCompareList([])}
                >
                    CLEAR ALL
                </button>

                <div className={styles.sidebarSecondary}>
                    <span className={styles.queueMeta}>Queue ({columns.length}/6)</span>
                    <label className={styles.addFromMarket}>
                        <span className={styles.addFromMarketLabel}>Add from market</span>
                        <select
                            className={styles.addSelect}
                            aria-label="Add aircraft from current market listings"
                            value={addSelectKey}
                            onChange={(e) => {
                                const id = e.target.value;
                                setAddSelectKey('');
                                if (id) toggleCompare(id);
                            }}
                        >
                            <option value="">Choose S/N…</option>
                            {marketOptions.map((l) => {
                                const added = compareList.includes(l.id);
                                const disableNew = !added && atCompareCap;
                                return (
                                    <option key={l.id} value={l.id} disabled={added || disableNew}>
                                        S/N {l.sn}
                                        {l.reg ? ` · ${l.reg}` : ''}
                                        {added ? ' (in queue)' : ''}
                                    </option>
                                );
                            })}
                        </select>
                    </label>
                    <div className={styles.chipRow}>
                        {compareList.slice(0, 6).map((id) => (
                            <button
                                key={id}
                                type="button"
                                className={styles.chip}
                                onClick={() => toggleCompare(id)}
                                title={labelForListing(id)}
                            >
                                <span className={styles.chipText}>{labelForListing(id)}</span>
                                <X size={14} aria-hidden />
                            </button>
                        ))}
                    </div>
                    {columns.length === 0 ? (
                        <p className={styles.sidebarHint}>
                            Select aircraft above, use <strong>Add from market</strong>, or choose rows in
                            Current market listings with <strong>+ Compare</strong>.
                        </p>
                    ) : null}
                </div>
            </aside>

            <div className={styles.compareMain}>
                <div className={styles.tableWrap} id="spec-compare-sheet">
                    {columns.length === 0 ? (
                        <div className={styles.emptyHint}>No aircraft selected for specification compare.</div>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.paramCol}>Parameter</th>
                                    {columns.map((col) => (
                                        <th
                                            key={col.id}
                                            className={styles.acCol}
                                            style={{
                                                background: col.tint,
                                                position: 'relative',
                                            }}
                                        >
                                            <button
                                                type="button"
                                                className={`${styles.colRemove} noPrint`}
                                                onClick={() => toggleCompare(col.id)}
                                                aria-label={`Remove ${col.aircraft.sn} from compare`}
                                            >
                                                <X size={14} />
                                            </button>
                                            <div>{col.aircraft.make}</div>
                                            <div className={styles.acModel}>{col.aircraft.model}</div>
                                            <div className={styles.acSn}>S/N {col.aircraft.sn}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {sections.map((sec) => (
                                    <Fragment key={sec.title}>
                                        <tr className={styles.groupHead}>
                                            <th colSpan={columns.length + 1}>{sec.title}</th>
                                        </tr>
                                        {sec.rows.map((row) => (
                                            <tr key={sec.title + row.label}>
                                                <th scope="row">{row.label}</th>
                                                {columns.map((col) => (
                                                    <td
                                                        key={`${col.id}-${row.label}`}
                                                        style={{ background: col.tint }}
                                                    >
                                                        {row.format(col.aircraft)}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
