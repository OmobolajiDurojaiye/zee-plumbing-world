"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, HardHat, Wrench, Building2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryFilter = "all" | "construction" | "sanitary" | "piping";

interface ProjectItem {
  id: string;
  title: string;
  category: "construction" | "sanitary" | "piping";
  categoryLabel: string;
  location: string;
  image: string;
  scope: string;
}

const projects: ProjectItem[] = [
  // Construction & Civil / Rough-In Plumbing
  {
    id: "c1",
    title: "Civil Foundation & Sub-Slab Drainage Conduit Installation",
    category: "construction",
    categoryLabel: "Civil & Structural Plumbing",
    location: "Lugbe, Abuja",
    image: "/images/constructions/1.jpeg",
    scope: "Heavy-duty PVC waste conduits with gradient laser leveling before concrete screed.",
  },
  {
    id: "c4",
    title: "Commercial Multi-Story Rough-In & Waste Piping Layout",
    category: "construction",
    categoryLabel: "Commercial Rough-In",
    location: "Central Business District, Abuja",
    image: "/images/constructions/4.jpeg",
    scope: "Vertical soil stack risers, vent looping, and acoustic vibration-isolated clamps.",
  },
  {
    id: "c5",
    title: "High-Pressure Supply Header & Main Building Risers",
    category: "construction",
    categoryLabel: "Structural Distribution",
    location: "Maitama, Abuja",
    image: "/images/constructions/5.jpeg",
    scope: "High-density pressure manifold connections built for commercial domestic capacity.",
  },
  {
    id: "c6",
    title: "Core Wall Penetration & Structural Conduit Routing",
    category: "construction",
    categoryLabel: "Civil & Structural Plumbing",
    location: "Asokoro, Abuja",
    image: "/images/constructions/6.jpeg",
    scope: "Precision diamond-drilled sleeved penetrations with fire-rated seals and expansion joints.",
  },
  {
    id: "c8",
    title: "Suspended Slab Pipe Hanging & Industrial Bracket Rigging",
    category: "construction",
    categoryLabel: "Structural Distribution",
    location: "Guzape, Abuja",
    image: "/images/constructions/8.jpeg",
    scope: "Galvanized drop-rod support systems for uninterrupted gravity-assisted wastewater flow.",
  },
  {
    id: "c9",
    title: "External Sewer Inspection Chamber & Gully Connections",
    category: "construction",
    categoryLabel: "Civil & Structural Plumbing",
    location: "Gwarinpa, Abuja",
    image: "/images/constructions/9.jpeg",
    scope: "Direct inspection chamber pipe tying, fall alignment, and anti-rodent trap valves.",
  },
  {
    id: "c14",
    title: "Commercial Waste Discharge System & Breather Stacks",
    category: "construction",
    categoryLabel: "Commercial Rough-In",
    location: "Wuse 2, Abuja",
    image: "/images/constructions/14.jpeg",
    scope: "Integrated drainage infrastructure designed for heavy residential usage without odors.",
  },
  {
    id: "c15",
    title: "Multi-Zone Cold Water Riser & Sump Return Piping",
    category: "construction",
    categoryLabel: "Civil & Structural Plumbing",
    location: "Jabi, Abuja",
    image: "/images/constructions/15.jpeg",
    scope: "Dual-circuit pump loops with isolated quarter-turn brass gate valves per apartment.",
  },

  // Finished Residential & Sanitary Installations
  {
    id: "j2",
    title: "Concealed Wall-Hung Toilet Frame & Sanitary Drainage Setup",
    category: "sanitary",
    categoryLabel: "Sanitary Installation",
    location: "Diplomatic Zone, Abuja",
    image: "/images/jobs/2.jpeg",
    scope: "Dual-flush concealed carrier frame mounting with anti-siphon backflow protection.",
  },
  {
    id: "j3",
    title: "Luxury Thermostatic Shower Diverter & Rough-In Enclosure",
    category: "sanitary",
    categoryLabel: "Sanitary Installation",
    location: "Katampe Extension, Abuja",
    image: "/images/jobs/3.jpeg",
    scope: "Multi-way concealed brass diverter rough-in with leak-tested silicone compression joints.",
  },
  {
    id: "j5",
    title: "Floating Vanity & Chrome Bottle Trap Sanitary Fitting",
    category: "sanitary",
    categoryLabel: "Sanitary Installation",
    location: "Utako, Abuja",
    image: "/images/jobs/5.jpeg",
    scope: "Flawless designer countertop basin waste connection with clean P-trap drainage.",
  },
  {
    id: "j7",
    title: "Dual Basin Kitchen Drain Lines & Anti-Grease Plumbing",
    category: "sanitary",
    categoryLabel: "Sanitary Installation",
    location: "Life Camp, Abuja",
    image: "/images/jobs/7.jpeg",
    scope: "Heat-resistant flexible waste manifolds with dedicated air-admittance valves.",
  },
  {
    id: "j17",
    title: "Complete Master Bathroom Sanitary Ware Final Alignment",
    category: "sanitary",
    categoryLabel: "Sanitary Installation",
    location: "Maitama, Abuja",
    image: "/images/jobs/17.jpeg",
    scope: "Luxury freestanding tub filler and rainfall shower installation with zero tile chipping.",
  },

  // Water Distribution, Piping & Manifold Infrastructure
  {
    id: "j1",
    title: "Heat-Fused PPR Domestic Water Distribution Network",
    category: "piping",
    categoryLabel: "Piping & Manifolds",
    location: "Lugbe, Abuja",
    image: "/images/jobs/1.jpeg",
    scope: "Electro-fusion welded PPR piping rated to 25 bar static pressure for lifetime zero-leak peace of mind.",
  },
  {
    id: "j4",
    title: "Overhead Storage Tank Header & Automatic Booster Assembly",
    category: "piping",
    categoryLabel: "Piping & Manifolds",
    location: "Apo, Abuja",
    image: "/images/jobs/4.jpeg",
    scope: "Twin booster pump system with silent check valves and automatic low-water cutoff floats.",
  },
  {
    id: "j8",
    title: "Automated Pressure Booster Pump Header & Bypass Assembly",
    category: "piping",
    categoryLabel: "Piping & Manifolds",
    location: "Wuse 2, Abuja",
    image: "/images/jobs/8.jpeg",
    scope: "Pressure-gauge regulated water manifold with bypass loops for uninterrupted gravity backup.",
  },
  {
    id: "j13",
    title: "Multi-Point Equal-Pressure Distribution Manifold",
    category: "piping",
    categoryLabel: "Piping & Manifolds",
    location: "Lokogoma, Abuja",
    image: "/images/jobs/13.jpeg",
    scope: "Custom copper and brass manifold balancing water volume equally across all apartment floors.",
  },
];

const categoryTabs: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All Completed Works", icon: <CheckCircle2 className="w-4 h-4" /> },
  { id: "construction", label: "Construction & Rough-In", icon: <HardHat className="w-4 h-4" /> },
  { id: "piping", label: "PPR Piping & Water Manifolds", icon: <Wrench className="w-4 h-4" /> },
  { id: "sanitary", label: "Sanitary & Bathroom Ware", icon: <Building2 className="w-4 h-4" /> },
];

export function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {categoryTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none shadow-2xs",
                isActive
                  ? "bg-[#056960] text-white shadow-sm scale-[1.02]"
                  : "bg-mist hover:bg-black/5 text-ink border border-black/5"
              )}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={cn(
                  "ml-1 text-[11px] px-2 py-0.5 rounded-full font-bold",
                  isActive ? "bg-white/20 text-white" : "bg-black/5 text-muted"
                )}
              >
                {tab.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === tab.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-white rounded-[24px] overflow-hidden border border-black/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist/60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#056960] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                {project.categoryLabel}
              </div>
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-ink text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-2xs">
                <MapPin className="w-3 h-3 text-[#056960]" />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-ink leading-snug group-hover:text-[#056960] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {project.scope}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#056960]">
                <span>Verified Zee Site Execution</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
