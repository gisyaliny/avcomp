'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './MultiSelectDropdown.module.css';

export type MultiSelectOption = { value: string; label: string };

type Props = {
    label: string;
    options: MultiSelectOption[];
    selected: string[];
    onChange: (next: string[]) => void;
    noneSummary?: string;
    /** When true, empty selection means “no filter” (same as all options selected). */
    emptyMeansAll?: boolean;
};

export default function MultiSelectDropdown({
    label,
    options,
    selected,
    onChange,
    noneSummary = 'Any',
    emptyMeansAll = true,
}: Props) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const total = options.length;
    const count = selected.length;
    const summary =
        emptyMeansAll && count === 0 ?
            noneSummary
        : count === 0 ? noneSummary
        : count === total ? `${total} selected`
        : `${count} selected`;

    useEffect(() => {
        if (!open) return;
        const onDoc = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', onDoc);
        return () => document.removeEventListener('mousedown', onDoc);
    }, [open]);

    const toggleValue = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter((x) => x !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    const selectAll = () => {
        if (selected.length === total) {
            onChange([]);
        } else {
            onChange(options.map((o) => o.value));
        }
    };

    const selectedInPanel = selected.length;

    return (
        <div ref={wrapRef} className={styles.wrap}>
            <button
                type="button"
                className={styles.trigger}
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-label={label}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={styles.triggerLabel}>{summary}</span>
                <ChevronDown size={16} aria-hidden />
            </button>
            {open ? (
                <div className={styles.panel} role="listbox" aria-multiselectable="true">
                    <button type="button" className={styles.selectAllBtn} onClick={selectAll}>
                        Select all ({selectedInPanel}/{total})
                    </button>
                    <div className={styles.options}>
                        {options.map((o) => {
                            const isOn = selected.includes(o.value);
                            return (
                                <button
                                    key={o.value}
                                    type="button"
                                    role="option"
                                    aria-selected={isOn}
                                    className={`${styles.optionRow} ${isOn ? styles.optionRowSelected : ''}`}
                                    onClick={() => toggleValue(o.value)}
                                >
                                    <input type="checkbox" readOnly checked={isOn} tabIndex={-1} aria-hidden />
                                    <span className={styles.optionLabel}>{o.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
