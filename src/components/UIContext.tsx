'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

type ViewMode = 'split' | 'table';

interface UIContextType {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    showFilters: boolean;
    setShowFilters: (show: boolean) => void;
    compareList: string[];
    setCompareList: React.Dispatch<React.SetStateAction<string[]>>;
    toggleCompare: (id: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [viewMode, setViewModeState] = useState<ViewMode>('split');
    const [showFilters, setShowFilters] = useState(false);
    const [compareList, setCompareList] = useState<string[]>([]);

    // `?view=` applies only to the inventory page (`/`). Other routes ignore it so Market DB URLs stay clean.
    useEffect(() => {
        if (pathname !== '/') return;
        const mode = searchParams?.get('view') as ViewMode;
        if (mode && (mode === 'split' || mode === 'table')) {
            setViewModeState(mode);
        }
    }, [searchParams, pathname]);

    const setViewMode = (mode: ViewMode) => {
        if (mode === viewMode) return;
        setViewModeState(mode);
        if (pathname !== '/') return;
        const params = new URLSearchParams(searchParams?.toString() || '');
        if (mode === 'split') {
            params.delete('view');
        } else {
            params.set('view', mode);
        }
        const newUrl = `${pathname}${params.toString() ? '?' + params.toString() : ''}`;
        if (newUrl !== pathname + (searchParams?.toString() ? '?' + searchParams.toString() : '')) {
            router.replace(newUrl, { scroll: false });
        }
    };

    const MAX_COMPARE = 6;

    const toggleCompare = (id: string) => {
        setCompareList((prev) => {
            if (prev.includes(id)) return prev.filter((i) => i !== id);
            if (prev.length >= MAX_COMPARE) {
                alert(`You can compare up to ${MAX_COMPARE} aircraft.`);
                return prev;
            }
            return [...prev, id];
        });
    };

    return (
        <UIContext.Provider value={{ 
            viewMode, setViewMode, 
            showFilters, setShowFilters,
            compareList, setCompareList, toggleCompare
        }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
}
