export type MarketListColumnId =
    | 'cmp'
    | 'thumb'
    | 'sn'
    | 'yom'
    | 'yod'
    | 'reg'
    | 'base'
    | 'ask'
    | 'dom'
    | 'aftt'
    | 'cycles'
    | 'ratio'
    | 'eng1'
    | 'eng2'
    | 'apuH'
    | 'engProg'
    | 'apuProg'
    | 'insp'
    | 'adsb'
    | 'fans'
    | 'cpdlc'
    | 'wifi'
    | 'paint'
    | 'interior'
    | 'galley'
    | 'notes';

export type MarketListColumnGroup =
    | 'Aircraft Basic Information'
    | 'Pricing & DOM'
    | 'Airframe'
    | 'Engine & APU'
    | 'Mx Prog & Insp.'
    | 'Avionics'
    | 'P & I'
    | 'Others';

export interface MarketListColumnDef {
    id: MarketListColumnId;
    group: MarketListColumnGroup;
    label: string;
}

export const MARKET_LIST_COLUMNS: MarketListColumnDef[] = [
    { id: 'cmp', group: 'Aircraft Basic Information', label: 'Cmp' },
    { id: 'thumb', group: 'Aircraft Basic Information', label: 'Photo' },
    { id: 'sn', group: 'Aircraft Basic Information', label: 'S/N' },
    { id: 'yom', group: 'Aircraft Basic Information', label: 'YOM' },
    { id: 'yod', group: 'Aircraft Basic Information', label: 'YOD' },
    { id: 'reg', group: 'Aircraft Basic Information', label: 'Reg' },
    { id: 'base', group: 'Aircraft Basic Information', label: 'Base' },
    { id: 'ask', group: 'Pricing & DOM', label: 'Ask Price' },
    { id: 'dom', group: 'Pricing & DOM', label: 'DOM' },
    { id: 'aftt', group: 'Airframe', label: 'AFTT' },
    { id: 'cycles', group: 'Airframe', label: 'Cycles' },
    { id: 'ratio', group: 'Airframe', label: 'AFTT/CYC' },
    { id: 'eng1', group: 'Engine & APU', label: 'Engine 1' },
    { id: 'eng2', group: 'Engine & APU', label: 'Engine 2' },
    { id: 'apuH', group: 'Engine & APU', label: 'APU' },
    { id: 'engProg', group: 'Mx Prog & Insp.', label: 'Engine' },
    { id: 'apuProg', group: 'Mx Prog & Insp.', label: 'APU' },
    { id: 'insp', group: 'Mx Prog & Insp.', label: '96/192 mo.' },
    { id: 'adsb', group: 'Avionics', label: 'ADS-B' },
    { id: 'fans', group: 'Avionics', label: 'FANS' },
    { id: 'cpdlc', group: 'Avionics', label: 'CPDLC' },
    { id: 'wifi', group: 'Avionics', label: 'Wi-Fi' },
    { id: 'paint', group: 'P & I', label: 'Paint' },
    { id: 'interior', group: 'P & I', label: 'Interior' },
    { id: 'galley', group: 'Others', label: 'Galley' },
    { id: 'notes', group: 'Others', label: 'Notes' },
];
