let navs = document.querySelectorAll('.navLinks');
let sideScreenMenu = document.querySelector('.sideScreenMenu');
let menuItems = document.querySelector('.menuItems');

let outputContent = getId('outputContent');
let routeSection1 = getId('routeSection1');
let routeSection2 = getId('routeSection2');
let PPbusStations = getId('PPbusStations');

let OutputScreen = getId('OutputScreen');
let OutputScreen2 = getId('OutputScreen2');
let OutputScreen3 = getId('OutputScreen3');
let outputBusStopPart1 = getId('outputBusStopPart1');
let outputBusStopPart2 = getId('outputBusStopPart2');

let junctionStopsHeading = getId('junctionStopsHeading');
let avlBusStops = getId('avlBusStops');

let regularRoutesOutput = getId('regularRoutesOutput');
let rareRoutesOutput = getId('rareRoutesOutput');

// Font Size Handling Handles
let StopNameHead = getId('StopNameHead');
let StopNameSub = getId('StopNameSub');

// Route Output Screen Handles
let output2RouteHolder = getId('output2RouteHolder');
let route1No = getId('route1No');
let route2No = getId('route2No');

// Input Handles
let input1 = getId('input1');
let input2 = getId('input2');
let clear1 = getId('clear1');
let clear2 = getId('clear2');

// Suggesions List
let suggessionsList = getId('suggessionsList');

// From to Section Handles
let swapIconContainer = getId('swapIconContainer');
let input2Container = getId('input2Container');
let FromToSuggesions = getId('FromToSuggesions');

// Detailed Route Output Handles
let upSource = getId('upSource');
let upViaList = getId('upViaList');
let upDestination = getId('upDestination');

let downSource = getId('downSource');
let downViaList = getId('downViaList');
let downDestination = getId('downDestination');

let upRouteHolder = getId('upRouteHolder');
let downRouteHolder = getId('downRouteHolder');

let upRouteStopsList = getId('upRouteStopsList');
let downRouteStopsList = getId('downRouteStopsList');

let upRouteDownSpan = getId('upRouteDownSpan');
let upRouteDownIcon = getId('upRouteDownIcon');

let downRouteDownSpan = getId('downRouteDownSpan');
let downRouteDownIcon = getId('downRouteDownIcon');

// Referance Arrays and Variables
let JunctionStop, backState, JunctionStopState;
let suggessionsArray = routesArray;
let feature = 1;

// ROUTE DATA
let secRoutes_UP = [
    "1",
    "1B",
    "1C",
    "1D",
    "1HD",
    "1J",
    "1K",
    "1L",
    "1MD",
    "1P",
    "1V",
    "1VM",
    "1VS",
    "1W",
    "1X",
    "1Z",
    "1D/299",
    "1Z/251",
    "1Z/539",
    "2",
    "2C",
    "2J",
    "2K",
    "2U",
    "2Z",
    "2Z/251",
    "5K",
    "5M",
    "5K/92A",
    "5K/188",
    "7Z",
    "7Z/251",
    "8A",
    "8AK",
    "8C",
    "8UA",
    "8A/178G",
    "10",
    "10F",
    "10H",
    "10HA",
    "10HL",
    "10J",
    "10K",
    "10KJ",
    "10KM",
    "10KL",
    "10Y",
    "10YF",
    "10W",
    "10KM/224G",
    "14P",
    "14X",
    "15D",
    "15H",
    "15H/242RG",
    "16A",
    "16AK",
    "16C",
    "16CD",
    "16CR",
    "16D",
    "16H",
    "16P",
    "16C/281",
    "16D/24B",
    "16NY",
    "17DH",
    "17DS",
    "17DV",
    "17H",
    "17CS",
    "17HN",
    "17S",
    "17V",
    "18",
    "18/283S",
    "18B",
    "18C",
    "18V",
    "20P",
    "21W",
    "22",
    "22D",
    "22K",
    "23B",
    "23BK",
    "23GS",
    "23T",
    "24",
    "24B",
    "24B/16D",
    "24B/281",
    "24BA",
    "24BJ",
    "24E",
    "24J",
    "24L/281",
    "25A",
    "25AJ",
    "25M",
    "25MS",
    "25P",
    "25S",
    "25S/227",
    "25S/229",
    "26M",
    "26N",
    "29B",
    "29B/272G",
    "29B/272I",
    "29S",
    "30",
    "38EX",
    "38X",
    "38T",
    "38T/16C",
    "40",
    "44X",
    "46",
    "47L",
    "47Y",
    "47YM",
    "49",
    "49A",
    "49M",
    "49M/92A",
    "49MT",
    "50B",
    "86A",
    "86C",
    "86J",
    "86K",
    "90B",
    "90DL",
    "90L/251",
    "102B/203N",
    "107JD",
    "107JL",
    "107JS",
    "107VR",
    "107VL",
    "107VS",
    "171",
    "171R",
    "203AR",
    "211",
    "211B",
    "211CD",
    "211D",
    "211DY",
    "211K",
    "211M",
    "212",
    "212/702",
    "212T",
    "219",
    "219N",
    "226",
    "227",
    "229",
    "229P",
    "230A",
    "230P",
    "233",
    "241T",
    "242",
    "242A",
    "242B",
    "242G",
    "242GA",
    "242RG",
    "242/211",
    "245A",
    "250",
    "250C",
    "250D",
    "250S",
    "250/281",
    "272",
    "280",
    "280B",
    "280N",
    "280/488",
    "283C",
    "283T",
    "283VS",
    "290KP",
    "290UA",
    "290UF",
    "290U/201T",
    "290U/205",
    "290U/463",
    "290U/555",
    "498",
    "498K",
    "498U",
    "498VJ",
    "568",
    "580",
    "589"
]

let secRoutes_DN = [
    "14X",
    "16C/38T",
    "16D/24B",
    "24B/16D",
    "38EX",
    "38X",
    "92A/5K",
    "92A/49M",
    "178G/8A",
    "203N/102B",
    "211/242",
    "227/25S",
    "229/25S",
    "242/17H",
    "251/1Z",
    "281/16C",
    "281/24B",
    "281/24L",
    "281/250",
    "283S/18",
    "539/1Z",
    "555/290U"
]

let ECILX_UP = [
    "3KJ",
    "3V",
    "3K/90L",
    "3K/95",
    "3K/102",
    "3K/102B",
    "3K/252",
    "3KN/95",
    "16A/5K",
    "16A/10H",
    "16A/20",
    "16A/47L",
    "16A/49M",
    "16A/219",
    "16C/5K",
    "16C/10H",
    "16C/38T",
    "16C/47L",
    "16C/49M",
    "16H/49M",
    "16R/20",
    "17/219",
    "17H/29B",
    "17H/219",
    "24S",
    "24SS",
    "24S/273",
    "90BE",
    "147",
    "250/10K",
    "250/49",
    "250/49M",
    "250/49MT",
    "250/219",
    "250E",
    "281",
    "578"
]

let ECILX_DN = [
    "3C",
    "5K/16A",
    "5K/16C",
    "10H/16A",
    "10H/16C",
    "16A",
    "16AK",
    "16C",
    "16CR",
    "16H",
    "24E",
    "24J",
    "29B/17H",
    "38T/16C",
    "47L/16A",
    "47L/16C",
    "49/250",
    "49M/16A",
    "49M/16C",
    "49M/16H",
    "49M/250",
    "49MT/250",
    "90L/3K",
    "95/3K",
    "95/3KN",
    "102B/3K",
    "203N/3K",
    "219/16A",
    "219/17",
    "219/17H",
    "219/250",
    "250",
]

let AFZ_UP = [
    "1/25S",
    "1/25S/229",
    "1P/25S",
    "2/25S",
    "3",
    "3C",
    "3D",
    "3DN",
    "3H",
    "3HN",
    "3K",
    "3KN",
    "3L",
    "3M",
    "3N",
    "3T",
    "3Y",
    "3K/242",
    "3K/281",
    "8/37",
    "9K",
    "9K/230P",
    "9K/272G",
    "65/116GA",
    "65M/123",
    "71A",
    "71K",
    "72/277D",
    "72H",
    "72HK",
    "72J",
    "72V",
    "218A",
    "251M",
    "532",
]

let AFZ_DN = [
    "1",
    "1B",
    "1P",
    "2",
    "16A/20",
    "37/8",
    "49A",
    "86A",
    "116GA/65",
    "123/65M",
    "242/3K",
    "281/3K",
]

let MP_UP = [
    "5R",
    "5/5R",
    "5K/16A",
    "5K/16AD",
    "5K/16C",
    "5K/16CD",
    "5K/16D",
    "5K/229",
    "19F",
    "19K",
    "19KJ",
    "19KM",
    "19M",
    "19MP",
    "19S",
    "19YF",
    "49M/16A",
    "49M/16C",
    "49M/16CD",
    "49M/16D",
    "49M/16H",
    "49M/229",
    "49M/250",
    "49M/250C",
    "49M/250D",
    "92K",
    "120",
    "123",
    "126M",
    "156/299",
    "188",
    "188/251",
    "189M",
    "189M/171M",
    "189M/272G",
    "216M",
    "288",
    "288A",
    "288C",
    "288D",
    "300",
    "300L",
    "447R",
    "505",
    "593",
]

let MP_DN = [
    "5K",
    "5M",
    "6R",
    "15D/20",
    "16A/5K",
    "16A/49M",
    "16AD/5K",
    "16C/5K",
    "16C/49M",
    "16CD/5K",
    "16CD/49M",
    "16D/5K",
    "16D/49M",
    "16H/49M",
    "49M",
    "92A",
    "92R",
    "113IM",
    "113M",
    "113MZ", "113IMZ",
    "156L",
    "156V",
    "229/5K",
    "229/49M",
    "250/49M",
    "250C/49M",
    "250D/49M",
]

// KG UP Manual
let KG_DN = [
    "3",
    "3H",
    "3HN",
    "3K",
    "3KN",
    "8/37",
    "15H",
    "17H",
    "17HN",
    "17S",
    "20/15H",
    "117",
]

// AMBD_UP Manual
let AMBD_DN = [
    "3D",
    "3DN",
    "5K/16AD",
    "5K/16CD",
    "5K/16D",
    "15D",
    "16CD",
    "16D",
    "24BA",
    "49M/16CD",
    "49M/16D",
    "49M/250D",
    "250D",
]

let MDCL_UP = [
    "229B",
    "229/5K",
    "229/25S",
    "229/18C",
    "229/49M",
    "229/90L",
    "229/219",
    "229/279",
    "229/290",
    "229/290U",
    "231",
]

let MDCL_DN = [
    "1/25S/229",
    "1D/229",
    "1Z/229",
    "5K/229",
    "18C/229",
    "25S/229",
    "49M/229",
    "90L/229",
    "219/229",
    "229",
    "279/229",
    "290/229",
    "290U/229",
]

let PTCR_UP = [
    "218/102B",
    "218/203A",
    "218/203N",
    "219/16A",
    "219/17",
    "219/17H",
    "219/18C",
    "219/224G",
    "219/229",
    "219/250",
    "219/272G",
    "219/280",
]

let PTCR_DN = [
    "10HA",
    "16A/219",
    "17/219",
    "17H/219",
    "18C/219",
    "102B/218",
    "203A/218",
    "203N/218",
    "217",
    "217C",
    "218",
    "218A",
    "218C",
    "218D",
    "218H",
    "219",
    "222A",
    "226",
    "229/219",
    "250/219",
    "280/219",
]

let ARGR_DN = ["1Z", "3K/95", "3KN/95", "5K/92A", "7Z", "49M/92A"];

let CBS_UP = [
    "9A",
    "9F",
    "9X",
    "9X/230P",
    "9X/272G",
    "9X/283D",
    "116/220K",
    "185G",
    "217C",
    "218C",
]
// CBS_DN Manual

let CHRM_UP = [
    "9XM",
    "9YF",
    "9XM/230P",
    "65MG",
    "66G",
    "85V",
    "85/253L",
    "253",
]
// CHRM_DN Manual

// GDMS_UP Manual
let GDMS_DN = [
    "9K/272G",
    "9X/272G",
    "10KM/224G",
    "24S/273",
    "25S/227",
    "29B/272G",
    "83J/272G",
    "102/9K",
    "189M/272G",
    "195WP",
    "219/224G",
    "219I/224G",
    "219/272G",
    "219I/272G",
    "224G",
]

// GTKS_UP Manual
let GTKS_DN = [
    "3K/281",
    "16C/281",
    "20/280",
    "24B/281",
    "24L/281",
    "30/280",
    "219/280",
    "250/281",
    "280",
    "280J",
    "281",
]

let KOTI_UP = [
    "45F",
    "94R",
    "95K",
    "116N",
    "216",
    "217",
    "218",
    "218L",
    "218/224MN",
    "222A",
]

let KOTIWC_UP = [
    "102",
    "102/253L",
    "102B",
    "102M",
    "103",
    "104A",
    "104R",
    "201G",
    "201M",
    "202B",
    "203A",
    "203AK",
    "203N",
    "205A",
    "253W",
    "277D",
    "277N",
    "412",
    "523K"
]

let UPL_UP = [
    "18J",
    "113B",
    "113IM",
    "113K",
    "113KM",
    "113KL",
    "113M",
    "113M/288",
    "113W",
    "113KLT", "113ILT", "113KT", "113MZ", "113IMZ",
    "115",
    "117",
]

let BRBD_DN = [
    "9F",
    "9YF",
    "10F",
    "10YF",
    "19F",
    "19YF",
    "45F",
    "113F",
    "113FT",
    "113FZ",
    "113S",
    "158FL",
    "158HF",
    "158VF",
]

