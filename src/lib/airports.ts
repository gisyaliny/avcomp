export interface Airport {
    code: string;
    name: string;
    lat: number;
    lng: number;
}

export const MAJOR_AIRPORTS: Airport[] = [
    // US East
    { code: "KTEB", name: "Teterboro (NY)", lat: 40.8501, lng: -74.0608 },
    { code: "KHPN", name: "White Plains (NY)", lat: 41.0667, lng: -73.7075 },
    { code: "KOPF", name: "Miami Opa-Locka", lat: 25.9073, lng: -80.2784 },
    { code: "KPBI", name: "West Palm Beach", lat: 26.6832, lng: -80.0956 },
    { code: "KIAD", name: "Washington Dulles", lat: 38.9531, lng: -77.4565 },

    // US Central
    { code: "KDAL", name: "Dallas Love Field", lat: 32.8471, lng: -96.8517 },
    { code: "KPWK", name: "Chicago Executive", lat: 42.1143, lng: -87.9015 },
    { code: "KAUS", name: "Austin Bergstrom", lat: 30.1975, lng: -97.6664 },
    { code: "KICT", name: "Wichita", lat: 37.6499, lng: -97.4331 },

    // US West
    { code: "KVNY", name: "Van Nuys (LA)", lat: 34.2098, lng: -118.4899 },
    { code: "KSJC", name: "San Jose", lat: 37.3619, lng: -121.9290 },
    { code: "KBFI", name: "Seattle Boeing Field", lat: 47.5300, lng: -122.3020 },
    { code: "KLAS", name: "Las Vegas Harry Reid", lat: 36.0840, lng: -115.1537 },
    { code: "KAPA", name: "Denver Centennial", lat: 39.5701, lng: -104.8493 },

    // Europe
    { code: "EGGW", name: "London Luton", lat: 51.8747, lng: -0.3683 },
    { code: "EGLF", name: "Farnborough", lat: 51.2758, lng: -0.7763 },
    { code: "LFPB", name: "Paris Le Bourget", lat: 48.9694, lng: 2.4414 },
    { code: "LSGG", name: "Geneva", lat: 46.2370, lng: 6.1092 },
    { code: "LFMN", name: "Nice Côte d'Azur", lat: 43.6633, lng: 7.2163 },
    { code: "LIML", name: "Milan Linate", lat: 45.4451, lng: 9.2767 },
    { code: "LOWW", name: "Vienna", lat: 48.1102, lng: 16.5701 },
    { code: "UUEE", name: "Moscow Sheremetyevo", lat: 55.9726, lng: 37.4146 },

    // Middle East & Africa
    { code: "OMDB", name: "Dubai Int", lat: 25.2532, lng: 55.3657 },
    { code: "OTHH", name: "Doha Hamad", lat: 25.2611, lng: 51.6080 },
    { code: "LLBG", name: "Tel Aviv Ben Gurion", lat: 32.0055, lng: 34.8854 },
    { code: "FAOR", name: "Johannesburg", lat: -26.1367, lng: 28.2411 },

    // Asia Pacific
    { code: "RJTT", name: "Tokyo Haneda", lat: 35.5494, lng: 139.7798 },
    { code: "VHHH", name: "Hong Kong", lat: 22.3080, lng: 113.9185 },
    { code: "WSSS", name: "Singapore Changi", lat: 1.3644, lng: 103.9915 },
    { code: "ZSPD", name: "Shanghai Pudong", lat: 31.1443, lng: 121.8083 },
    { code: "YSSY", name: "Sydney Kingsford Smith", lat: -33.9461, lng: 151.1772 },
    { code: "NZAA", name: "Auckland", lat: -37.0082, lng: 174.7850 },
];
