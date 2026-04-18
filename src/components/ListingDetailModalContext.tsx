'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import MarketListingDetailModal from '@/components/MarketListingDetailModal';

type ListingDetailModalContextValue = {
    openListingDetail: (listingId: string) => void;
    closeListingDetail: () => void;
};

const ListingDetailModalContext = createContext<ListingDetailModalContextValue | null>(null);

export function ListingDetailModalProvider({ children }: { children: React.ReactNode }) {
    const [listingId, setListingId] = useState<string | null>(null);

    const openListingDetail = useCallback((id: string) => {
        setListingId(id);
    }, []);

    const closeListingDetail = useCallback(() => {
        setListingId(null);
    }, []);

    const value = useMemo(
        () => ({ openListingDetail, closeListingDetail }),
        [openListingDetail, closeListingDetail],
    );

    return (
        <ListingDetailModalContext.Provider value={value}>
            {children}
            <MarketListingDetailModal listingId={listingId} onClose={closeListingDetail} />
        </ListingDetailModalContext.Provider>
    );
}

export function useListingDetailModal(): ListingDetailModalContextValue {
    const ctx = useContext(ListingDetailModalContext);
    if (!ctx) {
        throw new Error('useListingDetailModal must be used within ListingDetailModalProvider');
    }
    return ctx;
}
