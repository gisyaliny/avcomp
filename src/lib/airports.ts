export interface Airport {
    code: string;
    name: string;
    lat: number;
    lng: number;
}

// Comprehensive list of US airports (large, medium, and those with IATA codes)
export const MAJOR_AIRPORTS: Airport[] = [
    {
        "code": "OCA",
        "name": "Ocean Reef Club Airport",
        "lat": 25.3254,
        "lng": -80.2748
    },
    {
        "code": "PQS",
        "name": "Pilot Station Airport",
        "lat": 61.9346,
        "lng": -162.9
    },
    {
        "code": "CSE",
        "name": "Crested Butte Airpark",
        "lat": 38.8519,
        "lng": -106.9283
    },
    {
        "code": "JCY",
        "name": "LBJ Ranch Airport",
        "lat": 30.2518,
        "lng": -98.6225
    },
    {
        "code": "PMX",
        "name": "Metropolitan Airport",
        "lat": 42.2233,
        "lng": -72.3114
    },
    {
        "code": "WLR",
        "name": "Loring Seaplane Base",
        "lat": 55.6013,
        "lng": -131.637
    },
    {
        "code": "NUP",
        "name": "Nunapitchuk Airport",
        "lat": 60.9056,
        "lng": -162.4405
    },
    {
        "code": "PTC",
        "name": "Port Alice Seaplane Base",
        "lat": 55.803,
        "lng": -133.597
    },
    {
        "code": "ICY",
        "name": "Icy Bay Airport",
        "lat": 59.969,
        "lng": -141.662
    },
    {
        "code": "PPV",
        "name": "Port Protection Seaplane Base",
        "lat": 56.3288,
        "lng": -133.61
    },
    {
        "code": "KKK",
        "name": "Kalakaket Creek AS Airport",
        "lat": 64.4166,
        "lng": -156.8204
    },
    {
        "code": "MHS",
        "name": "Dunsmuir Muni-Mott Airport",
        "lat": 41.2632,
        "lng": -122.272
    },
    {
        "code": "NIR",
        "name": "Chase Field Industrial Airport",
        "lat": 28.3624,
        "lng": -97.6619
    },
    {
        "code": "GCT",
        "name": "Grand Canyon Bar Ten Airstrip",
        "lat": 36.2586,
        "lng": -113.2312
    },
    {
        "code": "ELW",
        "name": "Ellamar Seaplane Base",
        "lat": 60.8938,
        "lng": -146.704
    },
    {
        "code": "LVD",
        "name": "Lime Village Airport",
        "lat": 61.3591,
        "lng": -155.44
    },
    {
        "code": "HGZ",
        "name": "Hog River Airport",
        "lat": 66.2161,
        "lng": -155.669
    },
    {
        "code": "OTN",
        "name": "Ed-Air Airport",
        "lat": 38.8514,
        "lng": -87.4997
    },
    {
        "code": "TLF",
        "name": "Telida Airport",
        "lat": 63.3939,
        "lng": -153.269
    },
    {
        "code": "BZT",
        "name": "Eagle Air Park",
        "lat": 28.9822,
        "lng": -95.5797
    },
    {
        "code": "HBH",
        "name": "Entrance Island Seaplane Base",
        "lat": 57.4122,
        "lng": -133.4385
    },
    {
        "code": "FAK",
        "name": "False Island Seaplane Base",
        "lat": 57.5322,
        "lng": -135.213
    },
    {
        "code": "BYW",
        "name": "Blakely Island Airport",
        "lat": 48.579,
        "lng": -122.826
    },
    {
        "code": "DRF",
        "name": "Drift River Airport",
        "lat": 60.5889,
        "lng": -152.162
    },
    {
        "code": "BDF",
        "name": "Rinkenberger Restricted Landing Area",
        "lat": 41.2309,
        "lng": -89.6157
    },
    {
        "code": "VRS",
        "name": "Roy Otten Memorial Airfield",
        "lat": 38.4278,
        "lng": -92.8752
    },
    {
        "code": "GDH",
        "name": "Golden Horn Lodge Seaplane Base",
        "lat": 59.747,
        "lng": -158.875
    },
    {
        "code": "ATT",
        "name": "Atmautluak Airport",
        "lat": 60.8667,
        "lng": -162.273
    },
    {
        "code": "LIV",
        "name": "Livengood Camp Airport",
        "lat": 65.467,
        "lng": -148.6534
    },
    {
        "code": "PDB",
        "name": "Pedro Bay Airport",
        "lat": 59.7896,
        "lng": -154.124
    },
    {
        "code": "KOZ",
        "name": "Ouzinkie Airport",
        "lat": 57.9254,
        "lng": -152.4967
    },
    {
        "code": "TNK",
        "name": "Tununak Airport",
        "lat": 60.5755,
        "lng": -165.272
    },
    {
        "code": "EVA",
        "name": "Ben Bruce Memorial Airpark",
        "lat": 30.321,
        "lng": -94.0735
    },
    {
        "code": "WHD",
        "name": "Hyder Seaplane Base",
        "lat": 55.9033,
        "lng": -130.01
    },
    {
        "code": "MNT",
        "name": "Minto Al Wright Airport",
        "lat": 65.1437,
        "lng": -149.37
    },
    {
        "code": "TKI",
        "name": "Tokeen Seaplane Base",
        "lat": 55.9371,
        "lng": -133.327
    },
    {
        "code": "WKK",
        "name": "Aleknagik / New Airport",
        "lat": 59.2826,
        "lng": -158.618
    },
    {
        "code": "WFB",
        "name": "Ketchikan Harbor Seaplane Base",
        "lat": 55.3499,
        "lng": -131.677
    },
    {
        "code": "NNK",
        "name": "Naknek Airport",
        "lat": 58.7329,
        "lng": -157.02
    },
    {
        "code": "BKF",
        "name": "Lake Brooks Seaplane Base",
        "lat": 58.5548,
        "lng": -155.777
    },
    {
        "code": "BCS",
        "name": "Southern Seaplane Airport",
        "lat": 29.8661,
        "lng": -90.0222
    },
    {
        "code": "SPQ",
        "name": "Catalina Air-Sea Terminal Heliport",
        "lat": 33.7492,
        "lng": -118.275
    },
    {
        "code": "TSS",
        "name": "East 34th Street Heliport",
        "lat": 40.7426,
        "lng": -73.9721
    },
    {
        "code": "QNY",
        "name": "New York Skyports Inc Seaplane Base",
        "lat": 40.734,
        "lng": -73.9729
    },
    {
        "code": "BWL",
        "name": "Earl Henry Airport",
        "lat": 36.7959,
        "lng": -97.317
    },
    {
        "code": "WYB",
        "name": "Yes Bay Lodge Seaplane Base",
        "lat": 55.9163,
        "lng": -131.801
    },
    {
        "code": "CWS",
        "name": "Center Island Airport",
        "lat": 48.4901,
        "lng": -122.832
    },
    {
        "code": "TEK",
        "name": "Tatitlek Airport",
        "lat": 60.8714,
        "lng": -146.6903
    },
    {
        "code": "DUF",
        "name": "Pine Island Airport",
        "lat": 36.2535,
        "lng": -75.7885
    },
    {
        "code": "SSW",
        "name": "Stuart Island Airpark",
        "lat": 48.6734,
        "lng": -123.1754
    },
    {
        "code": "FOB",
        "name": "Fort Bragg Airport",
        "lat": 39.4743,
        "lng": -123.796
    },
    {
        "code": "PUL",
        "name": "Port of Poulsbo Marina Moorage Seaplane Base",
        "lat": 47.734,
        "lng": -122.647
    },
    {
        "code": "CCD",
        "name": "Century City Heliport",
        "lat": 34.0608,
        "lng": -118.418
    },
    {
        "code": "WMK",
        "name": "Meyers Chuck Seaplane Base",
        "lat": 55.7396,
        "lng": -132.255
    },
    {
        "code": "AXB",
        "name": "Maxson Airfield",
        "lat": 44.312,
        "lng": -75.9003
    },
    {
        "code": "REE",
        "name": "Reese Airpark",
        "lat": 33.5903,
        "lng": -102.037
    },
    {
        "code": "WDN",
        "name": "Waldron Airstrip",
        "lat": 48.7118,
        "lng": -123.018
    },
    {
        "code": "WWP",
        "name": "Whale Pass Seaplane Float Harbor Facility",
        "lat": 56.1163,
        "lng": -133.122
    },
    {
        "code": "CHU",
        "name": "Chuathbaluk Airport",
        "lat": 61.5791,
        "lng": -159.216
    },
    {
        "code": "UGS",
        "name": "Ugashik Airport",
        "lat": 57.5279,
        "lng": -157.399
    },
    {
        "code": "MXG",
        "name": "Marlboro Airport",
        "lat": 42.3432,
        "lng": -71.509
    },
    {
        "code": "PSQ",
        "name": "Philadelphia Seaplane Base",
        "lat": 39.859,
        "lng": -75.2996
    },
    {
        "code": "KLL",
        "name": "Levelock Airport",
        "lat": 59.1281,
        "lng": -156.859
    },
    {
        "code": "SGW",
        "name": "Saginaw Seaplane Base",
        "lat": 56.8863,
        "lng": -134.158
    },
    {
        "code": "WTL",
        "name": "Tuntutuliak Airport",
        "lat": 60.3353,
        "lng": -162.667
    },
    {
        "code": "TWA",
        "name": "Twin Hills Airport",
        "lat": 59.0756,
        "lng": -160.273
    },
    {
        "code": "KCQ",
        "name": "Chignik Lake Airport",
        "lat": 56.255,
        "lng": -158.775
    },
    {
        "code": "AHT",
        "name": "Amchitka Army Airfield",
        "lat": 51.3778,
        "lng": 179.2592
    },
    {
        "code": "CEX",
        "name": "Chena Hot Springs Airport",
        "lat": 65.0518,
        "lng": -146.047
    },
    {
        "code": "SOL",
        "name": "Solomon State Field",
        "lat": 64.5605,
        "lng": -164.4457
    },
    {
        "code": "HED",
        "name": "Herendeen Bay Airport",
        "lat": 55.8014,
        "lng": -160.899
    },
    {
        "code": "TWE",
        "name": "Taylor Airport",
        "lat": 65.6793,
        "lng": -164.799
    },
    {
        "code": "KTH",
        "name": "Tikchik Lodge Seaplane Base",
        "lat": 59.9632,
        "lng": -158.477
    },
    {
        "code": "NKI",
        "name": "Naukati Bay Seaplane Base",
        "lat": 55.8496,
        "lng": -133.228
    },
    {
        "code": "LNI",
        "name": "Lonely Air Station",
        "lat": 70.9107,
        "lng": -153.242
    },
    {
        "code": "CDL",
        "name": "Candle 2 Airport",
        "lat": 65.9077,
        "lng": -161.926
    },
    {
        "code": "AOS",
        "name": "Amook Bay Seaplane Base",
        "lat": 57.4715,
        "lng": -153.815
    },
    {
        "code": "BSZ",
        "name": "Bartletts Airport",
        "lat": 58.2162,
        "lng": -157.352
    },
    {
        "code": "BSW",
        "name": "Boswell Bay Airport",
        "lat": 60.4231,
        "lng": -146.146
    },
    {
        "code": "TGE",
        "name": "Sharpe Field",
        "lat": 32.4919,
        "lng": -85.7756
    },
    {
        "code": "ALZ",
        "name": "Alitak Seaplane Base",
        "lat": 56.8995,
        "lng": -154.248
    },
    {
        "code": "AQY",
        "name": "Girdwood Airport",
        "lat": 60.9661,
        "lng": -149.126
    },
    {
        "code": "ARX",
        "name": "Asbury Park Neptune Air Terminal",
        "lat": 40.2193,
        "lng": -74.0908
    },
    {
        "code": "AYZ",
        "name": "Zahn's Airport",
        "lat": 40.71,
        "lng": -73.4
    },
    {
        "code": "HAE",
        "name": "Lava Falls Heliport",
        "lat": 36.1916,
        "lng": -113.092
    },
    {
        "code": "BKG",
        "name": "Branson Airport",
        "lat": 36.5321,
        "lng": -93.2005
    },
    {
        "code": "BCJ",
        "name": "Baca Grande Airfield",
        "lat": 37.9648,
        "lng": -105.7767
    },
    {
        "code": "ILL",
        "name": "Willmar Municipal -John L Rice Field",
        "lat": 45.1177,
        "lng": -95.1304
    },
    {
        "code": "BNF",
        "name": "Baranof Warm Springs Float and Seaplane Base",
        "lat": 57.0888,
        "lng": -134.8331
    },
    {
        "code": "BOF",
        "name": "Bolling Air Force Base",
        "lat": 38.8429,
        "lng": -77.0161
    },
    {
        "code": "BOK",
        "name": "Brookings Airport",
        "lat": 42.0746,
        "lng": -124.29
    },
    {
        "code": "BQV",
        "name": "Bartlett Cove Seaplane Base",
        "lat": 58.4552,
        "lng": -135.885
    },
    {
        "code": "BRG",
        "name": "Whitesburg Municipal Airport",
        "lat": 37.2219,
        "lng": -82.8742
    },
    {
        "code": "BYA",
        "name": "Boundary Airport",
        "lat": 64.0783,
        "lng": -141.113
    },
    {
        "code": "BZS",
        "name": "Buzzards Point Seaplane Base",
        "lat": 38.863,
        "lng": -77.011
    },
    {
        "code": "CGA",
        "name": "Craig Seaplane Base",
        "lat": 55.4788,
        "lng": -133.148
    },
    {
        "code": "CHP",
        "name": "Circle Hot Springs Airport",
        "lat": 65.4855,
        "lng": -144.611
    },
    {
        "code": "CIV",
        "name": "Chomley Seaplane Base",
        "lat": 55.217,
        "lng": -132.21
    },
    {
        "code": "CKD",
        "name": "Crooked Creek Airport",
        "lat": 61.8679,
        "lng": -158.135
    },
    {
        "code": "CKR",
        "name": "Crane Island Airstrip",
        "lat": 48.5978,
        "lng": -122.9979
    },
    {
        "code": "CKU",
        "name": "Cordova Municipal Airport",
        "lat": 60.5439,
        "lng": -145.727
    },
    {
        "code": "CKX",
        "name": "Chicken Airport",
        "lat": 64.0713,
        "lng": -141.952
    },
    {
        "code": "CLC",
        "name": "Clear Lake Metroport",
        "lat": 29.5555,
        "lng": -95.1383
    },
    {
        "code": "CLG",
        "name": "Coalinga Airport",
        "lat": 36.158,
        "lng": -120.3601
    },
    {
        "code": "EHT",
        "name": "Rentschler Heliport",
        "lat": 41.7517,
        "lng": -72.6253
    },
    {
        "code": "HLI",
        "name": "Hollister Municipal Airport",
        "lat": 36.8933,
        "lng": -121.41
    },
    {
        "code": "CVR",
        "name": "Hughes Airport",
        "lat": 33.975,
        "lng": -118.417
    },
    {
        "code": "CXC",
        "name": "Chitina Airport",
        "lat": 61.5829,
        "lng": -144.427
    },
    {
        "code": "CYM",
        "name": "Chatham Seaplane Base",
        "lat": 57.5149,
        "lng": -134.946
    },
    {
        "code": "CZK",
        "name": "Cascade Locks State Airport",
        "lat": 45.6769,
        "lng": -121.879
    },
    {
        "code": "CZN",
        "name": "Chisana Airport",
        "lat": 62.0712,
        "lng": -142.048
    },
    {
        "code": "CZO",
        "name": "Chistochina Airport",
        "lat": 62.5635,
        "lng": -144.669
    },
    {
        "code": "IUA",
        "name": "Canandaigua Airport",
        "lat": 42.9089,
        "lng": -77.3252
    },
    {
        "code": "DJN",
        "name": "Delta Junction Airport",
        "lat": 64.0504,
        "lng": -145.717
    },
    {
        "code": "DCK",
        "name": "Dahl Creek Airport",
        "lat": 66.9433,
        "lng": -156.905
    },
    {
        "code": "DCR",
        "name": "Decatur HI-Way Airfield",
        "lat": 40.8375,
        "lng": -84.8625
    },
    {
        "code": "DHB",
        "name": "Deer Harbor SPB",
        "lat": 48.6167,
        "lng": -123.0028
    },
    {
        "code": "DPK",
        "name": "Deer Park Airport",
        "lat": 40.76,
        "lng": -73.31
    },
    {
        "code": "DWS",
        "name": "Lake Buena Vista STOLport",
        "lat": 28.3994,
        "lng": -81.5713
    },
    {
        "code": "EDA",
        "name": "Edna Bay Seaplane Base",
        "lat": 55.9497,
        "lng": -133.661
    },
    {
        "code": "ESP",
        "name": "Birchwood-Pocono Airport",
        "lat": 41.0643,
        "lng": -75.2521
    },
    {
        "code": "EXI",
        "name": "Excursion Inlet Seaplane Base",
        "lat": 58.4205,
        "lng": -135.449
    },
    {
        "code": "RGR",
        "name": "Ranger Municipal Airport",
        "lat": 32.4526,
        "lng": -98.6828
    },
    {
        "code": "FAL",
        "name": "Falcon State Airport",
        "lat": 26.5856,
        "lng": -99.1398
    },
    {
        "code": "FLE",
        "name": "Fort Lee Army Airfield",
        "lat": 37.284,
        "lng": -77.3448
    },
    {
        "code": "FLT",
        "name": "Flat Airport",
        "lat": 62.4526,
        "lng": -157.989
    },
    {
        "code": "FSN",
        "name": "Haley Army Airfield",
        "lat": 42.221,
        "lng": -87.817
    },
    {
        "code": "GAB",
        "name": "Gabbs Airport",
        "lat": 38.9241,
        "lng": -117.959
    },
    {
        "code": "GFD",
        "name": "Pope Field",
        "lat": 39.7903,
        "lng": -85.7361
    },
    {
        "code": "GNU",
        "name": "Goodnews Airport",
        "lat": 59.1174,
        "lng": -161.577
    },
    {
        "code": "GMT",
        "name": "Granite Mountain Air Station",
        "lat": 65.4021,
        "lng": -161.281
    },
    {
        "code": "GVE",
        "name": "Gordonsville Municipal Airport",
        "lat": 38.156,
        "lng": -78.1658
    },
    {
        "code": "HAY",
        "name": "Haycock Airport",
        "lat": 65.201,
        "lng": -161.157
    },
    {
        "code": "HEY",
        "name": "Hanchey Army (Fort Rucker) Heliport",
        "lat": 31.346,
        "lng": -85.6543
    },
    {
        "code": "HGT",
        "name": "Tusi (Hunter Liggett) Army Heliport",
        "lat": 35.9935,
        "lng": -121.237
    },
    {
        "code": "HPV",
        "name": "Princeville Airport",
        "lat": 22.2092,
        "lng": -159.446
    },
    {
        "code": "WKL",
        "name": "Waikoloa Heliport",
        "lat": 19.9205,
        "lng": -155.8607
    },
    {
        "code": "HKB",
        "name": "Healy Lake Airport",
        "lat": 63.9958,
        "lng": -144.6926
    },
    {
        "code": "HYL",
        "name": "Hollis Clark Bay Seaplane Base",
        "lat": 55.4816,
        "lng": -132.646
    },
    {
        "code": "IVH",
        "name": "Ivishak Airport",
        "lat": 69.4066,
        "lng": -148.2881
    },
    {
        "code": "JLA",
        "name": "Quartz Creek Airport",
        "lat": 60.4827,
        "lng": -149.719
    },
    {
        "code": "JPB",
        "name": "Pan Am Building Heliport",
        "lat": 40.7533,
        "lng": -73.9765
    },
    {
        "code": "JPN",
        "name": "Pentagon Army Heliport",
        "lat": 38.8741,
        "lng": -77.0575
    },
    {
        "code": "JRA",
        "name": "West 30th St. Heliport",
        "lat": 40.7545,
        "lng": -74.0071
    },
    {
        "code": "JRB",
        "name": "Downtown-Manhattan/Wall St Heliport",
        "lat": 40.7012,
        "lng": -74.009
    },
    {
        "code": "AMK",
        "name": "Animas Air Park",
        "lat": 37.2032,
        "lng": -107.869
    },
    {
        "code": "BDX",
        "name": "Broadus Airport",
        "lat": 45.4725,
        "lng": -105.454
    },
    {
        "code": "EUE",
        "name": "Eureka Airport",
        "lat": 39.6042,
        "lng": -116.005
    },
    {
        "code": "KPT",
        "name": "Jackpot Airport/Hayden Field",
        "lat": 41.976,
        "lng": -114.658
    },
    {
        "code": "RLA",
        "name": "Rolla Downtown Airport",
        "lat": 37.9357,
        "lng": -91.8135
    },
    {
        "code": "FID",
        "name": "Elizabeth Field",
        "lat": 41.2513,
        "lng": -72.0316
    },
    {
        "code": "HUD",
        "name": "Humboldt Municipal Airport",
        "lat": 42.7361,
        "lng": -94.2452
    },
    {
        "code": "TWD",
        "name": "Jefferson County International Airport",
        "lat": 48.0538,
        "lng": -122.811
    },
    {
        "code": "MVM",
        "name": "Kayenta Airport",
        "lat": 36.7164,
        "lng": -110.2284
    },
    {
        "code": "HCC",
        "name": "Columbia County Airport",
        "lat": 42.2913,
        "lng": -73.7103
    },
    {
        "code": "AHD",
        "name": "Ardmore Downtown Executive Airport",
        "lat": 34.147,
        "lng": -97.1227
    },
    {
        "code": "GCW",
        "name": "Grand Canyon West Airport",
        "lat": 35.9904,
        "lng": -113.816
    },
    {
        "code": "CKE",
        "name": "Lampson Field",
        "lat": 38.9906,
        "lng": -122.901
    },
    {
        "code": "ROF",
        "name": "Montague-Yreka Rohrer Field",
        "lat": 41.7304,
        "lng": -122.546
    },
    {
        "code": "CNE",
        "name": "Fremont County Airport",
        "lat": 38.428,
        "lng": -105.106
    },
    {
        "code": "RSX",
        "name": "Rouses Point Seaplane Base",
        "lat": 44.9917,
        "lng": -73.3635
    },
    {
        "code": "COP",
        "name": "Cooperstown-Westville Airport",
        "lat": 42.6292,
        "lng": -74.891
    },
    {
        "code": "CIL",
        "name": "Council Airport",
        "lat": 64.8979,
        "lng": -163.703
    },
    {
        "code": "IRB",
        "name": "Iraan Municipal Airport",
        "lat": 30.9057,
        "lng": -101.892
    },
    {
        "code": "GNF",
        "name": "Gansner Field",
        "lat": 39.9439,
        "lng": -120.945
    },
    {
        "code": "CHZ",
        "name": "Chiloquin State Airport",
        "lat": 42.5794,
        "lng": -121.8791
    },
    {
        "code": "LTW",
        "name": "St. Mary's County Regional Airport",
        "lat": 38.3154,
        "lng": -76.5501
    },
    {
        "code": "AHF",
        "name": "Arapahoe Municipal Airport",
        "lat": 40.3395,
        "lng": -99.9065
    },
    {
        "code": "PCT",
        "name": "Princeton Airport",
        "lat": 40.3992,
        "lng": -74.6589
    },
    {
        "code": "CTO",
        "name": "Calverton Executive Airpark",
        "lat": 40.9151,
        "lng": -72.7919
    },
    {
        "code": "NRI",
        "name": "Grand Lake Regional Airport",
        "lat": 36.5776,
        "lng": -94.8619
    },
    {
        "code": "GTP",
        "name": "Grants Pass Airport",
        "lat": 42.5101,
        "lng": -123.388
    },
    {
        "code": "NLE",
        "name": "Jerry Tyler Memorial Airport",
        "lat": 41.8359,
        "lng": -86.2252
    },
    {
        "code": "GCD",
        "name": "Grand Coulee Dam Airport",
        "lat": 47.922,
        "lng": -119.083
    },
    {
        "code": "VLE",
        "name": "Valle Airport",
        "lat": 35.6506,
        "lng": -112.148
    },
    {
        "code": "FPY",
        "name": "Perry-Foley Airport",
        "lat": 30.0693,
        "lng": -83.5806
    },
    {
        "code": "NTJ",
        "name": "Manti-Ephraim Airport",
        "lat": 39.3291,
        "lng": -111.615
    },
    {
        "code": "MSD",
        "name": "Mount Pleasant Airport",
        "lat": 39.5267,
        "lng": -111.476
    },
    {
        "code": "SBO",
        "name": "Salina Gunnison Airport",
        "lat": 39.0291,
        "lng": -111.838
    },
    {
        "code": "JVI",
        "name": "Central Jersey Regional Airport",
        "lat": 40.5244,
        "lng": -74.5984
    },
    {
        "code": "UCE",
        "name": "Eunice Airport",
        "lat": 30.4663,
        "lng": -92.4238
    },
    {
        "code": "GOL",
        "name": "Gold Beach Municipal Airport",
        "lat": 42.4134,
        "lng": -124.424
    },
    {
        "code": "KKT",
        "name": "Kentland Municipal Airport",
        "lat": 40.7587,
        "lng": -87.4282
    },
    {
        "code": "PRW",
        "name": "Prentice Airport",
        "lat": 45.543,
        "lng": -90.2793
    },
    {
        "code": "EGP",
        "name": "Maverick County Memorial International Airport",
        "lat": 28.8572,
        "lng": -100.512
    },
    {
        "code": "BLD",
        "name": "Boulder City Municipal Airport",
        "lat": 35.9475,
        "lng": -114.861
    },
    {
        "code": "MFH",
        "name": "Mesquite Airport",
        "lat": 36.835,
        "lng": -114.055
    },
    {
        "code": "ECA",
        "name": "Iosco County Airport",
        "lat": 44.3128,
        "lng": -83.4223
    },
    {
        "code": "FMU",
        "name": "Florence Municipal Airport",
        "lat": 43.9828,
        "lng": -124.111
    },
    {
        "code": "OTS",
        "name": "Anacortes Airport",
        "lat": 48.499,
        "lng": -122.662
    },
    {
        "code": "ROL",
        "name": "Roosevelt Municipal Airport",
        "lat": 40.2783,
        "lng": -110.051
    },
    {
        "code": "K79J",
        "name": "South Alabama Regional At Bill Benton Field Airport",
        "lat": 31.3088,
        "lng": -86.3938
    },
    {
        "code": "CTK",
        "name": "Canton Municipal Airport",
        "lat": 43.3089,
        "lng": -96.571
    },
    {
        "code": "WPO",
        "name": "North Fork Valley Airport",
        "lat": 38.8317,
        "lng": -107.646
    },
    {
        "code": "ATE",
        "name": "Antlers Municipal Airport",
        "lat": 34.1926,
        "lng": -95.6499
    },
    {
        "code": "QWG",
        "name": "Wilgrove Air Park",
        "lat": 35.2139,
        "lng": -80.6683
    },
    {
        "code": "ASQ",
        "name": "Austin Airport",
        "lat": 39.468,
        "lng": -117.195
    },
    {
        "code": "AAF",
        "name": "Apalachicola Regional Airport",
        "lat": 29.7275,
        "lng": -85.0275
    },
    {
        "code": "ABE",
        "name": "Lehigh Valley International Airport",
        "lat": 40.6521,
        "lng": -75.4408
    },
    {
        "code": "ABI",
        "name": "Abilene Regional Airport",
        "lat": 32.4113,
        "lng": -99.6819
    },
    {
        "code": "ABQ",
        "name": "Albuquerque International Sunport",
        "lat": 35.0402,
        "lng": -106.609
    },
    {
        "code": "ABR",
        "name": "Aberdeen Regional Airport",
        "lat": 45.4491,
        "lng": -98.4218
    },
    {
        "code": "ABY",
        "name": "Southwest Georgia Regional Airport",
        "lat": 31.5355,
        "lng": -84.1945
    },
    {
        "code": "ACB",
        "name": "Antrim County Airport",
        "lat": 44.9886,
        "lng": -85.1984
    },
    {
        "code": "ACK",
        "name": "Nantucket Memorial Airport",
        "lat": 41.2531,
        "lng": -70.0602
    },
    {
        "code": "ACT",
        "name": "Waco Regional Airport",
        "lat": 31.6113,
        "lng": -97.2305
    },
    {
        "code": "ACV",
        "name": "California Redwood Coast-Humboldt County Airport",
        "lat": 40.9781,
        "lng": -124.109
    },
    {
        "code": "ACY",
        "name": "Atlantic City International Airport",
        "lat": 39.4576,
        "lng": -74.5772
    },
    {
        "code": "ADG",
        "name": "Lenawee County Airport",
        "lat": 41.8677,
        "lng": -84.0773
    },
    {
        "code": "ADT",
        "name": "Ada Regional Airport",
        "lat": 34.8043,
        "lng": -96.6713
    },
    {
        "code": "ADM",
        "name": "Ardmore Municipal Airport",
        "lat": 34.303,
        "lng": -97.0196
    },
    {
        "code": "ADS",
        "name": "Addison Airport",
        "lat": 32.9686,
        "lng": -96.8364
    },
    {
        "code": "ADW",
        "name": "Joint Base Andrews",
        "lat": 38.8108,
        "lng": -76.867
    },
    {
        "code": "KAE",
        "name": "Kake Seaplane Base",
        "lat": 56.973,
        "lng": -133.946
    },
    {
        "code": "AEL",
        "name": "Albert Lea Municipal Airport",
        "lat": 43.6815,
        "lng": -93.3672
    },
    {
        "code": "AEX",
        "name": "Alexandria International Airport",
        "lat": 31.3274,
        "lng": -92.5498
    },
    {
        "code": "AFF",
        "name": "USAF Academy Airfield",
        "lat": 38.9697,
        "lng": -104.813
    },
    {
        "code": "WSG",
        "name": "Washington County Airport",
        "lat": 40.1365,
        "lng": -80.2902
    },
    {
        "code": "AFN",
        "name": "Jaffrey Airport Silver Ranch Airport",
        "lat": 42.8051,
        "lng": -72.003
    },
    {
        "code": "AFO",
        "name": "Afton Municipal Airport",
        "lat": 42.7112,
        "lng": -110.942
    },
    {
        "code": "AFW",
        "name": "Fort Worth Alliance Airport",
        "lat": 32.9876,
        "lng": -97.3188
    },
    {
        "code": "AGC",
        "name": "Allegheny County Airport",
        "lat": 40.3544,
        "lng": -79.9302
    },
    {
        "code": "AGO",
        "name": "Ralph C Weiser Field",
        "lat": 33.228,
        "lng": -93.217
    },
    {
        "code": "AGS",
        "name": "Augusta Regional At Bush Field",
        "lat": 33.3699,
        "lng": -81.9645
    },
    {
        "code": "AHC",
        "name": "Amedee Army Air Field",
        "lat": 40.2662,
        "lng": -120.153
    },
    {
        "code": "AHH",
        "name": "Amery Municipal Airport",
        "lat": 45.2811,
        "lng": -92.3754
    },
    {
        "code": "AHN",
        "name": "Athens Ben Epps Airport",
        "lat": 33.9486,
        "lng": -83.3263
    },
    {
        "code": "AIA",
        "name": "Alliance Municipal Airport",
        "lat": 42.0532,
        "lng": -102.804
    },
    {
        "code": "AID",
        "name": "Anderson Municipal Darlington Field",
        "lat": 40.1086,
        "lng": -85.613
    },
    {
        "code": "AIK",
        "name": "Aiken Regional Airport",
        "lat": 33.6494,
        "lng": -81.685
    },
    {
        "code": "AIO",
        "name": "Atlantic Municipal Airport",
        "lat": 41.4073,
        "lng": -95.0469
    },
    {
        "code": "AIV",
        "name": "George Downer Airport",
        "lat": 33.1065,
        "lng": -88.1978
    },
    {
        "code": "AIY",
        "name": "Atlantic City Municipal Bader Field",
        "lat": 39.36,
        "lng": -74.4561
    },
    {
        "code": "AIZ",
        "name": "Lee C Fine Memorial Airport",
        "lat": 38.096,
        "lng": -92.5495
    },
    {
        "code": "AKO",
        "name": "Colorado Plains Regional Airport",
        "lat": 40.1756,
        "lng": -103.222
    },
    {
        "code": "AKC",
        "name": "Akron Executive Airport",
        "lat": 41.0375,
        "lng": -81.4669
    },
    {
        "code": "ALB",
        "name": "Albany International Airport",
        "lat": 42.7483,
        "lng": -73.8017
    },
    {
        "code": "ALI",
        "name": "Alice International Airport",
        "lat": 27.7409,
        "lng": -98.0269
    },
    {
        "code": "ALM",
        "name": "Alamogordo White Sands Regional Airport",
        "lat": 32.8399,
        "lng": -105.991
    },
    {
        "code": "ALN",
        "name": "St Louis Regional Airport",
        "lat": 38.8903,
        "lng": -90.046
    },
    {
        "code": "ALO",
        "name": "Waterloo Regional Airport",
        "lat": 42.5571,
        "lng": -92.4003
    },
    {
        "code": "ALS",
        "name": "San Luis Valley Regional Bergman Field",
        "lat": 37.4349,
        "lng": -105.867
    },
    {
        "code": "ALW",
        "name": "Walla Walla Regional Airport",
        "lat": 46.0949,
        "lng": -118.288
    },
    {
        "code": "ALX",
        "name": "Thomas C Russell Field",
        "lat": 32.9147,
        "lng": -85.963
    },
    {
        "code": "AMA",
        "name": "Rick Husband Amarillo International Airport",
        "lat": 35.2194,
        "lng": -101.706
    },
    {
        "code": "AMN",
        "name": "Gratiot Community Airport",
        "lat": 43.3221,
        "lng": -84.688
    },
    {
        "code": "AMW",
        "name": "Ames Municipal Airport",
        "lat": 41.992,
        "lng": -93.6218
    },
    {
        "code": "ANB",
        "name": "Anniston Regional Airport",
        "lat": 33.5882,
        "lng": -85.8581
    },
    {
        "code": "AND",
        "name": "Anderson Regional Airport",
        "lat": 34.4946,
        "lng": -82.7094
    },
    {
        "code": "SLT",
        "name": "Salida Airport Harriett Alexander Field",
        "lat": 38.5383,
        "lng": -106.049
    },
    {
        "code": "ANP",
        "name": "Lee Airport",
        "lat": 38.9429,
        "lng": -76.5684
    },
    {
        "code": "ANQ",
        "name": "Tri State Steuben County Airport",
        "lat": 41.6397,
        "lng": -85.0835
    },
    {
        "code": "ANW",
        "name": "Ainsworth Regional Airport",
        "lat": 42.5792,
        "lng": -99.993
    },
    {
        "code": "ANY",
        "name": "Anthony Municipal Airport",
        "lat": 37.1585,
        "lng": -98.0796
    },
    {
        "code": "AOH",
        "name": "Lima Allen County Airport",
        "lat": 40.7069,
        "lng": -84.0267
    },
    {
        "code": "AOO",
        "name": "Altoona Blair County Airport",
        "lat": 40.2964,
        "lng": -78.32
    },
    {
        "code": "APA",
        "name": "Centennial Airport",
        "lat": 39.5701,
        "lng": -104.849
    },
    {
        "code": "APC",
        "name": "Napa County Airport",
        "lat": 38.2132,
        "lng": -122.281
    },
    {
        "code": "APF",
        "name": "Naples Municipal Airport",
        "lat": 26.1526,
        "lng": -81.7753
    },
    {
        "code": "APG",
        "name": "Phillips Army Air Field",
        "lat": 39.4662,
        "lng": -76.1688
    },
    {
        "code": "APH",
        "name": "A P Hill AAF (Fort A P Hill) Airport",
        "lat": 38.0689,
        "lng": -77.3183
    },
    {
        "code": "APN",
        "name": "Alpena County Regional Airport",
        "lat": 45.0781,
        "lng": -83.5603
    },
    {
        "code": "APT",
        "name": "Marion County Brown Field",
        "lat": 35.0607,
        "lng": -85.5853
    },
    {
        "code": "APV",
        "name": "Apple Valley Airport",
        "lat": 34.5753,
        "lng": -117.186
    },
    {
        "code": "ARA",
        "name": "Acadiana Regional Airport",
        "lat": 30.0378,
        "lng": -91.8839
    },
    {
        "code": "ARB",
        "name": "Ann Arbor Municipal Airport",
        "lat": 42.223,
        "lng": -83.7456
    },
    {
        "code": "ARG",
        "name": "Walnut Ridge Regional Airport",
        "lat": 36.1247,
        "lng": -90.9251
    },
    {
        "code": "WHT",
        "name": "Wharton Regional Airport",
        "lat": 29.2543,
        "lng": -96.1544
    },
    {
        "code": "AUZ",
        "name": "Aurora Municipal Airport",
        "lat": 41.7719,
        "lng": -88.4757
    },
    {
        "code": "ART",
        "name": "Watertown International Airport",
        "lat": 43.9919,
        "lng": -76.0217
    },
    {
        "code": "ARV",
        "name": "Lakeland-Noble F. Lee Memorial field",
        "lat": 45.9279,
        "lng": -89.7309
    },
    {
        "code": "BFT",
        "name": "Beaufort County Airport",
        "lat": 32.4122,
        "lng": -80.6344
    },
    {
        "code": "ASE",
        "name": "Aspen-Pitkin Co/Sardy Field",
        "lat": 39.2232,
        "lng": -106.869
    },
    {
        "code": "SPZ",
        "name": "Springdale Municipal Airport",
        "lat": 36.1764,
        "lng": -94.1193
    },
    {
        "code": "ASH",
        "name": "Nashua Airport / Boire Field",
        "lat": 42.7817,
        "lng": -71.5148
    },
    {
        "code": "ASL",
        "name": "Harrison County Airport",
        "lat": 32.5205,
        "lng": -94.3078
    },
    {
        "code": "ASN",
        "name": "Talladega Municipal Airport",
        "lat": 33.5699,
        "lng": -86.0509
    },
    {
        "code": "AST",
        "name": "Astoria Regional Airport",
        "lat": 46.158,
        "lng": -123.879
    },
    {
        "code": "ASX",
        "name": "John F Kennedy Memorial Airport",
        "lat": 46.5485,
        "lng": -90.919
    },
    {
        "code": "ASY",
        "name": "Ashley Municipal Airport",
        "lat": 46.0239,
        "lng": -99.3526
    },
    {
        "code": "ATL",
        "name": "Hartsfield Jackson Atlanta International Airport",
        "lat": 33.6367,
        "lng": -84.4281
    },
    {
        "code": "ATS",
        "name": "Artesia Municipal Airport",
        "lat": 32.8525,
        "lng": -104.468
    },
    {
        "code": "ATW",
        "name": "Appleton International Airport",
        "lat": 44.2581,
        "lng": -88.5191
    },
    {
        "code": "ATY",
        "name": "Watertown Regional Airport",
        "lat": 44.914,
        "lng": -97.1547
    },
    {
        "code": "AUG",
        "name": "Augusta State Airport",
        "lat": 44.3206,
        "lng": -69.7973
    },
    {
        "code": "AUM",
        "name": "Austin Municipal Airport",
        "lat": 43.665,
        "lng": -92.9334
    },
    {
        "code": "AUN",
        "name": "Auburn Municipal Airport",
        "lat": 38.9548,
        "lng": -121.082
    },
    {
        "code": "AUO",
        "name": "Auburn University Regional Airport",
        "lat": 32.6151,
        "lng": -85.434
    },
    {
        "code": "AUS",
        "name": "Austin Bergstrom International Airport",
        "lat": 30.1945,
        "lng": -97.6699
    },
    {
        "code": "AUW",
        "name": "Wausau Downtown Airport",
        "lat": 44.9262,
        "lng": -89.6266
    },
    {
        "code": "AVL",
        "name": "Asheville Regional Airport",
        "lat": 35.4362,
        "lng": -82.5418
    },
    {
        "code": "AVO",
        "name": "Avon Park Executive Airport",
        "lat": 27.5912,
        "lng": -81.5278
    },
    {
        "code": "AVP",
        "name": "Wilkes Barre Scranton International Airport",
        "lat": 41.3385,
        "lng": -75.7234
    },
    {
        "code": "AVW",
        "name": "Marana Regional Airport",
        "lat": 32.4096,
        "lng": -111.218
    },
    {
        "code": "AVX",
        "name": "Catalina Airport",
        "lat": 33.4049,
        "lng": -118.416
    },
    {
        "code": "AWM",
        "name": "West Memphis Municipal Airport",
        "lat": 35.1351,
        "lng": -90.2344
    },
    {
        "code": "AXG",
        "name": "Algona Municipal Airport",
        "lat": 43.0779,
        "lng": -94.272
    },
    {
        "code": "AXN",
        "name": "Chandler Field",
        "lat": 45.8663,
        "lng": -95.3947
    },
    {
        "code": "AXS",
        "name": "Altus Quartz Mountain Regional Airport",
        "lat": 34.698,
        "lng": -99.3385
    },
    {
        "code": "AXV",
        "name": "Neil Armstrong Airport",
        "lat": 40.4934,
        "lng": -84.2989
    },
    {
        "code": "AXX",
        "name": "Angel Fire Airport",
        "lat": 36.422,
        "lng": -105.29
    },
    {
        "code": "AYE",
        "name": "Ft Devens Moore Army Air Field",
        "lat": 42.57,
        "lng": -71.6028
    },
    {
        "code": "AYS",
        "name": "Waycross Ware County Airport",
        "lat": 31.2491,
        "lng": -82.3955
    },
    {
        "code": "TUH",
        "name": "Arnold Air Force Base",
        "lat": 35.3926,
        "lng": -86.0858
    },
    {
        "code": "AZO",
        "name": "Kalamazoo Battle Creek International Airport",
        "lat": 42.2349,
        "lng": -85.5521
    },
    {
        "code": "BAB",
        "name": "Beale Air Force Base",
        "lat": 39.1361,
        "lng": -121.437
    },
    {
        "code": "BAD",
        "name": "Barksdale Air Force Base",
        "lat": 32.5018,
        "lng": -93.6627
    },
    {
        "code": "BAF",
        "name": "Westfield-Barnes Regional Airport",
        "lat": 42.1578,
        "lng": -72.7156
    },
    {
        "code": "CLU",
        "name": "Columbus Municipal Airport",
        "lat": 39.2619,
        "lng": -85.8963
    },
    {
        "code": "BAM",
        "name": "Battle Mountain Airport",
        "lat": 40.599,
        "lng": -116.874
    },
    {
        "code": "BBB",
        "name": "Benson Municipal Airport",
        "lat": 45.3319,
        "lng": -95.6506
    },
    {
        "code": "BBD",
        "name": "Curtis Field",
        "lat": 31.1793,
        "lng": -99.3239
    },
    {
        "code": "BTN",
        "name": "Marlboro County Jetport H.E. Avent Field",
        "lat": 34.6217,
        "lng": -79.7344
    },
    {
        "code": "BBW",
        "name": "Broken Bow Municipal Airport",
        "lat": 41.4365,
        "lng": -99.6422
    },
    {
        "code": "BCB",
        "name": "Virginia Tech Montgomery Executive Airport",
        "lat": 37.2076,
        "lng": -80.4078
    },
    {
        "code": "BCE",
        "name": "Bryce Canyon Airport",
        "lat": 37.7064,
        "lng": -112.145
    },
    {
        "code": "BCT",
        "name": "Boca Raton Airport",
        "lat": 26.3785,
        "lng": -80.1077
    },
    {
        "code": "BDE",
        "name": "Baudette International Airport",
        "lat": 48.7284,
        "lng": -94.6122
    },
    {
        "code": "BDG",
        "name": "Blanding Municipal Airport",
        "lat": 37.5833,
        "lng": -109.483
    },
    {
        "code": "BDL",
        "name": "Bradley International Airport",
        "lat": 41.9389,
        "lng": -72.6832
    },
    {
        "code": "BDR",
        "name": "Igor I Sikorsky Memorial Airport",
        "lat": 41.1635,
        "lng": -73.1262
    },
    {
        "code": "WBU",
        "name": "Boulder Municipal Airport",
        "lat": 40.0394,
        "lng": -105.226
    },
    {
        "code": "KBE",
        "name": "Bell Island Hot Springs Seaplane Base",
        "lat": 55.9291,
        "lng": -131.572
    },
    {
        "code": "BEC",
        "name": "Beech Factory Airport",
        "lat": 37.6945,
        "lng": -97.215
    },
    {
        "code": "BED",
        "name": "Laurence G Hanscom Field",
        "lat": 42.47,
        "lng": -71.289
    },
    {
        "code": "BEH",
        "name": "Southwest Michigan Regional Airport",
        "lat": 42.1286,
        "lng": -86.4285
    },
    {
        "code": "BFD",
        "name": "Bradford Regional Airport",
        "lat": 41.8031,
        "lng": -78.6401
    },
    {
        "code": "BFF",
        "name": "Western Neb. Rgnl/William B. Heilig Airport",
        "lat": 41.874,
        "lng": -103.596
    },
    {
        "code": "BFI",
        "name": "Boeing Field King County International Airport",
        "lat": 47.53,
        "lng": -122.302
    },
    {
        "code": "BFL",
        "name": "Meadows Field",
        "lat": 35.4336,
        "lng": -119.057
    },
    {
        "code": "BFM",
        "name": "Mobile Downtown Airport",
        "lat": 30.6268,
        "lng": -88.0681
    },
    {
        "code": "BFR",
        "name": "Virgil I Grissom Municipal Airport",
        "lat": 38.84,
        "lng": -86.4454
    },
    {
        "code": "BGD",
        "name": "Hutchinson County Airport",
        "lat": 35.7009,
        "lng": -101.394
    },
    {
        "code": "BGE",
        "name": "Decatur County Industrial Air Park",
        "lat": 30.9715,
        "lng": -84.6374
    },
    {
        "code": "BGM",
        "name": "Greater Binghamton/Edwin A Link field",
        "lat": 42.2087,
        "lng": -75.9798
    },
    {
        "code": "BGR",
        "name": "Bangor International Airport",
        "lat": 44.8074,
        "lng": -68.8281
    },
    {
        "code": "BHB",
        "name": "Hancock County-Bar Harbor Airport",
        "lat": 44.45,
        "lng": -68.3615
    },
    {
        "code": "BHM",
        "name": "Birmingham-Shuttlesworth International Airport",
        "lat": 33.5629,
        "lng": -86.7535
    },
    {
        "code": "BID",
        "name": "Block Island State Airport",
        "lat": 41.1681,
        "lng": -71.5778
    },
    {
        "code": "BIE",
        "name": "Beatrice Municipal Airport",
        "lat": 40.3013,
        "lng": -96.7541
    },
    {
        "code": "BIF",
        "name": "Biggs Army Air Field (Fort Bliss)",
        "lat": 31.8495,
        "lng": -106.38
    },
    {
        "code": "BIH",
        "name": "Eastern Sierra Regional Airport",
        "lat": 37.3731,
        "lng": -118.364
    },
    {
        "code": "BIL",
        "name": "Billings Logan International Airport",
        "lat": 45.8077,
        "lng": -108.543
    },
    {
        "code": "BIS",
        "name": "Bismarck Municipal Airport",
        "lat": 46.7727,
        "lng": -100.746
    },
    {
        "code": "BIX",
        "name": "Keesler Air Force Base",
        "lat": 30.4104,
        "lng": -88.9244
    },
    {
        "code": "BJC",
        "name": "Rocky Mountain Metropolitan Airport",
        "lat": 39.9088,
        "lng": -105.117
    },
    {
        "code": "BJI",
        "name": "Bemidji Regional Airport",
        "lat": 47.5094,
        "lng": -94.9337
    },
    {
        "code": "BJJ",
        "name": "Wayne County Airport",
        "lat": 40.8748,
        "lng": -81.8883
    },
    {
        "code": "BKD",
        "name": "Stephens County Airport",
        "lat": 32.719,
        "lng": -98.891
    },
    {
        "code": "BKE",
        "name": "Baker City Municipal Airport",
        "lat": 44.8373,
        "lng": -117.809
    },
    {
        "code": "BFK",
        "name": "Buckley Air Force Base",
        "lat": 39.7017,
        "lng": -104.752
    },
    {
        "code": "BKL",
        "name": "Burke Lakefront Airport",
        "lat": 41.5175,
        "lng": -81.6833
    },
    {
        "code": "BKT",
        "name": "Allen C Perkinson Blackstone Army Air Field",
        "lat": 37.0742,
        "lng": -77.9575
    },
    {
        "code": "BKW",
        "name": "Raleigh County Memorial Airport",
        "lat": 37.7873,
        "lng": -81.1242
    },
    {
        "code": "BKX",
        "name": "Brookings Regional Airport",
        "lat": 44.3048,
        "lng": -96.8169
    },
    {
        "code": "BLF",
        "name": "Mercer County Airport",
        "lat": 37.2958,
        "lng": -81.2077
    },
    {
        "code": "BLH",
        "name": "Blythe Airport",
        "lat": 33.6192,
        "lng": -114.717
    },
    {
        "code": "BLI",
        "name": "Bellingham International Airport",
        "lat": 48.7928,
        "lng": -122.538
    },
    {
        "code": "BLM",
        "name": "Monmouth Executive Airport",
        "lat": 40.1869,
        "lng": -74.1249
    },
    {
        "code": "BLU",
        "name": "Blue Canyon Nyack Airport",
        "lat": 39.275,
        "lng": -120.71
    },
    {
        "code": "BLV",
        "name": "Scott AFB/Midamerica Airport",
        "lat": 38.5452,
        "lng": -89.8352
    },
    {
        "code": "BMC",
        "name": "Brigham City Regional Airport",
        "lat": 41.5524,
        "lng": -112.062
    },
    {
        "code": "BMG",
        "name": "Monroe County Airport",
        "lat": 39.146,
        "lng": -86.6167
    },
    {
        "code": "BMI",
        "name": "Central Illinois Regional Airport at Bloomington-Normal",
        "lat": 40.4771,
        "lng": -88.9159
    },
    {
        "code": "BML",
        "name": "Berlin Regional Airport",
        "lat": 44.5754,
        "lng": -71.1759
    },
    {
        "code": "BMT",
        "name": "Beaumont Municipal Airport",
        "lat": 30.0706,
        "lng": -94.2157
    },
    {
        "code": "BNA",
        "name": "Nashville International Airport",
        "lat": 36.1245,
        "lng": -86.6782
    },
    {
        "code": "BNG",
        "name": "Banning Municipal Airport",
        "lat": 33.9225,
        "lng": -116.8507
    },
    {
        "code": "BNL",
        "name": "Barnwell Regional Airport",
        "lat": 33.2578,
        "lng": -81.3883
    },
    {
        "code": "BNO",
        "name": "Burns Municipal Airport",
        "lat": 43.5919,
        "lng": -118.955
    },
    {
        "code": "BNW",
        "name": "Boone Municipal Airport",
        "lat": 42.0496,
        "lng": -93.8476
    },
    {
        "code": "BOI",
        "name": "Boise Air Terminal/Gowen Field",
        "lat": 43.5644,
        "lng": -116.223
    },
    {
        "code": "BOS",
        "name": "General Edward Lawrence Logan International Airport",
        "lat": 42.3643,
        "lng": -71.0052
    },
    {
        "code": "BOW",
        "name": "Bartow Executive Airport",
        "lat": 27.9434,
        "lng": -81.7834
    },
    {
        "code": "HCA",
        "name": "Big Spring Mc Mahon-Wrinkle Airport",
        "lat": 32.2126,
        "lng": -101.522
    },
    {
        "code": "BPI",
        "name": "Miley Memorial Field",
        "lat": 42.5851,
        "lng": -110.111
    },
    {
        "code": "WMH",
        "name": "Ozark Regional Airport",
        "lat": 36.3689,
        "lng": -92.4705
    },
    {
        "code": "BPT",
        "name": "Southeast Texas Regional Airport",
        "lat": 29.9508,
        "lng": -94.0207
    },
    {
        "code": "BQK",
        "name": "Brunswick Golden Isles Airport",
        "lat": 31.2588,
        "lng": -81.4665
    },
    {
        "code": "BRD",
        "name": "Brainerd Lakes Regional Airport",
        "lat": 46.3983,
        "lng": -94.1381
    },
    {
        "code": "BRL",
        "name": "Southeast Iowa Regional Airport",
        "lat": 40.7832,
        "lng": -91.1255
    },
    {
        "code": "BRO",
        "name": "Brownsville South Padre Island International Airport",
        "lat": 25.9068,
        "lng": -97.4259
    },
    {
        "code": "BRY",
        "name": "Samuels Field",
        "lat": 37.8143,
        "lng": -85.4996
    },
    {
        "code": "BTF",
        "name": "Skypark Airport",
        "lat": 40.8694,
        "lng": -111.927
    },
    {
        "code": "BTL",
        "name": "Battle Creek Executive Airport at Kellogg Field",
        "lat": 42.3073,
        "lng": -85.2515
    },
    {
        "code": "BTM",
        "name": "Bert Mooney Airport",
        "lat": 45.9548,
        "lng": -112.497
    },
    {
        "code": "TTO",
        "name": "Britton Municipal Airport",
        "lat": 45.8152,
        "lng": -97.7431
    },
    {
        "code": "BTP",
        "name": "Pittsburgh/Butler Regional Airport",
        "lat": 40.7769,
        "lng": -79.9497
    },
    {
        "code": "BTR",
        "name": "Baton Rouge Metropolitan Airport",
        "lat": 30.5332,
        "lng": -91.1496
    },
    {
        "code": "BTV",
        "name": "Burlington International Airport",
        "lat": 44.4719,
        "lng": -73.1533
    },
    {
        "code": "BTY",
        "name": "Beatty Airport",
        "lat": 36.8611,
        "lng": -116.787
    },
    {
        "code": "BUB",
        "name": "Cram Field",
        "lat": 41.7767,
        "lng": -99.1497
    },
    {
        "code": "BUF",
        "name": "Buffalo Niagara International Airport",
        "lat": 42.9405,
        "lng": -78.7322
    },
    {
        "code": "BUM",
        "name": "Butler Memorial Airport",
        "lat": 38.2898,
        "lng": -94.3401
    },
    {
        "code": "BUR",
        "name": "Bob Hope Airport",
        "lat": 34.2007,
        "lng": -118.359
    },
    {
        "code": "BFP",
        "name": "Beaver County Airport",
        "lat": 40.7725,
        "lng": -80.3914
    },
    {
        "code": "BVO",
        "name": "Bartlesville Municipal Airport",
        "lat": 36.7625,
        "lng": -96.0112
    },
    {
        "code": "MVW",
        "name": "Skagit Regional Airport",
        "lat": 48.4709,
        "lng": -122.421
    },
    {
        "code": "BVX",
        "name": "Batesville Regional Airport",
        "lat": 35.7262,
        "lng": -91.6473
    },
    {
        "code": "BVY",
        "name": "Beverly Regional Airport",
        "lat": 42.5842,
        "lng": -70.9165
    },
    {
        "code": "BWC",
        "name": "Brawley Municipal Airport",
        "lat": 32.9929,
        "lng": -115.517
    },
    {
        "code": "BWD",
        "name": "Brownwood Regional Airport",
        "lat": 31.7936,
        "lng": -98.9565
    },
    {
        "code": "BWG",
        "name": "Bowling Green Warren County Regional Airport",
        "lat": 36.9645,
        "lng": -86.4197
    },
    {
        "code": "BWI",
        "name": "Baltimore/Washington International Thurgood Marshall Airport",
        "lat": 39.1754,
        "lng": -76.6683
    },
    {
        "code": "WAH",
        "name": "Harry Stern Airport",
        "lat": 46.2441,
        "lng": -96.6074
    },
    {
        "code": "BWM",
        "name": "Bowman Regional Airport",
        "lat": 46.1655,
        "lng": -103.3007
    },
    {
        "code": "BXA",
        "name": "George R Carr Memorial Air Field",
        "lat": 30.8137,
        "lng": -89.865
    },
    {
        "code": "BXK",
        "name": "Buckeye Municipal Airport",
        "lat": 33.4224,
        "lng": -112.6863
    },
    {
        "code": "BYG",
        "name": "Johnson County Airport",
        "lat": 44.3811,
        "lng": -106.722
    },
    {
        "code": "BYH",
        "name": "Arkansas International Airport",
        "lat": 35.9643,
        "lng": -89.944
    },
    {
        "code": "BYI",
        "name": "Burley Municipal Airport",
        "lat": 42.5426,
        "lng": -113.772
    },
    {
        "code": "BYS",
        "name": "Bicycle Lake Army Air Field",
        "lat": 35.2805,
        "lng": -116.63
    },
    {
        "code": "BBC",
        "name": "Bay City Regional Airport",
        "lat": 28.9733,
        "lng": -95.8635
    },
    {
        "code": "BZN",
        "name": "Gallatin Field",
        "lat": 45.7775,
        "lng": -111.153
    },
    {
        "code": "XES",
        "name": "Grand Geneva Resort Airport",
        "lat": 42.6149,
        "lng": -88.3896
    },
    {
        "code": "PLY",
        "name": "Plymouth Municipal Airport",
        "lat": 41.3651,
        "lng": -86.3005
    },
    {
        "code": "CLG",
        "name": "New Coalinga Municipal Airport",
        "lat": 36.1631,
        "lng": -120.294
    },
    {
        "code": "CAD",
        "name": "Wexford County Airport",
        "lat": 44.2753,
        "lng": -85.4189
    },
    {
        "code": "CAE",
        "name": "Columbia Metropolitan Airport",
        "lat": 33.9388,
        "lng": -81.1195
    },
    {
        "code": "CIG",
        "name": "Craig Moffat Airport",
        "lat": 40.4952,
        "lng": -107.522
    },
    {
        "code": "CAK",
        "name": "Akron Canton Regional Airport",
        "lat": 40.9161,
        "lng": -81.4422
    },
    {
        "code": "CAO",
        "name": "Clayton Municipal Airpark",
        "lat": 36.4462,
        "lng": -103.167
    },
    {
        "code": "CAR",
        "name": "Caribou Municipal Airport",
        "lat": 46.8715,
        "lng": -68.0179
    },
    {
        "code": "CBE",
        "name": "Greater Cumberland Regional Airport",
        "lat": 39.6154,
        "lng": -78.7609
    },
    {
        "code": "CBF",
        "name": "Council Bluffs Municipal Airport",
        "lat": 41.2592,
        "lng": -95.7606
    },
    {
        "code": "CBK",
        "name": "Shalz Field",
        "lat": 39.4275,
        "lng": -101.047
    },
    {
        "code": "CBM",
        "name": "Columbus Air Force Base",
        "lat": 33.6438,
        "lng": -88.4438
    },
    {
        "code": "KCC",
        "name": "Coffman Cove Seaplane Base",
        "lat": 56.0032,
        "lng": -132.842
    },
    {
        "code": "CCB",
        "name": "Cable Airport",
        "lat": 34.1116,
        "lng": -117.688
    },
    {
        "code": "CCR",
        "name": "Buchanan Field",
        "lat": 37.9897,
        "lng": -122.057
    },
    {
        "code": "CCY",
        "name": "Northeast Iowa Regional Airport",
        "lat": 43.0726,
        "lng": -92.6108
    },
    {
        "code": "LLX",
        "name": "Caledonia County Airport",
        "lat": 44.5691,
        "lng": -72.018
    },
    {
        "code": "CDC",
        "name": "Cedar City Regional Airport",
        "lat": 37.701,
        "lng": -113.099
    },
    {
        "code": "CDH",
        "name": "Harrell Field",
        "lat": 33.6228,
        "lng": -92.7634
    },
    {
        "code": "CDN",
        "name": "Woodward Field",
        "lat": 34.2836,
        "lng": -80.5649
    },
    {
        "code": "CDR",
        "name": "Chadron Municipal Airport",
        "lat": 42.8376,
        "lng": -103.095
    },
    {
        "code": "CDS",
        "name": "Childress Municipal Airport",
        "lat": 34.4338,
        "lng": -100.288
    },
    {
        "code": "CDW",
        "name": "Essex County Airport",
        "lat": 40.8752,
        "lng": -74.2814
    },
    {
        "code": "CEA",
        "name": "Cessna Aircraft Field",
        "lat": 37.6486,
        "lng": -97.2506
    },
    {
        "code": "CEC",
        "name": "Jack Mc Namara Field Airport",
        "lat": 41.7802,
        "lng": -124.237
    },
    {
        "code": "CEF",
        "name": "Westover ARB/Metropolitan Airport",
        "lat": 42.194,
        "lng": -72.5348
    },
    {
        "code": "CEU",
        "name": "Oconee County Regional Airport",
        "lat": 34.6719,
        "lng": -82.8865
    },
    {
        "code": "CEV",
        "name": "Mettel Field",
        "lat": 39.6985,
        "lng": -85.1297
    },
    {
        "code": "CEW",
        "name": "Bob Sikes Airport",
        "lat": 30.7788,
        "lng": -86.5221
    },
    {
        "code": "CEY",
        "name": "Kyle Oakley Field",
        "lat": 36.6646,
        "lng": -88.3728
    },
    {
        "code": "CEZ",
        "name": "Cortez Municipal Airport",
        "lat": 37.303,
        "lng": -108.628
    },
    {
        "code": "CFD",
        "name": "Coulter Field",
        "lat": 30.7157,
        "lng": -96.3314
    },
    {
        "code": "TZC",
        "name": "Tuscola Area Airport",
        "lat": 43.4588,
        "lng": -83.4455
    },
    {
        "code": "CFT",
        "name": "Greenlee County Airport",
        "lat": 32.957,
        "lng": -109.2114
    },
    {
        "code": "CFV",
        "name": "Coffeyville Municipal Airport",
        "lat": 37.094,
        "lng": -95.5719
    },
    {
        "code": "KCG",
        "name": "Chignik Fisheries Airport",
        "lat": 56.3176,
        "lng": -158.5897
    },
    {
        "code": "CGE",
        "name": "Cambridge Dorchester Airport",
        "lat": 38.5393,
        "lng": -76.0304
    },
    {
        "code": "CGF",
        "name": "Cuyahoga County Airport",
        "lat": 41.5651,
        "lng": -81.4864
    },
    {
        "code": "CGI",
        "name": "Cape Girardeau Regional Airport",
        "lat": 37.2253,
        "lng": -89.5708
    },
    {
        "code": "CGS",
        "name": "College Park Airport",
        "lat": 38.9806,
        "lng": -76.9223
    },
    {
        "code": "CGX",
        "name": "Chicago Meigs Airport",
        "lat": 41.8588,
        "lng": -87.6079
    },
    {
        "code": "CGZ",
        "name": "Casa Grande Municipal Airport",
        "lat": 32.9549,
        "lng": -111.767
    },
    {
        "code": "CHA",
        "name": "Lovell Field",
        "lat": 35.0353,
        "lng": -85.2038
    },
    {
        "code": "CHK",
        "name": "Chickasha Municipal Airport",
        "lat": 35.0974,
        "lng": -97.9677
    },
    {
        "code": "CHO",
        "name": "Charlottesville Albemarle Airport",
        "lat": 38.1386,
        "lng": -78.4529
    },
    {
        "code": "CHS",
        "name": "Charleston Air Force Base-International Airport",
        "lat": 32.8986,
        "lng": -80.0405
    },
    {
        "code": "CIC",
        "name": "Chico Municipal Airport",
        "lat": 39.7954,
        "lng": -121.858
    },
    {
        "code": "CID",
        "name": "The Eastern Iowa Airport",
        "lat": 41.8847,
        "lng": -91.7108
    },
    {
        "code": "CIN",
        "name": "Arthur N Neu Airport",
        "lat": 42.0462,
        "lng": -94.789
    },
    {
        "code": "CIR",
        "name": "Cairo Regional Airport",
        "lat": 37.0645,
        "lng": -89.2196
    },
    {
        "code": "CIU",
        "name": "Chippewa County International Airport",
        "lat": 46.2508,
        "lng": -84.4724
    },
    {
        "code": "CKA",
        "name": "Kegelman AF Aux Field",
        "lat": 36.7439,
        "lng": -98.1231
    },
    {
        "code": "CKB",
        "name": "North Central West Virginia Airport",
        "lat": 39.2966,
        "lng": -80.2281
    },
    {
        "code": "GRM",
        "name": "Grand Marais Cook County Airport",
        "lat": 47.8383,
        "lng": -90.3829
    },
    {
        "code": "CKM",
        "name": "Fletcher Field",
        "lat": 34.2997,
        "lng": -90.5123
    },
    {
        "code": "CKN",
        "name": "Crookston Municipal Kirkwood Field",
        "lat": 47.8417,
        "lng": -96.6216
    },
    {
        "code": "CKV",
        "name": "Clarksville\u2013Montgomery County Regional Airport",
        "lat": 36.6219,
        "lng": -87.415
    },
    {
        "code": "KCL",
        "name": "Chignik Lagoon Airport",
        "lat": 56.3112,
        "lng": -158.536
    },
    {
        "code": "CLE",
        "name": "Cleveland Hopkins International Airport",
        "lat": 41.4117,
        "lng": -81.8498
    },
    {
        "code": "CLI",
        "name": "Clintonville Municipal Airport",
        "lat": 44.6138,
        "lng": -88.7313
    },
    {
        "code": "CLK",
        "name": "Clinton Regional Airport",
        "lat": 35.5383,
        "lng": -98.9327
    },
    {
        "code": "CLL",
        "name": "Easterwood Field",
        "lat": 30.5886,
        "lng": -96.3638
    },
    {
        "code": "CLM",
        "name": "William R Fairchild International Airport",
        "lat": 48.1202,
        "lng": -123.5
    },
    {
        "code": "CLR",
        "name": "Cliff Hatfield Memorial Airport",
        "lat": 33.1315,
        "lng": -115.521
    },
    {
        "code": "CLS",
        "name": "Chehalis Centralia Airport",
        "lat": 46.677,
        "lng": -122.983
    },
    {
        "code": "CLT",
        "name": "Charlotte Douglas International Airport",
        "lat": 35.214,
        "lng": -80.9431
    },
    {
        "code": "CLW",
        "name": "Clearwater Air Park",
        "lat": 27.9767,
        "lng": -82.7587
    },
    {
        "code": "CMH",
        "name": "John Glenn Columbus International Airport",
        "lat": 39.998,
        "lng": -82.8919
    },
    {
        "code": "CMI",
        "name": "University of Illinois Willard Airport",
        "lat": 40.0392,
        "lng": -88.2781
    },
    {
        "code": "CMX",
        "name": "Houghton County Memorial Airport",
        "lat": 47.1684,
        "lng": -88.4891
    },
    {
        "code": "CMY",
        "name": "Sparta Fort Mc Coy Airport",
        "lat": 43.9583,
        "lng": -90.7379
    },
    {
        "code": "KCN",
        "name": "Chernofski Harbor Seaplane Base",
        "lat": 53.4029,
        "lng": -167.5203
    },
    {
        "code": "CNH",
        "name": "Claremont Municipal Airport",
        "lat": 43.3704,
        "lng": -72.3687
    },
    {
        "code": "CNK",
        "name": "Blosser Municipal Airport",
        "lat": 39.5493,
        "lng": -97.6523
    },
    {
        "code": "CNM",
        "name": "Cavern City Air Terminal",
        "lat": 32.3375,
        "lng": -104.263
    },
    {
        "code": "CNO",
        "name": "Chino Airport",
        "lat": 33.9747,
        "lng": -117.637
    },
    {
        "code": "CNU",
        "name": "Chanute Martin Johnson Airport",
        "lat": 37.6688,
        "lng": -95.4851
    },
    {
        "code": "CNW",
        "name": "TSTC Waco Airport",
        "lat": 31.6378,
        "lng": -97.0741
    },
    {
        "code": "CNY",
        "name": "Canyonlands Field",
        "lat": 38.755,
        "lng": -109.755
    },
    {
        "code": "COD",
        "name": "Yellowstone Regional Airport",
        "lat": 44.5202,
        "lng": -109.024
    },
    {
        "code": "COE",
        "name": "Coeur D'Alene - Pappy Boyington Field",
        "lat": 47.7743,
        "lng": -116.82
    },
    {
        "code": "COF",
        "name": "Patrick Air Force Base",
        "lat": 28.2349,
        "lng": -80.6101
    },
    {
        "code": "COI",
        "name": "Merritt Island Airport",
        "lat": 28.3416,
        "lng": -80.6855
    },
    {
        "code": "COM",
        "name": "Coleman Municipal Airport",
        "lat": 31.8411,
        "lng": -99.4036
    },
    {
        "code": "CON",
        "name": "Concord Municipal Airport",
        "lat": 43.2027,
        "lng": -71.5023
    },
    {
        "code": "COS",
        "name": "City of Colorado Springs Municipal Airport",
        "lat": 38.8058,
        "lng": -104.701
    },
    {
        "code": "COT",
        "name": "Cotulla-La Salle County Airport",
        "lat": 28.4567,
        "lng": -99.2203
    },
    {
        "code": "COU",
        "name": "Columbia Regional Airport",
        "lat": 38.8181,
        "lng": -92.2196
    },
    {
        "code": "CPM",
        "name": "Compton Woodley Airport",
        "lat": 33.89,
        "lng": -118.244
    },
    {
        "code": "CPR",
        "name": "Casper-Natrona County International Airport",
        "lat": 42.908,
        "lng": -106.464
    },
    {
        "code": "CPS",
        "name": "St Louis Downtown Airport",
        "lat": 38.5707,
        "lng": -90.1562
    },
    {
        "code": "HCW",
        "name": "Cheraw Municipal Airport/Lynch Bellinger Field",
        "lat": 34.7129,
        "lng": -79.957
    },
    {
        "code": "KCR",
        "name": "Colorado Creek Airport",
        "lat": 63.5677,
        "lng": -155.989
    },
    {
        "code": "CRE",
        "name": "Grand Strand Airport",
        "lat": 33.8117,
        "lng": -78.7239
    },
    {
        "code": "CRG",
        "name": "Jacksonville Executive at Craig Airport",
        "lat": 30.3363,
        "lng": -81.5144
    },
    {
        "code": "CRO",
        "name": "Corcoran Airport",
        "lat": 36.1025,
        "lng": -119.595
    },
    {
        "code": "CRP",
        "name": "Corpus Christi International Airport",
        "lat": 27.7704,
        "lng": -97.5012
    },
    {
        "code": "CLD",
        "name": "Mc Clellan-Palomar Airport",
        "lat": 33.1283,
        "lng": -117.28
    },
    {
        "code": "CRS",
        "name": "C David Campbell Field Corsicana Municipal Airport",
        "lat": 32.0281,
        "lng": -96.4006
    },
    {
        "code": "CRT",
        "name": "Z M Jack Stell Field",
        "lat": 33.1783,
        "lng": -91.8802
    },
    {
        "code": "CRW",
        "name": "Yeager Airport",
        "lat": 38.3731,
        "lng": -81.5932
    },
    {
        "code": "CRX",
        "name": "Roscoe Turner Airport",
        "lat": 34.915,
        "lng": -88.6035
    },
    {
        "code": "CSG",
        "name": "Columbus Metropolitan Airport",
        "lat": 32.5163,
        "lng": -84.9389
    },
    {
        "code": "CSM",
        "name": "Clinton Sherman Airport",
        "lat": 35.3398,
        "lng": -99.2005
    },
    {
        "code": "CSQ",
        "name": "Creston Municipal Airport",
        "lat": 41.0214,
        "lng": -94.3633
    },
    {
        "code": "CSV",
        "name": "Crossville Memorial Whitson Field",
        "lat": 35.9513,
        "lng": -85.085
    },
    {
        "code": "CTB",
        "name": "Cut Bank International Airport",
        "lat": 48.6084,
        "lng": -112.376
    },
    {
        "code": "CTY",
        "name": "Cross City Airport",
        "lat": 29.6355,
        "lng": -83.1048
    },
    {
        "code": "CTZ",
        "name": "Sampson County Airport",
        "lat": 34.9756,
        "lng": -78.3646
    },
    {
        "code": "CUB",
        "name": "Jim Hamilton L.B. Owens Airport",
        "lat": 33.9705,
        "lng": -80.9952
    },
    {
        "code": "CUH",
        "name": "Cushing Municipal Airport",
        "lat": 35.9499,
        "lng": -96.7731
    },
    {
        "code": "CVG",
        "name": "Cincinnati Northern Kentucky International Airport",
        "lat": 39.0488,
        "lng": -84.6678
    },
    {
        "code": "CKK",
        "name": "Sharp County Regional Airport",
        "lat": 36.2649,
        "lng": -91.5626
    },
    {
        "code": "CVN",
        "name": "Clovis Municipal Airport",
        "lat": 34.4251,
        "lng": -103.079
    },
    {
        "code": "CVO",
        "name": "Corvallis Municipal Airport",
        "lat": 44.4972,
        "lng": -123.29
    },
    {
        "code": "CVS",
        "name": "Cannon Air Force Base",
        "lat": 34.3828,
        "lng": -103.322
    },
    {
        "code": "CWA",
        "name": "Central Wisconsin Airport",
        "lat": 44.7776,
        "lng": -89.6668
    },
    {
        "code": "KIP",
        "name": "Kickapoo Downtown Airport",
        "lat": 33.8578,
        "lng": -98.4904
    },
    {
        "code": "CWF",
        "name": "Chennault International Airport",
        "lat": 30.2106,
        "lng": -93.1432
    },
    {
        "code": "CWI",
        "name": "Clinton Municipal Airport",
        "lat": 41.8311,
        "lng": -90.3291
    },
    {
        "code": "CXL",
        "name": "Calexico International Airport",
        "lat": 32.6695,
        "lng": -115.513
    },
    {
        "code": "CXO",
        "name": "Conroe-North Houston Regional Airport",
        "lat": 30.3518,
        "lng": -95.4145
    },
    {
        "code": "CSN",
        "name": "Carson Airport",
        "lat": 39.1922,
        "lng": -119.734
    },
    {
        "code": "HAR",
        "name": "Capital City Airport",
        "lat": 40.2171,
        "lng": -76.8515
    },
    {
        "code": "CYS",
        "name": "Cheyenne Regional Jerry Olson Field",
        "lat": 41.1557,
        "lng": -104.812
    },
    {
        "code": "CZT",
        "name": "Dimmit County Airport",
        "lat": 28.5222,
        "lng": -99.8236
    },
    {
        "code": "VEX",
        "name": "Tioga Municipal Airport",
        "lat": 48.3805,
        "lng": -102.898
    },
    {
        "code": "DAA",
        "name": "Davison Army Air Field",
        "lat": 38.715,
        "lng": -77.181
    },
    {
        "code": "DAB",
        "name": "Daytona Beach International Airport",
        "lat": 29.1799,
        "lng": -81.0581
    },
    {
        "code": "DAG",
        "name": "Barstow Daggett Airport",
        "lat": 34.8537,
        "lng": -116.787
    },
    {
        "code": "DAL",
        "name": "Dallas Love Field",
        "lat": 32.8471,
        "lng": -96.8518
    },
    {
        "code": "DAN",
        "name": "Danville Regional Airport",
        "lat": 36.5729,
        "lng": -79.3361
    },
    {
        "code": "DAY",
        "name": "James M Cox Dayton International Airport",
        "lat": 39.9024,
        "lng": -84.2194
    },
    {
        "code": "DBN",
        "name": "W H 'Bud' Barron Airport",
        "lat": 32.5644,
        "lng": -82.9853
    },
    {
        "code": "DBQ",
        "name": "Dubuque Regional Airport",
        "lat": 42.402,
        "lng": -90.7095
    },
    {
        "code": "DCA",
        "name": "Ronald Reagan Washington National Airport",
        "lat": 38.8521,
        "lng": -77.0377
    },
    {
        "code": "DCU",
        "name": "Pryor Field Regional Airport",
        "lat": 34.6527,
        "lng": -86.9454
    },
    {
        "code": "DDC",
        "name": "Dodge City Regional Airport",
        "lat": 37.7634,
        "lng": -99.9656
    },
    {
        "code": "DEC",
        "name": "Decatur Airport",
        "lat": 39.8346,
        "lng": -88.8657
    },
    {
        "code": "DEH",
        "name": "Decorah Municipal Airport",
        "lat": 43.2755,
        "lng": -91.7394
    },
    {
        "code": "DEN",
        "name": "Denver International Airport",
        "lat": 39.8617,
        "lng": -104.673
    },
    {
        "code": "DET",
        "name": "Coleman A. Young Municipal Airport",
        "lat": 42.4092,
        "lng": -83.0099
    },
    {
        "code": "DFI",
        "name": "Defiance Memorial Airport",
        "lat": 41.3375,
        "lng": -84.4288
    },
    {
        "code": "DFW",
        "name": "Dallas Fort Worth International Airport",
        "lat": 32.8968,
        "lng": -97.038
    },
    {
        "code": "DGL",
        "name": "Douglas Municipal Airport",
        "lat": 31.3426,
        "lng": -109.506
    },
    {
        "code": "DGW",
        "name": "Converse County Airport",
        "lat": 42.7972,
        "lng": -105.386
    },
    {
        "code": "DHN",
        "name": "Dothan Regional Airport",
        "lat": 31.3213,
        "lng": -85.4496
    },
    {
        "code": "DHT",
        "name": "Dalhart Municipal Airport",
        "lat": 36.0226,
        "lng": -102.547
    },
    {
        "code": "DIK",
        "name": "Dickinson Theodore Roosevelt Regional Airport",
        "lat": 46.7974,
        "lng": -102.802
    },
    {
        "code": "DKK",
        "name": "Chautauqua County-Dunkirk Airport",
        "lat": 42.4933,
        "lng": -79.272
    },
    {
        "code": "DLL",
        "name": "Dillon County Airport",
        "lat": 34.4491,
        "lng": -79.3686
    },
    {
        "code": "DLF",
        "name": "DLF Airport",
        "lat": 29.3595,
        "lng": -100.778
    },
    {
        "code": "DLH",
        "name": "Duluth International Airport",
        "lat": 46.8421,
        "lng": -92.1936
    },
    {
        "code": "DLN",
        "name": "Dillon Airport",
        "lat": 45.2554,
        "lng": -112.553
    },
    {
        "code": "DLS",
        "name": "Columbia Gorge Regional the Dalles Municipal Airport",
        "lat": 45.6185,
        "lng": -121.167
    },
    {
        "code": "DMA",
        "name": "Davis Monthan Air Force Base",
        "lat": 32.1665,
        "lng": -110.883
    },
    {
        "code": "DMN",
        "name": "Deming Municipal Airport",
        "lat": 32.2623,
        "lng": -107.721
    },
    {
        "code": "DMO",
        "name": "Sedalia Memorial Airport",
        "lat": 38.7074,
        "lng": -93.1759
    },
    {
        "code": "DNL",
        "name": "Daniel Field",
        "lat": 33.4665,
        "lng": -82.0394
    },
    {
        "code": "DNN",
        "name": "Dalton Municipal Airport",
        "lat": 34.7229,
        "lng": -84.8702
    },
    {
        "code": "DNS",
        "name": "Denison Municipal Airport",
        "lat": 41.9864,
        "lng": -95.3807
    },
    {
        "code": "DNV",
        "name": "Vermilion Regional Airport",
        "lat": 40.1992,
        "lng": -87.5959
    },
    {
        "code": "DOV",
        "name": "Dover Air Force Base",
        "lat": 39.1295,
        "lng": -75.466
    },
    {
        "code": "DPA",
        "name": "Dupage Airport",
        "lat": 41.9078,
        "lng": -88.2486
    },
    {
        "code": "DPG",
        "name": "Michael AAF (Dugway Proving Ground) Airport",
        "lat": 40.1994,
        "lng": -112.937
    },
    {
        "code": "DRA",
        "name": "Desert Rock Airport",
        "lat": 36.6194,
        "lng": -116.033
    },
    {
        "code": "DRI",
        "name": "Beauregard Regional Airport",
        "lat": 30.8317,
        "lng": -93.3399
    },
    {
        "code": "DRE",
        "name": "Drummond Island Airport",
        "lat": 46.0093,
        "lng": -83.7439
    },
    {
        "code": "DRO",
        "name": "Durango La Plata County Airport",
        "lat": 37.1515,
        "lng": -107.754
    },
    {
        "code": "DRT",
        "name": "Del Rio International Airport",
        "lat": 29.3742,
        "lng": -100.927
    },
    {
        "code": "DSM",
        "name": "Des Moines International Airport",
        "lat": 41.534,
        "lng": -93.6631
    },
    {
        "code": "DSV",
        "name": "Dansville Municipal Airport",
        "lat": 42.5709,
        "lng": -77.7131
    },
    {
        "code": "DTA",
        "name": "Delta Municipal Airport",
        "lat": 39.3806,
        "lng": -112.508
    },
    {
        "code": "DTL",
        "name": "Detroit Lakes Airport - Wething Field",
        "lat": 46.8252,
        "lng": -95.8857
    },
    {
        "code": "DTN",
        "name": "Shreveport Downtown Airport",
        "lat": 32.5402,
        "lng": -93.745
    },
    {
        "code": "DSI",
        "name": "Destin Executive Airport",
        "lat": 30.4001,
        "lng": -86.4715
    },
    {
        "code": "DTW",
        "name": "Detroit Metropolitan Wayne County Airport",
        "lat": 42.2124,
        "lng": -83.3534
    },
    {
        "code": "DUA",
        "name": "Eaker Field",
        "lat": 33.9423,
        "lng": -96.3945
    },
    {
        "code": "DUC",
        "name": "Halliburton Field",
        "lat": 34.4709,
        "lng": -97.9599
    },
    {
        "code": "DUG",
        "name": "Bisbee Douglas International Airport",
        "lat": 31.469,
        "lng": -109.604
    },
    {
        "code": "DUJ",
        "name": "DuBois Regional Airport",
        "lat": 41.1783,
        "lng": -78.8987
    },
    {
        "code": "DVL",
        "name": "Devils Lake Regional Airport",
        "lat": 48.1142,
        "lng": -98.9088
    },
    {
        "code": "DVN",
        "name": "Davenport Municipal Airport",
        "lat": 41.6103,
        "lng": -90.5883
    },
    {
        "code": "NOT",
        "name": "Marin County Airport - Gnoss Field",
        "lat": 38.1436,
        "lng": -122.556
    },
    {
        "code": "NSL",
        "name": "Slayton Municipal Airport",
        "lat": 43.9868,
        "lng": -95.7826
    },
    {
        "code": "DVT",
        "name": "Phoenix Deer Valley Airport",
        "lat": 33.6883,
        "lng": -112.083
    },
    {
        "code": "DWF",
        "name": "Wright Field",
        "lat": 39.78,
        "lng": -84.1044
    },
    {
        "code": "DWH",
        "name": "David Wayne Hooks Memorial Airport",
        "lat": 30.0618,
        "lng": -95.5528
    },
    {
        "code": "DXR",
        "name": "Danbury Municipal Airport",
        "lat": 41.3715,
        "lng": -73.4822
    },
    {
        "code": "DYL",
        "name": "Doylestown Airport",
        "lat": 40.333,
        "lng": -75.1223
    },
    {
        "code": "DYS",
        "name": "Dyess Air Force Base",
        "lat": 32.4208,
        "lng": -99.8546
    },
    {
        "code": "MIF",
        "name": "Roy Hurd Memorial Airport",
        "lat": 31.5825,
        "lng": -102.909
    },
    {
        "code": "CCG",
        "name": "Crane County Airport",
        "lat": 31.4151,
        "lng": -102.363
    },
    {
        "code": "ESO",
        "name": "Ohkay Owingeh Airport",
        "lat": 36.03,
        "lng": -106.046
    },
    {
        "code": "WTR",
        "name": "Whiteriver Airport",
        "lat": 33.8125,
        "lng": -109.987
    },
    {
        "code": "ALE",
        "name": "Alpine Casparis Municipal Airport",
        "lat": 30.3842,
        "lng": -103.684
    },
    {
        "code": "BGT",
        "name": "Bagdad Airport",
        "lat": 34.5959,
        "lng": -113.17
    },
    {
        "code": "EAN",
        "name": "Phifer Airfield",
        "lat": 42.0555,
        "lng": -104.929
    },
    {
        "code": "EAR",
        "name": "Kearney Regional Airport",
        "lat": 40.727,
        "lng": -99.0068
    },
    {
        "code": "EAT",
        "name": "Pangborn Memorial Airport",
        "lat": 47.3989,
        "lng": -120.207
    },
    {
        "code": "EAU",
        "name": "Chippewa Valley Regional Airport",
        "lat": 44.8658,
        "lng": -91.4843
    },
    {
        "code": "KEB",
        "name": "Nanwalek Airport",
        "lat": 59.3521,
        "lng": -151.925
    },
    {
        "code": "EBS",
        "name": "Webster City Municipal Airport",
        "lat": 42.4366,
        "lng": -93.8689
    },
    {
        "code": "ECG",
        "name": "Elizabeth City Regional Airport & Coast Guard Air Station",
        "lat": 36.2606,
        "lng": -76.1746
    },
    {
        "code": "ECP",
        "name": "Northwest Florida Beaches International Airport",
        "lat": 30.3571,
        "lng": -85.7954
    },
    {
        "code": "ECS",
        "name": "Mondell Field",
        "lat": 43.8854,
        "lng": -104.318
    },
    {
        "code": "EDE",
        "name": "Northeastern Regional Airport",
        "lat": 36.0277,
        "lng": -76.5671
    },
    {
        "code": "ETS",
        "name": "Enterprise Municipal Airport",
        "lat": 31.2997,
        "lng": -85.8999
    },
    {
        "code": "EDW",
        "name": "Edwards Air Force Base",
        "lat": 34.9054,
        "lng": -117.884
    },
    {
        "code": "EED",
        "name": "Needles Airport",
        "lat": 34.7663,
        "lng": -114.623
    },
    {
        "code": "EEN",
        "name": "Dillant Hopkins Airport",
        "lat": 42.8984,
        "lng": -72.2708
    },
    {
        "code": "KEET",
        "name": "Shelby County Airport",
        "lat": 33.177,
        "lng": -86.7828
    },
    {
        "code": "EFD",
        "name": "Ellington Airport",
        "lat": 29.6073,
        "lng": -95.1588
    },
    {
        "code": "EFK",
        "name": "Northeast Kingdom International Airport",
        "lat": 44.8888,
        "lng": -72.2292
    },
    {
        "code": "EFW",
        "name": "Jefferson Municipal Airport",
        "lat": 42.0102,
        "lng": -94.3426
    },
    {
        "code": "EGE",
        "name": "Eagle County Regional Airport",
        "lat": 39.6426,
        "lng": -106.918
    },
    {
        "code": "EGI",
        "name": "Duke Field",
        "lat": 30.6504,
        "lng": -86.5229
    },
    {
        "code": "EGV",
        "name": "Eagle River Union Airport",
        "lat": 45.9323,
        "lng": -89.2683
    },
    {
        "code": "KEK",
        "name": "Ekwok Airport",
        "lat": 59.3568,
        "lng": -157.471
    },
    {
        "code": "EKA",
        "name": "Murray Field",
        "lat": 40.8034,
        "lng": -124.113
    },
    {
        "code": "EKI",
        "name": "Elkhart Municipal Airport",
        "lat": 41.7194,
        "lng": -86.0032
    },
    {
        "code": "EKN",
        "name": "Elkins-Randolph Co-Jennings Randolph Field",
        "lat": 38.8894,
        "lng": -79.8571
    },
    {
        "code": "EKO",
        "name": "Elko Regional Airport",
        "lat": 40.8249,
        "lng": -115.792
    },
    {
        "code": "EKX",
        "name": "Addington Field",
        "lat": 37.686,
        "lng": -85.925
    },
    {
        "code": "ELA",
        "name": "Eagle Lake Airport",
        "lat": 29.6006,
        "lng": -96.3219
    },
    {
        "code": "ELD",
        "name": "South Arkansas Regional At Goodwin Field",
        "lat": 33.221,
        "lng": -92.8133
    },
    {
        "code": "ELK",
        "name": "Elk City Regional Business Airport",
        "lat": 35.4308,
        "lng": -99.3943
    },
    {
        "code": "ELM",
        "name": "Elmira Corning Regional Airport",
        "lat": 42.1599,
        "lng": -76.8916
    },
    {
        "code": "ELN",
        "name": "Bowers Field",
        "lat": 47.033,
        "lng": -120.531
    },
    {
        "code": "LYU",
        "name": "Ely Municipal Airport",
        "lat": 47.8245,
        "lng": -91.8307
    },
    {
        "code": "ELP",
        "name": "El Paso International Airport",
        "lat": 31.8072,
        "lng": -106.378
    },
    {
        "code": "ELY",
        "name": "Ely Airport Yelland Field",
        "lat": 39.2997,
        "lng": -114.842
    },
    {
        "code": "ELZ",
        "name": "Wellsville Municipal Arpt,Tarantine Field",
        "lat": 42.1095,
        "lng": -77.99
    },
    {
        "code": "EMM",
        "name": "Kemmerer Municipal Airport",
        "lat": 41.8241,
        "lng": -110.557
    },
    {
        "code": "EMP",
        "name": "Emporia Municipal Airport",
        "lat": 38.3321,
        "lng": -96.1912
    },
    {
        "code": "EMT",
        "name": "San Gabriel Valley Airport",
        "lat": 34.0861,
        "lng": -118.035
    },
    {
        "code": "END",
        "name": "Vance Air Force Base",
        "lat": 36.3392,
        "lng": -97.9165
    },
    {
        "code": "ENL",
        "name": "Centralia Municipal Airport",
        "lat": 38.5151,
        "lng": -89.0911
    },
    {
        "code": "ENV",
        "name": "Wendover Airport",
        "lat": 40.7187,
        "lng": -114.031
    },
    {
        "code": "ENW",
        "name": "Kenosha Regional Airport",
        "lat": 42.5957,
        "lng": -87.9278
    },
    {
        "code": "EOK",
        "name": "Keokuk Municipal Airport",
        "lat": 40.4599,
        "lng": -91.4285
    },
    {
        "code": "EPH",
        "name": "Ephrata Municipal Airport",
        "lat": 47.3076,
        "lng": -119.516
    },
    {
        "code": "EDK",
        "name": "Captain Jack Thomas El Dorado Airport",
        "lat": 37.7741,
        "lng": -96.8176
    },
    {
        "code": "ERI",
        "name": "Erie International Tom Ridge Field",
        "lat": 42.0831,
        "lng": -80.1739
    },
    {
        "code": "ERR",
        "name": "Errol Airport",
        "lat": 44.7925,
        "lng": -71.1642
    },
    {
        "code": "ERV",
        "name": "Kerrville Municipal Louis Schreiner Field",
        "lat": 29.9767,
        "lng": -99.0857
    },
    {
        "code": "ESC",
        "name": "Delta County Airport",
        "lat": 45.7227,
        "lng": -87.0937
    },
    {
        "code": "ESF",
        "name": "Esler Regional Airport",
        "lat": 31.3949,
        "lng": -92.2958
    },
    {
        "code": "ESN",
        "name": "Easton Airport / Newnam Field",
        "lat": 38.8042,
        "lng": -76.069
    },
    {
        "code": "EST",
        "name": "Estherville Municipal Airport",
        "lat": 43.4074,
        "lng": -94.7464
    },
    {
        "code": "ESW",
        "name": "Easton State Airport",
        "lat": 47.2542,
        "lng": -121.186
    },
    {
        "code": "ETB",
        "name": "West Bend Municipal Airport",
        "lat": 43.4222,
        "lng": -88.1279
    },
    {
        "code": "ETN",
        "name": "Eastland Municipal Airport",
        "lat": 32.4135,
        "lng": -98.8098
    },
    {
        "code": "EUF",
        "name": "Weedon Field",
        "lat": 31.9513,
        "lng": -85.1289
    },
    {
        "code": "EUG",
        "name": "Mahlon Sweet Field",
        "lat": 44.1246,
        "lng": -123.212
    },
    {
        "code": "EVM",
        "name": "Eveleth Virginia Municipal Airport",
        "lat": 47.4251,
        "lng": -92.4985
    },
    {
        "code": "EVV",
        "name": "Evansville Regional Airport",
        "lat": 38.037,
        "lng": -87.5324
    },
    {
        "code": "EVW",
        "name": "Evanston-Uinta County Airport-Burns Field",
        "lat": 41.2748,
        "lng": -111.035
    },
    {
        "code": "EWB",
        "name": "New Bedford Regional Airport",
        "lat": 41.6761,
        "lng": -70.9569
    },
    {
        "code": "EWK",
        "name": "Newton City-County Airport",
        "lat": 38.0582,
        "lng": -97.2745
    },
    {
        "code": "EWN",
        "name": "Coastal Carolina Regional Airport",
        "lat": 35.073,
        "lng": -77.0429
    },
    {
        "code": "EWR",
        "name": "Newark Liberty International Airport",
        "lat": 40.6925,
        "lng": -74.1687
    },
    {
        "code": "EYW",
        "name": "Key West International Airport",
        "lat": 24.5561,
        "lng": -81.7596
    },
    {
        "code": "WIB",
        "name": "Wilbarger County Airport",
        "lat": 34.2257,
        "lng": -99.2838
    },
    {
        "code": "RBK",
        "name": "French Valley Airport",
        "lat": 33.5742,
        "lng": -117.128
    },
    {
        "code": "FAF",
        "name": "Felker Army Air Field",
        "lat": 37.1325,
        "lng": -76.6088
    },
    {
        "code": "FAM",
        "name": "Farmington Regional Airport",
        "lat": 37.7611,
        "lng": -90.4286
    },
    {
        "code": "FAR",
        "name": "Hector International Airport",
        "lat": 46.9207,
        "lng": -96.8158
    },
    {
        "code": "FAT",
        "name": "Fresno Yosemite International Airport",
        "lat": 36.7762,
        "lng": -119.718
    },
    {
        "code": "FAY",
        "name": "Fayetteville Regional Grannis Field",
        "lat": 34.9912,
        "lng": -78.8803
    },
    {
        "code": "FBG",
        "name": "Simmons Army Air Field",
        "lat": 35.1318,
        "lng": -78.9367
    },
    {
        "code": "FBL",
        "name": "Faribault Municipal Airport-Liz Wall Strohfus Field",
        "lat": 44.3284,
        "lng": -93.3125
    },
    {
        "code": "FBR",
        "name": "Fort Bridger Airport",
        "lat": 41.3919,
        "lng": -110.407
    },
    {
        "code": "FBY",
        "name": "Fairbury Municipal Airport",
        "lat": 40.183,
        "lng": -97.1693
    },
    {
        "code": "FCH",
        "name": "Fresno Chandler Executive Airport",
        "lat": 36.7324,
        "lng": -119.82
    },
    {
        "code": "FCM",
        "name": "Flying Cloud Airport",
        "lat": 44.8272,
        "lng": -93.4571
    },
    {
        "code": "FCS",
        "name": "Butts AAF (Fort Carson) Air Field",
        "lat": 38.6784,
        "lng": -104.757
    },
    {
        "code": "FCY",
        "name": "Forrest City Municipal Airport",
        "lat": 34.942,
        "lng": -90.775
    },
    {
        "code": "FDK",
        "name": "Frederick Municipal Airport",
        "lat": 39.4176,
        "lng": -77.3743
    },
    {
        "code": "FDR",
        "name": "Frederick Regional Airport",
        "lat": 34.352,
        "lng": -98.9839
    },
    {
        "code": "FDY",
        "name": "Findlay Airport",
        "lat": 41.0135,
        "lng": -83.6687
    },
    {
        "code": "FEP",
        "name": "Albertus Airport",
        "lat": 42.2462,
        "lng": -89.582
    },
    {
        "code": "FET",
        "name": "Fremont Municipal Airport",
        "lat": 41.4491,
        "lng": -96.5202
    },
    {
        "code": "FFA",
        "name": "First Flight Airport",
        "lat": 36.0182,
        "lng": -75.6713
    },
    {
        "code": "FFL",
        "name": "Fairfield Municipal Airport",
        "lat": 41.0533,
        "lng": -91.9789
    },
    {
        "code": "FFM",
        "name": "Fergus Falls Municipal Airport - Einar Mickelson Field",
        "lat": 46.2844,
        "lng": -96.1567
    },
    {
        "code": "FFO",
        "name": "Wright-Patterson Air Force Base",
        "lat": 39.8261,
        "lng": -84.0483
    },
    {
        "code": "FFT",
        "name": "Capital City Airport",
        "lat": 38.1825,
        "lng": -84.9047
    },
    {
        "code": "MSC",
        "name": "Falcon Field",
        "lat": 33.4608,
        "lng": -111.728
    },
    {
        "code": "FRD",
        "name": "Friday Harbor Airport",
        "lat": 48.522,
        "lng": -123.024
    },
    {
        "code": "FHU",
        "name": "Sierra Vista Municipal Airport / Libby Army Air Field",
        "lat": 31.5874,
        "lng": -110.3482
    },
    {
        "code": "FKL",
        "name": "Venango Regional Airport",
        "lat": 41.3779,
        "lng": -79.8604
    },
    {
        "code": "FKN",
        "name": "Franklin Regional Airport",
        "lat": 36.6981,
        "lng": -76.9038
    },
    {
        "code": "FLD",
        "name": "Fond du Lac County Airport",
        "lat": 43.7712,
        "lng": -88.4884
    },
    {
        "code": "FLG",
        "name": "Flagstaff Pulliam Airport",
        "lat": 35.1385,
        "lng": -111.671
    },
    {
        "code": "FLL",
        "name": "Fort Lauderdale Hollywood International Airport",
        "lat": 26.0726,
        "lng": -80.1527
    },
    {
        "code": "FLO",
        "name": "Florence Regional Airport",
        "lat": 34.1854,
        "lng": -79.7239
    },
    {
        "code": "FLP",
        "name": "Marion County Regional Airport",
        "lat": 36.2909,
        "lng": -92.5903
    },
    {
        "code": "FLU",
        "name": "Flushing Airport",
        "lat": 40.7787,
        "lng": -73.8326
    },
    {
        "code": "FLV",
        "name": "Sherman Army Air Field",
        "lat": 39.3683,
        "lng": -94.9147
    },
    {
        "code": "FLX",
        "name": "Fallon Municipal Airport",
        "lat": 39.4991,
        "lng": -118.749
    },
    {
        "code": "FME",
        "name": "Tipton Airport",
        "lat": 39.0854,
        "lng": -76.7594
    },
    {
        "code": "FMH",
        "name": "Cape Cod Coast Guard Air Station",
        "lat": 41.6584,
        "lng": -70.5214
    },
    {
        "code": "FMN",
        "name": "Four Corners Regional Airport",
        "lat": 36.7412,
        "lng": -108.23
    },
    {
        "code": "FMY",
        "name": "Page Field",
        "lat": 26.5866,
        "lng": -81.8633
    },
    {
        "code": "FNL",
        "name": "Northern Colorado Regional Airport",
        "lat": 40.4518,
        "lng": -105.011
    },
    {
        "code": "FNT",
        "name": "Bishop International Airport",
        "lat": 42.9654,
        "lng": -83.7436
    },
    {
        "code": "FOD",
        "name": "Fort Dodge Regional Airport",
        "lat": 42.5515,
        "lng": -94.1926
    },
    {
        "code": "FOE",
        "name": "Topeka Regional Airport - Forbes Field",
        "lat": 38.9509,
        "lng": -95.6636
    },
    {
        "code": "FOK",
        "name": "Francis S Gabreski Airport",
        "lat": 40.8437,
        "lng": -72.6318
    },
    {
        "code": "FIL",
        "name": "Fillmore Municipal Airport",
        "lat": 38.9583,
        "lng": -112.363
    },
    {
        "code": "FPR",
        "name": "St Lucie County International Airport",
        "lat": 27.4951,
        "lng": -80.3683
    },
    {
        "code": "FRG",
        "name": "Republic Airport",
        "lat": 40.7288,
        "lng": -73.4134
    },
    {
        "code": "FRH",
        "name": "French Lick Municipal Airport",
        "lat": 38.5062,
        "lng": -86.6369
    },
    {
        "code": "FRI",
        "name": "Marshall Army Air Field",
        "lat": 39.0553,
        "lng": -96.7645
    },
    {
        "code": "FRM",
        "name": "Fairmont Municipal Airport",
        "lat": 43.6439,
        "lng": -94.4156
    },
    {
        "code": "FRR",
        "name": "Front Royal Warren County Airport",
        "lat": 38.9175,
        "lng": -78.2535
    },
    {
        "code": "FSD",
        "name": "Joe Foss Field Airport",
        "lat": 43.582,
        "lng": -96.7419
    },
    {
        "code": "FSI",
        "name": "Henry Post Army Air Field (Fort Sill)",
        "lat": 34.6498,
        "lng": -98.4022
    },
    {
        "code": "FSK",
        "name": "Fort Scott Municipal Airport",
        "lat": 37.7984,
        "lng": -94.7694
    },
    {
        "code": "FSM",
        "name": "Fort Smith Regional Airport",
        "lat": 35.3366,
        "lng": -94.3674
    },
    {
        "code": "FST",
        "name": "Fort Stockton Pecos County Airport",
        "lat": 30.9157,
        "lng": -102.916
    },
    {
        "code": "FSU",
        "name": "Fort Sumner Municipal Airport",
        "lat": 34.4834,
        "lng": -104.217
    },
    {
        "code": "FMS",
        "name": "Fort Madison Municipal Airport",
        "lat": 40.6593,
        "lng": -91.3268
    },
    {
        "code": "FTK",
        "name": "Godman Army Air Field",
        "lat": 37.9071,
        "lng": -85.9721
    },
    {
        "code": "FTW",
        "name": "Fort Worth Meacham International Airport",
        "lat": 32.8198,
        "lng": -97.3624
    },
    {
        "code": "FTY",
        "name": "Fulton County Airport Brown Field",
        "lat": 33.7791,
        "lng": -84.5214
    },
    {
        "code": "FUL",
        "name": "Fullerton Municipal Airport",
        "lat": 33.872,
        "lng": -117.98
    },
    {
        "code": "WFK",
        "name": "Northern Aroostook Regional Airport",
        "lat": 47.2855,
        "lng": -68.3128
    },
    {
        "code": "FWA",
        "name": "Fort Wayne International Airport",
        "lat": 40.9785,
        "lng": -85.1951
    },
    {
        "code": "FXE",
        "name": "Fort Lauderdale Executive Airport",
        "lat": 26.1973,
        "lng": -80.1707
    },
    {
        "code": "FXY",
        "name": "Forest City Municipal Airport",
        "lat": 43.2347,
        "lng": -93.6241
    },
    {
        "code": "FYM",
        "name": "Fayetteville Municipal Airport",
        "lat": 35.0597,
        "lng": -86.564
    },
    {
        "code": "FYV",
        "name": "Drake Field",
        "lat": 36.0051,
        "lng": -94.1701
    },
    {
        "code": "GAD",
        "name": "Northeast Alabama Regional Airport",
        "lat": 33.9726,
        "lng": -86.089
    },
    {
        "code": "GAG",
        "name": "Gage Airport",
        "lat": 36.2955,
        "lng": -99.7764
    },
    {
        "code": "GAI",
        "name": "Montgomery County Airpark",
        "lat": 39.1683,
        "lng": -77.166
    },
    {
        "code": "GBD",
        "name": "Great Bend Municipal Airport",
        "lat": 38.3443,
        "lng": -98.8592
    },
    {
        "code": "GBG",
        "name": "Galesburg Municipal Airport",
        "lat": 40.938,
        "lng": -90.4311
    },
    {
        "code": "GBR",
        "name": "Walter J. Koladza Airport",
        "lat": 42.1842,
        "lng": -73.4032
    },
    {
        "code": "GCC",
        "name": "Gillette Campbell County Airport",
        "lat": 44.3489,
        "lng": -105.539
    },
    {
        "code": "JDA",
        "name": "Grant Co Regional/Ogilvie Field",
        "lat": 44.4042,
        "lng": -118.963
    },
    {
        "code": "GCK",
        "name": "Garden City Regional Airport",
        "lat": 37.9275,
        "lng": -100.724
    },
    {
        "code": "GCN",
        "name": "Grand Canyon National Park Airport",
        "lat": 35.9524,
        "lng": -112.147
    },
    {
        "code": "GCY",
        "name": "Greeneville Municipal Airport",
        "lat": 36.193,
        "lng": -82.8151
    },
    {
        "code": "GDM",
        "name": "Gardner Municipal Airport",
        "lat": 42.55,
        "lng": -72.0161
    },
    {
        "code": "GDV",
        "name": "Dawson Community Airport",
        "lat": 47.1387,
        "lng": -104.807
    },
    {
        "code": "GDW",
        "name": "Gladwin Zettel Memorial Airport",
        "lat": 43.9706,
        "lng": -84.475
    },
    {
        "code": "GED",
        "name": "Sussex County Airport",
        "lat": 38.6892,
        "lng": -75.3589
    },
    {
        "code": "GEG",
        "name": "Spokane International Airport",
        "lat": 47.6199,
        "lng": -117.534
    },
    {
        "code": "GEY",
        "name": "South Big Horn County Airport",
        "lat": 44.5168,
        "lng": -108.083
    },
    {
        "code": "GFA",
        "name": "Malmstrom Air Force Base",
        "lat": 47.5047,
        "lng": -111.187
    },
    {
        "code": "GFK",
        "name": "Grand Forks International Airport",
        "lat": 47.9493,
        "lng": -97.1761
    },
    {
        "code": "GFL",
        "name": "Floyd Bennett Memorial Airport",
        "lat": 43.3412,
        "lng": -73.6103
    },
    {
        "code": "GGE",
        "name": "Georgetown County Airport",
        "lat": 33.3117,
        "lng": -79.3196
    },
    {
        "code": "GGG",
        "name": "East Texas Regional Airport",
        "lat": 32.384,
        "lng": -94.7115
    },
    {
        "code": "GGW",
        "name": "Wokal Field/Glasgow-Valley County Airport",
        "lat": 48.2125,
        "lng": -106.615
    },
    {
        "code": "GHM",
        "name": "Centerville Municipal Airport",
        "lat": 35.8374,
        "lng": -87.4454
    },
    {
        "code": "GIF",
        "name": "Winter Haven Regional Airport - Gilbert Field",
        "lat": 28.0629,
        "lng": -81.7533
    },
    {
        "code": "GJT",
        "name": "Grand Junction Regional Airport",
        "lat": 39.1224,
        "lng": -108.527
    },
    {
        "code": "MEJ",
        "name": "Port Meadville Airport",
        "lat": 41.6265,
        "lng": -80.2147
    },
    {
        "code": "GKT",
        "name": "Gatlinburg-Pigeon Forge Airport",
        "lat": 35.8578,
        "lng": -83.5287
    },
    {
        "code": "GLD",
        "name": "Renner Field-Goodland Municipal Airport",
        "lat": 39.3706,
        "lng": -101.699
    },
    {
        "code": "GLE",
        "name": "Gainesville Municipal Airport",
        "lat": 33.6514,
        "lng": -97.197
    },
    {
        "code": "GLH",
        "name": "Mid Delta Regional Airport",
        "lat": 33.4829,
        "lng": -90.9856
    },
    {
        "code": "GLR",
        "name": "Gaylord Regional Airport",
        "lat": 45.0135,
        "lng": -84.7036
    },
    {
        "code": "GLS",
        "name": "Scholes International At Galveston Airport",
        "lat": 29.2653,
        "lng": -94.8604
    },
    {
        "code": "GLW",
        "name": "Glasgow Municipal Airport",
        "lat": 37.0318,
        "lng": -85.9537
    },
    {
        "code": "GMU",
        "name": "Greenville Downtown Airport",
        "lat": 34.8479,
        "lng": -82.35
    },
    {
        "code": "GNG",
        "name": "Gooding Municipal Airport",
        "lat": 42.9172,
        "lng": -114.765
    },
    {
        "code": "GNT",
        "name": "Grants-Milan Municipal Airport",
        "lat": 35.1673,
        "lng": -107.902
    },
    {
        "code": "GNV",
        "name": "Gainesville Regional Airport",
        "lat": 29.6901,
        "lng": -82.2718
    },
    {
        "code": "GOK",
        "name": "Guthrie-Edmond Regional Airport",
        "lat": 35.8498,
        "lng": -97.4156
    },
    {
        "code": "GON",
        "name": "Groton New London Airport",
        "lat": 41.3301,
        "lng": -72.0451
    },
    {
        "code": "FCA",
        "name": "Glacier Park International Airport",
        "lat": 48.3105,
        "lng": -114.256
    },
    {
        "code": "GPT",
        "name": "Gulfport Biloxi International Airport",
        "lat": 30.4073,
        "lng": -89.0701
    },
    {
        "code": "GPZ",
        "name": "Grand Rapids Itasca Co-Gordon Newstrom field",
        "lat": 47.2111,
        "lng": -93.5098
    },
    {
        "code": "GQQ",
        "name": "Galion Municipal Airport",
        "lat": 40.7534,
        "lng": -82.7238
    },
    {
        "code": "GRB",
        "name": "Austin Straubel International Airport",
        "lat": 44.4851,
        "lng": -88.1296
    },
    {
        "code": "GRD",
        "name": "Greenwood County Airport",
        "lat": 34.2487,
        "lng": -82.1591
    },
    {
        "code": "GRE",
        "name": "Greenville Airport",
        "lat": 38.8362,
        "lng": -89.3784
    },
    {
        "code": "GRF",
        "name": "Gray Army Air Field",
        "lat": 47.0792,
        "lng": -122.581
    },
    {
        "code": "GRI",
        "name": "Central Nebraska Regional Airport",
        "lat": 40.9675,
        "lng": -98.3096
    },
    {
        "code": "GRK",
        "name": "Robert Gray  Army Air Field Airport",
        "lat": 31.0672,
        "lng": -97.8289
    },
    {
        "code": "GRN",
        "name": "Gordon Municipal Airport",
        "lat": 42.806,
        "lng": -102.175
    },
    {
        "code": "GRR",
        "name": "Gerald R. Ford International Airport",
        "lat": 42.8808,
        "lng": -85.5228
    },
    {
        "code": "GSB",
        "name": "Seymour Johnson Air Force Base",
        "lat": 35.3394,
        "lng": -77.9606
    },
    {
        "code": "GSH",
        "name": "Goshen Municipal Airport",
        "lat": 41.5264,
        "lng": -85.7929
    },
    {
        "code": "GSO",
        "name": "Piedmont Triad International Airport",
        "lat": 36.0978,
        "lng": -79.9373
    },
    {
        "code": "GSP",
        "name": "Greenville Spartanburg International Airport",
        "lat": 34.8957,
        "lng": -82.2189
    },
    {
        "code": "GSW",
        "name": "Greater Southwest International Airport-Amon Carter Field",
        "lat": 32.8308,
        "lng": -97.0492
    },
    {
        "code": "KGTB",
        "name": "Wheeler Sack Army Air Field",
        "lat": 44.0556,
        "lng": -75.7195
    },
    {
        "code": "GTF",
        "name": "Great Falls International Airport",
        "lat": 47.482,
        "lng": -111.371
    },
    {
        "code": "GTG",
        "name": "Grantsburg Municipal Airport",
        "lat": 45.7981,
        "lng": -92.6644
    },
    {
        "code": "GTR",
        "name": "Golden Triangle Regional Airport",
        "lat": 33.4503,
        "lng": -88.5914
    },
    {
        "code": "GUC",
        "name": "Gunnison Crested Butte Regional Airport",
        "lat": 38.5339,
        "lng": -106.933
    },
    {
        "code": "GUP",
        "name": "Gallup Municipal Airport",
        "lat": 35.5111,
        "lng": -108.789
    },
    {
        "code": "GUS",
        "name": "Grissom Air Reserve Base",
        "lat": 40.6481,
        "lng": -86.1521
    },
    {
        "code": "GUY",
        "name": "Guymon Municipal Airport",
        "lat": 36.6851,
        "lng": -101.508
    },
    {
        "code": "GVL",
        "name": "Lee Gilmer Memorial Airport",
        "lat": 34.2726,
        "lng": -83.8302
    },
    {
        "code": "GVT",
        "name": "Majors Airport",
        "lat": 33.0678,
        "lng": -96.0653
    },
    {
        "code": "GVW",
        "name": "Richards-Gebaur Air Force Base",
        "lat": 38.8442,
        "lng": -94.56
    },
    {
        "code": "GWO",
        "name": "Greenwood\u2013Leflore Airport",
        "lat": 33.4943,
        "lng": -90.0847
    },
    {
        "code": "GWS",
        "name": "Glenwood Springs Municipal Airport",
        "lat": 39.5083,
        "lng": -107.311
    },
    {
        "code": "KGX",
        "name": "Grayling Airport",
        "lat": 62.8952,
        "lng": -160.0663
    },
    {
        "code": "GXY",
        "name": "Greeley\u2013Weld County Airport",
        "lat": 40.4374,
        "lng": -104.633
    },
    {
        "code": "GDC",
        "name": "Donaldson Field Airport",
        "lat": 34.7583,
        "lng": -82.3764
    },
    {
        "code": "PNX",
        "name": "North Texas Regional Airport/Perrin Field",
        "lat": 33.7141,
        "lng": -96.6737
    },
    {
        "code": "GYR",
        "name": "Phoenix Goodyear Airport",
        "lat": 33.4225,
        "lng": -112.376
    },
    {
        "code": "GYY",
        "name": "Gary Chicago International Airport",
        "lat": 41.6163,
        "lng": -87.4128
    },
    {
        "code": "KGZ",
        "name": "Glacier Creek Airport",
        "lat": 61.4551,
        "lng": -142.381
    },
    {
        "code": "HAB",
        "name": "Marion County Rankin Fite Airport",
        "lat": 34.1176,
        "lng": -87.9982
    },
    {
        "code": "HAF",
        "name": "Half Moon Bay Airport",
        "lat": 37.5134,
        "lng": -122.501
    },
    {
        "code": "HAI",
        "name": "Three Rivers Municipal Dr Haines Airport",
        "lat": 41.9598,
        "lng": -85.5934
    },
    {
        "code": "HAO",
        "name": "Butler Co Regional Airport - Hogan Field",
        "lat": 39.3638,
        "lng": -84.522
    },
    {
        "code": "HAX",
        "name": "Hatbox Field",
        "lat": 35.7459,
        "lng": -95.4128
    },
    {
        "code": "HBG",
        "name": "Hattiesburg Bobby L Chain Municipal Airport",
        "lat": 31.2648,
        "lng": -89.2528
    },
    {
        "code": "HBR",
        "name": "Hobart Regional Airport",
        "lat": 34.9913,
        "lng": -99.0513
    },
    {
        "code": "HDE",
        "name": "Brewster Field",
        "lat": 40.4521,
        "lng": -99.3365
    },
    {
        "code": "HDN",
        "name": "Yampa Valley Airport",
        "lat": 40.4812,
        "lng": -107.218
    },
    {
        "code": "HEE",
        "name": "Thompson-Robbins Airport",
        "lat": 34.5766,
        "lng": -90.6762
    },
    {
        "code": "MNZ",
        "name": "Manassas Regional Airport/Harry P. Davis Field",
        "lat": 38.7214,
        "lng": -77.5154
    },
    {
        "code": "HEZ",
        "name": "Hardy-Anders Field / Natchez-Adams County Airport",
        "lat": 31.6137,
        "lng": -91.2973
    },
    {
        "code": "HFD",
        "name": "Hartford Brainard Airport",
        "lat": 41.7367,
        "lng": -72.6494
    },
    {
        "code": "HFF",
        "name": "Mackall Army Air Field",
        "lat": 35.0363,
        "lng": -79.4978
    },
    {
        "code": "HGR",
        "name": "Hagerstown Regional Richard A Henson Field",
        "lat": 39.7079,
        "lng": -77.7295
    },
    {
        "code": "HHR",
        "name": "Jack Northrop Field Hawthorne Municipal Airport",
        "lat": 33.9228,
        "lng": -118.335
    },
    {
        "code": "HUJ",
        "name": "Stan Stamper Municipal Airport",
        "lat": 34.0348,
        "lng": -95.5419
    },
    {
        "code": "HIB",
        "name": "Range Regional Airport",
        "lat": 47.3866,
        "lng": -92.839
    },
    {
        "code": "HIE",
        "name": "Mount Washington Regional Airport",
        "lat": 44.3676,
        "lng": -71.5445
    },
    {
        "code": "HIF",
        "name": "Hill Air Force Base",
        "lat": 41.124,
        "lng": -111.9731
    },
    {
        "code": "HII",
        "name": "Lake Havasu City Airport",
        "lat": 34.5711,
        "lng": -114.358
    },
    {
        "code": "HIO",
        "name": "Portland Hillsboro Airport",
        "lat": 45.5404,
        "lng": -122.95
    },
    {
        "code": "HKA",
        "name": "Blytheville Municipal Airport",
        "lat": 35.9404,
        "lng": -89.8308
    },
    {
        "code": "HKS",
        "name": "Hawkins Field",
        "lat": 32.3345,
        "lng": -90.2222
    },
    {
        "code": "HKY",
        "name": "Hickory Regional Airport",
        "lat": 35.7411,
        "lng": -81.3895
    },
    {
        "code": "HLB",
        "name": "Hillenbrand Industries Airport",
        "lat": 39.3445,
        "lng": -85.2583
    },
    {
        "code": "HLC",
        "name": "Hill City Municipal Airport",
        "lat": 39.3788,
        "lng": -99.8315
    },
    {
        "code": "HLG",
        "name": "Wheeling Ohio County Airport",
        "lat": 40.175,
        "lng": -80.6463
    },
    {
        "code": "HLM",
        "name": "Park Township Airport",
        "lat": 42.7959,
        "lng": -86.162
    },
    {
        "code": "HLN",
        "name": "Helena Regional Airport",
        "lat": 46.6068,
        "lng": -111.983
    },
    {
        "code": "HLR",
        "name": "Hood Army Air Field",
        "lat": 31.1387,
        "lng": -97.7145
    },
    {
        "code": "HMN",
        "name": "Holloman Air Force Base",
        "lat": 32.8525,
        "lng": -106.107
    },
    {
        "code": "HMT",
        "name": "Hemet Ryan Airport",
        "lat": 33.734,
        "lng": -117.023
    },
    {
        "code": "HNB",
        "name": "Huntingburg Airport",
        "lat": 38.249,
        "lng": -86.9537
    },
    {
        "code": "HSH",
        "name": "Henderson Executive Airport",
        "lat": 35.9728,
        "lng": -115.134
    },
    {
        "code": "HOB",
        "name": "Lea County Regional Airport",
        "lat": 32.6875,
        "lng": -103.217
    },
    {
        "code": "HON",
        "name": "Huron Regional Airport",
        "lat": 44.3852,
        "lng": -98.2285
    },
    {
        "code": "HOP",
        "name": "Campbell AAF (Fort Campbell) Air Field",
        "lat": 36.6686,
        "lng": -87.4962
    },
    {
        "code": "HOT",
        "name": "Memorial Field",
        "lat": 34.478,
        "lng": -93.0962
    },
    {
        "code": "HOU",
        "name": "William P Hobby Airport",
        "lat": 29.6454,
        "lng": -95.2789
    },
    {
        "code": "HPN",
        "name": "Westchester County Airport",
        "lat": 41.067,
        "lng": -73.7076
    },
    {
        "code": "HPT",
        "name": "Hampton Municipal Airport",
        "lat": 42.7237,
        "lng": -93.2263
    },
    {
        "code": "HPY",
        "name": "Baytown Airport",
        "lat": 29.7861,
        "lng": -94.9527
    },
    {
        "code": "HQM",
        "name": "Bowerman Airport",
        "lat": 46.9712,
        "lng": -123.937
    },
    {
        "code": "HES",
        "name": "Hermiston Municipal Airport",
        "lat": 45.8282,
        "lng": -119.259
    },
    {
        "code": "HRL",
        "name": "Valley International Airport",
        "lat": 26.2285,
        "lng": -97.6544
    },
    {
        "code": "HRO",
        "name": "Boone County Airport",
        "lat": 36.2615,
        "lng": -93.1547
    },
    {
        "code": "KHRT",
        "name": "Hurlburt Field",
        "lat": 30.4278,
        "lng": -86.6893
    },
    {
        "code": "HSB",
        "name": "Harrisburg-Raleigh Airport",
        "lat": 37.8113,
        "lng": -88.5503
    },
    {
        "code": "HNC",
        "name": "Billy Mitchell Airport",
        "lat": 35.2328,
        "lng": -75.6178
    },
    {
        "code": "THP",
        "name": "Hot Springs County Airport",
        "lat": 43.7136,
        "lng": -108.3897
    },
    {
        "code": "HSI",
        "name": "Hastings Municipal Airport",
        "lat": 40.6053,
        "lng": -98.4279
    },
    {
        "code": "HSP",
        "name": "Ingalls Field",
        "lat": 37.9514,
        "lng": -79.8339
    },
    {
        "code": "HST",
        "name": "Homestead ARB Airport",
        "lat": 25.4886,
        "lng": -80.3836
    },
    {
        "code": "HSV",
        "name": "Huntsville International Carl T Jones Field",
        "lat": 34.6372,
        "lng": -86.7751
    },
    {
        "code": "HTH",
        "name": "Hawthorne Industrial Airport",
        "lat": 38.5444,
        "lng": -118.634
    },
    {
        "code": "HTL",
        "name": "Roscommon County - Blodgett Memorial Airport",
        "lat": 44.3598,
        "lng": -84.6711
    },
    {
        "code": "HTO",
        "name": "East Hampton Airport",
        "lat": 40.9596,
        "lng": -72.2518
    },
    {
        "code": "HTS",
        "name": "Tri-State/Milton J. Ferguson Field",
        "lat": 38.3667,
        "lng": -82.558
    },
    {
        "code": "HTW",
        "name": "Lawrence County Airpark",
        "lat": 38.4193,
        "lng": -82.4943
    },
    {
        "code": "HUA",
        "name": "Redstone Army Air Field",
        "lat": 34.6787,
        "lng": -86.6848
    },
    {
        "code": "HUF",
        "name": "Terre Haute Regional Airport, Hulman Field",
        "lat": 39.4515,
        "lng": -87.3076
    },
    {
        "code": "HUL",
        "name": "Houlton International Airport",
        "lat": 46.1231,
        "lng": -67.7921
    },
    {
        "code": "HUM",
        "name": "Houma Terrebonne Airport",
        "lat": 29.5665,
        "lng": -90.6604
    },
    {
        "code": "HUT",
        "name": "Hutchinson Municipal Airport",
        "lat": 38.0655,
        "lng": -97.8606
    },
    {
        "code": "HVE",
        "name": "Hanksville Airport",
        "lat": 38.418,
        "lng": -110.704
    },
    {
        "code": "HVN",
        "name": "Tweed New Haven Airport",
        "lat": 41.2637,
        "lng": -72.8868
    },
    {
        "code": "HVR",
        "name": "Havre City County Airport",
        "lat": 48.543,
        "lng": -109.762
    },
    {
        "code": "HVS",
        "name": "Hartsville Regional Airport",
        "lat": 34.4031,
        "lng": -80.1192
    },
    {
        "code": "HWD",
        "name": "Hayward Executive Airport",
        "lat": 37.6592,
        "lng": -122.122
    },
    {
        "code": "HWO",
        "name": "North Perry Airport",
        "lat": 26.0012,
        "lng": -80.2407
    },
    {
        "code": "WSH",
        "name": "Brookhaven Airport",
        "lat": 40.8219,
        "lng": -72.8694
    },
    {
        "code": "HHH",
        "name": "Hilton Head Airport",
        "lat": 32.2244,
        "lng": -80.6975
    },
    {
        "code": "HYA",
        "name": "Barnstable Municipal Boardman Polando Field",
        "lat": 41.6693,
        "lng": -70.2804
    },
    {
        "code": "KHYI",
        "name": "San Marcos Regional Airport",
        "lat": 29.8927,
        "lng": -97.863
    },
    {
        "code": "HYR",
        "name": "Sawyer County Airport",
        "lat": 46.0252,
        "lng": -91.4443
    },
    {
        "code": "HYS",
        "name": "Hays Regional Airport",
        "lat": 38.8422,
        "lng": -99.2732
    },
    {
        "code": "HZL",
        "name": "Hazleton Municipal Airport",
        "lat": 40.9868,
        "lng": -75.9949
    },
    {
        "code": "JFN",
        "name": "Northeast Ohio Regional Airport",
        "lat": 41.778,
        "lng": -80.6955
    },
    {
        "code": "IAB",
        "name": "Mc Connell Air Force Base",
        "lat": 37.6219,
        "lng": -97.2682
    },
    {
        "code": "IAD",
        "name": "Washington Dulles International Airport",
        "lat": 38.9445,
        "lng": -77.4558
    },
    {
        "code": "IAG",
        "name": "Niagara Falls International Airport",
        "lat": 43.1073,
        "lng": -78.9462
    },
    {
        "code": "IAH",
        "name": "George Bush Intercontinental Houston Airport",
        "lat": 29.9844,
        "lng": -95.3414
    },
    {
        "code": "KIB",
        "name": "Ivanof Bay Seaplane Base",
        "lat": 55.8975,
        "lng": -159.489
    },
    {
        "code": "ICL",
        "name": "Schenck Field",
        "lat": 40.7218,
        "lng": -95.0264
    },
    {
        "code": "ICT",
        "name": "Wichita Eisenhower National Airport",
        "lat": 37.6499,
        "lng": -97.4331
    },
    {
        "code": "IDA",
        "name": "Idaho Falls Regional Airport",
        "lat": 43.5146,
        "lng": -112.071
    },
    {
        "code": "IDI",
        "name": "Indiana County/Jimmy Stewart Fld/ Airport",
        "lat": 40.6322,
        "lng": -79.1055
    },
    {
        "code": "IDP",
        "name": "Independence Municipal Airport",
        "lat": 37.1584,
        "lng": -95.7784
    },
    {
        "code": "XPR",
        "name": "Pine Ridge Airport",
        "lat": 43.0225,
        "lng": -102.511
    },
    {
        "code": "IFA",
        "name": "Iowa Falls Municipal Airport",
        "lat": 42.4708,
        "lng": -93.27
    },
    {
        "code": "IFP",
        "name": "Laughlin Bullhead International Airport",
        "lat": 35.1574,
        "lng": -114.56
    },
    {
        "code": "IGM",
        "name": "Kingman Airport",
        "lat": 35.2595,
        "lng": -113.938
    },
    {
        "code": "IKK",
        "name": "Greater Kankakee Airport",
        "lat": 41.0714,
        "lng": -87.8463
    },
    {
        "code": "ILE",
        "name": "Skylark Field",
        "lat": 31.0858,
        "lng": -97.6865
    },
    {
        "code": "ILG",
        "name": "New Castle Airport",
        "lat": 39.6787,
        "lng": -75.6065
    },
    {
        "code": "ILM",
        "name": "Wilmington International Airport",
        "lat": 34.2706,
        "lng": -77.9026
    },
    {
        "code": "ILN",
        "name": "Wilmington Airpark",
        "lat": 39.4279,
        "lng": -83.7921
    },
    {
        "code": "IML",
        "name": "Imperial Municipal Airport",
        "lat": 40.5093,
        "lng": -101.621
    },
    {
        "code": "IMM",
        "name": "Immokalee Regional Airport",
        "lat": 26.4332,
        "lng": -81.401
    },
    {
        "code": "MDN",
        "name": "Madison Municipal Airport",
        "lat": 38.7589,
        "lng": -85.4655
    },
    {
        "code": "IMT",
        "name": "Ford Airport",
        "lat": 45.8184,
        "lng": -88.1145
    },
    {
        "code": "IND",
        "name": "Indianapolis International Airport",
        "lat": 39.7173,
        "lng": -86.2944
    },
    {
        "code": "INK",
        "name": "Winkler County Airport",
        "lat": 31.7796,
        "lng": -103.201
    },
    {
        "code": "INL",
        "name": "Falls International Airport",
        "lat": 48.5662,
        "lng": -93.4031
    },
    {
        "code": "INS",
        "name": "Creech Air Force Base",
        "lat": 36.5872,
        "lng": -115.673
    },
    {
        "code": "INT",
        "name": "Smith Reynolds Airport",
        "lat": 36.1337,
        "lng": -80.222
    },
    {
        "code": "INW",
        "name": "Winslow Lindbergh Regional Airport",
        "lat": 35.0219,
        "lng": -110.723
    },
    {
        "code": "IOW",
        "name": "Iowa City Municipal Airport",
        "lat": 41.6392,
        "lng": -91.5465
    },
    {
        "code": "IPL",
        "name": "Imperial County Airport",
        "lat": 32.8342,
        "lng": -115.579
    },
    {
        "code": "IPT",
        "name": "Williamsport Regional Airport",
        "lat": 41.2418,
        "lng": -76.9211
    },
    {
        "code": "IRK",
        "name": "Kirksville Regional Airport",
        "lat": 40.0935,
        "lng": -92.5449
    },
    {
        "code": "IRS",
        "name": "Kirsch Municipal Airport",
        "lat": 41.8133,
        "lng": -85.439
    },
    {
        "code": "ISM",
        "name": "Kissimmee Gateway Airport",
        "lat": 28.2898,
        "lng": -81.4371
    },
    {
        "code": "ISN",
        "name": "Sloulin Field International Airport",
        "lat": 48.1779,
        "lng": -103.642
    },
    {
        "code": "ISO",
        "name": "Kinston Regional Jetport At Stallings Field",
        "lat": 35.3314,
        "lng": -77.6088
    },
    {
        "code": "ISP",
        "name": "Long Island Mac Arthur Airport",
        "lat": 40.7952,
        "lng": -73.1002
    },
    {
        "code": "ISQ",
        "name": "Schoolcraft County Airport",
        "lat": 45.9746,
        "lng": -86.1718
    },
    {
        "code": "ISW",
        "name": "Alexander Field South Wood County Airport",
        "lat": 44.3603,
        "lng": -89.839
    },
    {
        "code": "ITH",
        "name": "Ithaca Tompkins Regional Airport",
        "lat": 42.491,
        "lng": -76.4584
    },
    {
        "code": "AZA",
        "name": "Phoenix-Mesa-Gateway Airport",
        "lat": 33.3078,
        "lng": -111.655
    },
    {
        "code": "IWD",
        "name": "Gogebic Iron County Airport",
        "lat": 46.5275,
        "lng": -90.1314
    },
    {
        "code": "ISS",
        "name": "Wiscasset Airport",
        "lat": 43.9614,
        "lng": -69.7126
    },
    {
        "code": "IWS",
        "name": "West Houston Airport",
        "lat": 29.8182,
        "lng": -95.6726
    },
    {
        "code": "JCI",
        "name": "New Century Aircenter Airport",
        "lat": 38.8309,
        "lng": -94.8903
    },
    {
        "code": "IYK",
        "name": "Inyokern Airport",
        "lat": 35.6588,
        "lng": -117.83
    },
    {
        "code": "SQA",
        "name": "Santa Ynez Airport",
        "lat": 34.6068,
        "lng": -120.076
    },
    {
        "code": "FRY",
        "name": "Eastern Slopes Regional Airport",
        "lat": 43.9911,
        "lng": -70.9479
    },
    {
        "code": "JAC",
        "name": "Jackson Hole Airport",
        "lat": 43.6073,
        "lng": -110.738
    },
    {
        "code": "JAN",
        "name": "Jackson-Medgar Wiley Evers International Airport",
        "lat": 32.3112,
        "lng": -90.0759
    },
    {
        "code": "JAS",
        "name": "Jasper County Airport-Bell Field",
        "lat": 30.8857,
        "lng": -94.0349
    },
    {
        "code": "JAX",
        "name": "Jacksonville International Airport",
        "lat": 30.4941,
        "lng": -81.6879
    },
    {
        "code": "JBR",
        "name": "Jonesboro Municipal Airport",
        "lat": 35.8317,
        "lng": -90.6464
    },
    {
        "code": "JCT",
        "name": "Kimble County Airport",
        "lat": 30.5113,
        "lng": -99.7635
    },
    {
        "code": "JDN",
        "name": "Jordan Airport",
        "lat": 47.3288,
        "lng": -106.953
    },
    {
        "code": "JEF",
        "name": "Jefferson City Memorial Airport",
        "lat": 38.5912,
        "lng": -92.1561
    },
    {
        "code": "JFK",
        "name": "John F Kennedy International Airport",
        "lat": 40.6398,
        "lng": -73.7789
    },
    {
        "code": "JHW",
        "name": "Chautauqua County-Jamestown Airport",
        "lat": 42.1534,
        "lng": -79.258
    },
    {
        "code": "GUF",
        "name": "Jack Edwards Airport",
        "lat": 30.2905,
        "lng": -87.6718
    },
    {
        "code": "KJKL",
        "name": "Julian Carroll Airport",
        "lat": 37.5939,
        "lng": -83.3173
    },
    {
        "code": "JLN",
        "name": "Joplin Regional Airport",
        "lat": 37.1518,
        "lng": -94.4983
    },
    {
        "code": "JMS",
        "name": "Jamestown Regional Airport",
        "lat": 46.9297,
        "lng": -98.6782
    },
    {
        "code": "JOT",
        "name": "Joliet Regional Airport",
        "lat": 41.5178,
        "lng": -88.1755
    },
    {
        "code": "USA",
        "name": "Concord-Padgett Regional Airport",
        "lat": 35.3878,
        "lng": -80.7091
    },
    {
        "code": "JKV",
        "name": "Cherokee County Airport",
        "lat": 31.8693,
        "lng": -95.2174
    },
    {
        "code": "JST",
        "name": "John Murtha Johnstown Cambria County Airport",
        "lat": 40.3161,
        "lng": -78.8339
    },
    {
        "code": "JVL",
        "name": "Southern Wisconsin Regional Airport",
        "lat": 42.6203,
        "lng": -89.0416
    },
    {
        "code": "JXN",
        "name": "Jackson County Reynolds Field",
        "lat": 42.2598,
        "lng": -84.4594
    },
    {
        "code": "KKB",
        "name": "Kitoi Bay Seaplane Base",
        "lat": 58.1909,
        "lng": -152.37
    },
    {
        "code": "KIC",
        "name": "Mesa Del Rey Airport",
        "lat": 36.228,
        "lng": -121.122
    },
    {
        "code": "KKL",
        "name": "Karluk Lake Seaplane Base",
        "lat": 57.367,
        "lng": -154.028
    },
    {
        "code": "KLS",
        "name": "Southwest Washington Regional Airport",
        "lat": 46.118,
        "lng": -122.898
    },
    {
        "code": "KKU",
        "name": "Ekuk Airport",
        "lat": 58.8112,
        "lng": -158.559
    },
    {
        "code": "DTH",
        "name": "Furnace Creek Airport",
        "lat": 36.4638,
        "lng": -116.881
    },
    {
        "code": "BXS",
        "name": "Borrego Valley Airport",
        "lat": 33.259,
        "lng": -116.321
    },
    {
        "code": "RBF",
        "name": "Big Bear City Airport",
        "lat": 34.2638,
        "lng": -116.856
    },
    {
        "code": "TRH",
        "name": "Trona Airport",
        "lat": 35.8125,
        "lng": -117.327
    },
    {
        "code": "LAA",
        "name": "Southeast Colorado Regional Airport",
        "lat": 38.0649,
        "lng": -102.6832
    },
    {
        "code": "LAF",
        "name": "Purdue University Airport",
        "lat": 40.4123,
        "lng": -86.9369
    },
    {
        "code": "LAL",
        "name": "Lakeland Linder International Airport",
        "lat": 27.9889,
        "lng": -82.0186
    },
    {
        "code": "LAM",
        "name": "Los Alamos Airport",
        "lat": 35.8798,
        "lng": -106.269
    },
    {
        "code": "LAN",
        "name": "Capital City Airport",
        "lat": 42.7787,
        "lng": -84.5874
    },
    {
        "code": "LAR",
        "name": "Laramie Regional Airport",
        "lat": 41.3121,
        "lng": -105.675
    },
    {
        "code": "LAS",
        "name": "McCarran International Airport",
        "lat": 36.0801,
        "lng": -115.152
    },
    {
        "code": "LAW",
        "name": "Lawton Fort Sill Regional Airport",
        "lat": 34.5677,
        "lng": -98.4166
    },
    {
        "code": "LAX",
        "name": "Los Angeles International Airport",
        "lat": 33.9425,
        "lng": -118.408
    },
    {
        "code": "LBB",
        "name": "Lubbock Preston Smith International Airport",
        "lat": 33.6636,
        "lng": -101.823
    },
    {
        "code": "LBE",
        "name": "Arnold Palmer Regional Airport",
        "lat": 40.2759,
        "lng": -79.4048
    },
    {
        "code": "LBF",
        "name": "North Platte Regional Airport Lee Bird Field",
        "lat": 41.1262,
        "lng": -100.684
    },
    {
        "code": "LBL",
        "name": "Liberal Mid-America Regional Airport",
        "lat": 37.0442,
        "lng": -100.96
    },
    {
        "code": "LBT",
        "name": "Lumberton Regional Airport",
        "lat": 34.6099,
        "lng": -79.0594
    },
    {
        "code": "LJN",
        "name": "Texas Gulf Coast Regional Airport",
        "lat": 29.1086,
        "lng": -95.4621
    },
    {
        "code": "LCH",
        "name": "Lake Charles Regional Airport",
        "lat": 30.1261,
        "lng": -93.2233
    },
    {
        "code": "LCI",
        "name": "Laconia Municipal Airport",
        "lat": 43.5727,
        "lng": -71.4189
    },
    {
        "code": "LCK",
        "name": "Rickenbacker International Airport",
        "lat": 39.8138,
        "lng": -82.9278
    },
    {
        "code": "LCQ",
        "name": "Lake City Gateway Airport",
        "lat": 30.182,
        "lng": -82.5769
    },
    {
        "code": "LDJ",
        "name": "Linden Airport",
        "lat": 40.6174,
        "lng": -74.2446
    },
    {
        "code": "LDM",
        "name": "Mason County Airport",
        "lat": 43.9625,
        "lng": -86.4079
    },
    {
        "code": "LEB",
        "name": "Lebanon Municipal Airport",
        "lat": 43.6261,
        "lng": -72.3042
    },
    {
        "code": "LEE",
        "name": "Leesburg International Airport",
        "lat": 28.8231,
        "lng": -81.8087
    },
    {
        "code": "LEM",
        "name": "Lemmon Municipal Airport",
        "lat": 45.9187,
        "lng": -102.106
    },
    {
        "code": "LEW",
        "name": "Auburn Lewiston Municipal Airport",
        "lat": 44.0485,
        "lng": -70.2835
    },
    {
        "code": "LEX",
        "name": "Blue Grass Airport",
        "lat": 38.0365,
        "lng": -84.6059
    },
    {
        "code": "LFI",
        "name": "Langley Air Force Base",
        "lat": 37.0829,
        "lng": -76.3605
    },
    {
        "code": "LFK",
        "name": "Angelina County Airport",
        "lat": 31.234,
        "lng": -94.75
    },
    {
        "code": "LFT",
        "name": "Lafayette Regional Airport",
        "lat": 30.2053,
        "lng": -91.9876
    },
    {
        "code": "LGA",
        "name": "La Guardia Airport",
        "lat": 40.7772,
        "lng": -73.8726
    },
    {
        "code": "LGB",
        "name": "Long Beach Airport (Daugherty Field)",
        "lat": 33.8177,
        "lng": -118.152
    },
    {
        "code": "LGC",
        "name": "LaGrange Callaway Airport",
        "lat": 33.0089,
        "lng": -85.0726
    },
    {
        "code": "LGD",
        "name": "La Grande/Union County Airport",
        "lat": 45.2902,
        "lng": -118.007
    },
    {
        "code": "LGF",
        "name": "Laguna Army Airfield",
        "lat": 32.86,
        "lng": -114.397
    },
    {
        "code": "LGU",
        "name": "Logan-Cache Airport",
        "lat": 41.7912,
        "lng": -111.852
    },
    {
        "code": "LHC",
        "name": "Arlington Municipal Airport",
        "lat": 35.2831,
        "lng": -89.6725
    },
    {
        "code": "LHV",
        "name": "William T. Piper Memorial Airport",
        "lat": 41.1356,
        "lng": -77.4223
    },
    {
        "code": "LIY",
        "name": "Wright AAF (Fort Stewart)/Midcoast Regional Airport",
        "lat": 31.8891,
        "lng": -81.5623
    },
    {
        "code": "LFN",
        "name": "Triangle North Executive Airport",
        "lat": 36.0233,
        "lng": -78.3303
    },
    {
        "code": "LIC",
        "name": "Limon Municipal Airport",
        "lat": 39.2748,
        "lng": -103.666
    },
    {
        "code": "LIT",
        "name": "Bill & Hillary Clinton National Airport/Adams Field",
        "lat": 34.7294,
        "lng": -92.2243
    },
    {
        "code": "LKP",
        "name": "Lake Placid Airport",
        "lat": 44.2645,
        "lng": -73.9619
    },
    {
        "code": "LOW",
        "name": "Louisa County Airport/Freeman Field",
        "lat": 38.0098,
        "lng": -77.9701
    },
    {
        "code": "LKV",
        "name": "Lake County Airport",
        "lat": 42.1611,
        "lng": -120.399
    },
    {
        "code": "CHL",
        "name": "Challis Airport",
        "lat": 44.523,
        "lng": -114.218
    },
    {
        "code": "KLLQ",
        "name": "Monticello Municipal Ellis Field",
        "lat": 33.6386,
        "lng": -91.751
    },
    {
        "code": "LMS",
        "name": "Louisville Winston County Airport",
        "lat": 33.1462,
        "lng": -89.0625
    },
    {
        "code": "LMT",
        "name": "Crater Lake-Klamath Regional Airport",
        "lat": 42.1561,
        "lng": -121.733
    },
    {
        "code": "LNA",
        "name": "Palm Beach County Park Airport",
        "lat": 26.593,
        "lng": -80.0851
    },
    {
        "code": "LND",
        "name": "Hunt Field",
        "lat": 42.8152,
        "lng": -108.73
    },
    {
        "code": "LNK",
        "name": "Lincoln Airport",
        "lat": 40.851,
        "lng": -96.7592
    },
    {
        "code": "LNN",
        "name": "Lake County Executive Airport",
        "lat": 41.684,
        "lng": -81.3897
    },
    {
        "code": "LNP",
        "name": "Lonesome Pine Airport",
        "lat": 36.9875,
        "lng": -82.53
    },
    {
        "code": "LNR",
        "name": "Tri-County Regional Airport",
        "lat": 43.2117,
        "lng": -90.1816
    },
    {
        "code": "LNS",
        "name": "Lancaster Airport",
        "lat": 40.1217,
        "lng": -76.2961
    },
    {
        "code": "LOL",
        "name": "Derby Field",
        "lat": 40.0664,
        "lng": -118.565
    },
    {
        "code": "BBX",
        "name": "Wings Field",
        "lat": 40.1375,
        "lng": -75.2651
    },
    {
        "code": "LOT",
        "name": "Lewis University Airport",
        "lat": 41.6073,
        "lng": -88.0962
    },
    {
        "code": "LOU",
        "name": "Bowman Field",
        "lat": 38.228,
        "lng": -85.6637
    },
    {
        "code": "LOZ",
        "name": "London-Corbin Airport/Magee Field",
        "lat": 37.0822,
        "lng": -84.0849
    },
    {
        "code": "LPC",
        "name": "Lompoc Airport",
        "lat": 34.6656,
        "lng": -120.468
    },
    {
        "code": "LQK",
        "name": "Pickens County Airport",
        "lat": 34.81,
        "lng": -82.7029
    },
    {
        "code": "LRD",
        "name": "Laredo International Airport",
        "lat": 27.5438,
        "lng": -99.4616
    },
    {
        "code": "LRF",
        "name": "Little Rock Air Force Base",
        "lat": 34.9169,
        "lng": -92.1497
    },
    {
        "code": "LRJ",
        "name": "Le Mars Municipal Airport",
        "lat": 42.778,
        "lng": -96.1937
    },
    {
        "code": "LRU",
        "name": "Las Cruces International Airport",
        "lat": 32.2894,
        "lng": -106.922
    },
    {
        "code": "LSB",
        "name": "Lordsburg Municipal Airport",
        "lat": 32.3335,
        "lng": -108.692
    },
    {
        "code": "LSE",
        "name": "La Crosse Municipal Airport",
        "lat": 43.879,
        "lng": -91.2567
    },
    {
        "code": "LSF",
        "name": "Lawson Army Air Field (Fort Benning)",
        "lat": 32.3373,
        "lng": -84.9913
    },
    {
        "code": "LSK",
        "name": "Lusk Municipal Airport",
        "lat": 42.7538,
        "lng": -104.405
    },
    {
        "code": "LSN",
        "name": "Los Banos Municipal Airport",
        "lat": 37.0629,
        "lng": -120.869
    },
    {
        "code": "LSV",
        "name": "Nellis Air Force Base",
        "lat": 36.2362,
        "lng": -115.034
    },
    {
        "code": "LTS",
        "name": "Altus Air Force Base",
        "lat": 34.6671,
        "lng": -99.2667
    },
    {
        "code": "LUF",
        "name": "Luke Air Force Base",
        "lat": 33.535,
        "lng": -112.383
    },
    {
        "code": "LUK",
        "name": "Cincinnati Municipal Airport Lunken Field",
        "lat": 39.1033,
        "lng": -84.4186
    },
    {
        "code": "LUL",
        "name": "Hesler Noble Field",
        "lat": 31.6726,
        "lng": -89.1722
    },
    {
        "code": "LVK",
        "name": "Livermore Municipal Airport",
        "lat": 37.6934,
        "lng": -121.82
    },
    {
        "code": "LVL",
        "name": "Brunswick Municipal Airport",
        "lat": 36.7728,
        "lng": -77.7943
    },
    {
        "code": "LVM",
        "name": "Mission Field",
        "lat": 45.6994,
        "lng": -110.448
    },
    {
        "code": "LVS",
        "name": "Las Vegas Municipal Airport",
        "lat": 35.6542,
        "lng": -105.142
    },
    {
        "code": "LWB",
        "name": "Greenbrier Valley Airport",
        "lat": 37.8583,
        "lng": -80.3995
    },
    {
        "code": "LWC",
        "name": "Lawrence Municipal Airport",
        "lat": 39.0112,
        "lng": -95.2166
    },
    {
        "code": "LWL",
        "name": "Wells Municipal Airport/Harriet Field",
        "lat": 41.1171,
        "lng": -114.922
    },
    {
        "code": "LWM",
        "name": "Lawrence Municipal Airport",
        "lat": 42.7172,
        "lng": -71.1234
    },
    {
        "code": "LWS",
        "name": "Lewiston Nez Perce County Airport",
        "lat": 46.3745,
        "lng": -117.015
    },
    {
        "code": "LWT",
        "name": "Lewistown Municipal Airport",
        "lat": 47.0493,
        "lng": -109.467
    },
    {
        "code": "LWV",
        "name": "Lawrenceville Vincennes International Airport",
        "lat": 38.7643,
        "lng": -87.6055
    },
    {
        "code": "LXN",
        "name": "Jim Kelly Field",
        "lat": 40.791,
        "lng": -99.7773
    },
    {
        "code": "LXV",
        "name": "Lake County Airport",
        "lat": 39.2203,
        "lng": -106.317
    },
    {
        "code": "LYH",
        "name": "Lynchburg Regional Preston Glenn Field",
        "lat": 37.3267,
        "lng": -79.2004
    },
    {
        "code": "LYO",
        "name": "Lyons-Rice County Municipal Airport",
        "lat": 38.3428,
        "lng": -98.2269
    },
    {
        "code": "LZU",
        "name": "Gwinnett County Briscoe Field",
        "lat": 33.9781,
        "lng": -83.9624
    },
    {
        "code": "PCU",
        "name": "Poplarville Pearl River County Airport",
        "lat": 30.786,
        "lng": -89.5045
    },
    {
        "code": "MLK",
        "name": "Malta Airport",
        "lat": 48.3669,
        "lng": -107.919
    },
    {
        "code": "MAC",
        "name": "Macon Downtown Airport",
        "lat": 32.8221,
        "lng": -83.562
    },
    {
        "code": "MAE",
        "name": "Madera Municipal Airport",
        "lat": 36.9886,
        "lng": -120.112
    },
    {
        "code": "MAF",
        "name": "Midland International Airport",
        "lat": 31.9425,
        "lng": -102.202
    },
    {
        "code": "MAW",
        "name": "Malden Regional Airport",
        "lat": 36.6006,
        "lng": -89.9922
    },
    {
        "code": "MBG",
        "name": "Mobridge Municipal Airport",
        "lat": 45.5465,
        "lng": -100.408
    },
    {
        "code": "MBL",
        "name": "Manistee Co Blacker Airport",
        "lat": 44.2724,
        "lng": -86.2469
    },
    {
        "code": "DXE",
        "name": "Bruce Campbell Field",
        "lat": 32.4387,
        "lng": -90.1031
    },
    {
        "code": "MBS",
        "name": "MBS International Airport",
        "lat": 43.5329,
        "lng": -84.0796
    },
    {
        "code": "MBY",
        "name": "Omar N Bradley Airport",
        "lat": 39.4644,
        "lng": -92.4284
    },
    {
        "code": "MCB",
        "name": "McComb-Pike County Airport / John E Lewis Field",
        "lat": 31.1785,
        "lng": -90.4719
    },
    {
        "code": "MCC",
        "name": "Mc Clellan Airfield",
        "lat": 38.6676,
        "lng": -121.401
    },
    {
        "code": "MCD",
        "name": "Mackinac Island Airport",
        "lat": 45.8649,
        "lng": -84.6373
    },
    {
        "code": "MCE",
        "name": "Merced Regional Macready Field",
        "lat": 37.2847,
        "lng": -120.514
    },
    {
        "code": "MCF",
        "name": "Mac Dill Air Force Base",
        "lat": 27.8493,
        "lng": -82.5212
    },
    {
        "code": "MCI",
        "name": "Kansas City International Airport",
        "lat": 39.2976,
        "lng": -94.7139
    },
    {
        "code": "MCK",
        "name": "Mc Cook Ben Nelson Regional Airport",
        "lat": 40.2063,
        "lng": -100.592
    },
    {
        "code": "MCN",
        "name": "Middle Georgia Regional Airport",
        "lat": 32.6928,
        "lng": -83.6492
    },
    {
        "code": "MCO",
        "name": "Orlando International Airport",
        "lat": 28.4294,
        "lng": -81.309
    },
    {
        "code": "MCW",
        "name": "Mason City Municipal Airport",
        "lat": 43.1578,
        "lng": -93.3313
    },
    {
        "code": "MDA",
        "name": "Martindale Army Heliport",
        "lat": 29.4313,
        "lng": -98.3778
    },
    {
        "code": "MDD",
        "name": "Midland Airpark",
        "lat": 32.0365,
        "lng": -102.101
    },
    {
        "code": "MDH",
        "name": "Southern Illinois Airport",
        "lat": 37.7781,
        "lng": -89.252
    },
    {
        "code": "XMD",
        "name": "Madison Municipal Airport",
        "lat": 44.016,
        "lng": -97.0859
    },
    {
        "code": "MDT",
        "name": "Harrisburg International Airport",
        "lat": 40.1935,
        "lng": -76.7634
    },
    {
        "code": "MDW",
        "name": "Chicago Midway International Airport",
        "lat": 41.786,
        "lng": -87.7524
    },
    {
        "code": "MDF",
        "name": "Taylor County Airport",
        "lat": 45.101,
        "lng": -90.3033
    },
    {
        "code": "MXE",
        "name": "Laurinburg Maxton Airport",
        "lat": 34.7919,
        "lng": -79.3658
    },
    {
        "code": "MEI",
        "name": "Key Field",
        "lat": 32.3326,
        "lng": -88.7519
    },
    {
        "code": "MEM",
        "name": "Memphis International Airport",
        "lat": 35.0424,
        "lng": -89.9767
    },
    {
        "code": "MER",
        "name": "Castle Airport",
        "lat": 37.3805,
        "lng": -120.568
    },
    {
        "code": "MEV",
        "name": "Minden-Tahoe Airport",
        "lat": 39.0003,
        "lng": -119.751
    },
    {
        "code": "MFD",
        "name": "Mansfield Lahm Regional Airport",
        "lat": 40.8214,
        "lng": -82.5166
    },
    {
        "code": "MFE",
        "name": "Mc Allen Miller International Airport",
        "lat": 26.1758,
        "lng": -98.2386
    },
    {
        "code": "MFI",
        "name": "Marshfield Municipal Airport",
        "lat": 44.6369,
        "lng": -90.1893
    },
    {
        "code": "MFR",
        "name": "Rogue Valley International Medford Airport",
        "lat": 42.3742,
        "lng": -122.873
    },
    {
        "code": "MFV",
        "name": "Accomack County Airport",
        "lat": 37.6469,
        "lng": -75.7611
    },
    {
        "code": "MGC",
        "name": "Michigan City Municipal Airport",
        "lat": 41.7033,
        "lng": -86.8212
    },
    {
        "code": "MGE",
        "name": "Dobbins Air Reserve Base",
        "lat": 33.9154,
        "lng": -84.5163
    },
    {
        "code": "MGJ",
        "name": "Orange County Airport",
        "lat": 41.51,
        "lng": -74.2646
    },
    {
        "code": "MGM",
        "name": "Montgomery Regional (Dannelly Field) Airport",
        "lat": 32.3006,
        "lng": -86.394
    },
    {
        "code": "MGR",
        "name": "Moultrie Municipal Airport",
        "lat": 31.0849,
        "lng": -83.8033
    },
    {
        "code": "MGW",
        "name": "Morgantown Municipal Walter L. Bill Hart Field",
        "lat": 39.6429,
        "lng": -79.9163
    },
    {
        "code": "MGY",
        "name": "Dayton-Wright Brothers Airport",
        "lat": 39.589,
        "lng": -84.2249
    },
    {
        "code": "MHE",
        "name": "Mitchell Municipal Airport",
        "lat": 43.7748,
        "lng": -98.0386
    },
    {
        "code": "MHK",
        "name": "Manhattan Regional Airport",
        "lat": 39.141,
        "lng": -96.6708
    },
    {
        "code": "MHL",
        "name": "Marshall Memorial Municipal Airport",
        "lat": 39.0958,
        "lng": -93.2029
    },
    {
        "code": "MHR",
        "name": "Sacramento Mather Airport",
        "lat": 38.5539,
        "lng": -121.298
    },
    {
        "code": "MHT",
        "name": "Manchester-Boston Regional Airport",
        "lat": 42.9326,
        "lng": -71.4357
    },
    {
        "code": "MHV",
        "name": "Mojave Airport",
        "lat": 35.0594,
        "lng": -118.152
    },
    {
        "code": "MIA",
        "name": "Miami International Airport",
        "lat": 25.7932,
        "lng": -80.2906
    },
    {
        "code": "MIB",
        "name": "Minot Air Force Base",
        "lat": 48.4156,
        "lng": -101.358
    },
    {
        "code": "MIE",
        "name": "Delaware County Johnson Field",
        "lat": 40.2423,
        "lng": -85.3959
    },
    {
        "code": "MIT",
        "name": "Shafter Airport - Minter Field",
        "lat": 35.5074,
        "lng": -119.192
    },
    {
        "code": "MIV",
        "name": "Millville Municipal Airport",
        "lat": 39.3678,
        "lng": -75.0722
    },
    {
        "code": "MJX",
        "name": "Ocean County Airport",
        "lat": 39.9275,
        "lng": -74.2924
    },
    {
        "code": "MKC",
        "name": "Charles B. Wheeler Downtown Airport",
        "lat": 39.1232,
        "lng": -94.5928
    },
    {
        "code": "MKE",
        "name": "General Mitchell International Airport",
        "lat": 42.9472,
        "lng": -87.8966
    },
    {
        "code": "MKG",
        "name": "Muskegon County Airport",
        "lat": 43.1695,
        "lng": -86.2382
    },
    {
        "code": "MKL",
        "name": "McKellar-Sipes Regional Airport",
        "lat": 35.5999,
        "lng": -88.9156
    },
    {
        "code": "MRK",
        "name": "Marco Island Executive Airport",
        "lat": 25.995,
        "lng": -81.6725
    },
    {
        "code": "MLB",
        "name": "Melbourne International Airport",
        "lat": 28.1028,
        "lng": -80.6453
    },
    {
        "code": "MLC",
        "name": "Mc Alester Regional Airport",
        "lat": 34.8824,
        "lng": -95.7835
    },
    {
        "code": "MLI",
        "name": "Quad City International Airport",
        "lat": 41.4485,
        "lng": -90.5075
    },
    {
        "code": "MLS",
        "name": "Frank Wiley Field",
        "lat": 46.428,
        "lng": -105.886
    },
    {
        "code": "MLU",
        "name": "Monroe Regional Airport",
        "lat": 32.5109,
        "lng": -92.0377
    },
    {
        "code": "MMH",
        "name": "Mammoth Yosemite Airport",
        "lat": 37.6241,
        "lng": -118.838
    },
    {
        "code": "MMI",
        "name": "McMinn County Airport",
        "lat": 35.3973,
        "lng": -84.5626
    },
    {
        "code": "MML",
        "name": "Southwest Minnesota Regional Airport - Marshall/Ryan Field",
        "lat": 44.4505,
        "lng": -95.8219
    },
    {
        "code": "MMS",
        "name": "Selfs Airport",
        "lat": 34.2315,
        "lng": -90.2896
    },
    {
        "code": "MMT",
        "name": "Mc Entire Joint National Guard Base",
        "lat": 33.9208,
        "lng": -80.8013
    },
    {
        "code": "MMU",
        "name": "Morristown Municipal Airport",
        "lat": 40.7994,
        "lng": -74.4149
    },
    {
        "code": "KMMV",
        "name": "Mc Minnville Municipal Airport",
        "lat": 45.1944,
        "lng": -123.136
    },
    {
        "code": "MNM",
        "name": "Menominee Regional Airport",
        "lat": 45.1267,
        "lng": -87.6384
    },
    {
        "code": "MNN",
        "name": "Marion Municipal Airport",
        "lat": 40.6162,
        "lng": -83.0635
    },
    {
        "code": "MOB",
        "name": "Mobile Regional Airport",
        "lat": 30.6912,
        "lng": -88.2428
    },
    {
        "code": "MOD",
        "name": "Modesto City Co-Harry Sham Field",
        "lat": 37.6258,
        "lng": -120.954
    },
    {
        "code": "MOT",
        "name": "Minot International Airport",
        "lat": 48.2594,
        "lng": -101.28
    },
    {
        "code": "RMY",
        "name": "Mariposa Yosemite Airport",
        "lat": 37.5109,
        "lng": -120.04
    },
    {
        "code": "MPJ",
        "name": "Petit Jean Park Airport",
        "lat": 35.1389,
        "lng": -92.9092
    },
    {
        "code": "MPO",
        "name": "Pocono Mountains Municipal Airport",
        "lat": 41.1375,
        "lng": -75.3789
    },
    {
        "code": "MPV",
        "name": "Edward F Knapp State Airport",
        "lat": 44.2035,
        "lng": -72.5623
    },
    {
        "code": "MPZ",
        "name": "Mount Pleasant Municipal Airport",
        "lat": 40.9466,
        "lng": -91.5111
    },
    {
        "code": "MQB",
        "name": "Macomb Municipal Airport",
        "lat": 40.5201,
        "lng": -90.6524
    },
    {
        "code": "MEO",
        "name": "Dare County Regional Airport",
        "lat": 35.919,
        "lng": -75.6955
    },
    {
        "code": "CTH",
        "name": "Chester County G O Carlson Airport",
        "lat": 39.979,
        "lng": -75.8655
    },
    {
        "code": "MQY",
        "name": "Smyrna Airport",
        "lat": 36.009,
        "lng": -86.5201
    },
    {
        "code": "MRB",
        "name": "Eastern WV Regional Airport/Shepherd Field",
        "lat": 39.4019,
        "lng": -77.9846
    },
    {
        "code": "MRC",
        "name": "Maury County Airport",
        "lat": 35.5541,
        "lng": -87.1789
    },
    {
        "code": "MRF",
        "name": "Marfa Municipal Airport",
        "lat": 30.3711,
        "lng": -104.018
    },
    {
        "code": "MRN",
        "name": "Foothills Regional Airport",
        "lat": 35.8202,
        "lng": -81.6114
    },
    {
        "code": "MRY",
        "name": "Monterey Peninsula Airport",
        "lat": 36.587,
        "lng": -121.843
    },
    {
        "code": "MSL",
        "name": "Northwest Alabama Regional Airport",
        "lat": 34.7453,
        "lng": -87.6102
    },
    {
        "code": "MSN",
        "name": "Dane County Regional Truax Field",
        "lat": 43.1399,
        "lng": -89.3375
    },
    {
        "code": "MSO",
        "name": "Missoula International Airport",
        "lat": 46.9163,
        "lng": -114.091
    },
    {
        "code": "MSP",
        "name": "Minneapolis-St Paul International/Wold-Chamberlain Airport",
        "lat": 44.882,
        "lng": -93.2218
    },
    {
        "code": "MSS",
        "name": "Massena International Richards Field",
        "lat": 44.9358,
        "lng": -74.8456
    },
    {
        "code": "MSV",
        "name": "Sullivan County International Airport",
        "lat": 41.7016,
        "lng": -74.795
    },
    {
        "code": "MSY",
        "name": "Louis Armstrong New Orleans International Airport",
        "lat": 29.9934,
        "lng": -90.258
    },
    {
        "code": "MTC",
        "name": "Selfridge Air National Guard Base Airport",
        "lat": 42.6135,
        "lng": -82.8369
    },
    {
        "code": "MTH",
        "name": "The Florida Keys Marathon Airport",
        "lat": 24.7261,
        "lng": -81.0514
    },
    {
        "code": "MTJ",
        "name": "Montrose Regional Airport",
        "lat": 38.5098,
        "lng": -107.894
    },
    {
        "code": "MTN",
        "name": "Martin State Airport",
        "lat": 39.3257,
        "lng": -76.4138
    },
    {
        "code": "MTO",
        "name": "Coles County Memorial Airport",
        "lat": 39.4779,
        "lng": -88.2792
    },
    {
        "code": "MTP",
        "name": "Montauk Airport",
        "lat": 41.0765,
        "lng": -71.9208
    },
    {
        "code": "MTW",
        "name": "Manitowoc County Airport",
        "lat": 44.1288,
        "lng": -87.6806
    },
    {
        "code": "MUI",
        "name": "Muir Army Air Field (Fort Indiantown Gap) Airport",
        "lat": 40.4348,
        "lng": -76.5694
    },
    {
        "code": "MUO",
        "name": "Mountain Home Air Force Base",
        "lat": 43.0436,
        "lng": -115.872
    },
    {
        "code": "MUT",
        "name": "Muscatine Municipal Airport",
        "lat": 41.3678,
        "lng": -91.1482
    },
    {
        "code": "MVC",
        "name": "Monroe County Aeroplex Airport",
        "lat": 31.458,
        "lng": -87.351
    },
    {
        "code": "MVE",
        "name": "Montevideo Chippewa County Airport",
        "lat": 44.9691,
        "lng": -95.7103
    },
    {
        "code": "MVL",
        "name": "Morrisville Stowe State Airport",
        "lat": 44.5346,
        "lng": -72.614
    },
    {
        "code": "MVY",
        "name": "Martha's Vineyard Airport",
        "lat": 41.3931,
        "lng": -70.6143
    },
    {
        "code": "MWA",
        "name": "Williamson County Regional Airport",
        "lat": 37.755,
        "lng": -89.0111
    },
    {
        "code": "MWC",
        "name": "Lawrence J Timmerman Airport",
        "lat": 43.1104,
        "lng": -88.0344
    },
    {
        "code": "MWH",
        "name": "Grant County International Airport",
        "lat": 47.2077,
        "lng": -119.32
    },
    {
        "code": "MWL",
        "name": "Mineral Wells Regional Airport",
        "lat": 32.7816,
        "lng": -98.0602
    },
    {
        "code": "MWO",
        "name": "Middletown Regional Airport",
        "lat": 39.531,
        "lng": -84.3953
    },
    {
        "code": "MXA",
        "name": "Manila Municipal Airport",
        "lat": 35.8944,
        "lng": -90.1546
    },
    {
        "code": "MXF",
        "name": "Maxwell Air Force Base",
        "lat": 32.3829,
        "lng": -86.3658
    },
    {
        "code": "MYF",
        "name": "Montgomery-Gibbs Executive Airport",
        "lat": 32.8157,
        "lng": -117.14
    },
    {
        "code": "MYL",
        "name": "McCall Municipal Airport",
        "lat": 44.8897,
        "lng": -116.101
    },
    {
        "code": "MYR",
        "name": "Myrtle Beach International Airport",
        "lat": 33.6797,
        "lng": -78.9283
    },
    {
        "code": "MYV",
        "name": "Yuba County Airport",
        "lat": 39.0978,
        "lng": -121.57
    },
    {
        "code": "MZJ",
        "name": "Pinal Airpark",
        "lat": 32.5106,
        "lng": -111.328
    },
    {
        "code": "MZZ",
        "name": "Marion Municipal Airport",
        "lat": 40.4899,
        "lng": -85.6797
    },
    {
        "code": "CTX",
        "name": "Cortland County Chase Field",
        "lat": 42.5926,
        "lng": -76.2149
    },
    {
        "code": "SXY",
        "name": "Sidney Municipal Airport",
        "lat": 42.3026,
        "lng": -75.416
    },
    {
        "code": "ESP",
        "name": "Stroudsburg Pocono Airport",
        "lat": 41.0358,
        "lng": -75.1606
    },
    {
        "code": "KNBC",
        "name": "Beaufort MCAS - Merritt Field",
        "lat": 32.4774,
        "lng": -80.7232
    },
    {
        "code": "NBG",
        "name": "New Orleans NAS JRB/Alvin Callender Field",
        "lat": 29.8253,
        "lng": -90.035
    },
    {
        "code": "NHX",
        "name": "Naval Outlying Field Barin",
        "lat": 30.3891,
        "lng": -87.6353
    },
    {
        "code": "KNCA",
        "name": "New River MCAS /H/ /Mccutcheon Fld/ Airport",
        "lat": 34.7084,
        "lng": -77.4397
    },
    {
        "code": "DGN",
        "name": "Dahlgren Naval Surface Warfare Center Airport",
        "lat": 38.3325,
        "lng": -77.0372
    },
    {
        "code": "KNDZ",
        "name": "Whiting Field Naval Air Station South Airport",
        "lat": 30.7044,
        "lng": -87.023
    },
    {
        "code": "NEL",
        "name": "Lakehurst Maxfield Field Airport",
        "lat": 40.0333,
        "lng": -74.3533
    },
    {
        "code": "NEN",
        "name": "Whitehouse Naval Outlying Field",
        "lat": 30.3539,
        "lng": -81.8719
    },
    {
        "code": "NEW",
        "name": "Lakefront Airport",
        "lat": 30.0424,
        "lng": -90.0283
    },
    {
        "code": "KNFG",
        "name": "Camp Pendleton MCAS (Munn Field) Airport",
        "lat": 33.3013,
        "lng": -117.355
    },
    {
        "code": "NFL",
        "name": "Fallon Naval Air Station",
        "lat": 39.4166,
        "lng": -118.701
    },
    {
        "code": "FWH",
        "name": "NAS Fort Worth JRB/Carswell Field",
        "lat": 32.7692,
        "lng": -97.4415
    },
    {
        "code": "KNGP",
        "name": "Corpus Christi Naval Air Station/Truax Field",
        "lat": 27.6926,
        "lng": -97.2911
    },
    {
        "code": "NGU",
        "name": "Norfolk Naval Station (Chambers Field)",
        "lat": 36.9376,
        "lng": -76.2893
    },
    {
        "code": "NGZ",
        "name": "Alameda Naval Air Station",
        "lat": 37.7889,
        "lng": -122.32
    },
    {
        "code": "NHK",
        "name": "Patuxent River Naval Air Station (Trapnell Field)",
        "lat": 38.286,
        "lng": -76.4118
    },
    {
        "code": "NHZ",
        "name": "Brunswick Executive Airport",
        "lat": 43.8922,
        "lng": -69.9386
    },
    {
        "code": "KNID",
        "name": "China Lake Naws (Armitage Field) Airport",
        "lat": 35.6854,
        "lng": -117.692
    },
    {
        "code": "NIP",
        "name": "Jacksonville Naval Air Station (Towers Field)",
        "lat": 30.2358,
        "lng": -81.6806
    },
    {
        "code": "NJK",
        "name": "El Centro NAF Airport (Vraciu Field)",
        "lat": 32.8292,
        "lng": -115.672
    },
    {
        "code": "KNKT",
        "name": "Cherry Point MCAS /Cunningham Field/",
        "lat": 34.9009,
        "lng": -76.8807
    },
    {
        "code": "NKX",
        "name": "Miramar Marine Corps Air Station - Mitscher Field",
        "lat": 32.8684,
        "lng": -117.143
    },
    {
        "code": "NLC",
        "name": "Lemoore Naval Air Station (Reeves Field) Airport",
        "lat": 36.333,
        "lng": -119.952
    },
    {
        "code": "KNMM",
        "name": "Meridian Naval Air Station",
        "lat": 32.5521,
        "lng": -88.5556
    },
    {
        "code": "NPA",
        "name": "Pensacola Naval Air Station/Forrest Sherman Field",
        "lat": 30.3527,
        "lng": -87.3186
    },
    {
        "code": "NQA",
        "name": "Millington-Memphis Airport",
        "lat": 35.3567,
        "lng": -89.8703
    },
    {
        "code": "NQI",
        "name": "Kingsville Naval Air Station",
        "lat": 27.5072,
        "lng": -97.8097
    },
    {
        "code": "NQX",
        "name": "Naval Air Station Key West/Boca Chica Field",
        "lat": 24.5758,
        "lng": -81.6889
    },
    {
        "code": "NRB",
        "name": "Naval Station Mayport (Admiral David L. Mcdonald Field)",
        "lat": 30.3911,
        "lng": -81.4247
    },
    {
        "code": "NRS",
        "name": "Naval Outlying Field Imperial Beach (Ream Field)",
        "lat": 32.5667,
        "lng": -117.117
    },
    {
        "code": "NSE",
        "name": "Whiting Field Naval Air Station - North",
        "lat": 30.7242,
        "lng": -87.0219
    },
    {
        "code": "NTD",
        "name": "Point Mugu Naval Air Station (Naval Base Ventura Co)",
        "lat": 34.1203,
        "lng": -119.121
    },
    {
        "code": "NTU",
        "name": "Oceana Naval Air Station",
        "lat": 36.8207,
        "lng": -76.0335
    },
    {
        "code": "NUQ",
        "name": "Moffett Federal Airfield",
        "lat": 37.4161,
        "lng": -122.049
    },
    {
        "code": "NUW",
        "name": "Whidbey Island Naval Air Station (Ault Field)",
        "lat": 48.3518,
        "lng": -122.656
    },
    {
        "code": "KNXP",
        "name": "Twentynine Palms (Self) Airport",
        "lat": 34.2962,
        "lng": -116.162
    },
    {
        "code": "KNYG",
        "name": "Quantico MCAF /Turner field",
        "lat": 38.5017,
        "lng": -77.3053
    },
    {
        "code": "YUM",
        "name": "Yuma MCAS/Yuma International Airport",
        "lat": 32.6566,
        "lng": -114.606
    },
    {
        "code": "NZY",
        "name": "North Island Naval Air Station-Halsey Field",
        "lat": 32.6992,
        "lng": -117.215
    },
    {
        "code": "NVN",
        "name": "Nervino Airport",
        "lat": 39.8185,
        "lng": -120.353
    },
    {
        "code": "COA",
        "name": "Columbia Airport",
        "lat": 38.0304,
        "lng": -120.415
    },
    {
        "code": "ODC",
        "name": "Oakdale Airport",
        "lat": 37.7563,
        "lng": -120.8
    },
    {
        "code": "EYR",
        "name": "Yerington Municipal Airport",
        "lat": 39.0041,
        "lng": -119.158
    },
    {
        "code": "OAJ",
        "name": "Albert J Ellis Airport",
        "lat": 34.8292,
        "lng": -77.6121
    },
    {
        "code": "OAK",
        "name": "Metropolitan Oakland International Airport",
        "lat": 37.7213,
        "lng": -122.221
    },
    {
        "code": "OAR",
        "name": "Marina Municipal Airport",
        "lat": 36.6819,
        "lng": -121.762
    },
    {
        "code": "OBE",
        "name": "Okeechobee County Airport",
        "lat": 27.2628,
        "lng": -80.8498
    },
    {
        "code": "OCF",
        "name": "Ocala International Airport - Jim Taylor Field",
        "lat": 29.1726,
        "lng": -82.2242
    },
    {
        "code": "OCH",
        "name": "A L Mangham Jr. Regional Airport",
        "lat": 31.578,
        "lng": -94.7095
    },
    {
        "code": "OCW",
        "name": "Warren Field",
        "lat": 35.5705,
        "lng": -77.0498
    },
    {
        "code": "OEA",
        "name": "O'Neal Airport",
        "lat": 38.6914,
        "lng": -87.5522
    },
    {
        "code": "OEO",
        "name": "L O Simenstad Municipal Airport",
        "lat": 45.31,
        "lng": -92.6919
    },
    {
        "code": "OFF",
        "name": "Offutt Air Force Base",
        "lat": 41.1183,
        "lng": -95.9125
    },
    {
        "code": "OFK",
        "name": "Karl Stefan Memorial Airport",
        "lat": 41.9855,
        "lng": -97.4351
    },
    {
        "code": "OGA",
        "name": "Searle Field",
        "lat": 41.1195,
        "lng": -101.77
    },
    {
        "code": "OGB",
        "name": "Orangeburg Municipal Airport",
        "lat": 33.4568,
        "lng": -80.8595
    },
    {
        "code": "OGD",
        "name": "Ogden Hinckley Airport",
        "lat": 41.1959,
        "lng": -112.012
    },
    {
        "code": "OGS",
        "name": "Ogdensburg International Airport",
        "lat": 44.6819,
        "lng": -75.4655
    },
    {
        "code": "OIC",
        "name": "Lt Warren Eaton Airport",
        "lat": 42.5666,
        "lng": -75.5241
    },
    {
        "code": "OIL",
        "name": "Splane Memorial Airport",
        "lat": 41.4813,
        "lng": -79.7449
    },
    {
        "code": "OJC",
        "name": "Johnson County Executive Airport",
        "lat": 38.8476,
        "lng": -94.7376
    },
    {
        "code": "OCN",
        "name": "Oceanside Municipal Airport",
        "lat": 33.2173,
        "lng": -117.354
    },
    {
        "code": "OKC",
        "name": "Will Rogers World Airport",
        "lat": 35.3931,
        "lng": -97.6007
    },
    {
        "code": "ODW",
        "name": "AJ Eisenberg Airport",
        "lat": 48.2515,
        "lng": -122.674
    },
    {
        "code": "OKK",
        "name": "Kokomo Municipal Airport",
        "lat": 40.5282,
        "lng": -86.059
    },
    {
        "code": "OKM",
        "name": "Okmulgee Regional Airport",
        "lat": 35.6681,
        "lng": -95.9487
    },
    {
        "code": "OKS",
        "name": "Garden County Airport/King Rhiley Field",
        "lat": 41.401,
        "lng": -102.355
    },
    {
        "code": "WGO",
        "name": "Winchester Regional Airport",
        "lat": 39.1435,
        "lng": -78.1444
    },
    {
        "code": "OLD",
        "name": "Dewitt Field,Old Town Municipal Airport",
        "lat": 44.9528,
        "lng": -68.6743
    },
    {
        "code": "OLF",
        "name": "L M Clayton Airport",
        "lat": 48.0945,
        "lng": -105.575
    },
    {
        "code": "OLM",
        "name": "Olympia Regional Airport",
        "lat": 46.9694,
        "lng": -122.903
    },
    {
        "code": "OLS",
        "name": "Nogales International Airport",
        "lat": 31.4177,
        "lng": -110.848
    },
    {
        "code": "KOLU",
        "name": "Columbus Municipal Airport",
        "lat": 41.448,
        "lng": -97.3426
    },
    {
        "code": "OLV",
        "name": "Olive Branch Airport",
        "lat": 34.9787,
        "lng": -89.7869
    },
    {
        "code": "OMA",
        "name": "Eppley Airfield",
        "lat": 41.3032,
        "lng": -95.8941
    },
    {
        "code": "OMK",
        "name": "Omak Airport",
        "lat": 48.4644,
        "lng": -119.518
    },
    {
        "code": "ONL",
        "name": "The O'Neill Municipal John L Baker Field",
        "lat": 42.4699,
        "lng": -98.6881
    },
    {
        "code": "ONO",
        "name": "Ontario Municipal Airport",
        "lat": 44.0205,
        "lng": -117.014
    },
    {
        "code": "ONP",
        "name": "Newport Municipal Airport",
        "lat": 44.5804,
        "lng": -124.058
    },
    {
        "code": "ONT",
        "name": "Ontario International Airport",
        "lat": 34.056,
        "lng": -117.601
    },
    {
        "code": "OPF",
        "name": "Miami-Opa Locka Executive Airport",
        "lat": 25.907,
        "lng": -80.2784
    },
    {
        "code": "NCO",
        "name": "Quonset State Airport",
        "lat": 41.5971,
        "lng": -71.4121
    },
    {
        "code": "ORD",
        "name": "Chicago O'Hare International Airport",
        "lat": 41.9786,
        "lng": -87.9048
    },
    {
        "code": "ORF",
        "name": "Norfolk International Airport",
        "lat": 36.8946,
        "lng": -76.2012
    },
    {
        "code": "ORH",
        "name": "Worcester Regional Airport",
        "lat": 42.2673,
        "lng": -71.8757
    },
    {
        "code": "ORL",
        "name": "Orlando Executive Airport",
        "lat": 28.5455,
        "lng": -81.3329
    },
    {
        "code": "ESD",
        "name": "Orcas Island Airport",
        "lat": 48.7082,
        "lng": -122.91
    },
    {
        "code": "OSC",
        "name": "Oscoda Wurtsmith Airport",
        "lat": 44.4516,
        "lng": -83.3941
    },
    {
        "code": "OSH",
        "name": "Wittman Regional Airport",
        "lat": 43.9844,
        "lng": -88.557
    },
    {
        "code": "OSU",
        "name": "The Ohio State University Airport - Don Scott Field",
        "lat": 40.0798,
        "lng": -83.073
    },
    {
        "code": "OTH",
        "name": "Southwest Oregon Regional Airport",
        "lat": 43.4171,
        "lng": -124.246
    },
    {
        "code": "OTM",
        "name": "Ottumwa Regional Airport",
        "lat": 41.1066,
        "lng": -92.4479
    },
    {
        "code": "OUN",
        "name": "University of Oklahoma Westheimer Airport",
        "lat": 35.2456,
        "lng": -97.4721
    },
    {
        "code": "OVE",
        "name": "Oroville Municipal Airport",
        "lat": 39.4878,
        "lng": -121.622
    },
    {
        "code": "OWA",
        "name": "Owatonna Degner Regional Airport",
        "lat": 44.1234,
        "lng": -93.2606
    },
    {
        "code": "OWB",
        "name": "Owensboro Daviess County Airport",
        "lat": 37.7401,
        "lng": -87.1668
    },
    {
        "code": "OWD",
        "name": "Norwood Memorial Airport",
        "lat": 42.1905,
        "lng": -71.1729
    },
    {
        "code": "OWK",
        "name": "Central Maine Airport of Norridgewock",
        "lat": 44.7155,
        "lng": -69.8665
    },
    {
        "code": "OCE",
        "name": "Ocean City Municipal Airport",
        "lat": 38.3104,
        "lng": -75.124
    },
    {
        "code": "OXC",
        "name": "Waterbury Oxford Airport",
        "lat": 41.4786,
        "lng": -73.1352
    },
    {
        "code": "OXD",
        "name": "Miami University Airport",
        "lat": 39.5023,
        "lng": -84.7844
    },
    {
        "code": "OXR",
        "name": "Oxnard Airport",
        "lat": 34.2008,
        "lng": -119.207
    },
    {
        "code": "KOY",
        "name": "Olga Bay Seaplane Base",
        "lat": 57.1615,
        "lng": -154.23
    },
    {
        "code": "STQ",
        "name": "St Marys Municipal Airport",
        "lat": 41.4125,
        "lng": -78.5026
    },
    {
        "code": "OZA",
        "name": "Ozona Municipal Airport",
        "lat": 30.7353,
        "lng": -101.203
    },
    {
        "code": "OZR",
        "name": "Cairns AAF (Fort Rucker) Air Field",
        "lat": 31.2757,
        "lng": -85.7134
    },
    {
        "code": "BSQ",
        "name": "Bisbee Municipal Airport",
        "lat": 31.364,
        "lng": -109.883
    },
    {
        "code": "PXL",
        "name": "Polacca Airport",
        "lat": 35.7917,
        "lng": -110.423
    },
    {
        "code": "GLB",
        "name": "San Carlos Apache Airport",
        "lat": 33.3531,
        "lng": -110.667
    },
    {
        "code": "HBK",
        "name": "Holbrook Municipal Airport",
        "lat": 34.9407,
        "lng": -110.138
    },
    {
        "code": "CWX",
        "name": "Cochise County Airport",
        "lat": 32.2454,
        "lng": -109.895
    },
    {
        "code": "PAE",
        "name": "Snohomish County (Paine Field) Airport",
        "lat": 47.9063,
        "lng": -122.282
    },
    {
        "code": "PAH",
        "name": "Barkley Regional Airport",
        "lat": 37.0608,
        "lng": -88.7738
    },
    {
        "code": "PAM",
        "name": "Tyndall Air Force Base",
        "lat": 30.0696,
        "lng": -85.5754
    },
    {
        "code": "PJB",
        "name": "Payson Airport",
        "lat": 34.2568,
        "lng": -111.339
    },
    {
        "code": "PAO",
        "name": "Palo Alto Airport of Santa Clara County",
        "lat": 37.4611,
        "lng": -122.115
    },
    {
        "code": "KPB",
        "name": "Point Baker Seaplane Base",
        "lat": 56.3519,
        "lng": -133.623
    },
    {
        "code": "PBF",
        "name": "Pine Bluff Regional Airport, Grider Field",
        "lat": 34.1731,
        "lng": -91.9356
    },
    {
        "code": "PBG",
        "name": "Plattsburgh International Airport",
        "lat": 44.6509,
        "lng": -73.4681
    },
    {
        "code": "PBI",
        "name": "Palm Beach International Airport",
        "lat": 26.6832,
        "lng": -80.0956
    },
    {
        "code": "PVL",
        "name": "Pike County-Hatcher Field",
        "lat": 37.5618,
        "lng": -82.5664
    },
    {
        "code": "PCD",
        "name": "Prairie Du Chien Municipal Airport",
        "lat": 43.0193,
        "lng": -91.1237
    },
    {
        "code": "PDK",
        "name": "DeKalb Peachtree Airport",
        "lat": 33.8756,
        "lng": -84.302
    },
    {
        "code": "PDT",
        "name": "Eastern Oregon Regional At Pendleton Airport",
        "lat": 45.6951,
        "lng": -118.841
    },
    {
        "code": "PDX",
        "name": "Portland International Airport",
        "lat": 45.5887,
        "lng": -122.598
    },
    {
        "code": "PEQ",
        "name": "Pecos Municipal Airport",
        "lat": 31.3824,
        "lng": -103.511
    },
    {
        "code": "PGA",
        "name": "Page Municipal Airport",
        "lat": 36.9261,
        "lng": -111.448
    },
    {
        "code": "PGD",
        "name": "Charlotte County Airport",
        "lat": 26.9202,
        "lng": -81.9905
    },
    {
        "code": "PGR",
        "name": "Kirk Field",
        "lat": 36.0629,
        "lng": -90.5078
    },
    {
        "code": "PGV",
        "name": "Pitt Greenville Airport",
        "lat": 35.6352,
        "lng": -77.3853
    },
    {
        "code": "PHD",
        "name": "Harry Clever Field",
        "lat": 40.4709,
        "lng": -81.4197
    },
    {
        "code": "PHF",
        "name": "Newport News Williamsburg International Airport",
        "lat": 37.1319,
        "lng": -76.493
    },
    {
        "code": "ADR",
        "name": "Robert F Swinnie Airport",
        "lat": 33.4517,
        "lng": -79.5262
    },
    {
        "code": "PHK",
        "name": "Palm Beach County Glades Airport",
        "lat": 26.785,
        "lng": -80.6934
    },
    {
        "code": "PHL",
        "name": "Philadelphia International Airport",
        "lat": 39.8719,
        "lng": -75.2411
    },
    {
        "code": "PHN",
        "name": "St Clair County International Airport",
        "lat": 42.911,
        "lng": -82.5289
    },
    {
        "code": "PHP",
        "name": "Philip Airport",
        "lat": 44.0486,
        "lng": -101.599
    },
    {
        "code": "PHT",
        "name": "Henry County Airport",
        "lat": 36.3382,
        "lng": -88.3829
    },
    {
        "code": "PHX",
        "name": "Phoenix Sky Harbor International Airport",
        "lat": 33.4343,
        "lng": -112.012
    },
    {
        "code": "PIA",
        "name": "General Wayne A. Downing Peoria International Airport",
        "lat": 40.6642,
        "lng": -89.6933
    },
    {
        "code": "PIB",
        "name": "Hattiesburg Laurel Regional Airport",
        "lat": 31.4671,
        "lng": -89.3371
    },
    {
        "code": "PIE",
        "name": "St Petersburg Clearwater International Airport",
        "lat": 27.9102,
        "lng": -82.6874
    },
    {
        "code": "PIH",
        "name": "Pocatello Regional Airport",
        "lat": 42.9098,
        "lng": -112.596
    },
    {
        "code": "PIM",
        "name": "Harris County Airport",
        "lat": 32.8407,
        "lng": -84.8824
    },
    {
        "code": "PIR",
        "name": "Pierre Regional Airport",
        "lat": 44.3827,
        "lng": -100.286
    },
    {
        "code": "PIT",
        "name": "Pittsburgh International Airport",
        "lat": 40.4915,
        "lng": -80.2329
    },
    {
        "code": "PKB",
        "name": "Mid Ohio Valley Regional Airport",
        "lat": 39.3451,
        "lng": -81.4392
    },
    {
        "code": "PKD",
        "name": "Park Rapids Municipal Konshok Field",
        "lat": 46.9006,
        "lng": -95.0731
    },
    {
        "code": "PKF",
        "name": "Park Falls Municipal Airport",
        "lat": 45.955,
        "lng": -90.4244
    },
    {
        "code": "PLB",
        "name": "Clinton County Airport",
        "lat": 44.6875,
        "lng": -73.5245
    },
    {
        "code": "PLK",
        "name": "M. Graham Clark Downtown Airport",
        "lat": 36.6259,
        "lng": -93.2289
    },
    {
        "code": "PLN",
        "name": "Pellston Regional Airport of Emmet County Airport",
        "lat": 45.5709,
        "lng": -84.7967
    },
    {
        "code": "PLR",
        "name": "St Clair County Airport",
        "lat": 33.5588,
        "lng": -86.2491
    },
    {
        "code": "PMB",
        "name": "Pembina Municipal Airport",
        "lat": 48.9425,
        "lng": -97.2408
    },
    {
        "code": "PMD",
        "name": "Palmdale Regional/USAF Plant 42 Airport",
        "lat": 34.6294,
        "lng": -118.085
    },
    {
        "code": "PMH",
        "name": "Greater Portsmouth Regional Airport",
        "lat": 38.8405,
        "lng": -82.8473
    },
    {
        "code": "PPM",
        "name": "Pompano Beach Airpark",
        "lat": 26.2471,
        "lng": -80.1111
    },
    {
        "code": "PWY",
        "name": "Ralph Wenz Field",
        "lat": 42.7955,
        "lng": -109.807
    },
    {
        "code": "PNC",
        "name": "Ponca City Regional Airport",
        "lat": 36.732,
        "lng": -97.0998
    },
    {
        "code": "PNE",
        "name": "Northeast Philadelphia Airport",
        "lat": 40.0819,
        "lng": -75.0106
    },
    {
        "code": "PNN",
        "name": "Princeton Municipal Airport",
        "lat": 45.2007,
        "lng": -67.5644
    },
    {
        "code": "PNS",
        "name": "Pensacola International Airport",
        "lat": 30.4734,
        "lng": -87.1866
    },
    {
        "code": "POB",
        "name": "Pope Field",
        "lat": 35.1709,
        "lng": -79.0145
    },
    {
        "code": "POC",
        "name": "Brackett Field",
        "lat": 34.0916,
        "lng": -117.782
    },
    {
        "code": "POE",
        "name": "Polk Army Air Field",
        "lat": 31.0448,
        "lng": -93.1917
    },
    {
        "code": "POF",
        "name": "Poplar Bluff Municipal Airport",
        "lat": 36.7739,
        "lng": -90.3249
    },
    {
        "code": "POU",
        "name": "Dutchess County Airport",
        "lat": 41.6266,
        "lng": -73.8842
    },
    {
        "code": "POY",
        "name": "Powell Municipal Airport",
        "lat": 44.8672,
        "lng": -108.793
    },
    {
        "code": "PPA",
        "name": "Perry Lefors Field",
        "lat": 35.613,
        "lng": -100.996
    },
    {
        "code": "PPF",
        "name": "Tri-City Airport",
        "lat": 37.3299,
        "lng": -95.5062
    },
    {
        "code": "LPO",
        "name": "La Porte Municipal Airport",
        "lat": 41.5725,
        "lng": -86.7345
    },
    {
        "code": "PQI",
        "name": "Presque Isle International Airport",
        "lat": 46.689,
        "lng": -68.0448
    },
    {
        "code": "PGL",
        "name": "Trent Lott International Airport",
        "lat": 30.4628,
        "lng": -88.5292
    },
    {
        "code": "KPR",
        "name": "Port Williams Seaplane Base",
        "lat": 58.4901,
        "lng": -152.582
    },
    {
        "code": "PRB",
        "name": "Paso Robles Municipal Airport",
        "lat": 35.6729,
        "lng": -120.627
    },
    {
        "code": "PRC",
        "name": "Prescott Regional Airport - Ernest A. Love Field",
        "lat": 34.6545,
        "lng": -112.42
    },
    {
        "code": "PRO",
        "name": "Perry Municipal Airport",
        "lat": 41.828,
        "lng": -94.1599
    },
    {
        "code": "PRX",
        "name": "Cox Field",
        "lat": 33.6366,
        "lng": -95.4508
    },
    {
        "code": "PSC",
        "name": "Tri Cities Airport",
        "lat": 46.2647,
        "lng": -119.119
    },
    {
        "code": "PSF",
        "name": "Pittsfield Municipal Airport",
        "lat": 42.4268,
        "lng": -73.2929
    },
    {
        "code": "PSK",
        "name": "New River Valley Airport",
        "lat": 37.1373,
        "lng": -80.6785
    },
    {
        "code": "PSM",
        "name": "Portsmouth International at Pease Airport",
        "lat": 43.0779,
        "lng": -70.8233
    },
    {
        "code": "PSN",
        "name": "Palestine Municipal Airport",
        "lat": 31.7797,
        "lng": -95.7063
    },
    {
        "code": "PGO",
        "name": "Stevens Field",
        "lat": 37.2863,
        "lng": -107.056
    },
    {
        "code": "PSP",
        "name": "Palm Springs International Airport",
        "lat": 33.8297,
        "lng": -116.507
    },
    {
        "code": "PSX",
        "name": "Palacios Municipal Airport",
        "lat": 28.7275,
        "lng": -96.251
    },
    {
        "code": "PTB",
        "name": "Dinwiddie County Airport",
        "lat": 37.1838,
        "lng": -77.5074
    },
    {
        "code": "PTK",
        "name": "Oakland County International Airport",
        "lat": 42.6655,
        "lng": -83.4201
    },
    {
        "code": "PTN",
        "name": "Harry P Williams Memorial Airport",
        "lat": 29.7095,
        "lng": -91.339
    },
    {
        "code": "PTT",
        "name": "Pratt Regional Airport",
        "lat": 37.7016,
        "lng": -98.7469
    },
    {
        "code": "PTV",
        "name": "Porterville Municipal Airport",
        "lat": 36.0296,
        "lng": -119.063
    },
    {
        "code": "PTW",
        "name": "Heritage Field",
        "lat": 40.2396,
        "lng": -75.5567
    },
    {
        "code": "PUB",
        "name": "Pueblo Memorial Airport",
        "lat": 38.2891,
        "lng": -104.497
    },
    {
        "code": "PUC",
        "name": "Carbon County Regional/Buck Davis Field",
        "lat": 39.6139,
        "lng": -110.751
    },
    {
        "code": "PUW",
        "name": "Pullman Moscow Regional Airport",
        "lat": 46.7439,
        "lng": -117.11
    },
    {
        "code": "PVC",
        "name": "Provincetown Municipal Airport",
        "lat": 42.0719,
        "lng": -70.2214
    },
    {
        "code": "PVD",
        "name": "Theodore Francis Green State Airport",
        "lat": 41.7326,
        "lng": -71.4204
    },
    {
        "code": "PVF",
        "name": "Placerville Airport",
        "lat": 38.7242,
        "lng": -120.753
    },
    {
        "code": "PVU",
        "name": "Provo Municipal Airport",
        "lat": 40.2192,
        "lng": -111.723
    },
    {
        "code": "PVW",
        "name": "Hale County Airport",
        "lat": 34.1681,
        "lng": -101.717
    },
    {
        "code": "PVZ",
        "name": "Casement Airport",
        "lat": 41.7336,
        "lng": -81.2192
    },
    {
        "code": "PWA",
        "name": "Wiley Post Airport",
        "lat": 35.5342,
        "lng": -97.6471
    },
    {
        "code": "PWD",
        "name": "Sher-Wood Airport",
        "lat": 48.7903,
        "lng": -104.534
    },
    {
        "code": "PWK",
        "name": "Chicago Executive Airport",
        "lat": 42.1142,
        "lng": -87.9015
    },
    {
        "code": "PWM",
        "name": "Portland International Jetport",
        "lat": 43.6462,
        "lng": -70.3093
    },
    {
        "code": "PWT",
        "name": "Bremerton National Airport",
        "lat": 47.4902,
        "lng": -122.765
    },
    {
        "code": "KPY",
        "name": "Port Bailey Seaplane Base",
        "lat": 57.9301,
        "lng": -153.041
    },
    {
        "code": "PYM",
        "name": "Plymouth Municipal Airport",
        "lat": 41.909,
        "lng": -70.7288
    },
    {
        "code": "KQA",
        "name": "Akutan Seaplane Base",
        "lat": 54.1338,
        "lng": -165.7789
    },
    {
        "code": "RAC",
        "name": "John H Batten Airport",
        "lat": 42.7606,
        "lng": -87.8152
    },
    {
        "code": "RAL",
        "name": "Riverside Municipal Airport",
        "lat": 33.9519,
        "lng": -117.445
    },
    {
        "code": "RAP",
        "name": "Rapid City Regional Airport",
        "lat": 44.0453,
        "lng": -103.057
    },
    {
        "code": "RBD",
        "name": "Dallas Executive Airport",
        "lat": 32.6809,
        "lng": -96.8682
    },
    {
        "code": "RBG",
        "name": "Roseburg Regional Airport",
        "lat": 43.2388,
        "lng": -123.356
    },
    {
        "code": "RBL",
        "name": "Red Bluff Municipal Airport",
        "lat": 40.1507,
        "lng": -122.252
    },
    {
        "code": "RBW",
        "name": "Lowcountry Regional Airport",
        "lat": 32.921,
        "lng": -80.6406
    },
    {
        "code": "RCA",
        "name": "Ellsworth Air Force Base",
        "lat": 44.145,
        "lng": -103.104
    },
    {
        "code": "RCK",
        "name": "H H Coffield Regional Airport",
        "lat": 30.6316,
        "lng": -96.9897
    },
    {
        "code": "RCR",
        "name": "Fulton County Airport",
        "lat": 41.0656,
        "lng": -86.1817
    },
    {
        "code": "RCT",
        "name": "Nartron Field",
        "lat": 43.9,
        "lng": -85.5167
    },
    {
        "code": "RDD",
        "name": "Redding Municipal Airport",
        "lat": 40.509,
        "lng": -122.293
    },
    {
        "code": "RDG",
        "name": "Reading Regional Carl A Spaatz Field",
        "lat": 40.3785,
        "lng": -75.9652
    },
    {
        "code": "RDM",
        "name": "Roberts Field",
        "lat": 44.2541,
        "lng": -121.15
    },
    {
        "code": "RDR",
        "name": "Grand Forks Air Force Base",
        "lat": 47.9611,
        "lng": -97.4012
    },
    {
        "code": "RDU",
        "name": "Raleigh Durham International Airport",
        "lat": 35.8776,
        "lng": -78.7875
    },
    {
        "code": "REO",
        "name": "Rome State Airport",
        "lat": 42.5777,
        "lng": -117.885
    },
    {
        "code": "RFD",
        "name": "Chicago Rockford International Airport",
        "lat": 42.1954,
        "lng": -89.0972
    },
    {
        "code": "RFG",
        "name": "Rooke Field",
        "lat": 28.2936,
        "lng": -97.323
    },
    {
        "code": "RHI",
        "name": "Rhinelander Oneida County Airport",
        "lat": 45.6312,
        "lng": -89.4675
    },
    {
        "code": "RHV",
        "name": "Reid-Hillview Airport of Santa Clara County",
        "lat": 37.3329,
        "lng": -121.819
    },
    {
        "code": "RIC",
        "name": "Richmond International Airport",
        "lat": 37.5052,
        "lng": -77.3197
    },
    {
        "code": "RIL",
        "name": "Garfield County Regional Airport",
        "lat": 39.5263,
        "lng": -107.727
    },
    {
        "code": "RIV",
        "name": "March ARB Airport",
        "lat": 33.8807,
        "lng": -117.259
    },
    {
        "code": "RIW",
        "name": "Riverton Regional Airport",
        "lat": 43.0642,
        "lng": -108.46
    },
    {
        "code": "RKD",
        "name": "Knox County Regional Airport",
        "lat": 44.0601,
        "lng": -69.0992
    },
    {
        "code": "RKP",
        "name": "Aransas County Airport",
        "lat": 28.0868,
        "lng": -97.0446
    },
    {
        "code": "RKS",
        "name": "Southwest Wyoming Regional Airport",
        "lat": 41.5942,
        "lng": -109.065
    },
    {
        "code": "RKW",
        "name": "Rockwood Municipal Airport",
        "lat": 35.9223,
        "lng": -84.6897
    },
    {
        "code": "RME",
        "name": "Griffiss International Airport",
        "lat": 43.2338,
        "lng": -75.407
    },
    {
        "code": "RMG",
        "name": "Richard B Russell Airport",
        "lat": 34.3506,
        "lng": -85.158
    },
    {
        "code": "RNC",
        "name": "Warren County Memorial Airport",
        "lat": 35.6987,
        "lng": -85.8438
    },
    {
        "code": "RND",
        "name": "Randolph Air Force Base",
        "lat": 29.5297,
        "lng": -98.2789
    },
    {
        "code": "KRNH",
        "name": "New Richmond Regional Airport",
        "lat": 45.1483,
        "lng": -92.5381
    },
    {
        "code": "RNO",
        "name": "Reno Tahoe International Airport",
        "lat": 39.4991,
        "lng": -119.768
    },
    {
        "code": "RNT",
        "name": "Renton Municipal Airport",
        "lat": 47.4931,
        "lng": -122.216
    },
    {
        "code": "ROA",
        "name": "Roanoke\u2013Blacksburg Regional Airport",
        "lat": 37.3255,
        "lng": -79.9754
    },
    {
        "code": "ROC",
        "name": "Greater Rochester International Airport",
        "lat": 43.1189,
        "lng": -77.6724
    },
    {
        "code": "ROG",
        "name": "Rogers Municipal Airport-Carter Field",
        "lat": 36.3723,
        "lng": -94.1069
    },
    {
        "code": "ROW",
        "name": "Roswell Air Center Airport",
        "lat": 33.3016,
        "lng": -104.531
    },
    {
        "code": "ROX",
        "name": "Roseau Municipal Rudy Billberg Field",
        "lat": 48.856,
        "lng": -95.697
    },
    {
        "code": "RIE",
        "name": "Rice Lake Regional Airport - Carl's Field",
        "lat": 45.419,
        "lng": -91.7735
    },
    {
        "code": "RPX",
        "name": "Roundup Airport",
        "lat": 46.4751,
        "lng": -108.5415
    },
    {
        "code": "WBR",
        "name": "Roben Hood Airport",
        "lat": 43.7226,
        "lng": -85.5041
    },
    {
        "code": "RQO",
        "name": "El Reno Regional Airport",
        "lat": 35.4727,
        "lng": -98.0058
    },
    {
        "code": "RRL",
        "name": "Merrill Municipal Airport",
        "lat": 45.1989,
        "lng": -89.7129
    },
    {
        "code": "RRT",
        "name": "Warroad International Memorial Airport",
        "lat": 48.9414,
        "lng": -95.3484
    },
    {
        "code": "RSL",
        "name": "Russell Municipal Airport",
        "lat": 38.8721,
        "lng": -98.8118
    },
    {
        "code": "RSN",
        "name": "Ruston Regional Airport",
        "lat": 32.5144,
        "lng": -92.5917
    },
    {
        "code": "RST",
        "name": "Rochester International Airport",
        "lat": 43.9083,
        "lng": -92.5
    },
    {
        "code": "RSW",
        "name": "Southwest Florida International Airport",
        "lat": 26.5362,
        "lng": -81.7552
    },
    {
        "code": "RTN",
        "name": "Raton Municipal Airport / Crews Field",
        "lat": 36.7415,
        "lng": -104.502
    },
    {
        "code": "SRW",
        "name": "Mid-Carolina Regional Airport",
        "lat": 35.6459,
        "lng": -80.5203
    },
    {
        "code": "RUT",
        "name": "Rutland - Southern Vermont Regional Airport",
        "lat": 43.5294,
        "lng": -72.9496
    },
    {
        "code": "RED",
        "name": "Mifflin County Airport",
        "lat": 40.6774,
        "lng": -77.6268
    },
    {
        "code": "RVS",
        "name": "Richard Lloyd Jones Jr Airport",
        "lat": 36.0396,
        "lng": -95.9846
    },
    {
        "code": "RWF",
        "name": "Redwood Falls Municipal Airport",
        "lat": 44.5472,
        "lng": -95.0823
    },
    {
        "code": "RWI",
        "name": "Rocky Mount Wilson Regional Airport",
        "lat": 35.8563,
        "lng": -77.8919
    },
    {
        "code": "RWL",
        "name": "Rawlins Municipal Airport/Harvey Field",
        "lat": 41.8056,
        "lng": -107.2
    },
    {
        "code": "RXE",
        "name": "Rexburg Madison County Airport",
        "lat": 43.8339,
        "lng": -111.805
    },
    {
        "code": "KRYY",
        "name": "Cobb County-Mc Collum Field",
        "lat": 34.0132,
        "lng": -84.5986
    },
    {
        "code": "RNZ",
        "name": "Jasper County Airport",
        "lat": 40.9479,
        "lng": -87.1826
    },
    {
        "code": "RZZ",
        "name": "Halifax County Airport",
        "lat": 36.4395,
        "lng": -77.7093
    },
    {
        "code": "AHM",
        "name": "Ashland Municipal Sumner Parker Field",
        "lat": 42.1903,
        "lng": -122.661
    },
    {
        "code": "BDY",
        "name": "Bandon State Airport",
        "lat": 43.0865,
        "lng": -124.408
    },
    {
        "code": "SUO",
        "name": "Sunriver Airport",
        "lat": 43.8763,
        "lng": -121.453
    },
    {
        "code": "MDJ",
        "name": "Madras Municipal Airport",
        "lat": 44.6702,
        "lng": -121.155
    },
    {
        "code": "PRZ",
        "name": "Prineville Airport",
        "lat": 44.287,
        "lng": -120.904
    },
    {
        "code": "IDH",
        "name": "Idaho County Airport",
        "lat": 45.9426,
        "lng": -116.123
    },
    {
        "code": "SAA",
        "name": "Shively Field",
        "lat": 41.4449,
        "lng": -106.824
    },
    {
        "code": "SAC",
        "name": "Sacramento Executive Airport",
        "lat": 38.5125,
        "lng": -121.493
    },
    {
        "code": "SAD",
        "name": "Safford Regional Airport",
        "lat": 32.8548,
        "lng": -109.635
    },
    {
        "code": "SAF",
        "name": "Santa Fe Municipal Airport",
        "lat": 35.6171,
        "lng": -106.089
    },
    {
        "code": "SAN",
        "name": "San Diego International Airport",
        "lat": 32.7336,
        "lng": -117.19
    },
    {
        "code": "SAR",
        "name": "Sparta Community Hunter Field",
        "lat": 38.1489,
        "lng": -89.6987
    },
    {
        "code": "SAT",
        "name": "San Antonio International Airport",
        "lat": 29.5337,
        "lng": -98.4698
    },
    {
        "code": "SAV",
        "name": "Savannah Hilton Head International Airport",
        "lat": 32.1276,
        "lng": -81.2021
    },
    {
        "code": "MQT",
        "name": "Sawyer International Airport",
        "lat": 46.3536,
        "lng": -87.3954
    },
    {
        "code": "SBA",
        "name": "Santa Barbara Municipal Airport",
        "lat": 34.4262,
        "lng": -119.84
    },
    {
        "code": "SBD",
        "name": "San Bernardino International Airport",
        "lat": 34.0954,
        "lng": -117.235
    },
    {
        "code": "SBM",
        "name": "Sheboygan County Memorial Airport",
        "lat": 43.7696,
        "lng": -87.8514
    },
    {
        "code": "SBN",
        "name": "South Bend Regional Airport",
        "lat": 41.7087,
        "lng": -86.3173
    },
    {
        "code": "SBP",
        "name": "San Luis County Regional Airport",
        "lat": 35.2368,
        "lng": -120.642
    },
    {
        "code": "SBS",
        "name": "Steamboat Springs Bob Adams Field",
        "lat": 40.5163,
        "lng": -106.866
    },
    {
        "code": "SBX",
        "name": "Shelby Airport",
        "lat": 48.5407,
        "lng": -111.871
    },
    {
        "code": "SBY",
        "name": "Salisbury Ocean City Wicomico Regional Airport",
        "lat": 38.3405,
        "lng": -75.5103
    },
    {
        "code": "SCB",
        "name": "Scribner State Airport",
        "lat": 41.6103,
        "lng": -96.6299
    },
    {
        "code": "SCH",
        "name": "Schenectady County Airport",
        "lat": 42.8525,
        "lng": -73.9289
    },
    {
        "code": "SCK",
        "name": "Stockton Metropolitan Airport",
        "lat": 37.8942,
        "lng": -121.238
    },
    {
        "code": "SDF",
        "name": "Louisville Muhammad Ali International Airport",
        "lat": 38.1744,
        "lng": -85.736
    },
    {
        "code": "SCF",
        "name": "Scottsdale Airport",
        "lat": 33.6229,
        "lng": -111.911
    },
    {
        "code": "SDM",
        "name": "Brown Field Municipal Airport",
        "lat": 32.5723,
        "lng": -116.98
    },
    {
        "code": "SDY",
        "name": "Sidney - Richland Regional Airport",
        "lat": 47.7069,
        "lng": -104.193
    },
    {
        "code": "SEA",
        "name": "Seattle Tacoma International Airport",
        "lat": 47.449,
        "lng": -122.309
    },
    {
        "code": "SEE",
        "name": "Gillespie Field",
        "lat": 32.8262,
        "lng": -116.972
    },
    {
        "code": "SEF",
        "name": "Sebring Regional Airport",
        "lat": 27.4564,
        "lng": -81.3424
    },
    {
        "code": "SEG",
        "name": "Penn Valley Airport",
        "lat": 40.8206,
        "lng": -76.8639
    },
    {
        "code": "SEM",
        "name": "Craig Field",
        "lat": 32.3439,
        "lng": -86.9878
    },
    {
        "code": "SEP",
        "name": "Stephenville Clark Regional Airport",
        "lat": 32.2153,
        "lng": -98.1777
    },
    {
        "code": "SER",
        "name": "Freeman Municipal Airport",
        "lat": 38.9236,
        "lng": -85.9074
    },
    {
        "code": "SDX",
        "name": "Sedona Airport",
        "lat": 34.8486,
        "lng": -111.788
    },
    {
        "code": "SFB",
        "name": "Orlando Sanford International Airport",
        "lat": 28.7776,
        "lng": -81.2375
    },
    {
        "code": "SFF",
        "name": "Felts Field",
        "lat": 47.6828,
        "lng": -117.323
    },
    {
        "code": "SFM",
        "name": "Sanford Seacoast Regional Airport",
        "lat": 43.3939,
        "lng": -70.708
    },
    {
        "code": "SFO",
        "name": "San Francisco International Airport",
        "lat": 37.619,
        "lng": -122.375
    },
    {
        "code": "SFZ",
        "name": "North Central State Airport",
        "lat": 41.9208,
        "lng": -71.4914
    },
    {
        "code": "SGF",
        "name": "Springfield Branson National Airport",
        "lat": 37.2457,
        "lng": -93.3886
    },
    {
        "code": "SGH",
        "name": "Springfield-Beckley Municipal Airport",
        "lat": 39.8403,
        "lng": -83.8402
    },
    {
        "code": "UST",
        "name": "Northeast Florida Regional Airport",
        "lat": 29.9592,
        "lng": -81.3398
    },
    {
        "code": "SGR",
        "name": "Sugar Land Regional Airport",
        "lat": 29.6223,
        "lng": -95.6565
    },
    {
        "code": "SGT",
        "name": "Stuttgart Municipal Airport / Carl Humphrey Field",
        "lat": 34.5995,
        "lng": -91.575
    },
    {
        "code": "SGU",
        "name": "St George Municipal Airport",
        "lat": 37.0364,
        "lng": -113.5103
    },
    {
        "code": "SHD",
        "name": "Shenandoah Valley Regional Airport",
        "lat": 38.2638,
        "lng": -78.8964
    },
    {
        "code": "SHN",
        "name": "Sanderson Field",
        "lat": 47.2336,
        "lng": -123.148
    },
    {
        "code": "SHR",
        "name": "Sheridan County Airport",
        "lat": 44.7692,
        "lng": -106.98
    },
    {
        "code": "SHV",
        "name": "Shreveport Regional Airport",
        "lat": 32.4466,
        "lng": -93.8256
    },
    {
        "code": "SIK",
        "name": "Sikeston Memorial Municipal Airport",
        "lat": 36.8989,
        "lng": -89.5618
    },
    {
        "code": "SIV",
        "name": "Sullivan County Airport",
        "lat": 39.1147,
        "lng": -87.4483
    },
    {
        "code": "SJC",
        "name": "Norman Y. Mineta San Jose International Airport",
        "lat": 37.3626,
        "lng": -121.929
    },
    {
        "code": "SJN",
        "name": "St Johns Industrial Air Park",
        "lat": 34.5186,
        "lng": -109.379
    },
    {
        "code": "SJT",
        "name": "San Angelo Regional Mathis Field",
        "lat": 31.3577,
        "lng": -100.496
    },
    {
        "code": "SKA",
        "name": "Fairchild Air Force Base",
        "lat": 47.6151,
        "lng": -117.656
    },
    {
        "code": "SKF",
        "name": "Lackland Air Force Base",
        "lat": 29.3842,
        "lng": -98.5811
    },
    {
        "code": "TSM",
        "name": "Taos Regional Airport",
        "lat": 36.4582,
        "lng": -105.672
    },
    {
        "code": "SKY",
        "name": "Griffing Sandusky Airport",
        "lat": 41.4334,
        "lng": -82.6523
    },
    {
        "code": "SLB",
        "name": "Storm Lake Municipal Airport",
        "lat": 42.5973,
        "lng": -95.2407
    },
    {
        "code": "SLC",
        "name": "Salt Lake City International Airport",
        "lat": 40.7884,
        "lng": -111.978
    },
    {
        "code": "SLE",
        "name": "Salem Municipal Airport/McNary Field",
        "lat": 44.9095,
        "lng": -123.003
    },
    {
        "code": "SLG",
        "name": "Smith Field",
        "lat": 36.1919,
        "lng": -94.49
    },
    {
        "code": "KSLI",
        "name": "Los Alamitos Army Air Field",
        "lat": 33.79,
        "lng": -118.052
    },
    {
        "code": "SLK",
        "name": "Adirondack Regional Airport",
        "lat": 44.3853,
        "lng": -74.2062
    },
    {
        "code": "SLN",
        "name": "Salina Municipal Airport",
        "lat": 38.791,
        "lng": -97.6522
    },
    {
        "code": "SLO",
        "name": "Salem Leckrone Airport",
        "lat": 38.6429,
        "lng": -88.9642
    },
    {
        "code": "SLR",
        "name": "Sulphur Springs Municipal Airport",
        "lat": 33.1598,
        "lng": -95.6211
    },
    {
        "code": "SMD",
        "name": "Smith Field",
        "lat": 41.1434,
        "lng": -85.1528
    },
    {
        "code": "SME",
        "name": "Lake Cumberland Regional Airport",
        "lat": 37.0534,
        "lng": -84.6159
    },
    {
        "code": "SMF",
        "name": "Sacramento International Airport",
        "lat": 38.6954,
        "lng": -121.591
    },
    {
        "code": "SMN",
        "name": "Lemhi County Airport",
        "lat": 45.1238,
        "lng": -113.881
    },
    {
        "code": "SMO",
        "name": "Santa Monica Municipal Airport",
        "lat": 34.0158,
        "lng": -118.451
    },
    {
        "code": "SUM",
        "name": "Sumter Airport",
        "lat": 33.995,
        "lng": -80.3613
    },
    {
        "code": "SMX",
        "name": "Santa Maria Pub/Capt G Allan Hancock Field",
        "lat": 34.8989,
        "lng": -120.457
    },
    {
        "code": "SNA",
        "name": "John Wayne Airport-Orange County Airport",
        "lat": 33.6757,
        "lng": -117.868
    },
    {
        "code": "SNK",
        "name": "Winston Field",
        "lat": 32.6934,
        "lng": -100.95
    },
    {
        "code": "SNL",
        "name": "Shawnee Regional Airport",
        "lat": 35.3579,
        "lng": -96.9428
    },
    {
        "code": "SNS",
        "name": "Salinas Municipal Airport",
        "lat": 36.6628,
        "lng": -121.606
    },
    {
        "code": "SNY",
        "name": "Sidney Municipal-Lloyd W Carr Field",
        "lat": 41.1013,
        "lng": -102.985
    },
    {
        "code": "KSOA",
        "name": "Sonora Municipal Airport",
        "lat": 30.5857,
        "lng": -100.649
    },
    {
        "code": "SOP",
        "name": "Moore County Airport",
        "lat": 35.2374,
        "lng": -79.3912
    },
    {
        "code": "SOW",
        "name": "Show Low Regional Airport",
        "lat": 34.2655,
        "lng": -110.006
    },
    {
        "code": "SPA",
        "name": "Spartanburg Downtown Memorial Airport",
        "lat": 34.9157,
        "lng": -81.9565
    },
    {
        "code": "SPF",
        "name": "Black Hills Airport-Clyde Ice Field",
        "lat": 44.4803,
        "lng": -103.783
    },
    {
        "code": "SPG",
        "name": "Albert Whitted Airport",
        "lat": 27.7651,
        "lng": -82.627
    },
    {
        "code": "SPI",
        "name": "Abraham Lincoln Capital Airport",
        "lat": 39.8441,
        "lng": -89.6779
    },
    {
        "code": "SPS",
        "name": "Sheppard Air Force Base-Wichita Falls Municipal Airport",
        "lat": 33.9888,
        "lng": -98.4919
    },
    {
        "code": "SPW",
        "name": "Spencer Municipal Airport",
        "lat": 43.1655,
        "lng": -95.2028
    },
    {
        "code": "SQI",
        "name": "Whiteside County Airport-Joseph H Bittorf Field",
        "lat": 41.7428,
        "lng": -89.6763
    },
    {
        "code": "SQL",
        "name": "San Carlos Airport",
        "lat": 37.5119,
        "lng": -122.25
    },
    {
        "code": "SRQ",
        "name": "Sarasota Bradenton International Airport",
        "lat": 27.3954,
        "lng": -82.5544
    },
    {
        "code": "RUI",
        "name": "Sierra Blanca Regional Airport",
        "lat": 33.4628,
        "lng": -105.535
    },
    {
        "code": "SSC",
        "name": "Shaw Air Force Base",
        "lat": 33.9727,
        "lng": -80.4706
    },
    {
        "code": "SSF",
        "name": "Stinson Municipal Airport",
        "lat": 29.337,
        "lng": -98.4711
    },
    {
        "code": "SSI",
        "name": "St Simons Island Airport",
        "lat": 31.1518,
        "lng": -81.3913
    },
    {
        "code": "STC",
        "name": "St Cloud Regional Airport",
        "lat": 45.5466,
        "lng": -94.0599
    },
    {
        "code": "STE",
        "name": "Stevens Point Municipal Airport",
        "lat": 44.5452,
        "lng": -89.5303
    },
    {
        "code": "STJ",
        "name": "Rosecrans Memorial Airport",
        "lat": 39.7719,
        "lng": -94.9097
    },
    {
        "code": "STK",
        "name": "Sterling Municipal Airport",
        "lat": 40.6153,
        "lng": -103.265
    },
    {
        "code": "STL",
        "name": "St Louis Lambert International Airport",
        "lat": 38.7487,
        "lng": -90.37
    },
    {
        "code": "STP",
        "name": "St Paul Downtown Holman Field",
        "lat": 44.9345,
        "lng": -93.06
    },
    {
        "code": "STS",
        "name": "Charles M. Schulz Sonoma County Airport",
        "lat": 38.509,
        "lng": -122.813
    },
    {
        "code": "SUA",
        "name": "Witham Field",
        "lat": 27.1817,
        "lng": -80.2211
    },
    {
        "code": "SUD",
        "name": "Stroud Municipal Airport",
        "lat": 35.7896,
        "lng": -96.6557
    },
    {
        "code": "SUE",
        "name": "Door County Cherryland Airport",
        "lat": 44.8437,
        "lng": -87.4215
    },
    {
        "code": "SUN",
        "name": "Friedman Memorial Airport",
        "lat": 43.5044,
        "lng": -114.296
    },
    {
        "code": "SUS",
        "name": "Spirit of St Louis Airport",
        "lat": 38.6621,
        "lng": -90.652
    },
    {
        "code": "SUU",
        "name": "Travis Air Force Base",
        "lat": 38.2627,
        "lng": -121.927
    },
    {
        "code": "SUW",
        "name": "Richard I Bong Airport",
        "lat": 46.6897,
        "lng": -92.0947
    },
    {
        "code": "SUX",
        "name": "Sioux Gateway Airport/Brigadier General Bud Day Field",
        "lat": 42.4026,
        "lng": -96.3844
    },
    {
        "code": "KSUZ",
        "name": "Saline County Regional Airport",
        "lat": 34.5906,
        "lng": -92.4794
    },
    {
        "code": "SVC",
        "name": "Grant County Airport",
        "lat": 32.6323,
        "lng": -108.1543
    },
    {
        "code": "SVE",
        "name": "Susanville Municipal Airport",
        "lat": 40.3757,
        "lng": -120.573
    },
    {
        "code": "SVH",
        "name": "Statesville Regional Airport",
        "lat": 35.7653,
        "lng": -80.9539
    },
    {
        "code": "SVN",
        "name": "Hunter Army Air Field",
        "lat": 32.01,
        "lng": -81.1457
    },
    {
        "code": "SWF",
        "name": "New York Stewart International Airport",
        "lat": 41.5041,
        "lng": -74.1048
    },
    {
        "code": "SWO",
        "name": "Stillwater Regional Airport",
        "lat": 36.1612,
        "lng": -97.0857
    },
    {
        "code": "SWW",
        "name": "Avenger Field",
        "lat": 32.4674,
        "lng": -100.467
    },
    {
        "code": "SYI",
        "name": "Bomar Field Shelbyville Municipal Airport",
        "lat": 35.5601,
        "lng": -86.4425
    },
    {
        "code": "SYR",
        "name": "Syracuse Hancock International Airport",
        "lat": 43.1112,
        "lng": -76.1063
    },
    {
        "code": "SYV",
        "name": "Sylvester Airport",
        "lat": 31.5585,
        "lng": -83.8957
    },
    {
        "code": "SZL",
        "name": "Whiteman Air Force Base",
        "lat": 38.7303,
        "lng": -93.5479
    },
    {
        "code": "TBC",
        "name": "Tuba City Airport",
        "lat": 36.0928,
        "lng": -111.383
    },
    {
        "code": "TAD",
        "name": "Perry Stokes Airport",
        "lat": 37.2594,
        "lng": -104.341
    },
    {
        "code": "KTB",
        "name": "Thorne Bay Seaplane Base",
        "lat": 55.688,
        "lng": -132.537
    },
    {
        "code": "TBN",
        "name": "Waynesville-St. Robert Regional Forney field",
        "lat": 37.7416,
        "lng": -92.1407
    },
    {
        "code": "TBR",
        "name": "Statesboro Bulloch County Airport",
        "lat": 32.4827,
        "lng": -81.7369
    },
    {
        "code": "TCC",
        "name": "Tucumcari Municipal Airport",
        "lat": 35.1828,
        "lng": -103.603
    },
    {
        "code": "TCL",
        "name": "Tuscaloosa Regional Airport",
        "lat": 33.2206,
        "lng": -87.6114
    },
    {
        "code": "TCM",
        "name": "McChord Air Force Base",
        "lat": 47.1377,
        "lng": -122.476
    },
    {
        "code": "TCS",
        "name": "Truth Or Consequences Municipal Airport",
        "lat": 33.2369,
        "lng": -107.272
    },
    {
        "code": "TDO",
        "name": "Ed Carlson Memorial Field South Lewis County Airport",
        "lat": 46.4772,
        "lng": -122.806
    },
    {
        "code": "TDW",
        "name": "Tradewind Airport",
        "lat": 35.1699,
        "lng": -101.826
    },
    {
        "code": "TDZ",
        "name": "Toledo Executive Airport",
        "lat": 41.5649,
        "lng": -83.4823
    },
    {
        "code": "TEB",
        "name": "Teterboro Airport",
        "lat": 40.8501,
        "lng": -74.0608
    },
    {
        "code": "TEX",
        "name": "Telluride Regional Airport",
        "lat": 37.9538,
        "lng": -107.908
    },
    {
        "code": "THA",
        "name": "Tullahoma Regional Arpt/Wm Northern Field",
        "lat": 35.3801,
        "lng": -86.2464
    },
    {
        "code": "THM",
        "name": "Thompson Falls Airport",
        "lat": 47.5735,
        "lng": -115.281
    },
    {
        "code": "THV",
        "name": "York Airport",
        "lat": 39.917,
        "lng": -76.873
    },
    {
        "code": "TIK",
        "name": "Tinker Air Force Base",
        "lat": 35.4147,
        "lng": -97.3866
    },
    {
        "code": "TIW",
        "name": "Tacoma Narrows Airport",
        "lat": 47.2679,
        "lng": -122.578
    },
    {
        "code": "TIX",
        "name": "Space Coast Regional Airport",
        "lat": 28.5148,
        "lng": -80.7992
    },
    {
        "code": "KNT",
        "name": "Kennett Memorial Airport",
        "lat": 36.2259,
        "lng": -90.0366
    },
    {
        "code": "TLH",
        "name": "Tallahassee Regional Airport",
        "lat": 30.3965,
        "lng": -84.3503
    },
    {
        "code": "TLR",
        "name": "Mefford Field",
        "lat": 36.1563,
        "lng": -119.326
    },
    {
        "code": "TMA",
        "name": "Henry Tift Myers Airport",
        "lat": 31.429,
        "lng": -83.4885
    },
    {
        "code": "TMB",
        "name": "Miami Executive Airport",
        "lat": 25.6479,
        "lng": -80.4328
    },
    {
        "code": "OTK",
        "name": "Tillamook Airport",
        "lat": 45.4182,
        "lng": -123.814
    },
    {
        "code": "TNP",
        "name": "Twentynine Palms Airport",
        "lat": 34.1316,
        "lng": -115.946
    },
    {
        "code": "TNT",
        "name": "Dade Collier Training and Transition Airport",
        "lat": 25.8618,
        "lng": -80.897
    },
    {
        "code": "TNU",
        "name": "Newton Municipal Airport",
        "lat": 41.6744,
        "lng": -93.0217
    },
    {
        "code": "XSD",
        "name": "Tonopah Test Range Airport",
        "lat": 37.7988,
        "lng": -116.781
    },
    {
        "code": "TOA",
        "name": "Zamperini Field",
        "lat": 33.8034,
        "lng": -118.34
    },
    {
        "code": "TOC",
        "name": "Toccoa Airport - R.G. Letourneau Field",
        "lat": 34.5938,
        "lng": -83.2958
    },
    {
        "code": "TOI",
        "name": "Troy Municipal Airport at N Kenneth Campbell Field",
        "lat": 31.8604,
        "lng": -86.0121
    },
    {
        "code": "TOL",
        "name": "Toledo Express Airport",
        "lat": 41.5868,
        "lng": -83.8078
    },
    {
        "code": "TOP",
        "name": "Philip Billard Municipal Airport",
        "lat": 39.0687,
        "lng": -95.6225
    },
    {
        "code": "TOR",
        "name": "Torrington Municipal Airport",
        "lat": 42.0645,
        "lng": -104.153
    },
    {
        "code": "TPA",
        "name": "Tampa International Airport",
        "lat": 27.9755,
        "lng": -82.5332
    },
    {
        "code": "TPF",
        "name": "Peter O Knight Airport",
        "lat": 27.9156,
        "lng": -82.4493
    },
    {
        "code": "TPH",
        "name": "Tonopah Airport",
        "lat": 38.0602,
        "lng": -117.087
    },
    {
        "code": "TPL",
        "name": "Draughon Miller Central Texas Regional Airport",
        "lat": 31.1525,
        "lng": -97.4078
    },
    {
        "code": "TRI",
        "name": "Tri-Cities Regional TN/VA Airport",
        "lat": 36.4752,
        "lng": -82.4074
    },
    {
        "code": "TKF",
        "name": "Truckee Tahoe Airport",
        "lat": 39.32,
        "lng": -120.14
    },
    {
        "code": "TRL",
        "name": "Terrell Municipal Airport",
        "lat": 32.7092,
        "lng": -96.2674
    },
    {
        "code": "TRM",
        "name": "Jacqueline Cochran Regional Airport",
        "lat": 33.6267,
        "lng": -116.16
    },
    {
        "code": "TSP",
        "name": "Tehachapi Municipal Airport",
        "lat": 35.135,
        "lng": -118.439
    },
    {
        "code": "TTD",
        "name": "Portland Troutdale Airport",
        "lat": 45.5494,
        "lng": -122.401
    },
    {
        "code": "TTN",
        "name": "Trenton Mercer Airport",
        "lat": 40.2767,
        "lng": -74.8135
    },
    {
        "code": "KTTS",
        "name": "Nasa Shuttle Landing Facility Airport",
        "lat": 28.615,
        "lng": -80.6945
    },
    {
        "code": "TUL",
        "name": "Tulsa International Airport",
        "lat": 36.1984,
        "lng": -95.8881
    },
    {
        "code": "TUP",
        "name": "Tupelo Regional Airport",
        "lat": 34.2681,
        "lng": -88.7699
    },
    {
        "code": "TUS",
        "name": "Tucson International Airport / Morris Air National Guard Base",
        "lat": 32.115,
        "lng": -110.9381
    },
    {
        "code": "TVC",
        "name": "Cherry Capital Airport",
        "lat": 44.7414,
        "lng": -85.5822
    },
    {
        "code": "TVF",
        "name": "Thief River Falls Regional Airport",
        "lat": 48.0657,
        "lng": -96.185
    },
    {
        "code": "TVI",
        "name": "Thomasville Regional Airport",
        "lat": 30.9016,
        "lng": -83.8813
    },
    {
        "code": "TVL",
        "name": "Lake Tahoe Airport",
        "lat": 38.8939,
        "lng": -119.995
    },
    {
        "code": "TWF",
        "name": "Joslin Field Magic Valley Regional Airport",
        "lat": 42.4818,
        "lng": -114.488
    },
    {
        "code": "TXK",
        "name": "Texarkana Regional Webb Field",
        "lat": 33.4537,
        "lng": -93.991
    },
    {
        "code": "TYZ",
        "name": "Taylor Airport",
        "lat": 34.4528,
        "lng": -110.115
    },
    {
        "code": "TYR",
        "name": "Tyler Pounds Regional Airport",
        "lat": 32.3541,
        "lng": -95.4024
    },
    {
        "code": "TYS",
        "name": "McGhee Tyson Airport",
        "lat": 35.811,
        "lng": -83.994
    },
    {
        "code": "BFG",
        "name": "Bullfrog Basin Airport",
        "lat": 37.5478,
        "lng": -110.7129
    },
    {
        "code": "NPH",
        "name": "Nephi Municipal Airport",
        "lat": 39.7388,
        "lng": -111.872
    },
    {
        "code": "RVR",
        "name": "Green River Municipal Airport",
        "lat": 38.9614,
        "lng": -110.227
    },
    {
        "code": "PNU",
        "name": "Panguitch Municipal Airport",
        "lat": 37.8452,
        "lng": -112.392
    },
    {
        "code": "ICS",
        "name": "Cascade Airport",
        "lat": 44.4938,
        "lng": -116.016
    },
    {
        "code": "KUAO",
        "name": "Aurora State Airport",
        "lat": 45.2471,
        "lng": -122.77
    },
    {
        "code": "UBS",
        "name": "Columbus Lowndes County Airport",
        "lat": 33.4654,
        "lng": -88.3803
    },
    {
        "code": "UCY",
        "name": "Everett-Stewart Regional Airport",
        "lat": 36.3818,
        "lng": -88.9854
    },
    {
        "code": "UDD",
        "name": "Bermuda Dunes Airport",
        "lat": 33.7484,
        "lng": -116.275
    },
    {
        "code": "UES",
        "name": "Waukesha County Airport",
        "lat": 43.041,
        "lng": -88.2371
    },
    {
        "code": "UGN",
        "name": "Waukegan National Airport",
        "lat": 42.4222,
        "lng": -87.8679
    },
    {
        "code": "UIL",
        "name": "Quillayute Airport",
        "lat": 47.9366,
        "lng": -124.563
    },
    {
        "code": "UIN",
        "name": "Quincy Regional Baldwin Field",
        "lat": 39.9427,
        "lng": -91.1946
    },
    {
        "code": "UIZ",
        "name": "Berz-Macomb Airport",
        "lat": 42.6639,
        "lng": -82.9654
    },
    {
        "code": "IKB",
        "name": "Wilkes County Airport",
        "lat": 36.2228,
        "lng": -81.0983
    },
    {
        "code": "UKI",
        "name": "Ukiah Municipal Airport",
        "lat": 39.126,
        "lng": -123.201
    },
    {
        "code": "UKT",
        "name": "Quakertown Airport",
        "lat": 40.4352,
        "lng": -75.3819
    },
    {
        "code": "ULM",
        "name": "New Ulm Municipal Airport",
        "lat": 44.3196,
        "lng": -94.5023
    },
    {
        "code": "ATO",
        "name": "Ohio University Snyder Field",
        "lat": 39.211,
        "lng": -82.2314
    },
    {
        "code": "UNU",
        "name": "Dodge County Airport",
        "lat": 43.4266,
        "lng": -88.7032
    },
    {
        "code": "SCE",
        "name": "University Park Airport",
        "lat": 40.8493,
        "lng": -77.8487
    },
    {
        "code": "UOS",
        "name": "Franklin County Airport",
        "lat": 35.2051,
        "lng": -85.8981
    },
    {
        "code": "UOX",
        "name": "University Oxford Airport",
        "lat": 34.3843,
        "lng": -89.5368
    },
    {
        "code": "UTM",
        "name": "Tunica Municipal Airport",
        "lat": 34.681,
        "lng": -90.3467
    },
    {
        "code": "HTV",
        "name": "Huntsville Regional Airport",
        "lat": 30.7469,
        "lng": -95.5872
    },
    {
        "code": "NPT",
        "name": "Newport State Airport",
        "lat": 41.5324,
        "lng": -71.2815
    },
    {
        "code": "UVA",
        "name": "Garner Field",
        "lat": 29.2113,
        "lng": -99.7436
    },
    {
        "code": "RKH",
        "name": "Rock Hill - York County Airport",
        "lat": 34.9878,
        "lng": -81.0572
    },
    {
        "code": "VAD",
        "name": "Moody Air Force Base",
        "lat": 30.9678,
        "lng": -83.193
    },
    {
        "code": "LLY",
        "name": "South Jersey Regional Airport",
        "lat": 39.9429,
        "lng": -74.8457
    },
    {
        "code": "VBG",
        "name": "Vandenberg Air Force Base",
        "lat": 34.7373,
        "lng": -120.584
    },
    {
        "code": "VCT",
        "name": "Victoria Regional Airport",
        "lat": 28.8526,
        "lng": -96.9185
    },
    {
        "code": "VCV",
        "name": "Southern California Logistics Airport",
        "lat": 34.5975,
        "lng": -117.383
    },
    {
        "code": "VDI",
        "name": "Vidalia Regional Airport",
        "lat": 32.1927,
        "lng": -82.3712
    },
    {
        "code": "VEL",
        "name": "Vernal Regional Airport",
        "lat": 40.4409,
        "lng": -109.51
    },
    {
        "code": "VGT",
        "name": "North Las Vegas Airport",
        "lat": 36.2107,
        "lng": -115.194
    },
    {
        "code": "VHN",
        "name": "Culberson County Airport",
        "lat": 31.0578,
        "lng": -104.784
    },
    {
        "code": "VIH",
        "name": "Rolla National Airport",
        "lat": 38.1274,
        "lng": -91.7695
    },
    {
        "code": "VIS",
        "name": "Visalia Municipal Airport",
        "lat": 36.3187,
        "lng": -119.393
    },
    {
        "code": "VJI",
        "name": "Virginia Highlands Airport",
        "lat": 36.6871,
        "lng": -82.0333
    },
    {
        "code": "VKS",
        "name": "Vicksburg Municipal Airport",
        "lat": 32.2393,
        "lng": -90.9284
    },
    {
        "code": "VLA",
        "name": "Vandalia Municipal Airport",
        "lat": 38.9915,
        "lng": -89.1662
    },
    {
        "code": "VLD",
        "name": "Valdosta Regional Airport",
        "lat": 30.7825,
        "lng": -83.2767
    },
    {
        "code": "VNC",
        "name": "Venice Municipal Airport",
        "lat": 27.0716,
        "lng": -82.4403
    },
    {
        "code": "VNY",
        "name": "Van Nuys Airport",
        "lat": 34.2098,
        "lng": -118.49
    },
    {
        "code": "VOK",
        "name": "Volk Field",
        "lat": 43.939,
        "lng": -90.2534
    },
    {
        "code": "VPS",
        "name": "Destin-Ft Walton Beach Airport",
        "lat": 30.4832,
        "lng": -86.5254
    },
    {
        "code": "VPZ",
        "name": "Porter County Municipal Airport",
        "lat": 41.454,
        "lng": -87.0071
    },
    {
        "code": "VQQ",
        "name": "Cecil Airport",
        "lat": 30.2187,
        "lng": -81.8767
    },
    {
        "code": "VRB",
        "name": "Vero Beach Regional Airport",
        "lat": 27.6556,
        "lng": -80.4179
    },
    {
        "code": "VSF",
        "name": "Hartness State (Springfield) Airport",
        "lat": 43.3436,
        "lng": -72.5173
    },
    {
        "code": "VTN",
        "name": "Miller Field",
        "lat": 42.8578,
        "lng": -100.548
    },
    {
        "code": "VYS",
        "name": "Illinois Valley Regional Airport-Walter A Duncan Field",
        "lat": 41.3519,
        "lng": -89.1531
    },
    {
        "code": "GTY",
        "name": "Gettysburg Regional Airport",
        "lat": 39.8409,
        "lng": -77.2742
    },
    {
        "code": "SQV",
        "name": "Sequim Valley Airport",
        "lat": 48.0981,
        "lng": -123.187
    },
    {
        "code": "KW63",
        "name": "Lake Country Regional Airport",
        "lat": 36.5958,
        "lng": -78.5601
    },
    {
        "code": "PGC",
        "name": "Grant County Airport",
        "lat": 38.9949,
        "lng": -79.1459
    },
    {
        "code": "WAL",
        "name": "Wallops Flight Facility Airport",
        "lat": 37.9402,
        "lng": -75.4664
    },
    {
        "code": "WAY",
        "name": "Greene County Airport",
        "lat": 39.9001,
        "lng": -80.1331
    },
    {
        "code": "WBW",
        "name": "Wilkes Barre Wyoming Valley Airport",
        "lat": 41.2972,
        "lng": -75.8512
    },
    {
        "code": "WDG",
        "name": "Enid Woodring Regional Airport",
        "lat": 36.3792,
        "lng": -97.7911
    },
    {
        "code": "WDR",
        "name": "Barrow County Airport",
        "lat": 33.9829,
        "lng": -83.6674
    },
    {
        "code": "KWF",
        "name": "Waterfall Seaplane Base",
        "lat": 55.2963,
        "lng": -133.243
    },
    {
        "code": "WHP",
        "name": "Whiteman Airport",
        "lat": 34.2593,
        "lng": -118.413
    },
    {
        "code": "WJF",
        "name": "General WM J Fox Airfield",
        "lat": 34.7411,
        "lng": -118.219
    },
    {
        "code": "WLD",
        "name": "Strother Field",
        "lat": 37.1686,
        "lng": -97.0376
    },
    {
        "code": "WLW",
        "name": "Willows Glenn County Airport",
        "lat": 39.5164,
        "lng": -122.218
    },
    {
        "code": "WMC",
        "name": "Winnemucca Municipal Airport",
        "lat": 40.8966,
        "lng": -117.806
    },
    {
        "code": "KWP",
        "name": "West Point Village Seaplane Base",
        "lat": 57.7701,
        "lng": -153.549
    },
    {
        "code": "WRB",
        "name": "Robins Air Force Base",
        "lat": 32.6401,
        "lng": -83.5919
    },
    {
        "code": "WRI",
        "name": "Mc Guire Air Force Base",
        "lat": 40.0156,
        "lng": -74.5917
    },
    {
        "code": "WRL",
        "name": "Worland Municipal Airport",
        "lat": 43.9657,
        "lng": -107.951
    },
    {
        "code": "WSD",
        "name": "Condron Army Air Field",
        "lat": 32.3415,
        "lng": -106.403
    },
    {
        "code": "WST",
        "name": "Westerly State Airport",
        "lat": 41.3496,
        "lng": -71.8034
    },
    {
        "code": "WVI",
        "name": "Watsonville Municipal Airport",
        "lat": 36.9357,
        "lng": -121.79
    },
    {
        "code": "WVL",
        "name": "Waterville Robert Lafleur Airport",
        "lat": 44.5332,
        "lng": -69.6755
    },
    {
        "code": "WWD",
        "name": "Cape May County Airport",
        "lat": 39.0085,
        "lng": -74.9083
    },
    {
        "code": "WWR",
        "name": "West Woodward Airport",
        "lat": 36.438,
        "lng": -99.5227
    },
    {
        "code": "WYS",
        "name": "Yellowstone Airport",
        "lat": 44.6884,
        "lng": -111.118
    },
    {
        "code": "KYO",
        "name": "Tampa North Aero Park Airport",
        "lat": 28.2213,
        "lng": -82.3745
    },
    {
        "code": "KXA",
        "name": "Kasaan Seaplane Base",
        "lat": 55.5374,
        "lng": -132.398
    },
    {
        "code": "KXMR",
        "name": "Cape Canaveral AFS Skid Strip",
        "lat": 28.4676,
        "lng": -80.5666
    },
    {
        "code": "XNA",
        "name": "Northwest Arkansas Regional Airport",
        "lat": 36.2819,
        "lng": -94.3068
    },
    {
        "code": "KXTA",
        "name": "Homey (Area 51) Airport",
        "lat": 37.235,
        "lng": -115.811
    },
    {
        "code": "WBK",
        "name": "West Branch Community Airport",
        "lat": 44.2448,
        "lng": -84.1798
    },
    {
        "code": "YIP",
        "name": "Willow Run Airport",
        "lat": 42.2379,
        "lng": -83.5304
    },
    {
        "code": "YKM",
        "name": "Yakima Air Terminal McAllister Field",
        "lat": 46.5682,
        "lng": -120.544
    },
    {
        "code": "YKN",
        "name": "Chan Gurney Municipal Airport",
        "lat": 42.9167,
        "lng": -97.3859
    },
    {
        "code": "KYL",
        "name": "Port Largo Airport",
        "lat": 25.0933,
        "lng": -80.4299
    },
    {
        "code": "YNG",
        "name": "Youngstown Warren Regional Airport",
        "lat": 41.2607,
        "lng": -80.6791
    },
    {
        "code": "KZB",
        "name": "Zachar Bay Seaplane Base",
        "lat": 57.553,
        "lng": -153.7461
    },
    {
        "code": "ZPH",
        "name": "Zephyrhills Municipal Airport",
        "lat": 28.2282,
        "lng": -82.1559
    },
    {
        "code": "ZZV",
        "name": "Zanesville Municipal Airport",
        "lat": 39.9444,
        "lng": -81.8921
    },
    {
        "code": "LOR",
        "name": "Lowe AHP (Fort Rucker) Heliport",
        "lat": 31.3558,
        "lng": -85.7512
    },
    {
        "code": "LRO",
        "name": "Sharpe AAF",
        "lat": 37.8379,
        "lng": -121.2728
    },
    {
        "code": "LTH",
        "name": "Lathrop Wells Airport / Jackass Aeropark",
        "lat": 36.6342,
        "lng": -116.4135
    },
    {
        "code": "DRU",
        "name": "Drummond Airport",
        "lat": 46.6208,
        "lng": -113.205
    },
    {
        "code": "UWA",
        "name": "Ware Airport",
        "lat": 42.282,
        "lng": -72.2148
    },
    {
        "code": "MDR",
        "name": "Medfra Airport",
        "lat": 63.106,
        "lng": -154.7194
    },
    {
        "code": "LIZ",
        "name": "Loring International Airport",
        "lat": 46.9504,
        "lng": -67.8859
    },
    {
        "code": "MGI",
        "name": "Matagorda Island Air Force Base",
        "lat": 28.323,
        "lng": -96.464
    },
    {
        "code": "MHN",
        "name": "Hooker County Airport",
        "lat": 42.0422,
        "lng": -101.0591
    },
    {
        "code": "MTX",
        "name": "Metro Field",
        "lat": 64.8068,
        "lng": -147.762
    },
    {
        "code": "MXC",
        "name": "Monticello Airport",
        "lat": 37.9324,
        "lng": -109.3412
    },
    {
        "code": "MYK",
        "name": "May Creek Airport",
        "lat": 61.3357,
        "lng": -142.687
    },
    {
        "code": "MPE",
        "name": "Griswold Airport",
        "lat": 41.2712,
        "lng": -72.5497
    },
    {
        "code": "EPG",
        "name": "Browns Airport",
        "lat": 40.8675,
        "lng": -96.11
    },
    {
        "code": "HBB",
        "name": "Industrial Airpark",
        "lat": 32.7668,
        "lng": -103.209
    },
    {
        "code": "NRC",
        "name": "NASA Crows Landing Airport",
        "lat": 37.408,
        "lng": -121.109
    },
    {
        "code": "UCC",
        "name": "Yucca Airstrip",
        "lat": 36.9458,
        "lng": -116.038
    },
    {
        "code": "NLN",
        "name": "Kneeland Airport",
        "lat": 40.7193,
        "lng": -123.928
    },
    {
        "code": "BZF",
        "name": "Benton Field",
        "lat": 40.5749,
        "lng": -122.408
    },
    {
        "code": "OBK",
        "name": "Sky Harbor Airport",
        "lat": 42.1439,
        "lng": -87.8556
    },
    {
        "code": "DWN",
        "name": "Downtown Airpark",
        "lat": 35.4492,
        "lng": -97.533
    },
    {
        "code": "AKB",
        "name": "Atka Airport",
        "lat": 52.2203,
        "lng": -174.206
    },
    {
        "code": "PML",
        "name": "Port Moller Airport",
        "lat": 56.006,
        "lng": -160.561
    },
    {
        "code": "PTD",
        "name": "Port Alexander Seaplane Base",
        "lat": 56.2468,
        "lng": -134.648
    },
    {
        "code": "PAQ",
        "name": "Warren \"Bud\" Woods Palmer Municipal Airport",
        "lat": 61.5949,
        "lng": -149.089
    },
    {
        "code": "ATU",
        "name": "Casco Cove Coast Guard Station",
        "lat": 52.8284,
        "lng": 173.18
    },
    {
        "code": "BTI",
        "name": "Barter Island LRRS Airport",
        "lat": 70.134,
        "lng": -143.582
    },
    {
        "code": "BET",
        "name": "Bethel Airport",
        "lat": 60.7798,
        "lng": -161.838
    },
    {
        "code": "BVU",
        "name": "Beluga Airport",
        "lat": 61.1722,
        "lng": -151.044
    },
    {
        "code": "BIG",
        "name": "Allen Army Airfield",
        "lat": 63.9945,
        "lng": -145.722
    },
    {
        "code": "BKC",
        "name": "Buckland Airport",
        "lat": 65.9816,
        "lng": -161.149
    },
    {
        "code": "BMX",
        "name": "Big Mountain Airport",
        "lat": 59.3612,
        "lng": -155.259
    },
    {
        "code": "BRW",
        "name": "Wiley Post Will Rogers Memorial Airport",
        "lat": 71.2854,
        "lng": -156.766
    },
    {
        "code": "BTT",
        "name": "Bettles Airport",
        "lat": 66.9139,
        "lng": -151.529
    },
    {
        "code": "PABV",
        "name": "Birchwood Airport",
        "lat": 61.4165,
        "lng": -149.507
    },
    {
        "code": "CDB",
        "name": "Cold Bay Airport",
        "lat": 55.2061,
        "lng": -162.725
    },
    {
        "code": "CEM",
        "name": "Central Airport",
        "lat": 65.5738,
        "lng": -144.783
    },
    {
        "code": "CIK",
        "name": "Chalkyitsik Airport",
        "lat": 66.645,
        "lng": -143.74
    },
    {
        "code": "CYF",
        "name": "Chefornak Airport",
        "lat": 60.1367,
        "lng": -164.2792
    },
    {
        "code": "PACL",
        "name": "Clear Airport",
        "lat": 64.3012,
        "lng": -149.12
    },
    {
        "code": "SCM",
        "name": "Scammon Bay Airport",
        "lat": 61.8453,
        "lng": -165.571
    },
    {
        "code": "IRC",
        "name": "Circle City /New/ Airport",
        "lat": 65.8305,
        "lng": -144.076
    },
    {
        "code": "CDV",
        "name": "Merle K (Mudhole) Smith Airport",
        "lat": 60.4918,
        "lng": -145.478
    },
    {
        "code": "CXF",
        "name": "Coldfoot Airport",
        "lat": 67.2522,
        "lng": -150.204
    },
    {
        "code": "CYT",
        "name": "Yakataga Airport",
        "lat": 60.081,
        "lng": -142.4945
    },
    {
        "code": "CZF",
        "name": "Cape Romanzof LRRS Airport",
        "lat": 61.7803,
        "lng": -166.039
    },
    {
        "code": "DRG",
        "name": "Deering Airport",
        "lat": 66.0696,
        "lng": -162.766
    },
    {
        "code": "RDB",
        "name": "Red Dog Airport",
        "lat": 68.0321,
        "lng": -162.899
    },
    {
        "code": "ADK",
        "name": "Adak Airport",
        "lat": 51.878,
        "lng": -176.646
    },
    {
        "code": "DLG",
        "name": "Dillingham Airport",
        "lat": 59.0447,
        "lng": -158.505
    },
    {
        "code": "MLL",
        "name": "Marshall Don Hunter Sr Airport",
        "lat": 61.8643,
        "lng": -162.026
    },
    {
        "code": "ADQ",
        "name": "Kodiak Airport",
        "lat": 57.75,
        "lng": -152.494
    },
    {
        "code": "DUT",
        "name": "Unalaska Airport",
        "lat": 53.9001,
        "lng": -166.544
    },
    {
        "code": "KKH",
        "name": "Kongiganak Airport",
        "lat": 59.9608,
        "lng": -162.881
    },
    {
        "code": "EDF",
        "name": "Elmendorf Air Force Base",
        "lat": 61.251,
        "lng": -149.807
    },
    {
        "code": "EEK",
        "name": "Eek Airport",
        "lat": 60.2137,
        "lng": -162.0439
    },
    {
        "code": "EAA",
        "name": "Eagle Airport",
        "lat": 64.7764,
        "lng": -141.151
    },
    {
        "code": "EHM",
        "name": "Cape Newenham LRRS Airport",
        "lat": 58.6464,
        "lng": -162.063
    },
    {
        "code": "EIL",
        "name": "Eielson Air Force Base",
        "lat": 64.6657,
        "lng": -147.102
    },
    {
        "code": "ELV",
        "name": "Elfin Cove Seaplane Base",
        "lat": 58.1952,
        "lng": -136.347
    },
    {
        "code": "EMK",
        "name": "Emmonak Airport",
        "lat": 62.7861,
        "lng": -164.491
    },
    {
        "code": "ENA",
        "name": "Kenai Municipal Airport",
        "lat": 60.5731,
        "lng": -151.245
    },
    {
        "code": "WWT",
        "name": "Newtok Airport",
        "lat": 60.9391,
        "lng": -164.641
    },
    {
        "code": "FAI",
        "name": "Fairbanks International Airport",
        "lat": 64.8151,
        "lng": -147.856
    },
    {
        "code": "FBK",
        "name": "Ladd AAF Airfield",
        "lat": 64.8375,
        "lng": -147.614
    },
    {
        "code": "PAFE",
        "name": "Kake Airport",
        "lat": 56.9614,
        "lng": -133.91
    },
    {
        "code": "ABL",
        "name": "Ambler Airport",
        "lat": 67.1063,
        "lng": -157.857
    },
    {
        "code": "FRN",
        "name": "Bryant Army Heliport",
        "lat": 61.2664,
        "lng": -149.653
    },
    {
        "code": "NIB",
        "name": "Nikolai Airport",
        "lat": 63.0186,
        "lng": -154.358
    },
    {
        "code": "FMC",
        "name": "Five Mile Airport",
        "lat": 65.927,
        "lng": -149.84
    },
    {
        "code": "FWL",
        "name": "Farewell Airport",
        "lat": 62.5093,
        "lng": -153.8923
    },
    {
        "code": "GAL",
        "name": "Edward G. Pitka Sr Airport",
        "lat": 64.7362,
        "lng": -156.937
    },
    {
        "code": "GBH",
        "name": "Galbraith Lake Airport",
        "lat": 68.4797,
        "lng": -149.49
    },
    {
        "code": "KWK",
        "name": "Kwigillingok Airport",
        "lat": 59.8765,
        "lng": -163.169
    },
    {
        "code": "SHG",
        "name": "Shungnak Airport",
        "lat": 66.8881,
        "lng": -157.162
    },
    {
        "code": "GKN",
        "name": "Gulkana Airport",
        "lat": 62.1549,
        "lng": -145.457
    },
    {
        "code": "GLV",
        "name": "Golovin Airport",
        "lat": 64.5505,
        "lng": -163.007
    },
    {
        "code": "GAM",
        "name": "Gambell Airport",
        "lat": 63.7668,
        "lng": -171.733
    },
    {
        "code": "AGN",
        "name": "Angoon Seaplane Base",
        "lat": 57.5036,
        "lng": -134.585
    },
    {
        "code": "BGQ",
        "name": "Big Lake Airport",
        "lat": 61.5361,
        "lng": -149.814
    },
    {
        "code": "GST",
        "name": "Gustavus Airport",
        "lat": 58.4253,
        "lng": -135.707
    },
    {
        "code": "NME",
        "name": "Nightmute Airport",
        "lat": 60.471,
        "lng": -164.701
    },
    {
        "code": "SGY",
        "name": "Skagway Airport",
        "lat": 59.4601,
        "lng": -135.316
    },
    {
        "code": "HCR",
        "name": "Holy Cross Airport",
        "lat": 62.1883,
        "lng": -159.775
    },
    {
        "code": "HSL",
        "name": "Huslia Airport",
        "lat": 65.6979,
        "lng": -156.351
    },
    {
        "code": "HNS",
        "name": "Haines Airport",
        "lat": 59.2438,
        "lng": -135.524
    },
    {
        "code": "HOM",
        "name": "Homer Airport",
        "lat": 59.6456,
        "lng": -151.477
    },
    {
        "code": "HPB",
        "name": "Hooper Bay Airport",
        "lat": 61.5239,
        "lng": -166.147
    },
    {
        "code": "HUS",
        "name": "Hughes Airport",
        "lat": 66.0411,
        "lng": -154.263
    },
    {
        "code": "SHX",
        "name": "Shageluk Airport",
        "lat": 62.6923,
        "lng": -159.569
    },
    {
        "code": "HYG",
        "name": "Hydaburg Seaplane Base",
        "lat": 55.2063,
        "lng": -132.828
    },
    {
        "code": "IGG",
        "name": "Igiugig Airport",
        "lat": 59.324,
        "lng": -155.902
    },
    {
        "code": "EGX",
        "name": "Egegik Airport",
        "lat": 58.1855,
        "lng": -157.375
    },
    {
        "code": "IAN",
        "name": "Bob Baker Memorial Airport",
        "lat": 66.976,
        "lng": -160.437
    },
    {
        "code": "ILI",
        "name": "Iliamna Airport",
        "lat": 59.7544,
        "lng": -154.911
    },
    {
        "code": "UTO",
        "name": "Indian Mountain LRRS Airport",
        "lat": 65.9928,
        "lng": -153.704
    },
    {
        "code": "MCL",
        "name": "McKinley National Park Airport",
        "lat": 63.7326,
        "lng": -148.911
    },
    {
        "code": "WAA",
        "name": "Wales Airport",
        "lat": 65.6226,
        "lng": -168.095
    },
    {
        "code": "JNU",
        "name": "Juneau International Airport",
        "lat": 58.355,
        "lng": -134.576
    },
    {
        "code": "KGK",
        "name": "Koliganek Airport",
        "lat": 59.7266,
        "lng": -157.259
    },
    {
        "code": "KDK",
        "name": "Kodiak Municipal Airport",
        "lat": 57.8059,
        "lng": -152.374
    },
    {
        "code": "KFP",
        "name": "False Pass Airport",
        "lat": 54.8474,
        "lng": -163.41
    },
    {
        "code": "AKK",
        "name": "Akhiok Airport",
        "lat": 56.9387,
        "lng": -154.183
    },
    {
        "code": "KPN",
        "name": "Kipnuk Airport",
        "lat": 59.933,
        "lng": -164.031
    },
    {
        "code": "KKA",
        "name": "Koyuk Alfred Adams Airport",
        "lat": 64.9395,
        "lng": -161.154
    },
    {
        "code": "LKK",
        "name": "Kulik Lake Airport",
        "lat": 58.9821,
        "lng": -155.121
    },
    {
        "code": "AKN",
        "name": "King Salmon Airport",
        "lat": 58.6768,
        "lng": -156.649
    },
    {
        "code": "IKO",
        "name": "Nikolski Air Station",
        "lat": 52.9416,
        "lng": -168.849
    },
    {
        "code": "AKP",
        "name": "Anaktuvuk Pass Airport",
        "lat": 68.1336,
        "lng": -151.743
    },
    {
        "code": "KTN",
        "name": "Ketchikan International Airport",
        "lat": 55.3556,
        "lng": -131.714
    },
    {
        "code": "UUK",
        "name": "Ugnu-Kuparuk Airport",
        "lat": 70.3308,
        "lng": -149.598
    },
    {
        "code": "KAL",
        "name": "Kaltag Airport",
        "lat": 64.3191,
        "lng": -158.741
    },
    {
        "code": "KLW",
        "name": "Klawock Airport",
        "lat": 55.5792,
        "lng": -133.076
    },
    {
        "code": "KYK",
        "name": "Karluk Airport",
        "lat": 57.5671,
        "lng": -154.45
    },
    {
        "code": "KLN",
        "name": "Larsen Bay Airport",
        "lat": 57.5351,
        "lng": -153.978
    },
    {
        "code": "KLG",
        "name": "Kalskag Airport",
        "lat": 61.5363,
        "lng": -160.341
    },
    {
        "code": "DQH",
        "name": "Alpine Airstrip",
        "lat": 70.3443,
        "lng": -150.945
    },
    {
        "code": "WCR",
        "name": "Chandalar Lake Airport",
        "lat": 67.5045,
        "lng": -148.483
    },
    {
        "code": "LUR",
        "name": "Cape Lisburne LRRS Airport",
        "lat": 68.8751,
        "lng": -166.11
    },
    {
        "code": "KMO",
        "name": "Manokotak Airport",
        "lat": 58.9902,
        "lng": -159.05
    },
    {
        "code": "MCG",
        "name": "McGrath Airport",
        "lat": 62.9529,
        "lng": -155.606
    },
    {
        "code": "MDO",
        "name": "Middleton Island Airport",
        "lat": 59.4499,
        "lng": -146.307
    },
    {
        "code": "LMA",
        "name": "Minchumina Airport",
        "lat": 63.886,
        "lng": -152.302
    },
    {
        "code": "SMK",
        "name": "St Michael Airport",
        "lat": 63.4901,
        "lng": -162.11
    },
    {
        "code": "MLY",
        "name": "Manley Hot Springs Airport",
        "lat": 64.9976,
        "lng": -150.644
    },
    {
        "code": "MTM",
        "name": "Metlakatla Seaplane Base",
        "lat": 55.131,
        "lng": -131.578
    },
    {
        "code": "MOU",
        "name": "Mountain Village Airport",
        "lat": 62.0954,
        "lng": -163.682
    },
    {
        "code": "MRI",
        "name": "Merrill Field",
        "lat": 61.2135,
        "lng": -149.844
    },
    {
        "code": "MXY",
        "name": "Mc Carthy Airport",
        "lat": 61.4371,
        "lng": -142.904
    },
    {
        "code": "MYU",
        "name": "Mekoryuk Airport",
        "lat": 60.3714,
        "lng": -166.271
    },
    {
        "code": "WNA",
        "name": "Napakiak Airport",
        "lat": 60.6903,
        "lng": -161.979
    },
    {
        "code": "ANC",
        "name": "Ted Stevens Anchorage International Airport",
        "lat": 61.1744,
        "lng": -149.996
    },
    {
        "code": "ANI",
        "name": "Aniak Airport",
        "lat": 61.5816,
        "lng": -159.543
    },
    {
        "code": "ENN",
        "name": "Nenana Municipal Airport",
        "lat": 64.5473,
        "lng": -149.074
    },
    {
        "code": "NNL",
        "name": "Nondalton Airport",
        "lat": 59.9802,
        "lng": -154.839
    },
    {
        "code": "FNR",
        "name": "Funter Bay Seaplane Base",
        "lat": 58.2544,
        "lng": -134.898
    },
    {
        "code": "ANN",
        "name": "Annette Island Airport",
        "lat": 55.0424,
        "lng": -131.572
    },
    {
        "code": "NUL",
        "name": "Nulato Airport",
        "lat": 64.7293,
        "lng": -158.074
    },
    {
        "code": "ANV",
        "name": "Anvik Airport",
        "lat": 62.6467,
        "lng": -160.191
    },
    {
        "code": "KNW",
        "name": "New Stuyahok Airport",
        "lat": 59.4499,
        "lng": -157.328
    },
    {
        "code": "OBU",
        "name": "Kobuk Airport",
        "lat": 66.9123,
        "lng": -156.897
    },
    {
        "code": "PCA",
        "name": "Portage Creek Airport",
        "lat": 58.9065,
        "lng": -157.714
    },
    {
        "code": "HNH",
        "name": "Hoonah Airport",
        "lat": 58.0961,
        "lng": -135.4101
    },
    {
        "code": "OME",
        "name": "Nome Airport",
        "lat": 64.5122,
        "lng": -165.445
    },
    {
        "code": "OOK",
        "name": "Toksook Bay Airport",
        "lat": 60.5414,
        "lng": -165.087
    },
    {
        "code": "ORT",
        "name": "Northway Airport",
        "lat": 62.9613,
        "lng": -141.929
    },
    {
        "code": "OTZ",
        "name": "Ralph Wien Memorial Airport",
        "lat": 66.8847,
        "lng": -162.599
    },
    {
        "code": "NLG",
        "name": "Nelson Lagoon Airport",
        "lat": 56.0075,
        "lng": -161.16
    },
    {
        "code": "STG",
        "name": "St George Airport",
        "lat": 56.5783,
        "lng": -169.662
    },
    {
        "code": "KPC",
        "name": "Port Clarence Coast Guard Station",
        "lat": 65.2537,
        "lng": -166.859
    },
    {
        "code": "KPV",
        "name": "Perryville Airport",
        "lat": 55.906,
        "lng": -159.163
    },
    {
        "code": "PSG",
        "name": "Petersburg James A Johnson Airport",
        "lat": 56.8017,
        "lng": -132.945
    },
    {
        "code": "PTH",
        "name": "Port Heiden Airport",
        "lat": 56.9591,
        "lng": -158.633
    },
    {
        "code": "PKA",
        "name": "Napaskiak Airport",
        "lat": 60.7029,
        "lng": -161.778
    },
    {
        "code": "PTU",
        "name": "Platinum Airport",
        "lat": 59.0114,
        "lng": -161.82
    },
    {
        "code": "PIP",
        "name": "Pilot Point Airport",
        "lat": 57.5804,
        "lng": -157.572
    },
    {
        "code": "PHO",
        "name": "Point Hope Airport",
        "lat": 68.3488,
        "lng": -166.799
    },
    {
        "code": "PPC",
        "name": "Prospect Creek Airport",
        "lat": 66.8141,
        "lng": -150.644
    },
    {
        "code": "KWN",
        "name": "Quinhagak Airport",
        "lat": 59.7551,
        "lng": -161.845
    },
    {
        "code": "NUI",
        "name": "Nuiqsut Airport",
        "lat": 70.21,
        "lng": -151.006
    },
    {
        "code": "ARC",
        "name": "Arctic Village Airport",
        "lat": 68.1147,
        "lng": -145.579
    },
    {
        "code": "RSH",
        "name": "Russian Mission Airport",
        "lat": 61.7789,
        "lng": -161.3195
    },
    {
        "code": "RBY",
        "name": "Ruby Airport",
        "lat": 64.7272,
        "lng": -155.47
    },
    {
        "code": "SVA",
        "name": "Savoonga Airport",
        "lat": 63.6864,
        "lng": -170.493
    },
    {
        "code": "SCC",
        "name": "Deadhorse Airport",
        "lat": 70.1947,
        "lng": -148.465
    },
    {
        "code": "SDP",
        "name": "Sand Point Airport",
        "lat": 55.315,
        "lng": -160.523
    },
    {
        "code": "SHH",
        "name": "Shishmaref Airport",
        "lat": 66.2496,
        "lng": -166.0891
    },
    {
        "code": "SIT",
        "name": "Sitka Rocky Gutierrez Airport",
        "lat": 57.0471,
        "lng": -135.362
    },
    {
        "code": "WLK",
        "name": "Selawik Airport",
        "lat": 66.6001,
        "lng": -159.986
    },
    {
        "code": "SLQ",
        "name": "Sleetmute Airport",
        "lat": 61.7005,
        "lng": -157.166
    },
    {
        "code": "KSM",
        "name": "St Mary's Airport",
        "lat": 62.0605,
        "lng": -163.302
    },
    {
        "code": "SNP",
        "name": "St Paul Island Airport",
        "lat": 57.1673,
        "lng": -170.22
    },
    {
        "code": "SOV",
        "name": "Seldovia Airport",
        "lat": 59.4424,
        "lng": -151.704
    },
    {
        "code": "SMU",
        "name": "Sheep Mountain Airport",
        "lat": 61.812,
        "lng": -147.507
    },
    {
        "code": "UMM",
        "name": "Summit Airport",
        "lat": 63.3315,
        "lng": -149.127
    },
    {
        "code": "SVW",
        "name": "Sparrevohn LRRS Airport",
        "lat": 61.0974,
        "lng": -155.574
    },
    {
        "code": "SKW",
        "name": "Skwentna Airport",
        "lat": 61.9653,
        "lng": -151.191
    },
    {
        "code": "SXQ",
        "name": "Soldotna Airport",
        "lat": 60.4757,
        "lng": -151.034
    },
    {
        "code": "SYA",
        "name": "Eareckson Air Station",
        "lat": 52.7123,
        "lng": 174.114
    },
    {
        "code": "TAL",
        "name": "Ralph M Calhoun Memorial Airport",
        "lat": 65.1744,
        "lng": -152.109
    },
    {
        "code": "TNC",
        "name": "Tin City Long Range Radar Station Airport",
        "lat": 65.5631,
        "lng": -167.922
    },
    {
        "code": "TLA",
        "name": "Teller Airport",
        "lat": 65.2404,
        "lng": -166.339
    },
    {
        "code": "TOG",
        "name": "Togiak Airport",
        "lat": 59.0528,
        "lng": -160.397
    },
    {
        "code": "TKA",
        "name": "Talkeetna Airport",
        "lat": 62.3205,
        "lng": -150.094
    },
    {
        "code": "TLJ",
        "name": "Tatalina LRRS Airport",
        "lat": 62.8944,
        "lng": -155.977
    },
    {
        "code": "ATK",
        "name": "Atqasuk Edward Burnell Sr Memorial Airport",
        "lat": 70.467,
        "lng": -157.436
    },
    {
        "code": "AUK",
        "name": "Alakanuk Airport",
        "lat": 62.68,
        "lng": -164.6599
    },
    {
        "code": "UMT",
        "name": "Umiat Airport",
        "lat": 69.3711,
        "lng": -152.136
    },
    {
        "code": "UNK",
        "name": "Unalakleet Airport",
        "lat": 63.8884,
        "lng": -160.799
    },
    {
        "code": "WOW",
        "name": "Willow Airport",
        "lat": 61.7542,
        "lng": -150.052
    },
    {
        "code": "VAK",
        "name": "Chevak Airport",
        "lat": 61.5409,
        "lng": -165.6005
    },
    {
        "code": "KVC",
        "name": "King Cove Airport",
        "lat": 55.1163,
        "lng": -162.266
    },
    {
        "code": "VDZ",
        "name": "Valdez Pioneer Field",
        "lat": 61.1339,
        "lng": -146.248
    },
    {
        "code": "VEE",
        "name": "Venetie Airport",
        "lat": 67.0087,
        "lng": -146.366
    },
    {
        "code": "KVL",
        "name": "Kivalina Airport",
        "lat": 67.7362,
        "lng": -164.563
    },
    {
        "code": "WBQ",
        "name": "Beaver Airport",
        "lat": 66.3622,
        "lng": -147.407
    },
    {
        "code": "SWD",
        "name": "Seward Airport",
        "lat": 60.1269,
        "lng": -149.419
    },
    {
        "code": "WRG",
        "name": "Wrangell Airport",
        "lat": 56.4843,
        "lng": -132.37
    },
    {
        "code": "AIN",
        "name": "Wainwright Airport",
        "lat": 70.638,
        "lng": -159.995
    },
    {
        "code": "WMO",
        "name": "White Mountain Airport",
        "lat": 64.6892,
        "lng": -163.413
    },
    {
        "code": "WTK",
        "name": "Noatak Airport",
        "lat": 67.5661,
        "lng": -162.975
    },
    {
        "code": "WWA",
        "name": "Wasilla Airport",
        "lat": 61.5717,
        "lng": -149.54
    },
    {
        "code": "YAK",
        "name": "Yakutat Airport",
        "lat": 59.5033,
        "lng": -139.66
    },
    {
        "code": "PEC",
        "name": "Pelican Seaplane Base",
        "lat": 57.9552,
        "lng": -136.236
    },
    {
        "code": "AKI",
        "name": "Akiak Airport",
        "lat": 60.9029,
        "lng": -161.231
    },
    {
        "code": "AET",
        "name": "Allakaket Airport",
        "lat": 66.5518,
        "lng": -152.622
    },
    {
        "code": "PFC",
        "name": "Pacific City State Airport",
        "lat": 45.1998,
        "lng": -123.962
    },
    {
        "code": "NCN",
        "name": "Chenega Bay Airport",
        "lat": 60.0773,
        "lng": -147.992
    },
    {
        "code": "CLP",
        "name": "Clarks Point Airport",
        "lat": 58.8337,
        "lng": -158.529
    },
    {
        "code": "ELI",
        "name": "Elim Airport",
        "lat": 64.6147,
        "lng": -162.272
    },
    {
        "code": "KUK",
        "name": "Kasigluk Airport",
        "lat": 60.8744,
        "lng": -162.524
    },
    {
        "code": "KNK",
        "name": "Kokhanok Airport",
        "lat": 59.4332,
        "lng": -154.804
    },
    {
        "code": "KOT",
        "name": "Kotlik Airport",
        "lat": 63.0306,
        "lng": -163.533
    },
    {
        "code": "KTS",
        "name": "Brevig Mission Airport",
        "lat": 65.3313,
        "lng": -166.466
    },
    {
        "code": "KYU",
        "name": "Koyukuk Airport",
        "lat": 64.8761,
        "lng": -157.727
    },
    {
        "code": "KWT",
        "name": "Kwethluk Airport",
        "lat": 60.7903,
        "lng": -161.444
    },
    {
        "code": "ORV",
        "name": "Robert (Bob) Curtis Memorial Airport",
        "lat": 66.8179,
        "lng": -161.019
    },
    {
        "code": "SKK",
        "name": "Shaktoolik Airport",
        "lat": 64.3711,
        "lng": -161.224
    },
    {
        "code": "TKJ",
        "name": "Tok Junction Airport",
        "lat": 63.3295,
        "lng": -142.954
    },
    {
        "code": "WSN",
        "name": "South Naknek Nr 2 Airport",
        "lat": 58.7034,
        "lng": -157.008
    },
    {
        "code": "FYU",
        "name": "Fort Yukon Airport",
        "lat": 66.5715,
        "lng": -145.25
    },
    {
        "code": "PGM",
        "name": "Port Graham Airport",
        "lat": 59.3483,
        "lng": -151.832
    },
    {
        "code": "BKH",
        "name": "Barking Sands Airport",
        "lat": 22.0228,
        "lng": -159.785
    },
    {
        "code": "HDH",
        "name": "Dillingham Airfield",
        "lat": 21.5795,
        "lng": -158.197
    },
    {
        "code": "HHI",
        "name": "Wheeler Army Airfield",
        "lat": 21.4835,
        "lng": -158.04
    },
    {
        "code": "HNM",
        "name": "Hana Airport",
        "lat": 20.7956,
        "lng": -156.014
    },
    {
        "code": "HIK",
        "name": "Hickam Air Force Base",
        "lat": 21.3353,
        "lng": -157.9483
    },
    {
        "code": "JHM",
        "name": "Kapalua Airport",
        "lat": 20.9629,
        "lng": -156.673
    },
    {
        "code": "JRF",
        "name": "Kalaeloa Airport",
        "lat": 21.3074,
        "lng": -158.07
    },
    {
        "code": "KOA",
        "name": "Ellison Onizuka Kona International Airport at Keahole",
        "lat": 19.7388,
        "lng": -156.0456
    },
    {
        "code": "HKP",
        "name": "Kaanapali Airport",
        "lat": 20.945,
        "lng": -156.69
    },
    {
        "code": "LIH",
        "name": "Lihue Airport",
        "lat": 21.976,
        "lng": -159.339
    },
    {
        "code": "LUP",
        "name": "Kalaupapa Airport",
        "lat": 21.211,
        "lng": -156.974
    },
    {
        "code": "MKK",
        "name": "Molokai Airport",
        "lat": 21.1529,
        "lng": -157.096
    },
    {
        "code": "MUE",
        "name": "Waimea Kohala Airport",
        "lat": 20.0013,
        "lng": -155.668
    },
    {
        "code": "NGF",
        "name": "Kaneohe Bay MCAS (Marion E. Carl Field) Airport",
        "lat": 21.4505,
        "lng": -157.768
    },
    {
        "code": "HNL",
        "name": "Daniel K Inouye International Airport",
        "lat": 21.3206,
        "lng": -157.9242
    },
    {
        "code": "LNY",
        "name": "Lanai Airport",
        "lat": 20.7856,
        "lng": -156.951
    },
    {
        "code": "OGG",
        "name": "Kahului Airport",
        "lat": 20.8986,
        "lng": -156.43
    },
    {
        "code": "PAK",
        "name": "Port Allen Airport",
        "lat": 21.8969,
        "lng": -159.603
    },
    {
        "code": "BSF",
        "name": "Bradshaw Army Airfield",
        "lat": 19.7601,
        "lng": -155.554
    },
    {
        "code": "ITO",
        "name": "Hilo International Airport",
        "lat": 19.7214,
        "lng": -155.048
    },
    {
        "code": "UPP",
        "name": "Upolu Airport",
        "lat": 20.2653,
        "lng": -155.86
    },
    {
        "code": "PIZ",
        "name": "Point Lay LRRS Airport",
        "lat": 69.7329,
        "lng": -163.005
    },
    {
        "code": "PWR",
        "name": "Port Walter Seaplane Base",
        "lat": 56.381,
        "lng": -134.651
    },
    {
        "code": "PYL",
        "name": "Perry Island Seaplane Base",
        "lat": 60.6853,
        "lng": -147.919
    },
    {
        "code": "RDV",
        "name": "Red Devil Airport",
        "lat": 61.7881,
        "lng": -157.35
    },
    {
        "code": "REH",
        "name": "Rehoboth Airport",
        "lat": 38.72,
        "lng": -75.122
    },
    {
        "code": "RMP",
        "name": "Rampart Airport",
        "lat": 65.5079,
        "lng": -150.141
    },
    {
        "code": "RZH",
        "name": "Quartz Hill Airport",
        "lat": 34.65,
        "lng": -118.206
    },
    {
        "code": "LPS",
        "name": "Lopez Island Airport",
        "lat": 48.4839,
        "lng": -122.938
    },
    {
        "code": "KEH",
        "name": "Kenmore Air Harbor Inc Seaplane Base",
        "lat": 47.7548,
        "lng": -122.259
    },
    {
        "code": "SAS",
        "name": "Salton Sea Airport",
        "lat": 33.2414,
        "lng": -115.952
    },
    {
        "code": "SCR",
        "name": "Scranton Municipal Airport.",
        "lat": 41.4802,
        "lng": -75.772
    },
    {
        "code": "SFR",
        "name": "San Fernando Airport",
        "lat": 34.289,
        "lng": -118.422
    },
    {
        "code": "SKJ",
        "name": "Sitkinak Airport",
        "lat": 56.5378,
        "lng": -154.1412
    },
    {
        "code": "SRF",
        "name": "Hamilton Field",
        "lat": 38.06,
        "lng": -122.51
    },
    {
        "code": "SRU",
        "name": "Santa Cruz Sky Park",
        "lat": 37.0503,
        "lng": -122.0315
    },
    {
        "code": "SRV",
        "name": "Stony River 2 Airport",
        "lat": 61.7897,
        "lng": -156.589
    },
    {
        "code": "SSU",
        "name": "Greenbrier Airport",
        "lat": 37.775,
        "lng": -80.336
    },
    {
        "code": "SVS",
        "name": "Stevens Village Airport",
        "lat": 66.0172,
        "lng": -149.0545
    },
    {
        "code": "SXP",
        "name": "Nunam Iqua Airport",
        "lat": 62.5206,
        "lng": -164.848
    },
    {
        "code": "SYB",
        "name": "Seal Bay Seaplane Base",
        "lat": 58.3733,
        "lng": -152.2018
    },
    {
        "code": "SYL",
        "name": "Roberts Army Heliport",
        "lat": 35.815,
        "lng": -120.744
    },
    {
        "code": "SYN",
        "name": "Stanton Airfield",
        "lat": 44.4755,
        "lng": -93.0163
    },
    {
        "code": "SZN",
        "name": "Santa Cruz Island Airport",
        "lat": 34.0602,
        "lng": -119.9153
    },
    {
        "code": "SZP",
        "name": "Santa Paula Airport",
        "lat": 34.3472,
        "lng": -119.061
    },
    {
        "code": "TCT",
        "name": "Takotna Airport",
        "lat": 62.9932,
        "lng": -156.029
    },
    {
        "code": "TKE",
        "name": "Tenakee Seaplane Base",
        "lat": 57.7797,
        "lng": -135.218
    },
    {
        "code": "TKL",
        "name": "Taku Lodge Seaplane Base",
        "lat": 58.4897,
        "lng": -133.943
    },
    {
        "code": "TLT",
        "name": "Tuluksak Airport",
        "lat": 61.0968,
        "lng": -160.969
    },
    {
        "code": "PTA",
        "name": "Port Alsworth Airport",
        "lat": 60.2017,
        "lng": -154.3259
    },
    {
        "code": "TSG",
        "name": "Tanacross Airport",
        "lat": 63.3744,
        "lng": -143.336
    },
    {
        "code": "TWH",
        "name": "Two Harbors Amphibious Terminal",
        "lat": 33.4322,
        "lng": -118.5086
    },
    {
        "code": "TYE",
        "name": "Tyonek Airport",
        "lat": 61.0767,
        "lng": -151.138
    },
    {
        "code": "DBS",
        "name": "Dubois Municipal Airport",
        "lat": 44.1666,
        "lng": -112.226
    },
    {
        "code": "UGB",
        "name": "Ugashik Bay Airport",
        "lat": 57.4254,
        "lng": -157.74
    },
    {
        "code": "US-0086",
        "name": "Jim's Private Airport",
        "lat": 33.5979,
        "lng": -84.1444
    },
    {
        "code": "LHU",
        "name": "Havasu Airpark",
        "lat": 34.4573,
        "lng": -114.3641
    },
    {
        "code": "AHT",
        "name": "Amchitka Army Airfield",
        "lat": 51.3778,
        "lng": 179.2592
    },
    {
        "code": "US-0254",
        "name": "Yuma Auxiliary Army Airfield 2",
        "lat": 32.5475,
        "lng": -114.5118
    },
    {
        "code": "BNH",
        "name": "Cape Air Seaplanes on Boston Harbor Seaplane Base",
        "lat": 42.3525,
        "lng": -71.0258
    },
    {
        "code": "XWA",
        "name": "Williston Basin International Airport",
        "lat": 48.2584,
        "lng": -103.7488
    },
    {
        "code": "RTL",
        "name": "Spirit Lake Municipal Airport",
        "lat": 43.3875,
        "lng": -95.1392
    },
    {
        "code": "BPA",
        "name": "Grumman Bethpage Airport",
        "lat": 40.7494,
        "lng": -73.496
    },
    {
        "code": "GMV",
        "name": "Monument Valley Airport",
        "lat": 37.0167,
        "lng": -110.201
    },
    {
        "code": "FBS",
        "name": "Friday Harbor Seaplane Base",
        "lat": 48.5373,
        "lng": -123.01
    },
    {
        "code": "RSJ",
        "name": "Rosario Seaplane Base",
        "lat": 48.6457,
        "lng": -122.868
    },
    {
        "code": "LKE",
        "name": "Kenmore Air Harbor Seaplane Base",
        "lat": 47.629,
        "lng": -122.339
    },
    {
        "code": "RCE",
        "name": "Roche Harbor Airport",
        "lat": 48.6123,
        "lng": -123.139
    },
    {
        "code": "WSX",
        "name": "Westsound/Wsx Seaplane Base",
        "lat": 48.6179,
        "lng": -122.953
    },
    {
        "code": "WBB",
        "name": "Stebbins Airport",
        "lat": 63.516,
        "lng": -162.278
    },
    {
        "code": "WEA",
        "name": "Parker County Airport",
        "lat": 32.7463,
        "lng": -97.6824
    },
    {
        "code": "JBK",
        "name": "Berkley Municipal Heliport",
        "lat": 37.8666,
        "lng": -122.3065
    },
    {
        "code": "DTR",
        "name": "Decatur Shores Airport",
        "lat": 48.4998,
        "lng": -122.814
    },
    {
        "code": "WSB",
        "name": "Steamboat Bay Seaplane Base",
        "lat": 55.5296,
        "lng": -133.642
    },
    {
        "code": "UGI",
        "name": "San Juan /Uganik/ Seaplane Base",
        "lat": 57.7304,
        "lng": -153.321
    },
    {
        "code": "WSM",
        "name": "Wiseman Airport",
        "lat": 67.4046,
        "lng": -150.123
    },
    {
        "code": "GWV",
        "name": "Glendale Fokker Field",
        "lat": 39.9487,
        "lng": -80.7595
    },
    {
        "code": "MPB",
        "name": "Miami Seaplane Base",
        "lat": 25.7783,
        "lng": -80.1703
    },
    {
        "code": "XXZ",
        "name": "Modi",
        "lat": 89.9998,
        "lng": 179.9999
    },
    {
        "code": "UKN",
        "name": "Waukon Municipal Airport",
        "lat": 43.2805,
        "lng": -91.4695
    },
    {
        "code": "KKI",
        "name": "Akiachak Airport",
        "lat": 60.9048,
        "lng": -161.422
    },
    {
        "code": "BCC",
        "name": "Bear Creek 3 Airport",
        "lat": 63.5733,
        "lng": -156.1495
    },
    {
        "code": "JBT",
        "name": "Bethel Seaplane Base",
        "lat": 60.782,
        "lng": -161.743
    },
    {
        "code": "CZP",
        "name": "Cape Pole Seaplane Base",
        "lat": 55.9663,
        "lng": -133.797
    },
    {
        "code": "KBW",
        "name": "Chignik Bay Seaplane Base",
        "lat": 56.2956,
        "lng": -158.401
    },
    {
        "code": "KBC",
        "name": "Birch Creek Airport",
        "lat": 66.274,
        "lng": -145.824
    },
    {
        "code": "CZC",
        "name": "Copper Center 2 Airport",
        "lat": 61.9412,
        "lng": -145.294
    },
    {
        "code": "ZNC",
        "name": "Nyac Airport",
        "lat": 60.9807,
        "lng": -159.994
    }
];
