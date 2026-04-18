import type { Aircraft } from '@/types';
import { getAllListings } from '@/lib/marketListings';
import { marketListingToAircraft } from '@/lib/marketListingToAircraft';

let cachedAircraft: Aircraft[] | null = null;

export function getMarketAircraft(): Aircraft[] {
    if (!cachedAircraft) {
        cachedAircraft = getAllListings().map((row, i) => marketListingToAircraft(row, i));
    }
    return cachedAircraft;
}

/** Back-compat export for inventory pages/components. */
export const MOCK_AIRCRAFT: Aircraft[] = getMarketAircraft();
