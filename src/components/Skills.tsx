"use client";

import { useState, useMemo } from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  ShieldCheck,
  HeartHandshake,
  Search,
  Sparkles,
  CheckCircle2,
  X,
  Layers,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tabList = [
    "All",
    "Programming Languages",
    "Frontend Development",
    "Backend Development",
    "Database Technologies",
    "Developer Tools",
    "Core Concepts",
    "Personal Strengths",
  ];

  // Map category to icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
      case "Frontend Development":
        return <Layout className="w-4 h-4 text-violet-500 dark:text-violet-400" />;
      case "Backend Development":
        return <Server className="w-4 h-4 text-blue-500 dark:text-blue-400" />;
      case "Database Technologies":
        return <Database className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
      case "Developer Tools":
        return <Wrench className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
      case "Core Concepts":
        return <ShieldCheck className="w-4 h-4 text-rose-500 dark:text-rose-400" />;
      case "Personal Strengths":
        return <HeartHandshake className="w-4 h-4 text-teal-500 dark:text-teal-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
    }
  };

  // Precomputed skill counts for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SKILL_CATEGORIES.forEach((cat) => {
      counts[cat.title] = cat.skills.length;
    });
    return counts;
  }, []);

  const totalSkillsCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  const getTabCount = (tab: string) => {
    if (tab === "All") return totalSkillsCount;
    return categoryCounts[tab] || 0;
  };

  // Handle Tab Switch: Clears search and isolates selected category
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  // Filtered categories: ONLY selected category when not "All", or all when "All"
  const displayedCategories = useMemo(() => {
    const isSearching = searchQuery.trim().length > 0;
    const q = searchQuery.toLowerCase().trim();

    // If searching, search across all categories; otherwise filter strictly by activeTab
    const baseList = isSearching
      ? SKILL_CATEGORIES
      : activeTab === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter(
          (cat) => cat.title.toLowerCase() === activeTab.toLowerCase()
        );

    return baseList
      .map((cat) => {
        const matchingSkills = cat.skills.filter((skill) => {
          if (!isSearching) return true;
          return (
            skill.name.toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
          );
        });

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [activeTab, searchQuery]);

  const totalDisplayedSkills = useMemo(() => {
    return displayedCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [displayedCategories]);

  return (
    <section
      id="skills"
      className="relative py-14 sm:py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Compact Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Technical <span className="text-gradient-cyan">Skill Set</span>
          </h2>
          <p
            className="mt-2 text-xs sm:text-sm max-w-xl font-light"
            style={{ color: "var(--text-muted)" }}
          >
            Verified toolkit spanning systems programming, frameworks, databases, and AI engineering.
          </p>
        </div>

        {/* Category Filter Tabs: Never squish, wrap cleanly on all screens */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-5">
          {tabList.map((tab) => {
            const isActive = activeTab === tab && !searchQuery.trim();
            const count = getTabCount(tab);

            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabClick(tab)}
                className={`shrink-0 whitespace-nowrap px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 select-none ${
                  isActive
                    ? "btn-primary shadow-md shadow-cyan-500/25 ring-2 ring-cyan-400/40"
                    : "border hover:border-cyan-400/50 hover:bg-slate-500/5"
                }`}
                style={
                  isActive
                    ? { color: "#ffffff" }
                    : {
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }
                }
                aria-pressed={isActive}
              >
                <span>{tab}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono transition-colors ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-slate-500/10 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact Search Bar & Results Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 max-w-2xl mx-auto">
          <div className="relative w-full">
            <Search
              className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--text-muted)" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies (e.g. React, Python, Docker)..."
              className="w-full pl-9 pr-9 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all shadow-sm"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
              aria-label="Filter technologies"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-xs hover:opacity-100 opacity-60 transition-opacity cursor-pointer"
                style={{ color: "var(--text-muted)" }}
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div
            className="shrink-0 flex items-center gap-1.5 text-[11px] font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            <Layers className="w-3 h-3 text-cyan-500" />
            <span>
              <strong style={{ color: "var(--text-primary)" }}>{totalDisplayedSkills}</strong> of {totalSkillsCount}
            </span>
          </div>
        </div>

        {/* Compact Skills Area: ONLY Selected Skills, No Descriptions, Small Area */}
        <div className="space-y-6">
          {displayedCategories.map((category) => (
            <div key={category.title} className="text-left">
              {/* Category Mini Header (shown when 'All' is active or multiple categories) */}
              {activeTab === "All" && (
                <div
                  className="flex items-center gap-2 mb-3 pb-1.5 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  {getCategoryIcon(category.title)}
                  <h3
                    className="text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {category.title}
                  </h3>
                  <span
                    className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-md border"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {category.skills.length}
                  </span>
                </div>
              )}

              {/* Compact Skills Grid: 2 cols on mobile, 3 on sm, 4 on md, 5 on lg */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={`${category.title}-${skill.name}`}
                    className="group flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border transition-all duration-200 shadow-sm hover:shadow-md hover:border-cyan-400/60 hover:-translate-y-0.5 cursor-default select-none"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 group-hover:scale-125 transition-transform" />
                      <span
                        className="text-xs sm:text-sm font-semibold truncate transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 opacity-70 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {displayedCategories.length === 0 && (
          <div
            className="p-8 rounded-2xl text-center border border-dashed max-w-sm mx-auto my-6"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <Search className="w-6 h-6 mx-auto mb-2 text-slate-400" />
            <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
              No technologies found
            </h3>
            <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
              No matches for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("All");
              }}
              className="btn-primary px-4 py-2 rounded-xl text-xs font-semibold shadow-md cursor-pointer"
              style={{ color: "#ffffff" }}
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
