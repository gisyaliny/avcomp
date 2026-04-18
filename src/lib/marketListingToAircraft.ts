import type { Aircraft } from '@/types';
import type { MarketListing } from '@/types/marketListing';

const IMG_POOL = [
    'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1583068739943-73934f0d3b6f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1559087867-ce4c91325525?auto=format&fit=crop&q=80&w=1200',
];

function num(v: unknown, fallback = 0): number {
    if (typeof v === 'number' && Number.isFinite(v)) return v;
    if (typeof v === 'string' && v.trim() !== '' && v.trim() !== '-') {
        const n = Number(v);
        if (Number.isFinite(n)) return n;
    }
    return fallback;
}

/** Map unified market database row → storefront `Aircraft` (single source of truth). */
export function marketListingToAircraft(listing: MarketListing, index: number): Aircraft {
    const sn = listing.sn;
    const ask = listing.askTakeUsd ?? 0;
    const img = IMG_POOL[Math.abs(sn + index) % IMG_POOL.length];
    const rangeNm = 1650 + (sn % 400);
    const cruise = 420 + (sn % 35);
    const pax = Math.min(12, Math.max(6, num(listing.pax, 9)));

    return {
        id: listing.id,
        make: 'Textron Aviation',
        model: `Citation Excel ${listing.variant}`,
        sn: String(sn),
        yom: num(listing.yod, 2000),
        reg: listing.reg && listing.reg !== '-' ? listing.reg : 'TBD',
        base: listing.location && listing.location !== '-' ? listing.location : '—',
        askPrice: ask,
        dom: num(listing.dom, 0),
        aftt: num(listing.tsn, 0),
        cycles: num(listing.csn, 0),
        engineProgram: listing.engineProg && listing.engineProg !== '-' ? listing.engineProg : 'See listing',
        avionics: listing.partsProg && listing.partsProg !== '-' ? `Parts: ${listing.partsProg}` : 'As equipped',
        rangeNm,
        cruiseSpeed: cruise,
        maxPax: pax,
        cabinHeight: 5.7,
        cabinWidth: 5.5,
        cabinLength: 18.5,
        type: 'Jet',
        thumbnailUrl: img,
        mainImageUrl: img,
        galleryImages: [img],
        description: `${listing.programModel} · S/N ${sn}. Market data synced from the internal database.`,
        highlights: [
            `${listing.variant} configuration`,
            listing.engineProg && listing.engineProg !== '-' ? `Engine program: ${listing.engineProg}` : 'Program details on request',
        ],
        specs: {
            interior: {
                typicalPAX: pax,
                sleeps: Math.max(4, Math.floor(pax * 0.5)),
                galley: true,
                lavatory: true,
                crewRest: pax >= 9,
            },
            performance: {
                maxCruiseSpeed: cruise + 15,
                typicalCruiseSpeed: cruise,
                maxRange: rangeNm,
                typicalRange: Math.floor(rangeNm * 0.88),
                typicalEndurance: `${Math.max(4, Math.floor(rangeNm / cruise))} hr`,
                maxCruiseAltitude: 45000,
            },
            dimensions: {
                cabinLength: 18.5,
                cabinHeight: 5.7,
                cabinWidth: 5.5,
                flatFloors: true,
            },
            capacity: {
                baggageVolume: 80,
            },
        },
    };
}
