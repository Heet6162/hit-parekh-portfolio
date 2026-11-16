"use client";

import {
  Layout,
  Sparkles,
  Database,
  Cuboid,
  Palette,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { WHAT_I_DO } from "@/data/portfolioData";

export default function WhatIDo() {
  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-6 h-6 text-cyan-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-violet-400" />,
    Database: <Database className="w-6 h-6 text-blue-400" />,
    Cuboid: <Cuboid className="w-6 h-6 text-amber-400" />,
    Palette: <Palette className="w-6 h-6 text-emerald-400" />,
    Code2: <Code2 className="w-6 h-6 text-rose-400" />,
  };

  const glowStyles = [
    "group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10",
    "group-hover:border-violet-500/50 group-hover:shadow-violet-500/10",
    "group-hover:border-blue-500/50 group-hover:shadow-blue-500/10",
    "group-hover:border-amber-500/50 group-hover:shadow-amber-500/10",
    "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10",
    "group-hover:border-rose-500/50 group-hover:shadow-rose-500/10",
  ];

  const iconBgStyles = [
    "bg-cyan-500/10 border-cyan-400/20",
    "bg-violet-500/10 border-violet-400/20",
    "bg-blue-500/10 border-blue-400/20",
    "bg-amber-500/10 border-amber-400/20",
    "bg-emerald-500/10 border-emerald-400/20",
    "bg-rose-500/10 border-rose-400/20",
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What I <span className="text-gradient-accent">Bring to the Table</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-light">
            Combining rigorous software engineering fundamentals with modern full-stack frameworks,
            intelligent AI integrations, and high-fidelity interactive user experiences.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHAT_I_DO.map((item, idx) => (
            <div
              key={item.id}
              className={`group glass-panel rounded-2xl p-7 border border-white/[0.08] transition-all duration-300 glass-card-hover flex flex-col justify-between shadow-xl ${glowStyles[idx]}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${iconBgStyles[idx]} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-900/90 text-slate-300 border border-white/[0.08] group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
