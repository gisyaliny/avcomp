export interface Aircraft {
    id: string;
    make: string;
    model: string;
    sn: string; // Serial Number
    yom: number; // Year of Manufacture
    reg: string; // Registration
    base: string;
    askPrice: number;
    dom: number; // Days on Market
    aftt: number; // Airframe Total Time
    cycles: number;
    engineProgram: string;
    avionics: string;
    rangeNm: number; // Max Range in Nautical Miles
    cruiseSpeed: number; // Kts
    maxPax: number;
    cabinHeight: number; // ft
    cabinWidth: number; // ft
    cabinLength: number; // ft
    type: 'Jet' | 'Turboprop' | 'Piston' | 'Helicopter'; // Aircraft Category
    // Visuals & Details
    thumbnailUrl: string; // Small image for table
    mainImageUrl: string; // Hero image for details
    galleryImages?: string[]; // Additional images
    description?: string; // Marketing description
    highlights?: string[]; // Bullet points (e.g., "Meticulously Maintained", "Low Hours")

    // Detailed Specs
    // Expanded Data Model
    specs?: {
        interior: {
            typicalPAX: number;
            sleeps: number;
            galley: boolean; // or string description
            lavatory: boolean; // or string description
            crewRest: boolean;
        };
        performance: {
            maxCruiseSpeed: number; // Kts
            typicalCruiseSpeed: number; // Kts
            maxRange: number; // 4 pax, NM
            typicalRange: number; // Full capacity, NM (Use this for Map)
            typicalEndurance: string; // e.g., "13:00"
            maxCruiseAltitude: number; // ft
        };
        dimensions: {
            cabinLength: number; // ft
            cabinHeight: number; // ft
            cabinWidth: number; // ft
            flatFloors: boolean;
        };
        capacity: {
            baggageVolume: number; // cu ft
        };
    };

    // Keep existing flat props for table sorting if needed, or map them
    // OLD Flat props (deprecated or mapped): cruiseSpeed, maxPax, cabinHeight...
}

export interface Specification {
    make: string;
    model: string;
    rangeNm: number;
    maxSpeedKtas: number;
    cabinHeightFt: number;
    cabinWidthFt: number;
    passengers: number;
}
