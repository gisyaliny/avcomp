'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

type ViewMode = 'split' | 'table';

interface UIContextType {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    showFilters: boolean;
    setShowFilters: (show: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [viewMode, setViewModeState] = useState<ViewMode>(
        (searchParams.get('view') as ViewMode) || 'split'
    );
    const [showFilters, setShowFilters] = useState(false);

    // Sync viewMode with URL
    const setViewMode = (mode: ViewMode) => {
        setViewModeState(mode);
        const params = new URLSearchParams(searchParams.toString());
        if (mode === 'split') {
            params.delete('view');
        } else {
            params.set('view', mode);
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <UIContext.Provider value={{ viewMode, setViewMode, showFilters, setShowFilters }}>
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
