import { Area } from "./schema";

export const areas: Area[] = [
  // Core City Districts
  {
    slug: "maitama",
    name: "Maitama",
    state: "FCT",
    intro:
      "Zee Plumbing World provides discreet, certified plumbing engineering for luxury residences, diplomatic missions, and corporate offices across Maitama, Abuja. From high-end European concealed fixtures to automatic booster pump manifolds and whole-compound water treatment systems, our technicians deliver unmatched craftsmanship.",
    landmarks: ["IBBB Golf Club", "Maitama General Hospital", "Shehu Shagari Way", "Aguiyi Ironsi Street"],
    nearby: ["Asokoro", "Wuse 2", "Central Business District", "Katampe"],
    geo: { lat: 9.0882, lng: 7.4934 },
  },
  {
    slug: "asokoro",
    name: "Asokoro",
    state: "FCT",
    intro:
      "In the prestigious hills and diplomatic residences of Asokoro, plumbing reliability and aesthetic precision are essential. We specialize in concealed thermostatic rainfall showers, multi-stage water filtration, borehole pump maintenance, and quiet pressure booster systems engineered for expansive residential properties.",
    landmarks: ["ECOWAS Secretariat", "Aso Rock Villa vicinity", "Yakubu Gowon Crescent", "Nelson Mandela Street"],
    nearby: ["Maitama", "Garki", "Guzape", "Central Business District"],
    geo: { lat: 9.0433, lng: 7.5312 },
  },
  {
    slug: "wuse-2",
    name: "Wuse 2",
    state: "FCT",
    intro:
      "As Abuja's premier commercial and hospitality hub, Wuse 2 businesses and homeowners require rapid, reliable plumbing interventions. We provide 24/7 emergency response for burst pipes, grease trap cleaning for restaurants, commercial toilet repairs, and modern PPR repiping.",
    landmarks: ["Adetokunbo Ademola Crescent", "Aminu Kano Crescent", "Banex Plaza", "Wuse 2 Park"],
    nearby: ["Wuse", "Maitama", "Utako", "Central Business District"],
    geo: { lat: 9.0778, lng: 7.4719 },
  },
  {
    slug: "wuse",
    name: "Wuse (Zones 1-7)",
    state: "FCT",
    intro:
      "Covering all established residential and administrative sectors from Zone 1 to Zone 7, our plumbing crew handles aging galvanized pipe replacements, bathroom fixture modernizations, sewer unblocking, and routine maintenance for government quarters and private residences.",
    landmarks: ["Wuse Market", "Herbert Macaulay Way", "Zone 3 Shopping Complex", "All States Plaza"],
    nearby: ["Wuse 2", "Garki", "Utako", "Central Business District"],
    geo: { lat: 9.0612, lng: 7.4645 },
  },
  {
    slug: "garki",
    name: "Garki",
    state: "FCT",
    intro:
      "From Area 1 through Area 11 and Garki 2, Zee Plumbing World delivers licensed plumbing repairs and installations. We resolve low water pressure, service solar and electric water heaters, fix underground mains leaks, and install durable sanitary ware for apartments and office complexes.",
    landmarks: ["Area 1 Shopping Centre", "Garki Hospital", "Area 11 Commercial District", "Ahmadu Bello Way"],
    nearby: ["Asokoro", "Central Business District", "Wuse", "Durumi"],
    geo: { lat: 9.0345, lng: 7.4889 },
  },
  {
    slug: "central-business-district",
    name: "Central Business District",
    state: "FCT",
    intro:
      "Serving high-rise corporate headquarters, banking towers, federal ministries, and commercial plazas in the heart of Abuja. We manage complex mechanical plumbing drawings, wastewater risers, vertical stacks, booster pump stations, and 24/7 corporate emergency plumbing support.",
    landmarks: ["Federal Secretariat", "NNPC Towers", "National Mosque", "Central Bank of Nigeria Headquarters"],
    nearby: ["Maitama", "Garki", "Wuse 2", "Asokoro"],
    geo: { lat: 9.0579, lng: 7.4951 },
  },
  {
    slug: "jabi",
    name: "Jabi",
    state: "FCT",
    intro:
      "Homeowners and lakefront residential communities in Jabi rely on Zee Plumbing World for dependable doorstep service. We install submersible borehole pumps, clear difficult drain clogs, service luxury bathroom sanitary fittings, and upgrade residential water storage infrastructure.",
    landmarks: ["Jabi Lake Mall", "Jabi Lake Park", "Alex Ekwueme Way", "Nnamdi Azikiwe Expressway"],
    nearby: ["Utako", "Life Camp", "Kado", "Gwarinpa"],
    geo: { lat: 9.0712, lng: 7.4267 },
  },
  {
    slug: "utako",
    name: "Utako",
    state: "FCT",
    intro:
      "In the active commercial, transport, and residential corridors of Utako, plumbing issues demand immediate resolution. Our response vans are equipped with motorized drain snakes, acoustic leak detectors, and heat-fused PPR fittings to resolve leaks and blockages swiftly.",
    landmarks: ["Utako Market", "Chisco Transport Terminal", "Arab Contractors Junction", "Shehu Yar'adua Centre vicinity"],
    nearby: ["Jabi", "Wuse 2", "Wuse", "Jahi"],
    geo: { lat: 9.0623, lng: 7.4418 },
  },
  {
    slug: "guzape",
    name: "Guzape",
    state: "FCT",
    intro:
      "Perched on the scenic, rocky elevations of Asokoro Extension (Guzape), residential properties frequently encounter distinct water supply and elevation pressure challenges. We engineer multi-stage booster pump systems, heavy-duty pressure relief valves, and modern plumbing networks for contemporary villas.",
    landmarks: ["Guzape Hills", "Channels Television Station", "COZA Auditorium vicinity", "Asokoro Extension Road"],
    nearby: ["Asokoro", "Garki", "Apo", "Durumi"],
    geo: { lat: 9.0212, lng: 7.5145 },
  },
  {
    slug: "life-camp",
    name: "Life Camp",
    state: "FCT",
    intro:
      "Quiet residential estates and expat communities in Life Camp trust our certified plumbers for courteous, top-tier plumbing services. Whether installing instant water heaters, retrofitting kitchen waste pipes, or unblocking sewer lines, we arrive on schedule with upfront pricing.",
    landmarks: ["Julius Berger Clubhouse", "Minister's Hill", "Dape Junction", "Stella Maris College"],
    nearby: ["Jabi", "Gwarinpa", "Kado", "Katampe"],
    geo: { lat: 9.0834, lng: 7.3912 },
  },

  // Fast-growing Estates & Districts
  {
    slug: "gwarinpa",
    name: "Gwarinpa",
    state: "FCT",
    intro:
      "As West Africa's largest residential estate, Gwarinpa requires constant, dependable plumbing maintenance. We serve 1st Avenue through 7th Avenue, handling borehole pump installations, overhead water tank piping, blocked drains, burst pipes, and bathroom renovations across diverse house types.",
    landmarks: ["1st Avenue", "3rd Avenue Market", "6th Avenue Extension", "Gwarinpa General Hospital"],
    nearby: ["Life Camp", "Kado", "Dawaki", "Katampe"],
    geo: { lat: 9.1123, lng: 7.4089 },
  },
  {
    slug: "katampe",
    name: "Katampe & Extension",
    state: "FCT",
    intro:
      "Known as the geographical center of Nigeria, Katampe and Katampe Extension feature modern gated estates and bespoke architectural homes. Our plumbing engineers handle rock-formation trenching, high-pressure water supply lines, luxury sanitary ware, and automated filtration plants.",
    landmarks: ["Katampe Hill", "Aso Radio vicinity", "Diplomatic Zone Katampe Extension", "Maitama 2 Border"],
    nearby: ["Maitama", "Jahi", "Gwarinpa", "Mpape"],
    geo: { lat: 9.1023, lng: 7.4612 },
  },
  {
    slug: "jahi",
    name: "Jahi",
    state: "FCT",
    intro:
      "With rapid modern estate expansion, Jahi homeowners and facility managers depend on Zee Plumbing World for rough-in plumbing, PPR manifold installations, central water heating setups, and efficient stormwater drainage systems designed for high-density living.",
    landmarks: ["Gilmor Construction Yard", "Next Cash and Carry vicinity", "Jahi 1 & 2 Estates", "Kado Bypass"],
    nearby: ["Kado", "Katampe", "Utako", "Maitama"],
    geo: { lat: 9.0912, lng: 7.4423 },
  },
  {
    slug: "kado",
    name: "Kado",
    state: "FCT",
    intro:
      "From Kado Estate to Kado Kuchi, we deliver complete domestic plumbing solutions. We clear stubborn drain clogs, replace worn-out brass stopcocks, weld leak-free PPR connections, and install quiet automatic water level controllers for overhead and underground tanks.",
    landmarks: ["Kado Fish Market", "Kado Estate Gates", "Nnamdi Azikiwe Expressway junction", "Federal Ministry of Works Quarters"],
    nearby: ["Jabi", "Gwarinpa", "Jahi", "Life Camp"],
    geo: { lat: 9.0834, lng: 7.4212 },
  },
  {
    slug: "wuye",
    name: "Wuye",
    state: "FCT",
    intro:
      "Centrally positioned adjacent to Wuse, Wuye features modern residential apartment blocks and commercial business parks. We specialize in concealed cistern plumbing, booster pump installations, leak detection, and scheduled facility plumbing maintenance.",
    landmarks: ["Wuye Ultra-Modern Market", "Family Worship Centre", "Finance Quarters", "Wuye Flyover"],
    nearby: ["Wuse", "Utako", "Central Business District", "Garki"],
    geo: { lat: 9.0498, lng: 7.4512 },
  },
  {
    slug: "apo",
    name: "Apo & Resettlement",
    state: "FCT",
    intro:
      "Spanning Apo Legislative Quarters, Apo Resettlement, and Apo Mechanic Village, our technicians provide fast mobile support. We solve severe water hardness issues with iron filtration vessels, unblock sewer manholes, and install robust water pumping stations.",
    landmarks: ["Apo Legislative Quarters", "Apo Resettlement Zone", "Apo Roundabout", "Cedarcrest Hospital vicinity"],
    nearby: ["Gudu", "Guzape", "Lokogoma", "Garki"],
    geo: { lat: 9.0089, lng: 7.4989 },
  },
  {
    slug: "gudu",
    name: "Gudu",
    state: "FCT",
    intro:
      "Gudu district's mix of commercial outlets, residential courts, and business hubs receives professional plumbing support from Zee Plumbing World. We provide immediate pipe repair, toilet leak fixes, sewer clearing, and high-efficiency water heater maintenance.",
    landmarks: ["Gudu Market", "Gudu Electrical Parts Market", "Apo Interchange", "Prince and Princess Estate border"],
    nearby: ["Apo", "Garki", "Durumi", "Lokogoma"],
    geo: { lat: 9.0189, lng: 7.4789 },
  },
  {
    slug: "lokogoma",
    name: "Lokogoma",
    state: "FCT",
    intro:
      "With dozens of large residential estates (Peace Court, Efab, Kabusa Gardens), Lokogoma faces notable rainy season drainage and estate borehole supply challenges. We install automated sump pumps, anti-backflow sewer valves, water treatment filters, and leak-free home repiping.",
    landmarks: ["Efab Lokogoma", "Peace Court Estate", "Lokogoma Express Junction", "Kabusa Garden Estate"],
    nearby: ["Apo", "Galadimawa", "Gudu", "Lugbe"],
    geo: { lat: 8.9892, lng: 7.4612 },
  },
  {
    slug: "durumi",
    name: "Durumi",
    state: "FCT",
    intro:
      "Conveniently linked to Garki and the American International School axis, Durumi homes rely on our clean, vetted plumbers for quick faucet replacements, water pressure optimization, concealed wall repairs, and emergency water stoppage.",
    landmarks: ["American International School", "Durumi 1 & 2", "Area 1 Flyover Link", "Destiny Court"],
    nearby: ["Garki", "Gudu", "Galadimawa", "Central Business District"],
    geo: { lat: 9.0212, lng: 7.4589 },
  },
  {
    slug: "dawaki",
    name: "Dawaki",
    state: "FCT",
    intro:
      "Positioned along the Kubwa expressway beneath picturesque rocky hills, Dawaki properties require specialized borehole engineering and pressure regulation. We install submersible deep-well pumps, water storage towers, and modern bathroom and kitchen fixtures.",
    landmarks: ["Dawaki Modern Market", "News Engineering", "Dawaki Rock View", "Kubwa Expressway Link"],
    nearby: ["Gwarinpa", "Katampe", "Kubwa", "Dutse"],
    geo: { lat: 9.1312, lng: 7.3989 },
  },
  {
    slug: "galadimawa",
    name: "Galadimawa",
    state: "FCT",
    intro:
      "Serving family homes and gated residential clusters in Galadimawa. Our plumbing crew repairs broken underground supply lines, installs domestic filtration plants to eliminate water sediment, and provides prompt emergency drain unblocking.",
    landmarks: ["Galadimawa Roundabout", "African University of Science and Technology", "Sun City Estate border", "Efab City"],
    nearby: ["Lokogoma", "Durumi", "Games Village", "Lugbe"],
    geo: { lat: 8.9989, lng: 7.4389 },
  },
  {
    slug: "games-village",
    name: "Games Village",
    state: "FCT",
    intro:
      "Established residential estate living in Games Village requires prompt, non-intrusive plumbing maintenance. We specialize in acoustic leak diagnostics, shower valve replacements, hot water geyser repairs, and overhead tank cleaning and disinfection.",
    landmarks: ["Games Village Club House", "Main Security Gate", "Stadium Link Road", "National Stadium vicinity"],
    nearby: ["Galadimawa", "Durumi", "Garki", "Wuye"],
    geo: { lat: 9.0289, lng: 7.4412 },
  },

  // Satellite Towns & Major Corridors
  {
    slug: "lugbe",
    name: "Lugbe & Airport Road Corridor",
    state: "FCT",
    intro:
      "Along the bustling Airport Road corridor and across Federal Housing and Voice of Nigeria axes, Zee Plumbing World provides licensed plumbing installations, borehole pumping systems, whole-house water treatment, and emergency pipe repair for expanding residential communities.",
    landmarks: ["Havilah Plaza, FHA Lugbe (Zee Plumbing World HQ)", "Lugbe Federal Housing", "VoN Interchange", "Trademore Estate axis", "River Park Estate"],
    nearby: ["Airport Road", "Lokogoma", "Galadimawa", "Kuje"],
    geo: { lat: 8.9712, lng: 7.3712 },
  },
  {
    slug: "kubwa",
    name: "Kubwa",
    state: "FCT",
    intro:
      "As one of Abuja's most populous satellite communities, Kubwa residents trust Zee Plumbing World for affordable, expert plumbing. We repair burst supply pipes, unclog kitchen and toilet sewers, install overhead GP tanks, and replace faulty bathroom mechanisms with warranty-backed work.",
    landmarks: ["Kubwa Federal Housing", "NNPC Kubwa", "Phase 4", "Gado Nasko Way"],
    nearby: ["Dawaki", "Bwari", "Karsana", "Gwarinpa"],
    geo: { lat: 9.1589, lng: 7.3389 },
  },
  {
    slug: "karu",
    name: "Karu",
    state: "FCT",
    intro:
      "Serving residential properties and commercial establishments in Karu, FCT. We diagnose hidden pipe leaks, service overhead storage tanks, unclog stubborn main drainage lines, and upgrade aging bathroom fittings with durable, modern sanitary ware.",
    landmarks: ["Karu Site", "Karu General Hospital", "Karu Market", "Nyanya-Karu Link"],
    nearby: ["Nyanya", "Asokoro", "Jikwoyi", "Mararaba"],
    geo: { lat: 9.0089, lng: 7.5712 },
  },
  {
    slug: "nyanya",
    name: "Nyanya",
    state: "FCT",
    intro:
      "Zee Plumbing World delivers dependable doorstep plumbing services to residential estates and businesses in Nyanya. Our technicians arrive fully equipped to unblock backed-up sewers, weld replacement PPR pipes, and install automatic tank float valves.",
    landmarks: ["Nyanya Interchange", "Nyanya General Hospital", "Check Point Axis", "Area A to E"],
    nearby: ["Karu", "Asokoro", "Mararaba", "Jikwoyi"],
    geo: { lat: 8.9989, lng: 7.5889 },
  },
  {
    slug: "mpape",
    name: "Mpape",
    state: "FCT",
    intro:
      "Situated along the hills adjacent to Maitama, Mpape properties require robust plumbing infrastructure and reliable water supply engineering. We install heavy-duty borehole pumps, service booster manifolds, and repair fractured distribution pipes.",
    landmarks: ["Mpape Crushed Rock Lake", "Maitama-Mpape Hills", "Mpape Market", "Berger Quarry axis"],
    nearby: ["Maitama", "Katampe", "Bwari"],
    geo: { lat: 9.1289, lng: 7.4989 },
  },
  {
    slug: "bwari",
    name: "Bwari",
    state: "FCT",
    intro:
      "Serving educational institutions, government facilities, and residential quarters across Bwari. We manage large-scale water treatment setups, institutional pipe maintenance, overhead reservoir plumbing, and rapid emergency repairs.",
    landmarks: ["Nigerian Law School Bwari", "JAMB Headquarters", "Bwari Area Council Secretariat", "Usman Dam axis"],
    nearby: ["Kubwa", "Mpape", "Dutse"],
    geo: { lat: 9.2889, lng: 7.3789 },
  },
  {
    slug: "kuje",
    name: "Kuje",
    state: "FCT",
    intro:
      "In the growing residential and agro-commercial town of Kuje, Zee Plumbing World delivers complete water supply engineering. From deep borehole drilling pump installations and solar water pumps to domestic bathroom fittings, we ensure steady, clean water flow.",
    landmarks: ["Kuje Area Council Secretariat", "Kuje Market", "Forestry Junction", "Gwagwalada Link Road"],
    nearby: ["Airport Road", "Lugbe", "Gwagwalada"],
    geo: { lat: 8.8889, lng: 7.2312 },
  },
  {
    slug: "gwagwalada",
    name: "Gwagwalada",
    state: "FCT",
    intro:
      "Our plumbing crew provides licensed domestic, institutional, and commercial plumbing across Gwagwalada. We handle large-diameter water pipelines, hospital and university plumbing maintenance, and 24/7 emergency water restoration.",
    landmarks: ["University of Abuja", "University of Abuja Teaching Hospital", "Gwagwalada Market", "Lokoja Expressway"],
    nearby: ["Kuje", "Airport Road", "Zuba"],
    geo: { lat: 8.9489, lng: 7.0889 },
  },
  {
    slug: "karsana",
    name: "Karsana",
    state: "FCT",
    intro:
      "As one of Abuja's newest master-planned estate developments, Karsana requires modern, code-compliant plumbing execution. We install complete heat-fused PPR water supply distribution networks, central hot water loops, and elegant sanitary fittings.",
    landmarks: ["Karsana West & East Estates", "Kubwa Expressway Link", "Brainis & Hammers axis", "Gwarinpa Border"],
    nearby: ["Gwarinpa", "Kubwa", "Dawaki"],
    geo: { lat: 9.1412, lng: 7.3689 },
  },
  {
    slug: "airport-road",
    name: "Airport Road",
    state: "FCT",
    intro:
      "Along the strategic Umaru Musa Yar'Adua Expressway (Airport Road), we service gated estates, tech parks, and commercial hotels. We provide rapid dispatch for emergency leaks, commercial water pump repairs, and certified sanitary ware installations.",
    landmarks: ["Nnamdi Azikiwe International Airport axis", "Centenary City border", "Aviation Estate", "Pyakasa Junction"],
    nearby: ["Lugbe", "Kuje", "Galadimawa", "Lokogoma"],
    geo: { lat: 8.9512, lng: 7.3212 },
  },
];
