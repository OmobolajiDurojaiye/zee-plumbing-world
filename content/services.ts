import { Service } from "./schema";

export const services: Service[] = [
  {
    slug: "leak-detection-repair",
    name: "Leak Detection & Repair",
    shortDesc: "Promptly address hidden and visible pipe leaks with non-invasive acoustic & thermal diagnostics.",
    longDesc:
      "Undetected pipe leaks can silently cause structural damage, wall dampness, and skyrocketing water bills. At Zee Plumbing World, our technicians use acoustic listening devices, moisture detectors, and pressure testing rigs to isolate pipe fractures behind walls and under concrete slabs without unnecessary demolition across Abuja.",
    icon: "droplets",
    tone: "blue",
    featured: true,
    featuredOrder: 1,
    enabled: true,
    image: "/images/services/leak-detection.jpg",
    cutout: "/images/cutouts/pipe-valve.png",
    category: "popular",
    keywords: ["leak detection", "burst pipe repair", "hidden water leak", "ceiling leak fix"],
    process: [
      {
        step: 1,
        title: "Acoustic & Pressure Test",
        text: "We trace pressure drops and utilize thermal/acoustic equipment to locate the exact leak site.",
      },
      {
        step: 2,
        title: "Targeted Access",
        text: "Clean, minimal-cut opening directly at the damaged section to preserve surrounding tiles and masonry.",
      },
      {
        step: 3,
        title: "Heavy-Duty Pipe Jointing",
        text: "Replacement with high-grade PPR, PEX, or copper fittings with pressure-rated seals.",
      },
      {
        step: 4,
        title: "Pressure Re-testing & Closure",
        text: "Full static pressure hold test to verify zero remaining leakage before job sign-off.",
      },
    ],
    faqs: [
      {
        q: "How do you detect hidden leaks without destroying walls?",
        a: "We use non-invasive acoustic sensors and thermal diagnostics that pinpoint water moisture differentials through screed and plaster.",
      },
      {
        q: "Can you fix leaking underground supply pipes?",
        a: "Yes, our team isolates and repairs external and subterranean mains lines using durable pressure-welded joints.",
      },
    ],
  },
  {
    slug: "water-heater-installation",
    name: "Water Heater & Tank Setup",
    shortDesc: "Safe, energy-efficient instant and storage water heater installations, overhead tank piping, and booster pumps.",
    longDesc:
      "Reliable hot and cold water pressure is essential for every modern home. We deliver certified installation and maintenance of electric water heaters, solar boilers, overhead GP storage tanks, automatic float switches, and quiet pressure booster pump systems in Abuja.",
    icon: "flame",
    tone: "orange",
    featured: true,
    featuredOrder: 2,
    enabled: true,
    image: "/images/services/water-heater.jpg",
    cutout: "/images/cutouts/water-heater.png",
    category: "installation",
    keywords: ["water heater installation", "storage tank plumbing", "booster pump installer", "geyser repair"],
    process: [
      {
        step: 1,
        title: "Load & Flow Sizing",
        text: "Evaluating electrical capacity, roof truss weight limits, and household water consumption.",
      },
      {
        step: 2,
        title: "Pressure Valve & Safety Mounting",
        text: "Installing expansion relief valves, non-return check valves, and reinforced wall anchors.",
      },
      {
        step: 3,
        title: "PPR & Flex Connection",
        text: "Heat-welded PPR piping to prevent heat warping and eliminate micro-fittings leaks.",
      },
      {
        step: 4,
        title: "Live Thermal Testing",
        text: "System commissioning, thermostat calibration, and full check for safe earth grounding.",
      },
    ],
    faqs: [
      {
        q: "What size water heater do I need for my family?",
        a: "Generally, 30L to 50L works for 2–3 occupants, while 80L to 100L or central multi-point units serve 4+ bedrooms.",
      },
      {
        q: "Do you supply the heater or do I buy it?",
        a: "We can procure genuine Ariston, Thermocool, or other verified brand units with manufacturer warranty, or install units you provide.",
      },
    ],
  },
  {
    slug: "pipe-repair-replacement",
    name: "Pipe Repair & Re-piping",
    shortDesc: "Complete copper, PVC, and PPR repiping, anti-corrosion upgrades, and cold/hot water manifold redesign.",
    longDesc:
      "Old, corroded galvanized iron pipes lead to rusty water, low shower pressure, and frequent bursts. Zee Plumbing World specializes in complete residential repiping using heat-fused PPR and durable PEX manifolds designed to last decades without rust or scaling.",
    icon: "wrench",
    tone: "navy",
    featured: true,
    featuredOrder: 3,
    enabled: true,
    image: "/images/services/pipe-repair.jpg",
    cutout: "/images/cutouts/faucet.png",
    category: "popular",
    keywords: ["pipe repiping", "PPR pipe welding", "low water pressure fix", "burst pipe plumbing"],
    process: [
      {
        step: 1,
        title: "Mains Inspection",
        text: "Tracing line flow, pipe degradation, and identifying pressure drop choke points.",
      },
      {
        step: 2,
        title: "Clean Isolation",
        text: "Sectional shut-off so the rest of your home maintains water service while work proceeds.",
      },
      {
        step: 3,
        title: "PPR Heat Fusion",
        text: "Precision fusion welding forming unified, permanent pipe-to-fitting joints with zero glue failure risk.",
      },
      {
        step: 4,
        title: "Flow Balancing",
        text: "Testing concurrent outlet flow to ensure balanced water volume across all bathrooms.",
      },
    ],
    faqs: [
      {
        q: "Why switch from PVC to PPR pipes?",
        a: "PPR pipes are heat-fused together rather than glued, eliminating solvent weld failures, handling hot water up to 95°C, and lasting 50+ years.",
      },
      {
        q: "Can you repipe an occupied house?",
        a: "Yes. We work room-by-room with protective dust covers and ensure running water is restored at the end of each work day.",
      },
    ],
  },
  {
    slug: "drainage-blockage-clearing",
    name: "Drainage & Blockage Clearing",
    shortDesc: "Unclog stubborn kitchen grease traps, main sewer lines, toilet backups, and storm drains using electric snake augers.",
    longDesc:
      "Slow-draining showers, gurgling toilets, and sewer foul odors disrupt everyday life. Our drainage specialists employ mechanical augers and high-pressure jet rodding to eliminate hair, grease buildup, tree roots, and foreign obstructions without caustic chemical damage.",
    icon: "waves",
    tone: "sky",
    featured: true,
    featuredOrder: 4,
    enabled: true,
    image: "/images/services/drain-cleaning.jpg",
    cutout: "/images/cutouts/plunger.png",
    category: "popular",
    keywords: ["blocked toilet", "drain unblocking", "clogged sink", "sewer line clearing", "electric snake auger"],
    process: [
      {
        step: 1,
        title: "Obstruction Diagnostics",
        text: "Locating the blockage point through manholes, inspection eyes, and drain gullies.",
      },
      {
        step: 2,
        title: "Mechanical Snaking",
        text: "Feeding high-torque rotating cables that cut through roots, grease cakes, and textile blocks.",
      },
      {
        step: 3,
        title: "High-Volume Flush",
        text: "Scouring pipe sidewalls to remove sludge residues and prevent premature re-clogging.",
      },
      {
        step: 4,
        title: "Fall & Trap Inspection",
        text: "Inspecting trap water seals to guarantee odor prevention and optimal gravitational fall.",
      },
    ],
    faqs: [
      {
        q: "Why shouldn't I use caustic chemicals from the store?",
        a: "Store acid cleaners produce severe heat that warps PVC traps, damages fixture chrome, and rarely dissolves deep main-line blockages.",
      },
      {
        q: "How fast can an emergency blockage team arrive?",
        a: "For emergency sewage backflow, we dispatch a response van with portable auger machines promptly upon call confirmation.",
      },
    ],
  },
  {
    slug: "emergency-plumbing",
    name: "24/7 Emergency Plumbing",
    shortDesc: "Rapid on-demand response for major pipe ruptures, overflowing toilets, flooding, and pump breakdowns.",
    longDesc:
      "When a water pipe bursts at 2:00 AM or a sewage line backs up on a weekend, immediate intervention is non-negotiable. Our on-call emergency plumbers carry essential replacement valves, fittings, and pumps to restore control and protect your property from catastrophic water damage.",
    icon: "siren",
    tone: "coral",
    featured: false,
    enabled: true,
    image: "/images/services/emergency-plumbing.jpg",
    cutout: "/images/cutouts/wrench.png",
    category: "emergency",
    keywords: ["emergency plumber", "24/7 plumbing service", "burst pipe emergency", "flooding repair"],
    process: [
      {
        step: 1,
        title: "Immediate Tele-guidance",
        text: "We guide you to your main stopcock valve over the phone while our emergency van departs.",
      },
      {
        step: 2,
        title: "Rapid Site Arrival",
        text: "Equipped technician arrives with standard valves, clamps, submersible pumps, and repair kits.",
      },
      {
        step: 3,
        title: "Leak Isolation & Containment",
        text: "Immediate stoppage of active flooding and isolation of the defective line.",
      },
      {
        step: 4,
        title: "Permanent Remediation",
        text: "Installation of heavy-duty replacement fittings and full testing of water pressure.",
      },
    ],
    faqs: [
      {
        q: "What should I do while waiting for the plumber?",
        a: "Immediately turn off your main water valve (stopcock) usually located near your water meter or pump shed, and turn off nearby electrical breakers if water is near sockets.",
      },
      {
        q: "Are emergency rates different?",
        a: "We provide upfront, transparent pricing before beginning any work, with clear breakdowns for late-night or holiday dispatch.",
      },
    ],
  },
  {
    slug: "bathroom-sanitary-fittings",
    name: "Bathroom & Sanitary Fittings",
    shortDesc: "Precision installation of concealed toilet cisterns, rainfall showers, vanity basins, freestanding tubs, and chrome faucets.",
    longDesc:
      "Upgrade your bathroom into a luxury sanctuary with flawless sanitary ware installation. From concealed wall-hung WC frames and thermostatic mixer valves to frameless glass shower channel drains, we guarantee water-tight seals and precise leveling.",
    icon: "bath",
    tone: "mint",
    featured: false,
    enabled: true,
    image: "/images/services/bathroom-sanitary.jpg",
    cutout: "/images/cutouts/toilet.png",
    category: "installation",
    keywords: ["bathroom installation", "wall hung toilet", "shower mixer", "faucet fitting", "sanitary ware"],
    process: [
      {
        step: 1,
        title: "Rough-In Alignment",
        text: "Positioning waste outlets, supply pipes, and concealed bracket frames to exact tile lines.",
      },
      {
        step: 2,
        title: "Waterproofing Barrier Check",
        text: "Verifying surrounding moisture barriers and shower pan slope before final fixture mounting.",
      },
      {
        step: 3,
        title: "Fixture Securement & Plumbing",
        text: "Installing ceramics, designer taps, and flex connections with high-grade silicone sealant.",
      },
      {
        step: 4,
        title: "Aesthetic & Flow Calibration",
        text: "Fine-tuning flush volume, aerators, and testing shower diverters for smooth operation.",
      },
    ],
    faqs: [
      {
        q: "Do you install concealed Geberit or Grohe frames?",
        a: "Yes, our plumbers are trained in installing in-wall cistern carriers and dual-flush actuator plates for all leading European brands.",
      },
      {
        q: "Can you replace broken toilet mechanisms?",
        a: "Yes, we replace failing siphon valves, fill valves, and flappers to end constant running water and ghost flushing.",
      },
    ],
  },
  {
    slug: "borehole-water-supply",
    name: "Borehole & Water Treatment",
    shortDesc: "Submersible borehole pump installations, automatic changeover switches, iron removal filters, and reverse osmosis plants.",
    longDesc:
      "Enjoy clean, odorless, and pure water throughout your building. We install high-yield borehole pumping systems, control panels with phase and dry-run protectors, and multi-stage media filtration vessels to remove sediment, iron, sulfur odor, and hardness.",
    icon: "gauge",
    tone: "green",
    featured: false,
    enabled: true,
    image: "/images/services/borehole-water.jpg",
    cutout: "/images/cutouts/water-filter.png",
    category: "installation",
    keywords: ["borehole pump installation", "water treatment plant", "iron removal filter", "submersible pump"],
    process: [
      {
        step: 1,
        title: "Water Quality Testing",
        text: "Assessing raw water pH, total dissolved solids (TDS), iron content, and bacterial levels.",
      },
      {
        step: 2,
        title: "Submersible Pump Sizing",
        text: "Matching pump wattage, head depth, and cable protection for optimal yield and longevity.",
      },
      {
        step: 3,
        title: "Filter Plant Setup",
        text: "Integrating sand, activated carbon, and manganese greensand filtration tanks with automated backwash heads.",
      },
      {
        step: 4,
        title: "Post-Filtration Testing",
        text: "Verifying crystal clear, odorless, and potable water delivery to household storage reservoirs.",
      },
    ],
    faqs: [
      {
        q: "How often should borehole water filter media be replaced?",
        a: "Activated carbon and filter media typically require backwashing bi-weekly and replacement every 12 to 18 months depending on water quality.",
      },
    ],
  },
  {
    slug: "commercial-estate-plumbing",
    name: "Commercial & Estate Plumbing",
    shortDesc: "Large-scale piping contracts for residential estates, hotels, shopping malls, hospitals, and industrial facilities.",
    longDesc:
      "Zee Plumbing World has the engineering capacity to manage complex mechanical plumbing drawings, industrial wastewater risers, multi-zone fire hydrants, and centralized booster stations for multi-unit developments and commercial buildings.",
    icon: "building",
    tone: "navy",
    featured: false,
    enabled: true,
    image: "/images/services/commercial-plumbing.jpg",
    cutout: "/images/cutouts/wrench.png",
    category: "popular",
    keywords: ["commercial plumber", "estate plumbing contractor", "mechanical plumbing Nigeria", "fire hydrant plumbing"],
    process: [
      {
        step: 1,
        title: "Architectural & MEP Review",
        text: "Working alongside MEP consultants to review schematics, pipe schedules, and load calculations.",
      },
      {
        step: 2,
        title: "Riser & Duct Rough-Ins",
        text: "Executing vertical soil, waste, and vent stacks with acoustic insulation and fire collars.",
      },
      {
        step: 3,
        title: "Plant Room Assembly",
        text: "Installing high-capacity booster manifolds, pressure vessels, and variable frequency drives.",
      },
      {
        step: 4,
        title: "Quality Assurance & Sign-off",
        text: "Multi-stage hydrostatic pressure testing with signed compliance certification.",
      },
    ],
    faqs: [
      {
        q: "Can you provide a formal corporate tender and BoQ?",
        a: "Yes, our engineering estimation team provides comprehensive Bills of Quantities (BoQs), milestone schedules, and compliance documents.",
      },
    ],
  },
];
