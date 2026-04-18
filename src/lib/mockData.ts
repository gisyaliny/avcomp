import type { Aircraft } from '@/types';
import type { MarketDataPayload } from '@/types/marketListing';
import payload from '@/data/marketDatabase.json';
import { marketListingToAircraft } from '@/lib/marketListingToAircraft';

const data = payload as MarketDataPayload;

/** @deprecated Use `getMarketAircraft()` or import from marketDatabase — kept for gradual migration. */
export const MOCK_AIRCRAFT: Aircraft[] = data.listings.map((row, i) => marketListingToAircraft(row, i));
