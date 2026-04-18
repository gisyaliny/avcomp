/** One time-bounded asking price segment (newer segments listed after older). */
export interface AskPriceHistorySegment {
    startDate: string;
    /** Inclusive end of this price; `null` means current / open-ended. */
    endDate: string | null;
    priceDisplay: string;
    amountUsd?: number | null;
    /** Negative = reduction vs previous segment’s amount. */
    reductionFromPriorUsd?: number | null;
}

/** Citation Excel / XLS / XLS+ style market row (from broker Excel export). */
export interface MarketListing {
    id: string;
    programModel: string;
    variant: string;
    sn: number;
    yod: number | null;
    reg: string | null;
    location: string | null;
    askTakeRaw: string | number | null;
    askTakeUsd: number | null;
    dom: number | null;
    tsn: number | null;
    csn: number | null;
    apuTsn: number | string | null;
    engineProg: string | null;
    partsProg: string | null;
    apuProg: string | null;
    inspection48mo: string | null;
    paintYear: number | null;
    interiorYear: number | null;
    pax: number | null;
    /** Optional thumbnail for grid / demos (Unsplash or internal URL). */
    thumbUrl?: string | null;
    /** Optional; merged from overrides — tracks listing price changes over time. */
    askPriceHistory?: AskPriceHistorySegment[];
    /** Optional footer line under the timeline, e.g. total reductions count. */
    askPriceHistoryFooter?: string;
}

export interface MarketDataPayload {
    meta: {
        sourceSheet: string;
        sourceFile: string;
        exportedRecordCount: number;
    };
    listings: MarketListing[];
}

export type MarketSortKey =
    | 'sn'
    | 'yod'
    | 'askTakeUsd'
    | 'dom'
    | 'tsn'
    | 'csn'
    | 'reg'
    | 'location';
