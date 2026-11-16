"use client";

import Image from "next/image";
import {
  GraduationCap,
  Award,
  Code,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const stats = PERSONAL_INFO.stats;

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-500 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>Developer Overview</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            A Little <span className="text-gradient-cyan">About Me</span>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl font-light"
            style={{ color: "var(--text-muted)" }}
          >
            Dedicated BCA scholar & full-stack developer committed to crafting elegant digital systems,
            modern AI integrations, and high-performance interactive software.
          </p>
        </div>

        {/* 4 Major Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const icons = [
              <Code key="0" className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
              <GraduationCap key="1" className="w-6 h-6 text-violet-500 dark:text-violet-400" />,
              <Award key="2" className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
              <Calendar key="3" className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
            ];

            const borderGlows = [
              "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
              "hover:border-violet-500/50 hover:shadow-violet-500/10",
              "hover:border-blue-500/50 hover:shadow-blue-500/10",
              "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
            ];

            return (
              <div
                key={stat.label}
                className={`p-6 rounded-2xl border transition-all duration-300 shadow-md ${borderGlows[idx]}`}
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-2.5 rounded-xl border"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {icons[idx]}
                  </div>
                  <span
                    className="text-[11px] font-mono uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Metric 0{idx + 1}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xl font-bold text-cyan-500 dark:text-cyan-400">{stat.suffix}</span>
                </div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stat.label}
                </h3>
                <p
                  className="text-xs leading-relaxed font-light"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content Layout: Photo/Terminal & Detailed Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Developer Portrait & Terminal Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Developer Portrait with Glowing Frame */}
            <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-sky-400/20 to-violet-500/40 shadow-2xl shadow-cyan-500/10">
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[4/5] w-full max-w-md mx-auto">
                <Image
                  src="/images/myphoto.jpeg"
                  alt="Hit Parekh — Full-Stack Web Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Overlay Badge */}
                <div
                  className="photo-badge absolute bottom-4 left-4 right-4 p-3.5 rounded-xl border flex items-center justify-between backdrop-blur-md shadow-lg"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div>
                    <h4 className="text-sm font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                      Hit Parekh
                    </h4>
                    <p className="text-xs font-mono font-medium" style={{ color: "var(--accent-blue)" }}>
                      BCA @ CVM University
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                    >
                      CGPA: 8.84
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Widget */}
            <div
              className="terminal-code rounded-2xl border overflow-hidden shadow-2xl text-left"
              style={{
                backgroundColor: "#0d1117",
                borderColor: "rgba(255, 255, 255, 0.12)",
              }}
            >
              {/* Terminal Window Bar */}
              <div
                className="px-4 py-2.5 border-b flex items-center justify-between"
                style={{
                  backgroundColor: "#161b22",
                  borderColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono ml-2 font-medium" style={{ color: "#94a3b8" }}>
                    hit_profile.sh
                  </span>
                </div>
                <Terminal className="w-3.5 h-3.5" style={{ color: "#64748b" }} />
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono text-xs space-y-2.5 leading-relaxed" style={{ backgroundColor: "#0d1117" }}>
                <div>
                  <span style={{ color: "#38bdf8", fontWeight: 700 }}>$</span>{" "}
                  <span style={{ color: "#e2e8f0" }}>cat ~/developer_profile.json</span>
                </div>
                <div className="pl-1">
                  <span style={{ color: "#34d399", fontWeight: 700 }}>&#123;</span>
                  <div className="pl-4 space-y-1.5 my-1.5">
                    <div>
                      <span style={{ color: "#93c5fd", fontWeight: 600 }}>&quot;name&quot;</span>
                      <span style={{ color: "#94a3b8" }}>: </span>
                      <span style={{ color: "#fcd34d" }}>&quot;Hit Parekh&quot;</span>
                      <span style={{ color: "#94a3b8" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#93c5fd", fontWeight: 600 }}>&quot;role&quot;</span>
                      <span style={{ color: "#94a3b8" }}>: </span>
                      <span style={{ color: "#fcd34d" }}>&quot;Full-Stack Web Developer&quot;</span>
                      <span style={{ color: "#94a3b8" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#93c5fd", fontWeight: 600 }}>&quot;location&quot;</span>
                      <span style={{ color: "#94a3b8" }}>: </span>
                      <span style={{ color: "#fcd34d" }}>&quot;Anand, Gujarat, India&quot;</span>
                      <span style={{ color: "#94a3b8" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#93c5fd", fontWeight: 600 }}>&quot;academics&quot;</span>
                      <span style={{ color: "#94a3b8" }}>: </span>
                      <span style={{ color: "#fcd34d" }}>&quot;BCA (2024–2027) | CGPA 8.84&quot;</span>
                      <span style={{ color: "#94a3b8" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#93c5fd", fontWeight: 600 }}>&quot;focus&quot;</span>
                      <span style={{ color: "#94a3b8" }}>: </span>
                      <span style={{ color: "#67e8f9" }}>&quot;Modern Web, AI Agents, 3D WebGL&quot;</span>
                    </div>
                  </div>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>&#125;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Strengths */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Meta Tags Chips */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-50 dark:bg-cyan-500/15 border border-sky-300 dark:border-cyan-400/30 text-sky-800 dark:text-cyan-300 text-xs font-mono font-semibold shadow-sm">
                <GraduationCap className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                <span>CVM University</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-violet-50 dark:bg-violet-500/15 border border-violet-300 dark:border-violet-400/30 text-violet-800 dark:text-violet-300 text-xs font-mono font-semibold shadow-sm">
                <Award className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>CGPA: 8.84</span>
              </div>
              <div
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border text-xs font-mono font-semibold shadow-sm"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Anand, Gujarat, India</span>
              </div>
            </div>

            {/* Bio Narrative */}
            <div
              className="space-y-4 text-base sm:text-lg leading-relaxed font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>{PERSONAL_INFO.bio[0]}</p>
              <p>{PERSONAL_INFO.bio[1]}</p>
              <p style={{ color: "var(--text-primary)" }} className="font-normal">
                {PERSONAL_INFO.bio[2]}
              </p>
            </div>

            {/* Technical Interests */}
            <div className="w-full pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <h4 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <Zap className="w-3.5 h-3.5" />
                <span>Key Technical Focus Areas</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Web Development",
                  "AI & Google Gemini Integration",
                  "Relational Database Design",
                  "Interactive 3D WebGL",
                  "FastAPI & Next.js Architecture",
                  "Role-Based Access Control",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors hover:border-cyan-400/50"
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      color: "var(--tag-text)",
                      borderColor: "var(--tag-border)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Personal Strengths */}
            <div className="w-full pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <h4 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2 text-violet-600 dark:text-violet-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Engineering Strengths</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {[
                  {
                    title: "Problem Solving",
                    desc: "Decomposing complex requirements into clean modular solutions",
                  },
                  {
                    title: "Attention to Detail",
                    desc: "Pixel-perfect UI alignment, error boundaries & strict validation",
                  },
                  {
                    title: "Quick Learner",
                    desc: "Rapidly mastering new frameworks, APIs, and modern toolchains",
                  },
                  {
                    title: "Adaptability",
                    desc: "Comfortable navigating frontend, backend, databases, and 3D graphics",
                  },
                ].map((strength) => (
                  <div
                    key={strength.title}
                    className="p-3.5 rounded-xl border flex items-start gap-2.5 shadow-sm"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                        {strength.title}
                      </p>
                      <p className="text-[11px] leading-snug" style={{ color: "var(--text-muted)" }}>
                        {strength.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
