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
        return <Code2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
      case "Frontend Development":
        return <Layout className="w-5 h-5 text-violet-500 dark:text-violet-400" />;
      case "Backend Development":
        return <Server className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case "Database Technologies":
        return <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case "Developer Tools":
        return <Wrench className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case "Core Concepts":
        return <ShieldCheck className="w-5 h-5 text-rose-500 dark:text-rose-400" />;
      case "Personal Strengths":
        return <HeartHandshake className="w-5 h-5 text-teal-500 dark:text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
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

  // Handle Tab Switch
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  // Filtered categories based on activeTab and searchQuery
  const displayedCategories = useMemo(() => {
    const isSearching = searchQuery.trim().length > 0;
    const q = searchQuery.toLowerCase().trim();

    // If searching, search across all categories or current tab
    const baseList = isSearching
      ? SKILL_CATEGORIES
      : activeTab === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title.toLowerCase() === activeTab.toLowerCase());

    return baseList
      .map((cat) => {
        const matchingSkills = cat.skills.filter((skill) => {
          if (!isSearching) return true;
          return (
            skill.name.toLowerCase().includes(q) ||
            skill.description.toLowerCase().includes(q) ||
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
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Technical <span className="text-gradient-cyan">Skill Set</span>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl font-light"
            style={{ color: "var(--text-muted)" }}
          >
            A comprehensive, verified toolkit spanning systems programming, modern web frameworks,
            relational databases, AI frameworks, and engineering best practices.
          </p>
        </div>

        {/* Filter Controls: Tabs & Search Bar */}
        <div
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 mb-8 md:sticky md:top-20 z-20 py-3 backdrop-blur-md rounded-2xl px-1 sm:px-2 border border-slate-200/50 dark:border-white/5"
          style={{ backgroundColor: "var(--glass-bg)" }}
        >
          {/* Responsive Horizontal Tab Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none w-full md:w-auto -mx-1 px-1 sm:mx-0 sm:px-0">
            {tabList.map((tab) => {
              const isActive = activeTab === tab && !searchQuery.trim();
              const count = getTabCount(tab);

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabClick(tab)}
                  className={`shrink-0 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
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

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--text-muted)" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. React, Python)..."
              className="w-full pl-10 pr-9 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all shadow-sm"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
              aria-label="Search skills"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-xs hover:opacity-100 opacity-60 transition-opacity"
                style={{ color: "var(--text-muted)" }}
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Results Summary */}
        <div
          className="mb-8 flex flex-wrap items-center justify-between gap-2 text-xs font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-cyan-500" />
            <span>
              Showing{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                {totalDisplayedSkills}
              </strong>{" "}
              of {totalSkillsCount} skills
              {activeTab !== "All" && !searchQuery.trim() && (
                <span> in <strong style={{ color: "var(--accent-blue)" }}>{activeTab}</strong></span>
              )}
            </span>
          </div>

          {searchQuery.trim() && (
            <div className="flex items-center gap-2">
              <span>
                Search match for &ldquo;
                <span className="text-cyan-600 dark:text-cyan-300 font-semibold">{searchQuery}</span>
                &rdquo;
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="underline text-[11px] text-cyan-600 dark:text-cyan-400 hover:opacity-80"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Grouped Skills Display — Full Responsive Cards */}
        <div className="space-y-12 sm:space-y-14">
          {displayedCategories.map((category) => {
            const slug = category.title.toLowerCase().replace(/[^a-z0-9]/g, "-");

            return (
              <div
                key={category.title}
                id={`skill-cat-${slug}`}
                className="text-left scroll-mt-28 transition-all duration-300"
              >
                {/* Category Header with Icon & Count */}
                <div
                  className="flex items-center gap-3 mb-6 pb-3 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="p-2.5 rounded-xl border shadow-sm"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-accent)",
                    }}
                  >
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {category.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-light"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {category.description}
                    </p>
                  </div>
                  <span
                    className="ml-auto text-xs font-mono px-3 py-1 rounded-lg border hidden sm:inline shadow-sm"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Responsive Skills Grid: 1 col on mobile, 2 on sm, 3 on lg, 4 on xl */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={`${category.title}-${skill.name}`}
                      className="group rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-cyan-400/50 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className="text-sm font-bold transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {skill.name}
                          </span>
                          <div
                            className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg border flex items-center justify-center shrink-0 shadow-sm"
                            style={{
                              backgroundColor: "var(--bg-surface)",
                              borderColor: "var(--border)",
                            }}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          </div>
                        </div>
                        <p
                          className="text-xs leading-relaxed font-light mb-3"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {skill.description}
                        </p>
                      </div>

                      <div
                        className="pt-2.5 border-t flex items-center justify-between"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <span
                          className="text-[10px] font-mono uppercase tracking-wider"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {category.title}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {displayedCategories.length === 0 && (
          <div
            className="p-10 sm:p-14 rounded-3xl text-center border border-dashed max-w-md mx-auto my-12"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <Search className="w-8 h-8 mx-auto mb-3 text-slate-400" />
            <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
              No technologies found
            </h3>
            <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>
              No skills match &ldquo;{searchQuery}&rdquo;. Try searching for general terms like &ldquo;React&rdquo;, &ldquo;FastAPI&rdquo;, &ldquo;SQL&rdquo;, or &ldquo;Database&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("All");
              }}
              className="btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md cursor-pointer"
              style={{ color: "#ffffff" }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
