"use client";

import { useState } from "react";
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery("");

    if (tab === "All") {
      const skillsEl = document.getElementById("skills");
      if (skillsEl) {
        const offset = 80;
        const y = skillsEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      const slug = tab.toLowerCase().replace(/[^a-z0-9]/g, "-");
      const el = document.getElementById(`skill-cat-${slug}`);
      if (el) {
        const offset = 100;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  // Filtered categories based on search
  const displayedCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
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
  }).filter((cat) => cat.skills.length > 0);

  const totalDisplayedSkills = displayedCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 sticky top-20 z-20 py-3 backdrop-blur-md rounded-2xl px-2">
          {/* Tab buttons */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
            {tabList.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm ${
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
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--text-muted)" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Python, React)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all shadow-sm"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs hover:opacity-100 opacity-60"
                style={{ color: "var(--text-muted)" }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Results Summary */}
        <div
          className="mb-8 flex items-center justify-between text-xs font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          <span>
            Displaying{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              {totalDisplayedSkills}
            </strong>{" "}
            skills across all disciplines
          </span>
          {searchQuery && (
            <span>
              Search match for &ldquo;
              <span className="text-cyan-600 dark:text-cyan-300 font-semibold">{searchQuery}</span>
              &rdquo;
            </span>
          )}
        </div>

        {/* Grouped Skills Display — Full, Proper Cards for All Categories */}
        <div className="space-y-14">
          {displayedCategories.map((category) => {
            const slug = category.title.toLowerCase().replace(/[^a-z0-9]/g, "-");
            const isHighlighted = activeTab === category.title;

            return (
              <div
                key={category.title}
                id={`skill-cat-${slug}`}
                className={`text-left scroll-mt-28 transition-all duration-300 ${
                  isHighlighted
                    ? "p-4 sm:p-6 rounded-3xl border border-cyan-400/50 dark:border-cyan-400/40 shadow-xl shadow-cyan-500/5 ring-1 ring-cyan-400/30"
                    : "p-0"
                }`}
                style={
                  isHighlighted
                    ? { backgroundColor: "var(--bg-card)" }
                    : {}
                }
              >
                {/* Always-Visible Category Header with Full Details */}
                <div
                  className="flex items-center gap-3 mb-5 pb-3 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="p-2.5 rounded-xl border shadow-sm"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: isHighlighted ? "var(--border-accent)" : "var(--border)",
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

                {/* Standard Full-Size Responsive Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={`${category.title}-${skill.name}`}
                      className="group rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-cyan-400/50 hover:scale-[1.01]"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <span
                            className="text-sm font-bold transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {skill.name}
                          </span>
                          <div
                            className="w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 shadow-sm"
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
            className="p-12 rounded-3xl text-center border border-dashed max-w-md mx-auto my-12"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <Search className="w-8 h-8 mx-auto mb-3 text-slate-400" />
            <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
              No technologies found
            </h3>
            <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
              No skills match &ldquo;{searchQuery}&rdquo;. Try searching for general terms like &ldquo;API&rdquo;, &ldquo;React&rdquo;, or &ldquo;Database&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("All");
              }}
              className="btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md"
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