// DETAILED ROUTE ARRAYS
let DetailedRoutesUP = [
    ["1"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1/25S"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["1/25S/229"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),
    ["1B"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "RTC X ROADS"),
        SHD[167],
        getStops(RMNG_DRFM, 'VST', 'YMCA'),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
    ),
    ["1C"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "CITY BUS STATION")
    ),
    ["1D"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "DILSHUKNAGAR")
    ),
    ["1D/229"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        getStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["1D/299"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["1H"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["1HD"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "KOTHAPET X ROADS"),
        getStops(TailsUP, 'HUDA COLONY', 'SAROOR NAGAR')
    ),
    ["1J"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1K"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        SHD[181], SHD[453], SHD[454]
    ),
    ["1L"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "LB NAGAR X ROADS")
    ),
    ["1MD"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "KOTHAPET"),
        "MARUTHI NAGAR(DSNR)", "NEW MARUTHI NAGAR"
    ),
    ["1P"].concat(
        SHD[898], SHD[207], SHD[743], "GANDHI HOSPITAL BACKSIDE",
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1P/25S"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        "GANDHI HOSPITAL BACKSIDE", SHD[743], SHD[207], SHD[898],
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["1V"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["1VM"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[922], SHD[920], "NARSIMHARAO NAGAR", "SAMA NAGAR X ROADS", "SAI BABA TEMPLE", "SAI NAGAR"
    ),
    ["1VS"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'RYTHU BAZAR'),
        SHD[313], "SAHAB NAGAR",
    ),
    ["1W"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE")
    ),
    ["1X"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KACHEGUDA X ROADS"),
        getStops(SHMB_KSR, "KACHEGUDA TOURIST", "KACHEGUDA STATION")
    ),
    ["1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["1Z/229"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["1Z/251"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
    ),
    ["1Z/539"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),

    // 2 SERIES
    ["2"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2C"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, "SALARJUNG MUSEUM", "CRPF GATE - BARKAS"),
        SHD[113]
    ),
    ["2J"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2K"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708], SHD[181], SHD[453], SHD[454],

    ),
    ["2U"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, "SALARJUNG MUSEUM", "LAL DARWAJA X ROADS"),
        getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
    ),
    ["2Z"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KSR_SHMB, 'MADINA', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),
    ["2/25S"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["2Z/251"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KSR_SHMB, 'MADINA', 'SHAMSHABAD')
    ),

    // 3 SERIES
    ["3"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "ZTS X ROADS"),
        SHD[526],
        getStops(SHMB_KSR, "SP NAGAR", "KUSHAIGUDA")
    ),
    ["3C"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        SHD[181],
        SHD[708],
        getStops(SHMB_KSR, "KACHEGUDA STATION", "ECIL X ROADS")
    ),
    ["3D"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["3DN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["3H"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
        SHD[43],
        "LIBRARY OU",
        "LADIES HOSTEL OU",
        "LAW COLLEGE OU",
        "ARTS COLLEGE OU",
        getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),
    ["3HN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
        SHD[43],
        "LIBRARY OU",
        "LADIES HOSTEL OU",
        "LAW COLLEGE OU",
        "ARTS COLLEGE OU",
        SHD[993],
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
    ),
    ["3K"].concat(getStops(SHMB_KSR, "AFZALGUNJ", "KUSHAIGUDA")),
    ["3K/90L"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["3K/95"].concat(getStops(KSR_SHMB, "ECIL X ROADS", "ARAMGHAR")),
    ["3K/102"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["3K/102B"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["3K/242"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
    ),
    ["3K/252"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD'),
        SHD[843]
    ),
    ["3K/281"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["3KN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
    ),
    ["3KN/95"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "ARAMGHAR")
    ),
    ["3KJ"].concat(getStops(KSR_SHMB, "ECIL X ROADS", "AFZALGUNJ")),
    ["3L"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "RAM THEATER - LALAPET"),
        SHD[780]
    ),
    ["3M"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        SHD[181],
        SHD[708],
        getStops(SHMB_KSR, "KACHEGUDA STATION", "ZTS X ROADS")
    ),
    ["3N"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "RAM KOTI X ROADS"),
        SHD[1099],
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
        getStops(TailsUP, "NACHARAM IDA", "HEMA NAGAR")
    ),
    ["3N/203N"].concat(
        "BEL", "BEL CIRCLE", SHD[662],
        getStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA TOURIST"),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["3T"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
    ),
    ["3Y"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "ECIL X ROADS"),
        getStops(HCLX_GWRL, 'NORTH KAMALA NAGAR', 'RADHIKA THEATER'),
        SHD[961], SHD[302], "YELLAREDDYGUDA (KAPRA)", "BANK COLONY(SAKET)", "VAMPUGUDA", "BJR NAGAR",
    ),

    // 5 SERIES
    ["5/5R"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "CLOCK TOWER"),
        getStops(MNBD_SRPT, "SECUNDERABAD", "RISALA BAZAR")
    ),
    ["5K"].concat(getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")),
    ["5K/16A"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["5K/16AD"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/16C"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["5K/16CD"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/16D"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/92A"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["5K/229"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["5R"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "PATNY CENTER"),
        getStops(MNBD_SRPT, "PATNY", "RISALA BAZAR")
    ),

    // 6 SERIES
    ["6R"].concat(
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'BAGH LINGAMPALLY'),
        SHD[687], SHD[371], SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["6RK"].concat(
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'BAGH LINGAMPALLY'),
        SHD[687], SHD[371], SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'KALI MANDIR')
    ),

    // 7 SERIES
    ["7Z"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getStops(KSR_SHMB, 'AFZALGUNJ', 'ARAMGHAR')
    ),
    ["7Z/251"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD')
    ),

    // 8 SERIES
    ["8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8AK"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8UA"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "LAL DARWAJA X ROADS"),
        getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
    ),
    ["8A/178G"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8C"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getStops(MDCL_MHRM, 'AFZALGUNJ', 'CHANDRAYANGUTTA X ROADS')
    ),
    ["8R"].concat(
        getStops(SRPT_MNBD, 'RISALA BAZAR', 'PATNY'),
        getStops(SRPT_MNBD, 'BATA', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        SHD[220]
    ),

    // 9 SERIES
    ["9A"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ESI HOSPITAL'),
        "VIKASPURI COLONY", "AG COLONY"
    ),
    ["9F"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9K/102"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["9K/230P"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9K/272G"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9X/230P"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9X/272G"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9X/283D"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'SURARAM'),
        "SURARAM CIRCLE", "SURARAM COLONY"
    ),
    ["9YF"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'MYTHRIVANAM'),
        SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 10 SERIES
    ["10"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["10F"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10H"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10HA"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10HL"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10HP"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10J"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "JNTU COLLEGE")
    ),
    ["10JP"].concat(
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["10KJ"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["10KL"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "LINGAMPALLY")
    ),
    ["10KM"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS")
    ),
    ["10Y"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
    ),
    ["10YF"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10H/16A"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["10H/16C"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["10H/18C"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["10KJ/18"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["10KM/224G"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS"),
        getStops(ADBT_MDCL, 'LAND MARK TOWER', 'GANDIMAISAMMA')
    ),

    // 14 SERIES
    ["14P"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780]
    ),

    // 15 SERIES
    ["15H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["15D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["15H/242RG"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA - NAGARAM'),
        SHD[128], "INDIRA GRUHAKALPA", SHD[842]
    ),
    // 16 SERIES
    ["16A"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16AK"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "NEREDMET OLD PS"),
        getStops(TailsDOWN, 'KAKATHIYA NAGAR', 'VINOBA NAGAR'),
        getStops(GWRL_HCLX, 'VAYUPURI', 'ECIL X ROADS')
    ),
    ["16C"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16CD"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        "ANANDH BAGH", SHD[264], "TIRUMALA NAGAR",
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["16NY"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'NEREDMET X ROADS'),
    ),
    ["16P"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        "SARDAR PATEL NAGAR", SHD[780]
    ),
    ["16A/5K"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16A/10H"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["16A/47L"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "PANJAGUTTA")
    ),
    ["16A/49M"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16A/219"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["16AD/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/5K"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/10H"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["16C/47L"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "PANJAGUTTA")
    ),
    ["16C/49M"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/281"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["16CD/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16CD/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16D/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16D/24B"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["16D/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16H/49M"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        "TIRUMALA NAGAR", SHD[264], "ANANDH BAGH",
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),

    // 17 SERIES
    ["17DH"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
    ),
    ["17DS"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
    ),
    ["17H"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "KUSHAIGUDA")
    ),
    ["17HN"].concat(
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'NOMA'),
        getStops(SHMB_KSR, 'HB COLONY', 'KUSHAIGUDA')
    ),
    ["17H/29B"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
    ),
    ["17/219"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["17H/219"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["17CS"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "CHAKRIPURAM"),
        getStops(TailsUP, 'CHERLAPALLY JAIL', 'CHERLAPALLY')
    ),
    ["17S"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),

    // 18 SERIES
    ["18"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18C"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/10H"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'CHILKALGUDA X ROADS'),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["18J"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    ["18/10KJ"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["18/283S"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["18C/30"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["18C/219"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["18C/229"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),

    // 19 SERIES
    ["19F"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152],
    ),
    ["19K"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KPHB COLONY')
    ),
    ["19KJ"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY'),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["19KM"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR X ROADS')
    ),
    ["19M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KPHB COLONY')
    ),
    ["19MP"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["19S"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["19YF"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MYTHRIVANAM'),
        SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["19S/505"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),

    // 20 SERIES
    ["20P"].concat(
        SHD[898], SHD[207],
        getStops(TailsUP, 'PADMARAO NAGAR', 'BHOLAKPUR'),
        getStops(DRFM_RMNG, 'KALPANA', 'ASHOK NAGAR X ROADS'),
        getStops(TailsUP, 'NTR STADIUM', 'NAMPALLY')
    ),

    // 22 SERIES
    ["22"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HAKIMPET')
    ),
    ["22/90L"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'PATNY'),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["22D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
        SHD[9], SHD[10], SHD[14], SHD[612]
    ),
    ["22K"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
        SHD[9], SHD[134], SHD[169]
    ),

    // 24 SERIES
    ["24"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'YAPRAL')
    ),
    ["24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'BALAJI NAGAR')
    ),
    ["24BA"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'AMBEDKAR NAGAR')
    ),
    ["24BJ"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'CHENNAPUR X ROADS'),
        "BJR NAGAR"
    ),
    ["24S"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA')
    ),
    ["24SS"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SHAHPUR NAGAR'),
    ),
    ["24B/16D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["24B/281"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'GHATKESAR')
    ),
    ["24L/281"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'GHATKESAR'),
    ),
    ["24S/273"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),


    // 25 SERIES
    ["25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/227"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),
    ["25S/229"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),

    // 26 SERIES
    ["26M"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'PARADISE'),
        getStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    ),
    ["26N"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'PARADISE'),
        getStops(TailsUP, 'MUD FORT', 'DIAMOND POINT'),
        "CENTER POINT", "BAPUJI NAGAR",
        getStops(TailsUP, 'ASHOK GARDENS', 'OLD BOWENPALLY')
    ),

    // 29 SERIES
    ["29B"].concat(getStops(IBP_DNGL, "SECUNDERABAD", "JEEDIMETLA")),
    ["29B/17H"].concat(
        getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["29B/272G"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["29B/272I"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
        "BAHUDURPALLY",
        SHD[407]
    ),
    ["29Q"].concat(
        getStops(IBP_DNGL, "BALANAGAR", "CHINTAL"),
        SHD[214], SHD[792]
    ),

    // 30 SERIES
    ["30"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "PARADISE"),
        "SIKH VILLAGE",
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["30/18C"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        "SIKH VILLAGE",
        getStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["30/280"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        "SIKH VILLAGE",
        getStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),

    // 38 SERIES
    ["38EX"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
    ),
    ["38X"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        SHD[1027]
    ),

    // 40 SERIES
    ["40"].concat(
        getStops(MDCL_MHRM, 'SECUNDERABAD', 'BATA'),
        getStops(DRFM_RMNG, 'BIBLE HOUSE', 'NATIONAL DARBAR'),
        "KING KOTI", SHD[3], SHD[110], SHD[506]
    ),

    // 45 SERIES
    ["45F"].concat(
        SHD[506],
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        SHD[131],
        getStops(RMNG_DRFM, 'KALPANA', 'PARADISE CENTER'),
        getStops(CRPL_LGPL, "PARADISE", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 49 SERIES
    ["49"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["49A"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'AFZALGUNJ')
    ),
    ["49M"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM')
    ),
    ["49/250"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        "LAKDI KA PUL (BJR CLG)",
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["49M/16A"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["49M/16C"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["49M/16CD"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["49M/16D"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["49M/16H"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        "ANANDH BAGH", SHD[264], "TIRUMALA NAGAR",
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["49M/92A"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),
    ["49M/229"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
        getStops(IBP_DNGL, 'TARBUND', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["49M/250"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["49M/250C"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "CHERLAPALLY"),
    ),
    ["49M/250D"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),

    // 71 SERIES
    ["71A"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["71K"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'KACHEGUDA KAMELA'),
        SHD[454]
    ),

    // 72 SERIES
    ["72/277D"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
        getStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
    ),
    ["72H"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR')
    ),
    ["72V"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 83 SERIES
    ["83J"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["83JA"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
        getStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
    ),
    ["83J/272G"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),

    // 86 SERIES
    ["86A"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ')
    ),
    ["86C"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'CITY BUS STATION')
    ),
    ["86K"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'KOTI WOMENS COLLEGE'),
        SHD[506]
    ),


    // 90 SERIES
    ["90/253T"].concat(
        SHD[448],
        SHD[754],
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(MDCL_MHRM, 'KESHAVAGIRI POST OFFICE', 'THUKKUGUDA'),
        "SREE NAGAR", "FAB CITY"
    ),
    ["90BE"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'BADANGPET')
    ),
    ["90L"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90LK"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA STATION")
    ),
    ["90DL"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(KTGD_LGRH, "LB NAGAR", "DILSHUKNAGAR")
    ),
    ["90LV"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90L/3K"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "HABSIGUDA"),
        getStops(SHMB_KSR, 'TARNAKA', 'ECIL X ROADS')
    ),
    ["90L/22"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'PATNY', 'HAKIMPET')
    ),
    ["90L/229"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["90L/251"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL', 'SHAMSHABAD')
    ),
    ["90UN"].concat(
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'NAGOLE X ROADS'),
        SHD[672], SHD[1038]
    ),
    ["90U/203U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),

    // 92 SERIES
    ["92A"].concat(getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"), "MEHDIPATNAM"),
    ["92A/5K"].concat(
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["92A/49M"].concat(
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),

    // 95 SERIES
    ["95/3K"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "ECIL X ROADS")
    ),
    ["95/3KN"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "ECIL X ROADS")
    ),
    ["95K"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),


    // 102 SERIES
    ["102"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        SHD[628]
    ),
    ["102/253L"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA X ROADS'),
        getStops(MDCL_MHRM, 'KESHAVAGIRI POST OFFICE', 'THUKKUGUDA')
    ),
    ["102B"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102B/203N"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["102/9K"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["102B/218"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["102B/3K"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["102M"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BALAPUR X ROADS')
    ),

    // 103 SERIES
    ["103"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BALAPUR X ROADS')
    ),

    // 104 SERIES
    ["104A"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'RAJIV GRUHA KALPA')
    ),
    ["104R"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'CHAMPAPET'),
        getStops(ADBT_MDCL, 'RTC COLONY (CHAMPAPET)', 'RN REDDY')
    ),

    // 105 SERIES
    ["105"].concat(
        "SAIDABAD COLONY", SHD[336],
        getStops(ADBT_MDCL, 'SAIDABAD', 'KOTI WOMENS COLLEGE'),
        SHD[507],
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),

    // 107 SERIES
    ["107JD"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR')
    ),
    ["107JL"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'LB NAGAR X ROADS')
    ),
    ["107JS"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'KOTHAPET X ROADS'),
        getStops(TailsUP, 'HUDA COLONY', 'SAROOR NAGAR')
    ),
    ["107VL"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR - E SEVA'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'LB NAGAR X ROADS')
    ),
    ["107VR"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR - E SEVA'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
    ),
    ["107VS"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR - E SEVA'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'KOTHAPET X ROADS'),
        getStops(TailsUP, 'HUDA COLONY', 'SAROOR NAGAR')
    ),

    // 113 SERIES
    ["113F"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113K"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB COLONY'),
    ),
    ["113KL"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'LINGAMPALLY'),
    ),
    ["113KM"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MIYAPUR X ROADS'),
    ),
    ["113M"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["113W"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["113M/288"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["113FT"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113KLT"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'LINGAMPALLY'),
    ),
    ["113KT"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB COLONY'),
    ),
    ["113FZ"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'GOLNAKA'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113MZ"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'GOLNAKA'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),

    // 117 SERIES
    ["117"].concat(
        getStops(TailsDOWN, 'UPPAL', 'NACHARAM IDA'),
        getStops(LGPL_CRPL, 'NACHARAM X ROADS', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        SHD[525]
    ),

    // 156 SERIES
    ["156/299"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["156L"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),

    // 158 SERIES
    ["158"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ESI HOSPITAL')
    ),
    ["158FL"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["158HF"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["158VF"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 183 SERIES
    ["183B"].concat(
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["183SS"].concat(
        getStops(GTKS_KPHB, 'SUCHITRA', 'SHAHPUR NAGAR')
    ),

    // 185 SERIES
    ["185G"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'KUKATPALLY'),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["185/102"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),

    // 188 SERIES
    ["188/251"].concat(

    ),

    // 189 SERIES
    ["189M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
        getStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
    ),
    ["189M/272G"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),

    // 201 SERIES
    ["201G"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'NAGOLE X ROADS')
    ),

    // 203 SERIES
    ["203A"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["203AK"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA'),
        "KONGARA KALAN ORR", "BR AMBEDKAR CIRCLE", "KONGARA KALAN"
    ),
    ["203AR"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA'),
        "KONGARA KALAN ORR", "BR AMBEDKAR CIRCLE", "KONGARA KALAN", "WONDER LA X ROADS", SHD[835]
    ),
    ["203N"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203A/218"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["203N/102B"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SKPL_SECB, "RAM KOTI X ROADS", "SECUNDERABAD")
    ),
    ["203N/218"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["203N/3K"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["203N/3N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "KACHEGUDA TOURIST"),
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, 'TARNAKA', 'NACHARAM X ROADS'),
        SHD[662], "BEL CIRCLE", "BEL"
    ),
    ["203U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),
    ["203U/90U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),

    // 211 SERIES
    ["211"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'THUMKUNTA'),
        SHD[775]
    ),
    ["211/242"].concat(
        SHD[251], "BITS PILANI X ROADS", SHD[51],
        getStops(OSK_Stops, 'DHARMAVARAM', 'YADGARPALLY'),
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["211B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET VILLAGE', 'UDDAMARRI')
    ),
    ["211CD"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'DONGALAMYSAMMA X ROADS'),
        "BITS PILANI X ROADS", SHD[51],
        getStops(OSK_Stops, 'THIMMAIPALLY', 'DRDO (YADGARPALLY)')
    ),
    ["211D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        "SAMPANBOLE",
        "KOLTHUR"
    ),
    ["211DY"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'THUMKUNTA'),
        SHD[775], SHD[243], "DEVARAYAMJAL VILLAGE"
    ),
    ["211K"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KESAVARAM'),
    ),
    ["211M"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'CHENNAPUR X ROADS'),
        getStops(TailsUP, 'BHAGYA NAGAR COLONY', 'CRPF')
    ),

    // 212 SERIES
    ["212"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'DONGALAMYSAMMA X ROADS'),
        "BITS PILANI X ROADS", SHD[140]
    ),
    ["212/702"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'WARGAL TEMPLE')
    ),
    ["212T"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        "SAMPANBOLE",
        "KOLTHUR",
        "ICICI TURKAPALLY"
    ),

    // 216 SERIES
    ["216"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),
    ["216M"].concat(
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'LINGAMPALLY')
    ),

    // 217 SERIES
    ["217"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),
    ["217C"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),

    // 218 SERIES
    ["218"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218A"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
    ),
    ["218C"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'PATANCHERUVU')
    ),
    ["218D"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218H"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218L"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LINGAMPALLY')
    ),
    ["218/102B"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["218/203A"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["218/203N"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["218/277K"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'CHAMPAPET'),
        getStops(ADBT_MDCL, 'RTC COLONY (CHAMPAPET)', 'KARMANGHAT'),
        "BAIRAMALGUDA",
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'MANNEGUDA')
    ),

    // 219 SERIES
    ["219"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/16A"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["219/17"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["219/17H"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["219/18C"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["219/224G"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["219I/224G"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["219/229"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["219/250"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["219/272G"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["219I/272G"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["219/280"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),

    // 224 SERIES
    ["224G"].concat(
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224X"].concat(
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'IDA X ROADS')
    ),

    // 227 SERIES
    ["227"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS')
    ),
    ["227/25S"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 229 SERIES
    ["229"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/5K"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
    ),
    ["229/18C"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["229/25S"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["229/49M"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PARADISE'),
        getStops(CRPL_LGPL, 'WESLEY COLLEGE', 'MEHDIPATNAM')
    ),
    ["229/90L"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
    ),
    ["229/219"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087], getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')),
    ["229/279"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
    ),
    ["229/290"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["229/290U"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
    ),
    ["229B"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        SHD[156]
    ),
    ["229P"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL'),
        getStops(OSK_Stops_DOWN, 'KISTAPUR', 'PUDUR')
    ),

    // 230 SERIES
    ["230A"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM')
    ),
    ["230P"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
    ),

    // 231 SERIES
    ["231"].concat(
        SHD[613],
        getStops(OSK_Stops_DOWN, 'KISTAPUR', 'MEDICITY')
    ),

    // 233 SERIES
    ["233"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'KOMPALLY'),
        getStops(OSK_Stops_DOWN, 'APARNA KOMPALLY', 'NUTHANKAL')
    ),

    // 241 SERIES
    ["241T"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'CHERIYAL X ROADS'),
        getStops(OSK_Stops_DOWN, 'CHIRYALA VILLAGE', 'DHARMAVARAM')
    ),

    // 242 SERIES
    ["242"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242/3K"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
    ),
    ["242/17H"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/211"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        getStops(OSK_Stops_DOWN, 'YADGARPALLY', 'DHARMAVARAM'),
        SHD[51], "BITS PILANI X ROADS", SHD[251],
    ),
    ["242A"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
    ),
    ["242B"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        SHD[147]
    ),
    ["242G"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
        SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
        "KEESARA X ROADS"
    ),
    ["242GA"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
        SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
        "KEESARA X ROADS", "KEESARAGUTTA KAMAN", "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
    ),
    ["242RG"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'BANDLAGUDA - NAGARAM'),
        SHD[128], "INDIRA GRUHAKALPA", SHD[842]
    ),


    // 250 SERIES
    ["250"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250C"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'CHERLAPALLY'),
    ),
    ["250D"].concat(SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["250/49"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["250/49M"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
    ),
    ["250C/49M"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'MEHDIPATNAM')
    ),
    ["250D/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
    ),
    ["250/219"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["250/281"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),

    // 251 SERIES
    ["251/1Z"].concat(
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),

    // 272 SERIES
    ["272"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        "BOWRAMPET X ROADS",
        "BOWRAMPET"
    ),

    // 277 SERIES
    ["277"].concat(
        SHD[624],
        getStops(MDCL_ADBT, 'CHADERGHAT', 'CHAMPAPET'),
        getStops(ADBT_MDCL, 'RTC COLONY (CHAMPAPET)', 'KARMANGHAT'),
        "BAIRAMALGUDA",
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM')
    ),
    ["277D"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "LB NAGAR X ROADS"),
        getStops(DNGL_IBP, "SAGAR RING ROAD", "IBRAHIMPATNAM")
    ),
    ["277L"].concat(
        getStops(DNGL_IBP, "LB NAGAR X ROADS", "IBRAHIMPATNAM")
    ),
    ["277N"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'CHAMPAPET'),
        getStops(ADBT_MDCL, 'RTC COLONY (CHAMPAPET)', 'KARMANGHAT'),
        "BAIRAMALGUDA",
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'GURRAMGUDA X ROADS'),
        "GURRAMGUDA VILLAGE", "KAMMAGUDA", SHD[665]
    ),

    // 279 SERIES
    ["279"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "IBRAHIMPATNAM")
    ),
    ["279/229"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["279U"].concat(getStops(IBP_DNGL, "IBRAHIMPATNAM", "UPPAL RING ROAD")),

    // 280 SERIES
    ["280"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280B"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280J"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280N"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280/30"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["280/219"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),

    // 281 SERIES
    ["281"].concat(
        getStops(SHMB_KSR, 'ECIL X ROADS', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/3K"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'AFZALGUNJ')
    ),
    ["281/16C"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["281/24B"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["281/24L"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["281/250"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),

    // 283 SERIES
    ["283C"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM CIRCLE",
        "SURARAM COLONY"
    ),
    ["283VS"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM VILLAGE"
    ),
    ["283S/18"].concat(
        getStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["283T"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'JODIMETLA'),
        "ANURAG UNIVERSITY", "VENKATAPUR", "TENUGUDEM"
    ),

    // 290 SERIES
    ["290"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["290/229"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR")
    ),
    ["290UA"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'RAMOJI FILM CITY')
    ),
    ["290UF"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'RAMOJI FILM CITY')
    ),
    ["290U/229"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["290U/555"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),

    // 299 SERIES
    ["299"].concat(getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE")),
    ["299D"].concat(getStops(KTGD_LGRH, "HAYATHNAGAR", "DILSHUKNAGAR")),

    // 300 SERIES
    ["300"].concat(
        "MEHDIPATNAM",
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),
    ["300/251"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL', 'SHAMSHABAD')
    ),
    ["300L"].concat(
        "MEHDIPATNAM",
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "LB NAGAR X ROADS")
    ),

    // 400 SERIES
    ["412"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'CHAMPAPET'),
        getStops(ADBT_MDCL, 'RTC COLONY (CHAMPAPET)', 'KARMANGHAT'),
        "BAIRAMALGUDA",
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM'),
        getStops(OSK_Stops, 'KHANAPUR X ROADS', 'MALL')
    ),
    ["498"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        "THUMKUNTA (JALALPUR)",
        "KESAVAPUR"
    ),
    ["498U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops_DOWN, 'KESAVAPUR', 'USHARPALLY'),
        "UDDAMARRI"
    ),
    ["498VJ"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        "DOMARAPOCHAMPALLY",
        "DUNDIGAL X ROADS",
        "GAGILLAPUR",
        getStops(OSK_Stops_DOWN, 'PATHARAM', 'JINNARAM')
    ),

    // 500 SERIES
    ["532"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'JP DARGHA')
    ),
    ["539/1Z"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["555"].concat(
        getStops(LGRH_KTGD, 'DILSHUKNAGAR', 'HAYATHNAGAR'),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),
    ["555/290U"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["568"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'DAMARAKUNTA')
    ),
    ["578"].concat(
        getStops(SHMB_KSR, "ECIL X ROADS", "KEESARAGUTTA KAMAN"),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getStops(OSK_Stops_DOWN, 'JALALPUR', 'M TURKAPALLY'),
    ),
    ["580"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "KEESARAGUTTA KAMAN"),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getStops(OSK_Stops_DOWN, 'JALALPUR', 'YADAGIRIGUTTA'),
    ),
    ["589"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL'),
        getStops(OSK_Stops_DOWN, 'ATHVELLY', 'RAMAYAMPET')
    ),
    ["593"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'CHEVELLA')
    )
]

let DetailedRoutesDOWN = [
    ["1"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1/25S/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1B"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'VST'),
        getStops(SKPL_SECB, "RTC X ROADS", "SECUNDERABAD")
    ),
    ["1C"].concat(
        "CITY BUS STATION",
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1D"].concat(
        getStops(KTGD_LGRH, "DILSHUKNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1D/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
        getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
    ),
    ["1D/299"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1H"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1HD"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY'),
        getStops(KTGD_LGRH, "KOTHAPET X ROADS", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1J"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1K"].concat(
        SHD[454], SHD[453], SHD[181],
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1L"].concat(
        getStops(KTGD_LGRH, "LB NAGAR X ROADS", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1MD"].concat(
        "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getStops(KTGD_LGRH, "KOTHAPET", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1P"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        "GANDHI HOSPITAL BACKSIDE", SHD[743], SHD[207], SHD[898]
    ),
    ["1P/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        SHD[898], SHD[207], SHD[743], "GANDHI HOSPITAL BACKSIDE",
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1VM"].concat(
        "SAI NAGAR", "SAI BABA TEMPLE", "SAMA NAGAR X ROADS", "NARSIMHARAO NAGAR",
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1VS"].concat(
        "SAHAB NAGAR", SHD[313],
        getStops(TailsDOWN, 'RYTHU BAZAR', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1W"].concat(
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1X"].concat(
        "KACHEGUDA STATION",
        "KACHEGUDA X ROADS",
        getStops(SKPL_SECB, "NARAYANAGUDA", "SECUNDERABAD")
    ),
    ["1Z"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1Z/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["1Z/251"].concat(
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1Z/539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),

    // 2 SERIES
    ["2"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2C"].concat(
        SHD[113],
        getStops(MHRM_MDCL, "CRPF GATE - BARKAS", "NAYAPUL"),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2J"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2K"].concat(
        SHD[454], SHD[453], SHD[181], SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2U"].concat(
        getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
        getStops(MHRM_MDCL, "LAL DARWAJA X ROADS", "NAYAPUL"),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2Z"].concat(
        getStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SHMB_KSR, 'ARAMGHAR', 'NAYAPUL'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2Z/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'NAYAPUL'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 3 SERIES

    ["3"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "SP NAGAR"),
        SHD[526],
        getStops(KSR_SHMB, "ZTS X ROADS", "AFZALGUNJ")
    ),
    ["3C"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "KACHEGUDA STATION"),
        SHD[708],
        SHD[181],
        getStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
    ),
    ["3D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "AFZALGUNJ")
    ),
    ["3DN"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
    ),
    ["3H"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        "ARTS COLLEGE OU",
        "LAW COLLEGE OU",
        "LADIES HOSTEL OU",
        "LIBRARY OU",
        SHD[43],
        getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
    ),
    ["3HN"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        "ARTS COLLEGE OU",
        "LAW COLLEGE OU",
        "LADIES HOSTEL OU",
        "LIBRARY OU",
        SHD[43],
        getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
    ),
    ["3K"].concat(getStops(KSR_SHMB, "KUSHAIGUDA", "AFZALGUNJ")),
    ["3K/90L"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'HABSIGUDA'),
        getStops(SHMB_KSR, "TARNAKA", "ECIL X ROADS")
    ),
    ["3K/95"].concat(getStops(SHMB_KSR, "ARAMGHAR", "ECIL X ROADS")),
    ["3K/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/242"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
    ),
    ["3K/252"].concat(
        SHD[843], getStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["3K/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'AFZALGUNJ')
    ),
    ["3KN"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
    ),
    ["3KN/95"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "ECIL X ROADS")
    ),
    ["3KJ"].concat(getStops(SHMB_KSR, "AFZALGUNJ", "ECIL X ROADS")),
    ["3L"].concat(
        SHD[780],
        getStops(KSR_SHMB, "RAM THEATER - LALAPET", "AFZALGUNJ")
    ),
    ["3M"].concat(
        getStops(KSR_SHMB, "ZTS X ROADS", "KACHEGUDA STATION"),
        SHD[708],
        SHD[181],
        getStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
    ),
    ["3N"].concat(
        getStops(TailsDOWN, "HEMA NAGAR", "NACHARAM IDA"),
        getStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "FEVER HOSPITAL"),
        SHD[1099],
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
    ),
    ["3N/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "KACHEGUDA TOURIST"),
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
        SHD[662], "BEL CIRCLE", "BEL"
    ),
    ["3T"].concat(
        SHD[993],
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'AFZALGUNJ'),
    ),
    ["3Y"].concat(
        "BJR NAGAR", "VAMPUGUDA", "BANK COLONY(SAKET)", "YELLAREDDYGUDA (KAPRA)", SHD[302], SHD[961],
        getStops(GWRL_HCLX, 'RADHIKA THEATER', 'NORTH KAMALA NAGAR'),
        getStops(KSR_SHMB, "ECIL X ROADS", "AFZALGUNJ")
    ),

    // 5 Series
    ["5/5R"].concat(
        getStops(SRPT_MNBD, "RISALA BAZAR", 'MEHDIPATNAM'),
    ),
    ["5K"].concat(getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")),
    ["5K/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16AD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/92A"].concat(
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
    ),
    ["5R"].concat(
        getStops(SRPT_MNBD, "RISALA BAZAR", 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM")
    ),

    // 6 SERIES
    ["6R"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        SHD[557], SHD[371], SHD[687],
        getStops(DRFM_RMNG, 'BAGH LINGAMPALLY', 'VST'),
        SHD[1060],
        SHD[818],
    ),
    ["6RK"].concat(
        getStops(MNBD_SRPT, 'KALI MANDIR', 'SECRETARIATE'),
        SHD[557], SHD[371], SHD[687],
        getStops(DRFM_RMNG, 'BAGH LINGAMPALLY', 'VST'),
        SHD[1060],
        SHD[818],
    ),

    // 7 SERIES
    ["7Z"].concat(
        getStops(SHMB_KSR, 'ARAMGHAR', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["7Z/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),

    // 8 SERIES
    ["8A"].concat(getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")),
    ["8AK"].concat(getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")),
    ["8UA"].concat(
        getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
        getStops(MHRM_MDCL, "LAL DARWAJA X ROADS", "SECUNDERABAD")
    ),
    ["8A/178G"].concat(getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")),
    ["8C"].concat(
        getStops(MHRM_MDCL, 'CHANDRAYANGUTTA X ROADS', 'AFZALGUNJ'),
        getStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["8R"].concat(
        SHD[220],
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'PATNY CENTER'),
        getStops(MNBD_SRPT, 'PATNY', 'RISALA BAZAR')
    ),

    // 9 SERIES
    ["9A"].concat(
        "AG COLONY", "VIKASPURI COLONY", SHD[1054],
        getStops(PTCR_GTKS, 'SR NAGAR', 'CITY BUS STATION'),
    ),
    ["9F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'CITY BUS STATION'),
    ),
    ["9K"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["9K/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9K/230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220],
        SHD[11],
    ),
    ["9K/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["9X"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/283D"].concat(
        "SURARAM COLONY", "SURARAM CIRCLE",
        getStops(DNGL_IBP, 'SURARAM', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[1116], SHD[1114], SHD[1115],
        getStops(PTCR_GTKS, 'AMEERPET', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 10 SERIES
    ["10"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, "ERRAGADDA METRO", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, "ERRAGADDA METRO", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10HA"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10HL"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10HP"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10J"].concat(
        getStops(PTCR_GTKS, "JNTU COLLEGE", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10JP"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE')
    ),
    ["10KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10KL"].concat(
        getStops(PTCR_GTKS, "LINGAMPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10KM"].concat(
        getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10Y"].concat(
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),
    ["10H/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10H/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10H/18C"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'CHILKALGUDA X ROADS'),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10KJ/18"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["10KM/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'LAND MARK TOWER'),
        getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "SECUNDERABAD")
    ),

    // 14 SERIES
    ["14P"].concat(
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 15 SERIES
    ["15H"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["15D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["15H/242RG"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA - NAGARAM", "LALAPET"),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 16 SERIES
    ["16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16AK"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "VAYUPURI"),
        getStops(TailsUP, 'VINOBA NAGAR', 'KAKATHIYA NAGAR'),
        getStops(HCLX_GWRL, 'NEREDMET OLD PS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16H"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        "TIRUMALA NAGAR", SHD[264], "ANANDH BAGH",
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16NY"].concat(
        getStops(HCLX_GWRL, 'NEREDMET X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16P"].concat(
        SHD[780], "SARDAR PATEL NAGAR",
        getStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16A/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/47L"].concat(
        getStops(LGPL_CRPL, "PANJAGUTTA", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16AD/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16C/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/47L"].concat(
        getStops(LGPL_CRPL, "PANJAGUTTA", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CD/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16CD/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16D/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16D/24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16D/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16H/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        "ANANDH BAGH", SHD[264], "TIRUMALA NAGAR",
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),

    // 17 SERIES
    ["17DH"].concat(
        getStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17DS"].concat(
        getStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17H"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17HN"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'HB COLONY'),
        getStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
        SHD[878],
        SHD[898]
    ),
    ["17H/29B"].concat(
        getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17H/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17CS"].concat(
        getStops(TailsDOWN, 'CHERLAPALLY', 'CHERLAPALLY JAIL'),
        getStops(KSR_SHMB, "CHAKRIPURAM", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD"),
    ),
    ["17S"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),

    // 18 SERIES
    ["18"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18J"].concat(
        SHD[448], SHD[754], SHD[898],
        getStops(DNGL_IBP, 'ALUGADDA BHAVI', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18/10KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18/283S"].concat(
        getStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C/30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        "SIKH VILLAGE",
        getStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),

    // 19 SERIES
    ["19F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19K"].concat(
        getStops(PTCR_GTKS, 'KPHB COLONY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19KM"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19M"].concat(
        getStops(PTCR_GTKS, 'KPHB COLONY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19MP"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(PTCR_GTKS, 'KPHB COLONY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19S"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[1116], SHD[1114], SHD[1115],
        getStops(PTCR_GTKS, 'AMEERPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19S/505"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),

    // 20 SERIES
    ["20P"].concat(
        getStops(TailsDOWN, 'NAMPALLY', 'NTR STADIUM'),
        getStops(RMNG_DRFM, 'ASHOK NAGAR X ROADS', 'KALPANA'),
        getStops(TailsDOWN, 'BHOLAKPUR', 'PADMARAO NAGAR'),
        SHD[207], SHD[898]
    ),


    // 22 SERIES
    ["22"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'SECUNDERABAD')
    ),
    ["22/90L"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'PATNY', 'HAKIMPET')
    ),
    ["22D"].concat(
        SHD[612], SHD[14], SHD[10], SHD[9],
        getStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
    ),
    ["22K"].concat(
        SHD[169], SHD[134], SHD[9],
        getStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
    ),

    // 24 SERIES
    ["24"].concat(
        getStops(GTKS_KPHB, 'YAPRAL', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24B"].concat(
        getStops(GTKS_KPHB, 'BALAJI NAGAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24BA"].concat(
        getStops(GTKS_KPHB, 'AMBEDKAR NAGAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24BJ"].concat(
        "BJR NAGAR",
        getStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24SS"].concat(
        getStops(KPHB_GTKS, 'SHAHPUR NAGAR', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24B/16D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24B/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24L/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["24S/273"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 25 SERIES
    ["25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S/227"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 26 SERIES
    ["26M"].concat(
        getStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
        getStops(MDCL_MHRM, 'PARADISE', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["26N"].concat(
        getStops(TailsDOWN, 'OLD BOWENPALLY', 'ASHOK GARDENS'),
        "BAPUJI NAGAR", "CENTER POINT", "DIAMOND POINT", "MUD FORT",
        getStops(MDCL_MHRM, 'PARADISE', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),

    // 29 SERIES
    ["29B"].concat(getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD")),
    ["29B/17H"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
    ),
    ["29B/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["29B/272I"].concat(
        SHD[407],
        "BAHUDURPALLY",
        getStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
    ),
    ["29Q"].concat(
        SHD[792], SHD[214],
        getStops(DNGL_IBP, "CHINTAL", "BALANAGAR")
    ),

    // 30 SERIES
    ["30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        "SIKH VILLAGE",
        getStops(DNGL_IBP, 'PARADISE', 'SECUNDERABAD')
    ),
    ["30/18C"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["30/280"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),

    // 38 SERIES
    ["38EX"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
    ),

    ["38X"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T"].concat(
        SHD[1027],
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),

    // 40 SERIES
    ["40"].concat(
        SHD[506], SHD[508], SHD[813],
        getStops(RMNG_DRFM, 'NATIONAL DARBAR', 'BIBLE HOUSE'),
        getStops(MHRM_MDCL, 'BATA', 'CLOCK TOWER'),
        SHD[898]
    ),

    // 45 SERIES
    ["45F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, "ERRAGADDA METRO", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "HYDERABAD PUBLIC SCHOOL", "PARADISE"),
        getStops(DRFM_RMNG, 'PARADISE CENTER', 'KALPANA'),
        SHD[131],
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        SHD[506]
    ),

    // 49 SERIES
    ["49"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49A"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["49M/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16H"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        "TIRUMALA NAGAR", SHD[264], "ANANDH BAGH",
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/92A"].concat(
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM'),
    ),
    ["49M/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
    ),
    ["49M/250C"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'MEHDIPATNAM')
    ),
    ["49M/250D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'MEHDIPATNAM')
    ),

    // 71 SERIES
    ["71A"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'AFZALGUNJ')
    ),
    ["71K"].concat(
        SHD[454],
        getStops(GTKS_PTCR, 'KACHEGUDA KAMELA', 'AFZALGUNJ')
    ),

    // 72 SERIES
    ["72/277D"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
        getStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72H"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11]
    ),

    // 83 SERIES
    ["83J"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["83JA"].concat(
        getStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["83J/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),

    // 86 SERIES
    ["86A"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86C"].concat(
        getStops(SHMB_KSR, 'CITY BUS STATION', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86K"].concat(
        SHD[506],
        getStops(SHMB_KSR, 'KOTI WOMENS COLLEGE', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR - E SEVA'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),

    // 90 SERIES
    ["90/253T"].concat(
        "FAB CITY", "SREE NAGAR",
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'KESHAVAGIRI POST OFFICE'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA X ROADS', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90BE"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "HABSIGUDA"),
        getStops(SHMB_KSR, 'TARNAKA', 'ECIL X ROADS')
    ),
    ["90L"].concat(
        SHD[448],
        SHD[754],
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS")
    ),
    ["90LK"].concat(
        getStops(SHMB_KSR, "KACHEGUDA STATION", "MANIKESHWAR NAGAR"),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS")
    ),
    ["90DL"].concat(
        getStops(LGRH_KTGD, "DILSHUKNAGAR", "LB NAGAR"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90LV"].concat(
        SHD[448],
        SHD[754],
        getStops(DNGL_IBP, "SECUNDERABAD", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["90L/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["90L/22"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'PATNY'),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["90L/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
    ),
    ["90L/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["90UN"].concat(
        SHD[1038], SHD[672],
        getStops(GWRL_HCLX, 'NAGOLE X ROADS', 'DILSHUKNAGAR')
    ),
    ["90U/203U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),

    // 92 SERIES
    ["92A"].concat("MEHDIPATNAM", getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")),
    ["92A/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["92A/49M"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),

    // 95 SERIES
    ["95/3K"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "ARAMGHAR")
    ),
    ["95/3KN"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "ARAMGHAR")
    ),
    ["95K"].concat(
        getStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SHMB_KSR, 'ARAMGHAR', 'CITY BUS STATION'),
        SHD[507]
    ),


    // 102 SERIES
    ["102"].concat(
        SHD[628],
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102/253L"].concat(
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'KESHAVAGIRI POST OFFICE'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA X ROADS', 'DRDL'),
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102B/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SKPL_SECB, "RAM KOTI X ROADS", "SECUNDERABAD")
    ),
    ["102/9K"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102B/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102B/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102M"].concat(
        getStops(ADBT_MDCL, 'BALAPUR X ROADS', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 103 SERIES
    ["103"].concat(
        getStops(ADBT_MDCL, 'BALAPUR X ROADS', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 104 SERIES
    ["104A"].concat(
        getStops(ADBT_MDCL, 'RAJIV GRUHA KALPA', 'KOTI WOMENS COLLEGE')
    ),
    ["104R"].concat(
        getStops(MDCL_ADBT, 'RN REDDY', 'RTC COLONY (CHAMPAPET)'),
        getStops(ADBT_MDCL, 'CHAMPAPET', 'KOTI WOMENS COLLEGE')
    ),

    // 105 SERIES
    ["105"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'SAIDABAD'),
        SHD[336], "SAIDABAD COLONY"
    ),

    // 107 SERIES
    ["107JD"].concat(
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107JL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107JS"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY'),
        getStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107VL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["107VR"].concat(
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["107VS"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY'),
        getStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR - E SEVA', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 113 SERIES
    ["113F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["113K"].concat(
        getStops(PTCR_GTKS, 'KPHB COLONY', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113KL"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113KM"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113M"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113W"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113M/288"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113FT"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["113KLT"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["113KT"].concat(
        getStops(PTCR_GTKS, 'KPHB COLONY', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["113FZ"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'GOLNAKA', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["113MZ"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'GOLNAKA', 'UPPAL')
    ),

    // 117 SERIES
    ["117"].concat(
        SHD[525],
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'NACHARAM X ROADS'),
        getStops(TailsUP, 'NACHARAM IDA', 'UPPAL')
    ),

    // 156 SERIES
    ["156/299"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156L"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR X ROADS')
    ),
    ["156V"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 158 SERIES
    ["158"].concat(
        getStops(PTCR_GTKS, 'ESI HOSPITAL', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["158FL"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["158HF"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["158VF"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA METRO', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 183 SERIES
    ["183B"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR')
    ),
    ["183SS"].concat(
        getStops(KPHB_GTKS, 'SHAHPUR NAGAR', 'SUCHITRA')
    ),

    // 185 SERIES
    ["185G"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, 'KUKATPALLY', 'CITY BUS STATION')
    ),
    ["185/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'KUKATPALLY'),
    ),

    // 188 SERIES
    ["188/251"].concat(

    ),

    // 189 SERIES
    ["189M"].concat(
        getStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["189M/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),

    // 201 SERIES
    ["201G"].concat(
        getStops(GWRL_HCLX, 'NAGOLE X ROADS', 'DILSHUKNAGAR'),
        getStops(KTGD_LGRH, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH')
    ),

    // 203 SERIES
    ["203A"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203AK"].concat(
        "KONGARA KALAN", "BR AMBEDKAR CIRCLE", "KONGARA KALAN ORR",
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203AR"].concat(
        SHD[835], "WONDER LA X ROADS", "KONGARA KALAN", "BR AMBEDKAR CIRCLE", "KONGARA KALAN ORR",
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203A/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["203N/102B"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/3N"].concat(
        "BEL", "BEL CIRCLE", SHD[662],
        getStops(CRPL_LGPL, 'NACHARAM X ROADS', 'TARNAKA'),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA TOURIST"),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),
    ["203U/90U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),

    // 211 SERIES
    ["211"].concat(
        SHD[775],
        getStops(SRPT_MNBD, 'THUMKUNTA', 'SECUNDERABAD')
    ),
    ["211/242"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        getStops(OSK_Stops_DOWN, 'YADGARPALLY', 'DHARMAVARAM'),
        SHD[51], "BITS PILANI X ROADS", SHD[251],
    ),
    ["211B"].concat(
        getStops(OSK_Stops, 'UDDAMARRI', 'SHAMIRPET VILLAGE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211CD"].concat(
        getStops(OSK_Stops_DOWN, 'DRDO (YADGARPALLY)', 'THIMMAIPALLY'),
        SHD[51], "BITS PILANI X ROADS",
        getStops(SRPT_MNBD, 'DONGALAMYSAMMA X ROADS', 'SECUNDERABAD')
    ),
    ["211D"].concat(
        "KOLTHUR",
        "SAMPANBOLE",
        getStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211DY"].concat(
        "DEVARYAMJAL VILLAGE", SHD[243], SHD[775],
        getStops(SRPT_MNBD, 'THUMKUNTA', 'SECUNDERABAD')
    ),
    ["211K"].concat(
        getStops(OSK_Stops, 'KESAVARAM', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211M"].concat(
        getStops(TailsDOWN, 'CRPF', 'BHAGYA NAGAR COLONY'),
        getStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 212 SERIES
    ["212"].concat(
        SHD[140], "BITS PILANI X ROADS",
        getStops(SRPT_MNBD, 'DONGALAMYSAMMA X ROADS', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["212/702"].concat(
        getStops(OSK_Stops, 'WARGAL TEMPLE', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["212T"].concat(
        "ICICI TURKAPALLY",
        "KOLTHUR",
        "SAMPANBOLE",
        getStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),

    // 216 SERIES
    ["216"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["216M"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'MEHDIPATNAM')
    ),

    // 216 SERIES
    ["217"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["217C"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION')
    ),

    // 218 SERIES
    ["218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218A"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ')
    ),
    ["218C"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'CITY BUS STATION')
    ),
    ["218D"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["218H"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["218L"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218/102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/203A"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/277K"].concat(
        getStops(IBP_DNGL, 'MANNEGUDA', 'SAGAR RING ROAD'),
        "BAIRAMALGUDA",
        getStops(MDCL_ADBT, 'KARMANGHAT', 'RTC COLONY (CHAMPAPET)'),
        getStops(ADBT_MDCL, 'CHAMPAPET', 'KOTI WOMENS COLLEGE'),
        SHD[4], SHD[507],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MIYAPUR X ROADS')

    ),


    // 219 SERIES
    ["219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),
    ["219/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/17"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/17H"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/18C"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU')
    ),
    ["219I/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU'),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["219/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219I/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU"),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["219/280"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),

    // 224 SERIES
    ["224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS')
    ),
    ["224X"].concat(
        getStops(MDCL_ADBT, 'IDA X ROADS', 'MIYAPUR X ROADS')
    ),

    // 227 SERIES
    ["227"].concat(
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["227/25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),

    // 229 SERIES
    ["229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["229/5K"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/18C"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),
    ["229/49M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'WESLEY COLLEGE'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/90L"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/219"].concat(getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087], getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'), getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')),
    ["229/279"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/290"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/290U"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229B"].concat(
        SHD[156],
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229P"].concat(
        getStops(OSK_Stops, 'PUDUR', 'KISTAPUR'),
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),

    // 230 SERIES
    ["230A"].concat(
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        getStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),

    // 231 SERIES
    ["231"].concat(
        getStops(OSK_Stops, 'MEDICITY', 'KISTAPUR'),
        SHD[613]
    ),

    // 233 SERIES
    ["233"].concat(
        getStops(OSK_Stops, 'NUTHANKAL', 'APARNA KOMPALLY'),
        getStops(MDCL_MHRM, 'KOMPALLY', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),

    // 241 SERIES
    ["241T"].concat(
        getStops(OSK_Stops, 'DHARMAVARAM', 'CHIRYALA VILLAGE'),
        getStops(KSR_SHMB, "CHERIYAL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),

    // 242 SERIES
    ["242"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/3K"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
    ),
    ["242/17H"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242/211"].concat(
        SHD[251], "BITS PILANI X ROADS", SHD[51],
        getStops(OSK_Stops, 'DHARMAVARAM', 'YADGARPALLY'),
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242A"].concat(
        "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS",
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242B"].concat(
        SHD[147],
        SHD[46],
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242G"].concat(
        "KEESARA X ROADS", SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
        getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242GA"].concat(
        "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS", "KEESARAGUTTA KAMAN", "KEESARA X ROADS", SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
        getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242RG"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA - NAGARAM", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),

    // 250 SERIES
    ["250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250C"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898],
    ),
    ["250/49"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250C/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "CHERLAPALLY"),
    ),
    ["250D/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR - NFC"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["250/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR - NFC', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),

    // 251 SERIES
    ["251/1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD")
    ),

    // 272 SERIES
    ["272"].concat(
        "BOWRAMPET",
        "BOWRAMPET X ROADS",
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),

    // 277 SERIES
    ["277"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        "BAIRAMALGUDA",
        getStops(MDCL_ADBT, 'KARMANGHAT', 'RTC COLONY (CHAMPAPET)'),
        getStops(ADBT_MDCL, 'CHAMPAPET', 'CHADERGHAT'),
        SHD[624]
    ),
    ["277D"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "SAGAR RING ROAD"),
        getStops(KTGD_LGRH, "LB NAGAR X ROADS", "KOTI WOMENS COLLEGE")
    ),
    ["277L"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "LB NAGAR X ROADS"),
    ),
    ["277N"].concat(
        SHD[665], "KAMMAGUDA", "GURRAMGUDA VILLAGE",
        getStops(IBP_DNGL, 'GURRAMGUDA X ROADS', 'SAGAR RING ROAD'),
        "BAIRAMALGUDA",
        getStops(MDCL_ADBT, 'KARMANGHAT', 'RTC COLONY (CHAMPAPET)'),
        getStops(ADBT_MDCL, 'CHAMPAPET', 'KOTI WOMENS COLLEGE')
    ),

    // 279 SERIES
    ["279"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["279/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
    ),
    ["279U"].concat(getStops(DNGL_IBP, "UPPAL RING ROAD", "IBRAHIMPATNAM")),

    // 280 SERIES
    ["280"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280B"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280J"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        SHD[754],
        SHD[448]
    ),
    ["280N"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280/30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        "SIKH VILLAGE",
        getStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),
    ["280/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),

    // 281 SERIES
    ["281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'ECIL X ROADS')
    ),
    ["281/3K"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/16C"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'GHATKESAR')
    ),
    ["281/24L"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'GHATKESAR'),
    ),
    ["281/250"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR - NFC'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),

    // 283 SERIES
    ["283C"].concat(
        "SURARAM COLONY",
        "SURARAM CIRCLE",
        getStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283VS"].concat(
        "SURARAM VILLAGE",
        getStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283S/18"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["283T"].concat(
        "TENUGUDEM", "VENKATAPUR", "ANURAG UNIVERSITY",
        getStops(GTKS_PTCR, 'JODIMETLA', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 290 SERIES
    ["290"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["290U"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290UA"].concat(
        getStops(OSK_Stops, 'RAMOJI FILM CITY', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290UF"].concat(
        getStops(OSK_Stops, 'RAMOJI FILM CITY', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
    ),
    ["290U/555"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),

    // 299 SERIES
    ["299"].concat(getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")),
    ["299D"].concat(getStops(LGRH_KTGD, "DILSHUKNAGAR", "HAYATHNAGAR")),

    // 300 SERIES

    ["300"].concat(
        getStops(DNGL_IBP, "UPPAL RING ROAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        "MEHDIPATNAM"
    ),
    ["300/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),
    ["300L"].concat(
        "LB NAGAR X ROADS",
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        "MEHDIPATNAM"
    ),

    // 400 SERIES
    ["412"].concat(
        getStops(OSK_Stops_DOWN, 'MALL', 'KHANAPUR X ROADS'),
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        "BAIRAMALGUDA",
        getStops(MDCL_ADBT, 'KARMANGHAT', 'RTC COLONY (CHAMPAPET)'),
        getStops(ADBT_MDCL, 'CHAMPAPET', 'KOTI WOMENS COLLEGE')
    ),
    ["498"].concat(
        "KESAVAPUR",
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["498U"].concat(
        "UDDAMARRI",
        getStops(OSK_Stops, 'USHARPALLY', 'KESAVAPUR'),
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["498VJ"].concat(
        getStops(OSK_Stops, 'JINNARAM', 'PATHARAM'),
        "GAGILLAPUR",
        "DUNDIGAL X ROADS",
        "DOMARAPOCHAMPALLY",
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),

    // 500 SERIES
    ["532"].concat(
        getStops(OSK_Stops, 'JP DARGHA', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["539/1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["555"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'DILSHUKNAGAR')
    ),
    ["555/290U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),
    ["568"].concat(
        getStops(OSK_Stops, 'DAMARAKUNTA', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["578"].concat(
        getStops(OSK_Stops, 'M TURKAPALLY', 'JALALPUR'),
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'ECIL X ROADS'),
    ),
    ["580"].concat(
        getStops(OSK_Stops, 'YADAGIRIGUTTA', 'JALALPUR'),
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'TARNAKA'),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["589"].concat(
        getStops(OSK_Stops, 'RAMAYAMPET', 'ATHVELLY'),
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["593"].concat(
        getStops(OSK_Stops, 'CHEVELLA', 'AYAAN INSTITUTE OF MEDICAL'),
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    )
]

function navigation(ref) {
    removeActiveLinks();
    removeActiveMenus();
    ref.classList.add('activeLink');
    hideHomeScreenSections();
    switch (ref.value) {
        case 1:
            // Routes
            input1.setAttribute('placeholder', 'Search By Route No...');
            routeSection1.classList.remove('close');
            routeSection2.classList.remove('close');

            suggessionsArray = routesArray;
            feature = 1;
            break;
        case 2:
            // Bus Stop
            input1.setAttribute('placeholder', 'Search By Bus Stop...');
            PPbusStations.classList.remove('close');

            suggessionsArray = SHD;
            feature = 2;
            break;
        case 3:
            // From - To
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.remove('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            suggessionsArray = SHD;
            feature = 3;
            break;
        case 4:
            // Fare Chart
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.remove('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            suggessionsArray = SHD;
            feature = 4;
            break;

        default:
            break;
    }
}

function menuItemsClick(ref) {
    removeActiveMenus();
    ref.classList.add('active');
    changeIcons(ref);
    sideScreenMenu.classList.toggle('open');
    console.log(ref.value);

    removeActiveLinks();
    hideHomeScreenSections();
    switch (ref.value) {
        case 1:
            // Alternate Route
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.remove('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            suggessionsArray = SHD;
            feature = 5;
            break;

        default:
            break;
    }
}

function hideHomeScreenSections() {
    swapIconContainer.classList.add('hide');
    input2Container.classList.add('hide');
    routeSection1.classList.add('close');
    routeSection2.classList.add('close');
    PPbusStations.classList.add('close');
    FromToSuggesions.classList.add('hide');
    clear1.classList.add('hide');
    clear2.classList.add('hide');
    suggessionsList.innerHTML = "";
    input1.value = '';
    input2.value = '';
}
function viewRoute(ref) {
    let routeNoI = ref.innerHTML;

    // Reset Items
    upRouteHolder.classList.remove('expand');
    downRouteHolder.classList.remove('expand');
    upRouteDownIcon.classList.remove('click');
    downRouteDownIcon.classList.remove('click');
    upRouteDownSpan.innerHTML = "Show Stops";
    downRouteDownSpan.innerHTML = "Show Stops";

    // To Be Hide
    OutputScreen2.classList.remove('close');
    OutputScreen.classList.remove('show');
    OutputScreen2.classList.add('show');
    suggessionsList.innerHTML = "";
    clear1.classList.add('hide');
    input1.value = '';
    input2.value = '';

    if (ref.innerHTML.includes("/")) {
        if (ref.innerHTML == "1/25S/229") {
            ref = ref.innerText.split('/');
            output2RouteHolder.classList.add('doubleRoute');
            route1No.innerHTML = ref[0] + "/" + ref[1];
            route2No.innerHTML = ref[2];
        } else {
            ref = ref.innerText.split('/');
            output2RouteHolder.classList.add('doubleRoute');
            route1No.innerHTML = ref[0];
            route2No.innerHTML = ref[1];
        }
    } else {
        output2RouteHolder.classList.remove('doubleRoute');
        route1No.innerHTML = ref.innerHTML;
    }

    if (routeNoI == "38EX" || routeNoI == "38X") {
        downRouteHolder.classList.add('hide');
    } else {
        downRouteHolder.classList.remove('hide');
    }
    setRouteHeader(routeNoI);
    upRouteStopsList.innerHTML = "";
    downRouteStopsList.innerHTML = "";
    for (let i = 0; i < DetailedRoutesUP.length; i++) {
        let routeIndex = DetailedRoutesUP[i][0];
        if (routeIndex == routeNoI) {
            // console.log(DetailedRoutesUP[i]);
            for (let j = 1; j < DetailedRoutesUP[i].length; j++) {
                // console.log(DetailedRoutesUP[i][j]);
                let listItem = document.createElement("li");
                let stopHeadInList = document.createElement("h3");
                let stopSubHeadInList = document.createElement("p");

                stopHeadInList.innerHTML = DetailedRoutesUP[i][j];
                stopSubHeadInList.innerHTML = DetailedRoutesUP[i][j];

                listItem.setAttribute('onclick', 'viewStopSender(this)');

                listItem.appendChild(stopHeadInList);
                listItem.appendChild(stopSubHeadInList);
                upRouteStopsList.appendChild(listItem);
            }

            for (let j = 1; j < DetailedRoutesDOWN[i].length; j++) {
                // console.log(DetailedRoutesDOWN[i][j]);
                let listItem = document.createElement("li");
                let stopHeadInList = document.createElement("h3");
                let stopSubHeadInList = document.createElement("p");

                stopHeadInList.innerHTML = DetailedRoutesDOWN[i][j];
                stopSubHeadInList.innerHTML = DetailedRoutesDOWN[i][j];

                listItem.setAttribute('onclick', 'viewStopSender(this)');

                listItem.appendChild(stopHeadInList);
                listItem.appendChild(stopSubHeadInList);
                downRouteStopsList.appendChild(listItem);
            }
        }
    }

}

function setRouteHeader(routeNoI) {
    let routeStartI;
    let routeEndI;

    if (secRoutes_UP.includes(routeNoI)) {
        routeStartI = "SECUNDERABAD";
    } else if (ECILX_UP.includes(routeNoI)) {
        routeStartI = "ECIL X ROADS";
    } else if (AFZ_UP.includes(routeNoI)) {
        routeStartI = "AFZALGUNJ";
    } else if (MP_UP.includes(routeNoI)) {
        routeStartI = "MEHDIPATNAM";
    } else if (MDCL_UP.includes(routeNoI)) {
        routeStartI = "MEDCHAL";
    } else if (PTCR_UP.includes(routeNoI)) {
        routeStartI = "PATANCHERUVU";
    } else if (CBS_UP.includes(routeNoI)) {
        routeStartI = "CBS";
    } else if (CHRM_UP.includes(routeNoI)) {
        routeStartI = "CHARMINAR";
    } else if (KOTI_UP.includes(routeNoI)) {
        routeStartI = "KOTI";
    } else if (KOTIWC_UP.includes(routeNoI)) {
        routeStartI = "KOTI W.COLLEGE";
    } else if (UPL_UP.includes(routeNoI)) {
        routeStartI = "UPPAL";
    } else if (routeNoI == "195W") {
        routeStartI = "WAVEROCK";
        routeEndI = "BACHUPALLY";
    } else if (routeNoI == "29Q") {
        routeStartI = "BALANAGAR";
        routeEndI = "QUTHBULLAPUR";
    }

    // A ORDER SOURCES

    else if (routeNoI == "203A/218" || routeNoI == "203U/90U") {
        routeStartI = "ADIBATLA";
    }
    else if (
        routeNoI == "92A" ||
        routeNoI == "95/3K" || routeNoI == "95/3KN" ||
        routeNoI == "92A/5K" ||
        routeNoI == "92A/49M" ||
        routeNoI == "1Z/229"
    ) {
        routeStartI = "ARAMGHAR";
    }
    else if (
        routeNoI == "16AD/5K" ||
        routeNoI == "16CD/5K" ||
        routeNoI == "16CD/49M" ||
        routeNoI == "16D/5K" ||
        routeNoI == "16D/49M" ||
        routeNoI == "250D/49M" ||
        routeNoI == "15D/20"
    ) {
        routeStartI = "AMBEDKAR NAGAR";
    }

    // B ORDER SOURCES

    else if (routeNoI == "102B/3K" || routeNoI == "102B/218") {
        routeStartI = "BADANGPET";
    } else if (routeNoI == "3N/203N") {
        routeStartI = "BEL";
    } else if (routeNoI == "90L/3K" || routeNoI == "90L/22" || routeNoI == "102/9K") {
        routeStartI = "BDL";
    } else if (routeNoI == "18/47U" || routeNoI == "113M/120") {
        routeStartI = "BODUPPAL";
    }

    // C ORDER SOURCES

    else if (
        routeNoI == "6X" ||
        routeNoI == "18C/10H" ||
        routeNoI == "18C/30" ||
        routeNoI == "18C/219" ||
        routeNoI == "18C/229" ||
        routeNoI == "113F" ||
        routeNoI == "113FZ" ||
        routeNoI == "113FT"
    ) {
        routeStartI = "CHENGICHERLA";
    } else if (routeNoI == "250C/49M" || routeNoI == "6IW/252") {
        routeStartI = "CHERLAPALLY";
    } else if (routeNoI == "288D/19K") {
        routeStartI = "CHILKOOR BALAJI TEMPLE";
    } else if (routeNoI == "555/290U") {
        routeStartI = "CHOTUPPAL";
    }

    // D ORDER SOURCES

    else if (
        routeNoI == "1D/229" ||
        routeNoI == "90UN" ||
        routeNoI == "158" ||
        routeNoI == "158FL" ||
        routeNoI == "218D" ||
        routeNoI == "524" ||
        routeNoI == "555"
    ) {
        routeStartI = "DILSHUKNAGAR";
    } else if (routeNoI == "211/242") {
        routeStartI = "DONGALA MYSAMMA";
    }

    // G ORDER SOURCES

    else if (
        routeNoI == "9K/102" ||
        routeNoI == "221G" ||
        routeNoI == "227/25S"
    ) {
        routeStartI = "GANDIMAISAMMA";
    } else if (
        routeNoI == "280/20" ||
        routeNoI == "280/30" ||
        routeNoI == "280/219" ||
        routeNoI == "281/3K" ||
        routeNoI == "281/16C" ||
        routeNoI == "281/24B" ||
        routeNoI == "281/24L" ||
        routeNoI == "281/250"
    ) {
        routeStartI = "GHATKESAR";
    } else if (routeNoI == "178G/8A") {
        routeStartI = "GOUSE NAGAR";
    } else if (routeNoI == "116GA/65") {
        routeStartI = "GOWLI DHODDI";
    }

    // H ORDER SOURCES

    else if (routeNoI == "22/90L") {
        routeStartI = "HAKIMPET";
    } else if (
        routeNoI == "158HF" ||
        routeNoI == "218H" ||
        routeNoI == "290/229" ||
        routeNoI == "290U/229" ||
        routeNoI == "299" ||
        routeNoI == "299D"
    ) {
        routeStartI = "HAYATHNAGAR";
    }

    // I ORDER SOURCES

    else if (routeNoI == "279U" || routeNoI == "279/229") {
        routeStartI = "IBRAHIMPATNAM";
    } else if (routeNoI == "219I/224G" || routeNoI == "219I/272G") {
        routeStartI = "ISNAPUR";
    }

    // J ORDER SOURCES

    else if (
        routeNoI == "10KJ/18" ||
        routeNoI == "30/18C" ||
        routeNoI == "30/280"
    ) {
        routeStartI = "JAGATHGIRIGUTTA";
    } else if (
        routeNoI == "279" ||
        routeNoI == "280J" ||
        routeNoI == "300/118W" ||
        routeNoI == "290U" ||
        routeNoI == "290" ||
        routeNoI == "90/253T"
    ) {
        routeStartI = "JBS";
    } else if (routeNoI == "29B/17H" || routeNoI == "183B") {
        routeStartI = "JEEDIMETLA";
    } else if (routeNoI == "10JP") {
        routeStartI = "JNTU COLLEGE";
    }

    // K ORDER SOURCES

    else if (
        routeNoI == "83J" ||
        routeNoI == "83JA" ||
        routeNoI == "83J/272G"
    ) {
        routeStartI = "KACHEGUDA STATION";
    } else if (routeNoI == "539/1Z") {
        routeStartI = "KANHA";
    } else if (routeNoI == "242/3K" || routeNoI == "242/17H") {
        routeStartI = "KEESARAGUTTA";
    } else if (
        routeNoI == "10H/16A" ||
        routeNoI == "10H/16C" ||
        routeNoI == "10H/18C" ||
        routeNoI == "127K" ||
        routeNoI == "127KL"
    ) {
        routeStartI = "KONDAPUR";
    } else if (routeNoI == "283S/18") {
        routeStartI = "KORREMULA";
    } else if (routeNoI == "10J/171" || routeNoI == "10K/250") {
        routeStartI = "KPHB 4TH PHASE";
    } else if (routeNoI == "19K/288D" || routeNoI == "185/102") {
        routeStartI = "KUKATPALLY";
    } else if (routeNoI == "15H/20" || routeNoI == "37/8") {
        routeStartI = "KUSHAIGUDA";
    }

    // L ORDER SOURCES

    else if (
        routeNoI == "90L" ||
        routeNoI == "90LK" ||
        routeNoI == "90L/229" ||
        routeNoI == "100X" ||
        routeNoI == "156L" ||
        routeNoI == "277L" ||
        routeNoI == "300/126"
    ) {
        routeStartI = "LB NAGAR";
    }

    // M ORDER SOURCES

    else if (routeNoI == "123/65M") {
        routeStartI = "MANCHIREVULA";
    } else if (routeNoI == "47L/16A" || routeNoI == "47L/16C") {
        routeStartI = "MANIKONDA";
    } else if (routeNoI == "277") {
        routeStartI = "MGBS";
    } else if (
        routeNoI == "218/277K" ||
        routeNoI == "224B" ||
        routeNoI == "224G" ||
        routeNoI == "224X"
    ) {
        routeStartI = "MIYAPUR";
    } else if (routeNoI == "221") {
        routeStartI = "MIYAPUR METRO STN.";
    } else if (routeNoI == "288/113M") {
        routeStartI = "MOINABAD";
    } else if (routeNoI == "11W") {
        routeStartI = "MYTHRIVANAM";
    }

    // N ORDER SOURCES

    else if (
        routeNoI == "203N/3K" ||
        routeNoI == "203N/3N" ||
        routeNoI == "203N/102B" ||
        routeNoI == "203N/218"
    ) {
        routeStartI = "NADERGUL";
    } else if (routeNoI == "49/250") {
        routeStartI = "NAMPALLY";
    } else if (
        routeNoI == "90LV" ||
        routeNoI == "156V" ||
        routeNoI == "158VF"
    ) {
        routeStartI = "NGO'S COLONY";
    } else if (routeNoI == "224MN") {
        routeStartI = "NIZAMPET X ROADS";
    }

    // R ORDER SOURCES

    else if (routeNoI == "92R") {
        routeStartI = "RAJENDRA NAGAR";
    } else if (routeNoI == "6RK" || routeNoI == "6R") {
        routeStartI = "RAM NAGAR";
    } else if (routeNoI == "18R") {
        routeStartI = "RAMANTHAPUR CHURCH";
    } else if (routeNoI == "8R") {
        routeStartI = "RISALA BAZAR";
    }

    // W ORDER SOURCES

    else if (routeNoI == "105") {
        routeStartI = "SAIDABAD COLONY";
    } else if (routeNoI == "19S/505") {
        routeStartI = "SANATH NAGAR";
    } else if (routeNoI == "20/15H" || routeNoI == "20/280" || routeNoI == "113S") {
        routeStartI = "SECRETARIATE";
    } else if (routeNoI == "251/1Z") {
        routeStartI = "SHAMSHABAD";
    } else if (routeNoI == "183SS") {
        routeStartI = "SUCHITRA";
    }

    // T ORDER SOURCES

    else if (routeNoI == "49MT/250") {
        routeStartI = "TALLAGADDA";
    }

    // U ORDER SOURCES

    else if (routeNoI == "203U" || routeNoI == "300/251" || routeNoI == "90U/203U") {
        routeStartI = "UPPAL X ROADS";
    } else if (routeNoI == "18/10KJ") {
        routeStartI = "UPPAL DEPOT";
    }

    // V ORDER SOURCES

    else if (routeNoI == "18VJ") {
        routeStartI = "VENKATREDDY NAGAR";
    }

    // W ORDER SOURCES

    else if (
        routeNoI == "118W/300" ||
        routeNoI == "195W" ||
        routeNoI == "195WP"
    ) {
        routeStartI = "WAVEROCK";
    } else {
        routeStartI = routeStartI;
    }

    // RT-DESTINATIONS

    if (secRoutes_DN.includes(routeNoI)) {
        routeEndI = "SECUNDERABAD";
    } else if (ECILX_DN.includes(routeNoI)) {
        routeEndI = "ECIL X ROADS";
    } else if (AFZ_DN.includes(routeNoI)) {
        routeEndI = "AFZALGUNJ";
    } else if (MP_DN.includes(routeNoI)) {
        routeEndI = "MEHDIPATNAM";
    } else if (KG_DN.includes(routeNoI)) {
        routeEndI = "KUSHAIGUDA";
    } else if (AMBD_DN.includes(routeNoI)) {
        routeEndI = "AMBEDKAR NAGAR";
    } else if (MDCL_DN.includes(routeNoI)) {
        routeEndI = "MEDCHAL";
    } else if (PTCR_DN.includes(routeNoI)) {
        routeEndI = "PATANCHERUVU";
    } else if (ARGR_DN.includes(routeNoI)) {
        routeEndI = "ARAMGHAR";
    } else if (GDMS_DN.includes(routeNoI)) {
        routeEndI = "GANDIMAISAMMA";
    } else if (GTKS_DN.includes(routeNoI)) {
        routeEndI = "GHATKESAR";
    } else if (BRBD_DN.includes(routeNoI)) {
        routeEndI = "BORABANDA";
    }

    // A ORDER DESTINATIONS

    else if (
        routeNoI == "203A" ||
        routeNoI == "203U" ||
        routeNoI == "218/203A" || routeNoI == "90U/203U"
    ) {
        routeEndI = "ADIBATLA";
    } else if (routeNoI == "230A") {
        routeEndI = "ANNARAM";
    } else if (routeNoI == "288A") {
        routeEndI = "AMDAPUR";
    } else if (routeNoI == "205A" || routeNoI == "290UA") {
        routeEndI = "ANAJPUR";
    } else if (routeNoI == "242A" || routeNoI == "242GA") {
        routeEndI = "ANKIREDDY PALLY";
    } else if (routeNoI == "85/253L") {
        routeEndI = "ANNOJIGUDA";
    } else if (routeNoI == "18/47U") {
        routeEndI = "AOU UNIVERSITY";
    } else if (routeNoI == "83JA" || routeNoI == "189M") {
        routeEndI = "APUROOPA COLONY";
    } else if (routeNoI == "288C") {
        routeEndI = "APPOJIGUDA";
    } else if (routeNoI == "3M") {
        routeEndI = "AS RAO NAGAR";
    } else if (routeNoI == "245A") {
        routeEndI = "AUSHAPUR";
    } else if (routeNoI == "9A") {
        routeEndI = "AG COLONY";
    }

    // B ORDER DESTINATIONS

    else if (routeNoI == "195W") {
        routeEndI = "BACHUPALLY";
    } else if (
        routeNoI == "3K/102B" ||
        routeNoI == "90BE" ||
        routeNoI == "100X" ||
        routeNoI == "102B" ||
        routeNoI == "218/102B"
    ) {
        routeEndI = "BADANGPET";
    } else if (routeNoI == "227") {
        routeEndI = "BAHUDURPALLY";
    } else if (routeNoI == "24B" || routeNoI == "17DH" || routeNoI == "17DS") {
        routeEndI = "BALAJI NAGAR";
    } else if (routeNoI == "183B") {
        routeEndI = "BALANAGAR";
    } else if (routeNoI == "102M") {
        routeEndI = "BALAPUR";
    } else if (routeNoI == "90B") {
        routeEndI = "BANDLAGUDA DEPOT";
    } else if (routeNoI == "2C") {
        routeEndI = "BARKAS";
    } else if (routeNoI == "113B") {
        routeEndI = "BARKATPURA";
    } else if (
        routeNoI == "3K/90L" ||
        routeNoI == "3K/102" ||
        routeNoI == "9K/102" ||
        routeNoI == "22/90L" ||
        routeNoI == "185/102"
    ) {
        routeEndI = "BDL";
    } else if (routeNoI == "203N/3N") {
        routeEndI = "BEL";
    } else if (routeNoI == "23B") {
        routeEndI = "BHUDEVI NAGAR";
    } else if (routeNoI == "280/488") {
        routeEndI = "BIBI NAGAR";
    } else if (routeNoI == "212") {
        routeEndI = "BITS PILANI";
    } else if (routeNoI == "3Y" || routeNoI == "24BJ") {
        routeEndI = "BJR NAGAR";
    } else if (routeNoI == "18B" || routeNoI == "50B") {
        routeEndI = "BODUPPAL";
    } else if (routeNoI == "242B" || routeNoI == "280B") {
        routeEndI = "BOGARAM";
    } else if (routeNoI == "224B") {
        routeEndI = "BOLLARUM";
    } else if (routeNoI == "229B") {
        routeEndI = "BOWENPALLY";
    } else if (routeNoI == "272") {
        routeEndI = "BOWRAMPET";
    } else if (routeNoI == "202B") {
        routeEndI = "BRAHMANAPALLY";
    }

    // C ORDER DESTINATIONS

    else if (
        routeNoI == "1C" ||
        routeNoI == "8R" ||
        routeNoI == "86C"
    ) {
        routeEndI = "CBS";
    } else if (routeNoI == "8A" || routeNoI == "8AK" || routeNoI == "8C") {
        routeEndI = "CHANDRAYANGUTTA";
    } else if (routeNoI == "272G/9XM") {
        routeEndI = "CHARMINAR";
    } else if (
        routeNoI == "10H/18C" ||
        routeNoI == "18C" ||
        routeNoI == "30/18C" ||
        routeNoI == "71A" ||
        routeNoI == "219/18C" ||
        routeNoI == "229/18C" ||
        routeNoI == "250S"
    ) {
        routeEndI = "CHENGICHERLA";
    } else if (routeNoI == "250E") {
        routeEndI = "CHENGICHERLA DEPOT";
    } else if (
        routeNoI == "17CS" ||
        routeNoI == "49M/250C" ||
        routeNoI == "250C"
    ) {
        routeEndI = "CHERLAPALLY";
    } else if (routeNoI == "593") {
        routeEndI = "CHEVELLA";
    } else if (routeNoI == "19K/288D" || routeNoI == "288D") {
        routeEndI = "CHILKOOR BALAJI TEMPLE";
    } else if (routeNoI == "555" || routeNoI == "290U/555") {
        routeEndI = "CHOTUPPAL";
    } else if (routeNoI == "211M") {
        routeEndI = "CRPF";
    }

    // D ORDER DESTINATIONS

    else if (routeNoI == "568") {
        routeEndI = "DAMARAKUNTA";
    } else if (routeNoI == "290U/463") {
        routeEndI = "DESHMUKHI";
    } else if (routeNoI == "211DY") {
        routeEndI = "DEVARAYAMJAL";
    } else if (routeNoI == "241T") {
        routeEndI = "DHARMAVARAM";
    } else if (
        routeNoI == "1D" ||
        routeNoI == "90DL" ||
        routeNoI == "107JD" ||
        routeNoI == "107VR" ||
        routeNoI == "299D"
    ) {
        routeEndI = "DILSHUKNAGAR";
    } else if (routeNoI == "242/211") {
        routeEndI = "DONGALAMYSAMMA";
    } else if (routeNoI == "211CD") {
        routeEndI = "DRDO (YADGARPALLY)";
    } else if (
        routeNoI == "9K/230P" ||
        routeNoI == "9X/230P" ||
        routeNoI == "9XM/230P" ||
        routeNoI == "230P"
    ) {
        routeEndI = "DUNDIGAL";
    } else if (routeNoI == "6X") {
        routeEndI = "IRRUMANZIL";
    } else if (routeNoI == "158") {
        routeEndI = "ESI HOSPITAL";
    }

    // G ORDER DESTINATIONS

    else if (routeNoI == "221G") {
        routeEndI = "GACHIBOWLI";
    } else if (routeNoI == "171" || routeNoI == "189M/171M") {
        routeEndI = "GAJULARAMARAM";
    } else if (routeNoI == "44X") {
        routeEndI = "GANGAPUTRA COLONY";
    } else if (routeNoI == "65MG" || routeNoI == "66G") {
        routeEndI = "GOLCONDA";
    } else if (routeNoI == "25M") {
        routeEndI = "GOPAL NAGAR";
    } else if (routeNoI == "8A/178G") {
        routeEndI = "GOUSE NAGAR";
    } else if (routeNoI == "65/116GA" || routeNoI == "116N") {
        routeEndI = "GOWLI DHODDI";
    } else if (routeNoI == "201G") {
        routeEndI = "GOWRELLY";
    }

    // H ORDER DESTINATIONS

    else if (routeNoI == "22" || routeNoI == "90L/22") {
        routeEndI = "HAKIMPET";
    } else if (
        routeNoI == "1D/299" ||
        routeNoI == "72H" ||
        routeNoI == "156/299" ||
        routeNoI == "229/290" ||
        routeNoI == "229/290U" ||
        routeNoI == "290" ||
        routeNoI == "290U"
    ) {
        routeEndI = "HAYATHNAGAR";
    } else if (routeNoI == "3N") {
        routeEndI = "HEMA NAGAR";
    }

    // I ORDER DESTINATIONS

    else if (
        routeNoI == "72/277D" ||
        routeNoI == "229/279" ||
        routeNoI == "277" ||
        routeNoI == "277D" ||
        routeNoI == "277L" ||
        routeNoI == "279"
    ) {
        routeEndI = "IBRAHIMPATNAM";
    } else if (routeNoI == "224X") {
        routeEndI = "IDA BOLLARUM";
    } else if (routeNoI == "29B/272I" || routeNoI == "272IG/29B") {
        routeEndI = "INDIRAMMA COLONY";
    }

    // J ORDER DESTINATIONS

    else if (
        routeNoI == "10KJ" ||
        routeNoI == "18/10KJ" ||
        routeNoI == "18C/30" ||
        routeNoI == "19KJ" ||
        routeNoI == "30" ||
        routeNoI == "185G" ||
        routeNoI == "280/30"
    ) {
        routeEndI = "JAGATHGIRIGUTTA";
    } else if (routeNoI == "72J") {
        routeEndI = "JAIPURI COLONY";
    } else if (
        routeNoI == "18J" ||
        routeNoI == "18R" ||
        routeNoI == "18VJ" ||
        routeNoI == "90L" ||
        routeNoI == "90LV" ||
        routeNoI == "118W/300" ||
        routeNoI == "253T/90"
    ) {
        routeEndI = "JBS";
    } else if (
        routeNoI == "9K" ||
        routeNoI == "9X" ||
        routeNoI == "9XM" ||
        routeNoI == "17H/29B" ||
        routeNoI == "29B" ||
        routeNoI == "83J"
    ) {
        routeEndI = "JEEDIMETLA";
    } else if (
        routeNoI == "1J" ||
        routeNoI == "2J" ||
        routeNoI == "3KJ" ||
        routeNoI == "86J"
    ) {
        routeEndI = "JIYAGUDA";
    } else if (routeNoI == "498VJ") {
        routeEndI = "JINNARAM";
    } else if (routeNoI == "10J" || routeNoI == "300/126" || routeNoI == "126M") {
        routeEndI = "JNTU COLLEGE";
    } else if (routeNoI == "25AJ") {
        routeEndI = "JONNABANDA";
    } else if (routeNoI == "532") {
        routeEndI = "JP DARGAH";
    }

    // K ORDER DESTINATIONS

    else if (
        routeNoI == "1X" ||
        routeNoI == "90LK"
    ) {
        routeEndI = "KACHEGUDA STATION";
    } else if (routeNoI == "1K" || routeNoI == "2K" || routeNoI == "71K") {
        routeEndI = "KACHEGUDA DEPOT";
    } else if (routeNoI == "5K/188" || routeNoI == "6RK" || routeNoI == "188") {
        routeEndI = "KALI MANDIR";
    } else if (routeNoI == "1Z/539") {
        routeEndI = "KANHA";
    } else if (routeNoI == "290KP" || routeNoI == "523K") {
        routeEndI = "KAVADIPALLY";
    } else if (
        routeNoI == "3K/242" ||
        routeNoI == "242" ||
        routeNoI == "242/17H"
    ) {
        routeEndI = "KEESARAGUTTA";
    } else if (routeNoI == "242G") {
        routeEndI = "KEESARA";
    } else if (routeNoI == "498") {
        routeEndI = "KESHAVAPUR";
    } else if (routeNoI == "211K") {
        routeEndI = "KESHAVARAM";
    } else if (routeNoI == "23BK") {
        routeEndI = "KISTAMMA ENCLAVE";
    } else if (routeNoI == "116/220K") {
        routeEndI = "KOLLURU";
    } else if (routeNoI == "211D") {
        routeEndI = "KOLTHUR";
    } else if (
        routeNoI == "10H" ||
        routeNoI == "16A/10H" ||
        routeNoI == "16C/10H" ||
        routeNoI == "18C/10H" ||
        routeNoI == "147"
    ) {
        routeEndI = "KONDAPUR";
    } else if (routeNoI == "203AK" || routeNoI == "218/277K") {
        routeEndI = "KONGARAKALAN";
    } else if (routeNoI == "18/283S") {
        routeEndI = "KORREMULA";
    } else if (routeNoI == "498K") {
        routeEndI = "KOTHAPALLY";
    } else if (routeNoI == "40" || routeNoI == "115" || routeNoI == "127K" || routeNoI == "86K") {
        routeEndI = "KOTI";
    } else if (routeNoI == "299" || routeNoI == "1W") {
        routeEndI = "KOTI W.COLLEGE";
    } else if (
        routeNoI == "10K" ||
        routeNoI == "19K" ||
        routeNoI == "19M" ||
        routeNoI == "113K" ||
        routeNoI == "113KT" ||
        routeNoI == "250/10K"
    ) {
        routeEndI = "KPHB 4TH PHASE";
    } else if (routeNoI == "288D/19K") {
        routeEndI = "KUKATPALLY";
    } else if (routeNoI == "72HK") {
        routeEndI = "KUNTLOOR";
    }

    // L ORDER DESTINATIONS

    else if (
        routeNoI == "1L" ||
        routeNoI == "107JL" ||
        routeNoI == "107VL" ||
        routeNoI == "127KL" ||
        routeNoI == "229/90L" ||
        routeNoI == "300L"
    ) {
        routeEndI = "LB NAGAR";
    } else if (routeNoI == "102/253L") {
        routeEndI = "LEMOOR";
    } else if (
        routeNoI == "10HL" ||
        routeNoI == "10KL" ||
        routeNoI == "113KL" ||
        routeNoI == "113KLT" ||
        routeNoI == "113ILT" ||
        routeNoI == "216" ||
        routeNoI == "216M" ||
        routeNoI == "218L"
    ) {
        routeEndI = "LINGAMPALLY";
    }

    // M ORDER DESTINATIONS

    else if (routeNoI == "218/224MN" || routeNoI == "224MN") {
        routeEndI = "MALLAMPET";
    } else if (routeNoI == "412") {
        routeEndI = "MALL";
    } else if (routeNoI == "290U/205") {
        routeEndI = "MAJEEDPUR";
    } else if (routeNoI == "253" || routeNoI == "253W") {
        routeEndI = "MAHESHWARAM";
    } else if (
        routeNoI == "47YM" ||
        routeNoI == "65M/123" ||
        routeNoI == "113M/120" ||
        routeNoI == "221"
    ) {
        routeEndI = "MANCHIREVULA";
    } else if (
        routeNoI == "16A/47L" ||
        routeNoI == "16C/47L" ||
        routeNoI == "47L" ||
        routeNoI == "47Y"
    ) {
        routeEndI = "MANIKONDA";
    } else if (routeNoI == "22D") {
        routeEndI = "MB DARGAH";
    } else if (
        routeNoI == "10KM" ||
        routeNoI == "19KM" ||
        routeNoI == "113KM"
    ) {
        routeEndI = "MIYAPUR";
    } else if (routeNoI == "113M/288" || routeNoI == "288") {
        routeEndI = "MOINABAD";
    } else if (routeNoI == "251M") {
        routeEndI = "MUCHINTHAL";
    } else if (routeNoI == "231") {
        routeEndI = "MEDICITY";
    } else if (routeNoI == "102") {
        routeEndI = "MIDHANI DEPOT";
    }

    // N ORDER DESTINATIONS

    else if (
        routeNoI == "3N/203N" ||
        routeNoI == "102B/203N" ||
        routeNoI == "203N" ||
        routeNoI == "218/203N" ||
        routeNoI == "277N"
    ) {
        routeEndI = "NADERGUL";
    } else if (routeNoI == "20P" || routeNoI == "49" || routeNoI == "250/49") {
        routeEndI = "NAMPALLY";
    } else if (routeNoI == "219N") {
        routeEndI = "NARENDAR COLONY";
    } else if (routeNoI == "123") {
        routeEndI = "NARSINGI";
    } else if (routeNoI == "1MD") {
        routeEndI = "NEW MARUTHI NAGAR";
    } else if (routeNoI == "280N") {
        routeEndI = "NFC NAGAR";
    } else if (routeNoI == "1V" || routeNoI == "72V") {
        routeEndI = "NGO'S COLONY";
    } else if (routeNoI == "233") {
        routeEndI = "NUTHANAKAL";
    }

    // O ORDER DESTINATIONS

    else if (routeNoI == "26M" || routeNoI == "26N") {
        routeEndI = "OLD BOWENPALLY";
    } else if (routeNoI == "120") {
        routeEndI = "OSMANSAGAR";
    }

    // P ORDER DESTINATIONS

    else if (routeNoI == "25P") {
        routeEndI = "PANCHASHEELA";
    } else if (routeNoI == "46") {
        routeEndI = "PATIGADDA";
    } else if (routeNoI == "524") {
        routeEndI = "POCHAMPALLY";
    } else if (routeNoI == "211") {
        routeEndI = "POTHAIPALLY";
    } else if (routeNoI == "10JP" || routeNoI == "19MP") {
        routeEndI = "PRAGATHI NAGAR";
    } else if (routeNoI == "3L" || routeNoI == "14P" || routeNoI == "16P") {
        routeEndI = "PRASHANTH NAGAR";
    } else if (routeNoI == "229P") {
        routeEndI = "PUDUR";
    }

    // R ORDER DESTINATIONS

    else if (routeNoI == "94R") {
        routeEndI = "RAJENDRA NAGAR";
    } else if (routeNoI == "22K" || routeNoI == "104A") {
        routeEndI = "RAJIV GRUHAKALPA";
    } else if (routeNoI == "589") {
        routeEndI = "RAMAYAMPET";
    } else if (routeNoI == "290UF") {
        routeEndI = "RAMOJI FILM CITY";
    } else if (routeNoI == "203AR") {
        routeEndI = "RAVIRYALA";
    } else if (routeNoI == "447R") {
        routeEndI = "RAVULAPALLY";
    } else if (routeNoI == "103") {
        routeEndI = "RCI";
    } else if (
        routeNoI == "15H/242RG" ||
        routeNoI == "242RG"
    ) {
        routeEndI = "RG COLONY";
    } else if (routeNoI == "3K/252") {
        routeEndI = "RGI AIRPORT";
    } else if (routeNoI == "5R" || routeNoI == "5/5R") {
        routeEndI = "RISALA BAZAR";
    } else if (routeNoI == "104R") {
        routeEndI = "RN REDDY";
    }

    // S ORDER DESTINATIONS
    else if (routeNoI == "1VS") {
        routeEndI = "SAHAB NAGAR";
    }
    else if (routeNoI == "1VM") {
        routeEndI = "SAI NAGAR";
    } else if (routeNoI == "10" || routeNoI == "19S") {
        routeEndI = "SANATH NAGAR";
    } else if (
        routeNoI == "1HD" ||
        routeNoI == "107JS" ||
        routeNoI == "107VS"
    ) {
        routeEndI = "SAROORNAGAR";
    } else if (
        routeNoI == "15H/20" ||
        routeNoI == "16R/20" ||
        routeNoI == "105" ||
        routeNoI == "280/20"
    ) {
        routeEndI = "SECRETARIATE";
    } else if (
        routeNoI == "10J/171" ||
        routeNoI == "24SS" ||
        routeNoI == "183SS"
    ) {
        routeEndI = "SHAHPUR NAGAR";
    } else if (
        routeNoI == "1Z/251" ||
        routeNoI == "2Z/251" ||
        routeNoI == "7Z/251" ||
        routeNoI == "90L/251" ||
        routeNoI == "188/251" ||
        routeNoI == "300/251"
    ) {
        routeEndI = "SHAMSHABAD";
    } else if (routeNoI == "19S/505" || routeNoI == "505") {
        routeEndI = "SHANKARPALLY";
    } else if (routeNoI == "25MS") {
        routeEndI = "SHARAN NAGAR";
    } else if (routeNoI == "92K" || routeNoI == "95K" || routeNoI == "2Z") {
        routeEndI = "SRI RAM COLONY";
    } else if (routeNoI == "171R") {
        routeEndI = "SRI RAM NAGAR";
    } else if (routeNoI == "29S") {
        routeEndI = "SUBHASH NAGAR";
    } else if (
        routeNoI == "1/25S" ||
        routeNoI == "1P/25S" ||
        routeNoI == "2/25S" ||
        routeNoI == "23GS" ||
        routeNoI == "24S" ||
        routeNoI == "25S"
    ) {
        routeEndI = "SUCHITRA";
    } else if (routeNoI == "9X/283D" || routeNoI == "283C") {
        routeEndI = "SURARAM COLONY";
    } else if (routeNoI == "283VS") {
        routeEndI = "SURARAM VILLAGE";
    } else if (routeNoI == "25A") {
        routeEndI = "SURYA NAGAR";
    }

    // T ORDER DESTINATIONS

    else if (routeNoI == "49MT" || routeNoI == "250/49MT") {
        routeEndI = "TALLAGADDA";
    } else if (routeNoI == "290U/201T") {
        routeEndI = "TARAMATIPET";
    } else if (routeNoI == "3T") {
        routeEndI = "TARNAKA";
    } else if (routeNoI == "23T") {
        routeEndI = "TELECOM NAGAR";
    } else if (routeNoI == "283T") {
        routeEndI = "TENUGUDEM";
    } else if (routeNoI == "38T") {
        routeEndI = "TUKARAMGATE";
    } else if (routeNoI == "90/253T") {
        routeEndI = "TUKKUGUDA FAB CITY";
    } else if (routeNoI == "212T") {
        routeEndI = "TURKAPALLY";
    } else if (routeNoI == "578") {
        routeEndI = "M TURKAPALLY";
    }

    // U ORDER DESTINATIONS

    else if (routeNoI == "211B" || routeNoI == "498U") {
        routeEndI = "UDDAMARRI";
    } else if (
        routeNoI == "18" ||
        routeNoI == "279U" ||
        routeNoI == "288/113M" ||
        routeNoI == "300"
    ) {
        routeEndI = "UPPAL";
    } else if (routeNoI == "10KJ/18") {
        routeEndI = "UPPAL DEPOT";
    } else if (routeNoI == "90UN" || routeNoI == "203U/90U") {
        routeEndI = "UPPAL X ROADS";
    } else if (routeNoI == "2U" || routeNoI == "8UA") {
        routeEndI = "UPPUGUDA";
    }

    // V ORDER DESTINATIONS

    else if (routeNoI == "212/702") {
        routeEndI = "VARGAL TEMPLE";
    } else if (routeNoI == "85V") {
        routeEndI = "VENKATAPUR";
    } else if (routeNoI == "18V") {
        routeEndI = "VENKATREDDY NAGAR";
    } else if (routeNoI == "17DV" || routeNoI == "17V") {
        routeEndI = "VIKAS NAGAR";
    } else if (routeNoI == "3V") {
        routeEndI = "VST";
    }

    // W ORDER DESTINATIONS

    else if (
        routeNoI == "10W" ||
        routeNoI == "11W" ||
        routeNoI == "113W" ||
        routeNoI == "300/118W" ||
        routeNoI == "6IW/252"
    ) {
        routeEndI = "WAVEROCK";
    } else if (routeNoI == "21W") {
        routeEndI = "WEST VENKATAPURAM";
    }

    // Y ORDER DESTINATIONS
    else if (routeNoI == "580") {
        routeEndI = "YADAGIRIGUTTA";
    } else if (routeNoI == "16NY" || routeNoI == "24") {
        routeEndI = "YAPRAL";
    } else if (routeNoI == "10Y") {
        routeEndI = "YOUSUFGUDA";
    } else {
        routeEndI = routeEndI;
    }

    // SINGLES
    if (routeNoI == "224/47D") {
        routeStartI = "DARGAH";
        routeEndI = "MAYURI NAGAR";
    } else if (routeNoI == "16/20") {
        routeStartI = "SAFILGUDA";
        routeEndI = "IRRUM MANZIL";
    }
    let routeViaI = viaArray[suggessionsArray.indexOf(routeNoI)];
    upViaList.innerHTML = routeViaI;
    routeViaI = viaArray[suggessionsArray.indexOf(routeNoI)].split(",");
    let viaString = "";
    for (let i = routeViaI.length - 1; i >= 0; i--) {
        if (i == 0) {
            viaString += routeViaI[i];
        } else {
            viaString += routeViaI[i] + ", ";
        }
    }

    downViaList.innerHTML = viaString;

    upSource.innerHTML = routeStartI;
    upDestination.innerHTML = routeEndI;

    downSource.innerHTML = routeEndI;
    downDestination.innerHTML = routeStartI;
}

function viewStop(ref) {
    // To Be Hide
    OutputScreen.classList.remove('close');
    OutputScreen.classList.add('show');
    OutputScreen2.classList.remove('show');
    suggessionsList.innerHTML = "";
    clear1.classList.add('hide');
    input1.value = '';
    input2.value = '';

    let main;
    let sub;
    if (ref.value == 1) {
        if (ref.innerHTML.includes('CBS')) {
            main = 'CBS';
            sub = 'CENTRAL BUS STATION';
            outputBusStopPart2.classList.add('hide');
            outputBusStopPart1.classList.remove('hide');
            backState = 1;
        } else if (JunctionStop == 'MG BUS STATION') {
            main = 'MGBS';
            sub = ref.innerHTML;
            outputBusStopPart2.classList.add('hide');
            outputBusStopPart1.classList.remove('hide');
            backState = 1;
        } else {
            main = JunctionStop;
            sub = ref.innerHTML;
            outputBusStopPart2.classList.add('hide');
            outputBusStopPart1.classList.remove('hide');
            backState = 1;
        }
    }
    else if (ref.innerHTML.includes('CBS') || ref.innerHTML == 'CITY BUS STATION') {
        main = 'CBS';
        sub = 'CENTRAL BUS STATION';
        outputBusStopPart2.classList.add('hide');
        outputBusStopPart1.classList.remove('hide');
    }
    else if (ref.innerHTML.includes('JBS') || ref.innerHTML == 'JUBLIE BUS STATION') {
        main = 'JBS';
        sub = 'JUBLIE BUS STATION';
        outputBusStopPart2.classList.add('hide');
        outputBusStopPart1.classList.remove('hide');
    }
    else if (junctionStopsArray.includes(ref.innerHTML)) {
        JunctionStop = ref.innerHTML;
        JunctionStopState = ref;
        if (JunctionStop == "MG BUS STATION") {
            main = 'MGBS';
        } else {
            main = JunctionStop;
        }
        sub = '';
        outputBusStopPart1.classList.add('hide');
        outputBusStopPart2.classList.remove('hide');
        avlBusStops.innerHTML = '';
        junctionStopsHeading.innerHTML = 'Bus Stops in ' + JunctionStop.charAt(0).toUpperCase() + JunctionStop.slice(1).toLowerCase();;
        let index = junctionStopsArray.indexOf(JunctionStop);

        junctionStopsArrayStops[index].forEach(element => {
            let listItem = document.createElement("li");
            listItem.setAttribute('value', 1);
            listItem.setAttribute('onclick', 'viewStop(this)');
            listItem.textContent = element;
            avlBusStops.appendChild(listItem);
        });

    } else {
        main = ref.innerHTML;
        sub = '';
        outputBusStopPart2.classList.add('hide');
        outputBusStopPart1.classList.remove('hide');
    }

    handleFontSize(main, sub);
}

function viewStopSender(ref) {
    viewStop(ref.children[0]);
}

function viewFromTo(ref) {
    ref = ref.innerHTML.split('-');
    input1.value = ref[0].slice(0, -1);
    input2.value = ref[1].slice(1);
}

function expandList(ref) {
    ref.classList.toggle('click');
    ref.parentNode.parentNode.parentNode.classList.toggle('expand');
    if (ref.classList[0] == 'click') {
        ref.parentNode.children[0].innerHTML = 'Hide Stops';
    } else {
        ref.parentNode.children[0].innerHTML = 'View Stops';
    }
}

function handleFontSize(ref, subref) {
    StopNameHead.innerHTML = ref;
    StopNameSub.innerHTML = subref;
    if (subref == '' || subref == undefined) {
        StopNameSub.style.display = "none";
    } else {
        StopNameSub.style.display = "block";
    }

    if (ref.length <= 4) {
        StopNameHead.style.fontSize = "66px";
        StopNameHead.style.letterSpacing = "10px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 7) {
        StopNameHead.style.fontSize = "52px";
        StopNameHead.style.letterSpacing = "10px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 8) {
        StopNameHead.style.fontSize = "48px";
        StopNameHead.style.letterSpacing = "8px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 9) {
        StopNameHead.style.fontSize = "38px";
        StopNameHead.style.letterSpacing = "8px";
        StopNameSub.style.marginTop = "-13px";
    } else if (ref.length <= 12) {
        StopNameHead.style.fontSize = "36px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-10px";
    } else if (ref.length <= 14) {
        StopNameHead.style.fontSize = "34px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-10px";
    } else if (ref.length <= 16) {
        StopNameHead.style.fontSize = "28px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-8px";
    } else if (ref.length <= 20) {
        StopNameHead.style.fontSize = "30px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-8px";
    }
}

function showSuggesions(ref) {
    const filterValue = ref.value.toUpperCase();
    let filteredArray = []
    if (ref.value.length == 0) {
        ref.parentNode.children[2].classList.add('hide');
    } else {
        ref.parentNode.children[2].classList.remove('hide');
    }
    filteredArray = suggessionsArray.filter((item) =>
        item.toUpperCase().startsWith(filterValue)
    );
    displayList(filteredArray);
}

function displayList(filteredArray) {
    suggessionsList.style.display = "flex";
    suggessionsList.innerHTML = "";
    filteredArray.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        if (feature == 1) {
            listItem.setAttribute('onclick', 'viewRoute(this)');
        } else if (feature == 2) {
            listItem.setAttribute('onclick', 'viewStop(this)');
        } else if (feature == 3) {
        }
        suggessionsList.appendChild(listItem);
    });
}

function createListDropDown(dataArray, List, Mode) {
    dataArray.forEach(element => {
        let listItem = document.createElement("li");
        listItem.textContent = element;
        if (Mode == 1) {
            listItem.setAttribute('onclick', 'viewRoute(this)');
        } else if (Mode == 2) {
            listItem.setAttribute('onclick', 'viewStop(this)');
        }
        List.appendChild(listItem);
    });
}
function clearInputs(ref) {
    ref.parentNode.children[1].value = '';
    ref.classList.add('hide');
    suggessionsList.innerHTML = '';
    ref.parentNode.children[1].focus();
}
function swapInputValues() {
    let temp;
    temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}

function openMenu() {
    sideScreenMenu.classList.toggle('open');
}

function closeOutputScreen(ref) {
    if (backState == 1) {
        viewStop(JunctionStopState);
        backState = 0;
    } else {
        ref.parentNode.parentNode.classList.add('close');
    }
}

function removeActiveLinks() {
    navs[0].classList.remove('activeLink');
    navs[1].classList.remove('activeLink');
    navs[2].classList.remove('activeLink');
    navs[3].classList.remove('activeLink');
}

function removeActiveMenus() {
    menuItems.children[0].classList.remove('active');
    menuItems.children[1].classList.remove('active');
    menuItems.children[2].classList.remove('active');
    menuItems.children[3].classList.remove('active');
    menuItems.children[4].classList.remove('active');

    menuItems.children[0].children[0].src = 'images/icons/altRouteWhite.png';
    menuItems.children[1].children[0].src = 'images/icons/idWhite.png';
    menuItems.children[2].children[0].src = 'images/icons/helpWhite.png';
    menuItems.children[3].children[0].src = 'images/icons/contactWhite.png';
    menuItems.children[4].children[0].src = 'images/icons/moreWhite.png';
}

function changeIcons(ref) {
    switch (ref.value) {
        case 1:
            ref.children[0].src = 'images/icons/altRouteBlack.png';
            break;
        case 2:
            ref.children[0].src = 'images/icons/idBlack.png';
            break;
        case 3:
            ref.children[0].src = 'images/icons/helpBlack.png';
            break;
        case 4:
            ref.children[0].src = 'images/icons/contactBlack.png';
            break;
        case 5:
            ref.children[0].src = 'images/icons/moreBlack.png';
            break;

        default:
            break;
    }
}

function getId(item) {
    return document.getElementById(item);
}

function getStops(a, s, d) {
    return a.slice(a.indexOf(s), a.indexOf(d) + 1);
}
