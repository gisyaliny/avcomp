import type { MarketListing } from '@/types/marketListing';

/** Target demo size for admin current-market grid + pagination UX. */
const TARGET_COUNT = 200;

const LOCATIONS = [
    'US-TX',
    'US-FL',
    'US-CA',
    'US-NY',
    'US-SC',
    'US-GA',
    'US-AZ',
    'US-CO',
    'US-WA',
    'Canada',
    'Mexico',
    'Brazil',
    'UK',
    'Germany',
    'France',
    'Switzerland',
    'Netherlands',
];

const THUMB_POOL = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556388158-158e5dd78404?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1474302770737-173e21faf63c?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583416756800-29f4b4922a7a?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542293787938-c9e299b880cc?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483728642387-6ccf3da146c4?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1569154941061-e131b880bc79?w=160&q=75&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570710891163-6d3b5cd47266?w=160&q=75&auto=format&fit=crop',
];

function hashId(id: string): number {
    let h = 0;
    for (let i = 0; i < id.length; i++) {
        h = Math.imul(31, h) + id.charCodeAt(i);
    }
    return Math.abs(h);
}

function regSuffix(idx: number): string {
    const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const a = letters[idx % letters.length];
    const b = letters[(idx * 7 + 3) % letters.length];
    return `${a}${b}`;
}

/**
 * Ensures ~TARGET_COUNT listings for demos: keeps JSON seeds, assigns rotating photo URLs,
 * then synthesizes additional rows with deterministic variation.
 */
export function expandMarketListingsToDemo(seedListings: MarketListing[]): MarketListing[] {
    const template = seedListings[0];
    const withThumb: MarketListing[] = seedListings.map((l) => ({
        ...l,
        thumbUrl: l.thumbUrl ?? THUMB_POOL[hashId(l.id) % THUMB_POOL.length],
    }));

    if (!template || withThumb.length >= TARGET_COUNT) {
        return withThumb.slice(0, TARGET_COUNT);
    }

    const out = [...withThumb];
    let i = out.length;

    while (out.length < TARGET_COUNT) {
        const variant: 'XLS' | 'XLS+' = i % 2 === 0 ? 'XLS' : 'XLS+';
        const sn = 701000 + i * 17 + (i % 53);
        const yod = 1999 + (i % 24);
        const askUsd = 2_450_000 + ((i * 73) % 260) * 25_000;
        const dom = 25 + ((i * 41) % 520);
        const tsn = 2100 + (i % 180) * 95;
        const csn = 1600 + (i % 160) * 72;
        const apuTsn = 1100 + (i % 120) * 40;
        const id = `citation-mock-${i}`;

        out.push({
            id,
            programModel: template.programModel,
            variant,
            sn,
            yod,
            reg: `N${100 + (i % 799)}${regSuffix(i)}`,
            location: LOCATIONS[i % LOCATIONS.length],
            askTakeRaw: askUsd,
            askTakeUsd: askUsd,
            dom,
            tsn,
            csn,
            apuTsn,
            engineProg: i % 4 === 0 ? 'ESP-G Lte' : i % 3 === 0 ? 'JSSI' : 'None',
            partsProg: i % 2 === 0 ? 'PP' : 'None',
            apuProg: i % 3 === 0 ? 'AA' : 'None',
            inspection48mo: `202${8 + (i % 5)}-${String((i % 11) + 1).padStart(2, '0')}-15T00:00:00`,
            paintYear: yod + 8 + (i % 6),
            interiorYear: yod + 10 + (i % 5),
            pax: 8 + (i % 3),
            thumbUrl: THUMB_POOL[i % THUMB_POOL.length],
        });
        i += 1;
    }

    return out;
}
