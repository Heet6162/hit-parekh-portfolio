"use client";

import {
  GraduationCap,
  Award,
  Calendar,
  Building,
  CheckCircle2,
  BookOpen,
  MapPin,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Education() {
  const edu = PERSONAL_INFO.education;

  return (
    <section id="education" className="relative py-24 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Academic Journey</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl font-light">
            Formal foundation in computer science principles, software architecture, data modeling,
            and contemporary web technologies.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="relative">
          {/* Timeline Node Line */}
          <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent" />

          <div className="relative sm:pl-20">
            {/* Timeline Icon Node */}
            <div className="hidden sm:flex absolute left-4 top-8 -translate-x-1/2 w-10 h-10 rounded-2xl bg-[#0a0f1d] border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 items-center justify-center text-cyan-400 z-10">
              <GraduationCap className="w-5 h-5" />
            </div>

            {/* Main Card */}
            <div className="glass-panel p-7 sm:p-10 rounded-3xl border hover:border-cyan-400/40 transition-all duration-300 shadow-2xl" style={{ borderColor: "var(--border)" }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/15 text-cyan-500 border border-cyan-400/30">
                      Undergraduate Degree
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-500 border border-emerald-400/30">
                      Active Scholar
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm mt-2 font-medium">
                    <span className="flex items-center gap-1.5 text-cyan-500">
                      <Building className="w-4 h-4" />
                      {edu.university}
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>•</span>
                    <span className="flex items-center gap-1 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      Anand, Gujarat, India
                    </span>
                  </div>
                </div>

                {/* CGPA Distinction Highlight */}
                <div className="flex-shrink-0 p-5 rounded-2xl border flex flex-col items-center sm:items-end gap-1 text-center sm:text-right"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-accent)",
                    boxShadow: "0 0 24px -8px rgba(56,189,248,0.2)",
                  }}>
                  <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    Current CGPA
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-heading">
                      {edu.cgpa}
                    </span>
                    <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>/ 10</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 font-semibold">
                    <Award className="w-3.5 h-3.5" /> High Distinction
                  </span>
                  <span className="text-xs font-mono flex items-center gap-1 mt-1" style={{ color: "var(--text-muted)" }}>
                    <Calendar className="w-3 h-3 text-cyan-400" /> {edu.duration}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Academic Excellence & Highlights
                </h4>
                <div className="space-y-2.5">
                  {edu.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm font-light" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Coursework Badges */}
              <div className="pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <h4 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                  <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                  Key Computer Applications Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium border hover:border-cyan-400/40 transition-colors"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        color: "var(--text-secondary)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
