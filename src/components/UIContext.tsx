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

    // Initial sync from URL
    useEffect(() => {
        const mode = searchParams?.get('view') as ViewMode;
        if (mode && (mode === 'split' || mode === 'table')) {
            setViewModeState(mode);
        }
    }, [searchParams]);

    // Sync viewMode with URL
    const setViewMode = (mode: ViewMode) => {
        if (mode === viewMode) return;
        setViewModeState(mode);
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

    const toggleCompare = (id: string) => {
        setCompareList(prev => {
            if (prev.includes(id)) return prev.filter(i => i !== id);
            if (prev.length >= 4) {
                alert("You can compare up to 4 aircraft.");
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
