import { Aircraft } from '@/types';

// Helper to generate aircraft
const generateAircraft = (count: number): Aircraft[] => {
    const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000";

    // Mix of verified images for categories with enhanced specs
    const models = [
        // Jets
        { make: "Gulfstream", model: "G650ER", range: 7500, price: 52000000, type: "Jet", cruiseSpeed: 516, maxPax: 19, cabinHeight: 6.42, cabinWidth: 8.5, cabinLength: 46.83, img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000" },
        { make: "Bombardier", model: "Global 7500", range: 7700, price: 68000000, type: "Jet", cruiseSpeed: 530, maxPax: 19, cabinHeight: 6.2, cabinWidth: 8.0, cabinLength: 54.4, img: "https://images.unsplash.com/photo-1583068739943-73934f0d3b6f?auto=format&fit=crop&q=80&w=1000" },
        { make: "Dassault", model: "Falcon 8X", range: 6450, price: 58000000, type: "Jet", cruiseSpeed: 486, maxPax: 16, cabinHeight: 6.17, cabinWidth: 7.67, cabinLength: 42.67, img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1000" },

        // Turboprops
        { make: "Pilatus", model: "PC-12 NGX", range: 1803, price: 5500000, type: "Turboprop", cruiseSpeed: 290, maxPax: 10, cabinHeight: 4.83, cabinWidth: 5.0, cabinLength: 16.92, img: "https://images.unsplash.com/photo-1559087867-ce4c91325525?auto=format&fit=crop&q=80&w=1000" },
        { make: "Beechcraft", model: "King Air 360", range: 1806, price: 8900000, type: "Turboprop", cruiseSpeed: 312, maxPax: 11, cabinHeight: 4.8, cabinWidth: 4.5, cabinLength: 19.5, img: "https://images.unsplash.com/photo-1559627755-680457630248?auto=format&fit=crop&q=80&w=1000" },

        // Pistons
        { make: "Cirrus", model: "SR22T G6", range: 1021, price: 950000, type: "Piston", cruiseSpeed: 213, maxPax: 5, cabinHeight: 4.0, cabinWidth: 4.0, cabinLength: 8.0, img: PLACEHOLDER_IMG },
        { make: "Diamond", model: "DA62", range: 1283, price: 1400000, type: "Piston Twin", cruiseSpeed: 195, maxPax: 7, cabinHeight: 4.2, cabinWidth: 4.1, cabinLength: 9.0, img: PLACEHOLDER_IMG },

        // Helicopters
        { make: "Airbus", model: "H145", range: 351, price: 9000000, type: "Helicopter", cruiseSpeed: 133, maxPax: 8, cabinHeight: 4.3, cabinWidth: 5.0, cabinLength: 10.0, img: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?auto=format&fit=crop&q=80&w=1000" },
        { make: "Bell", model: "429", range: 411, price: 7500000, type: "Helicopter", cruiseSpeed: 155, maxPax: 7, cabinHeight: 4.0, cabinWidth: 5.0, cabinLength: 9.0, img: PLACEHOLDER_IMG },
    ];

    const bases = [
        "Teterboro, NJ", "Van Nuys, CA", "Miami-Opa Locka, FL", "Dallas Love Field, TX",
        "London Luton, UK", "Paris Le Bourget, FR", "Dubai Int, UAE", "Geneva, CH",
        "Hong Kong Check Lap Kok", "Singapore Seletar", "São Paulo Catarina, BR"
    ];

    // Deterministic random number generator
    let seed = 123456789;
    const pseudoRandom = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    const data: Aircraft[] = [];
    for (let i = 0; i < count; i++) {
        const modelParams = models[i % models.length]; // Removed 'as any' since models now have correct shapes implicitly, but we need to ensure type safety.
        // Actually, TS might complain if specific properties are missing from matching Aircraft type fully? 
        // Aircraft type has detail fields that are optional.

        const year = 2015 + Math.floor(pseudoRandom() * 9); // 2015-2023

        // Slight variance
        const rangeVariance = Math.floor(pseudoRandom() * 100) - 50;
        const priceVariance = Math.floor(pseudoRandom() * (modelParams.price * 0.1)) - (modelParams.price * 0.05);
        const hours = Math.floor(pseudoRandom() * 5000) + 100;

        data.push({
            id: `ac-${i + 1}`,
            make: modelParams.make,
            model: modelParams.model,
            yom: year,
            sn: `${Math.floor(pseudoRandom() * 9000) + 1000}`,
            reg: `N${Math.floor(pseudoRandom() * 900)}${String.fromCharCode(65 + pseudoRandom() * 26)}${String.fromCharCode(65 + pseudoRandom() * 26)}`,
            askPrice: Math.floor((modelParams.price + priceVariance)),
            aftt: hours,
            dom: Math.floor(pseudoRandom() * 300),
            cycles: Math.floor(hours / (modelParams.type === 'Jet' ? 1.5 : 3)),
            engineProgram: "RRCC / MSP Gold",
            avionics: "Pro Line Fusion / HoneyWell Primus",
            type: modelParams.type as any,
            base: bases[i % bases.length],
            rangeNm: modelParams.range + rangeVariance,
            // New specs
            cruiseSpeed: modelParams.cruiseSpeed,
            maxPax: modelParams.maxPax,
            cabinHeight: modelParams.cabinHeight,
            cabinWidth: modelParams.cabinWidth,
            cabinLength: modelParams.cabinLength,

            // New Detailed Specs
            specs: {
                interior: {
                    typicalPAX: Math.floor(modelParams.maxPax * 0.8), // e.g. 19 -> 15
                    sleeps: Math.floor(modelParams.maxPax * 0.4),
                    galley: true,
                    lavatory: true,
                    crewRest: modelParams.maxPax > 12,
                },
                performance: {
                    maxCruiseSpeed: modelParams.cruiseSpeed,
                    typicalCruiseSpeed: Math.floor(modelParams.cruiseSpeed * 0.92),
                    maxRange: modelParams.range + rangeVariance, // 4 pax
                    typicalRange: Math.floor((modelParams.range + rangeVariance) * 0.85), // Full capacity (Map display)
                    typicalEndurance: `${Math.floor((modelParams.range / modelParams.cruiseSpeed))} hours`,
                    maxCruiseAltitude: 51000,
                },
                dimensions: {
                    cabinLength: modelParams.cabinLength,
                    cabinHeight: modelParams.cabinHeight,
                    cabinWidth: modelParams.cabinWidth,
                    flatFloors: true,
                },
                capacity: {
                    baggageVolume: Math.floor(modelParams.cabinLength * 5), // rough estimate
                }
            },

            mainImageUrl: modelParams.img,
            thumbnailUrl: modelParams.img,
            description: `Exceptional ${modelParams.model} with low hours.`,
            highlights: ["One Owner Since New", "Valid Inspections"]
        });
    }
    return data;
};

export const MOCK_AIRCRAFT: Aircraft[] = generateAircraft(60);
