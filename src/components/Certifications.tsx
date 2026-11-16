"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  Calendar,
  Eye,
  ExternalLink,
} from "lucide-react";
import { CERTIFICATIONS, Certification } from "@/data/portfolioData";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI & LLMs"];

  const filteredCertifications =
    activeCategory === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === activeCategory);

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Background radial gradient & grid */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-500 dark:text-violet-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
            <span>Verified Credentials</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Certifications & <span className="text-gradient-purple">Achievements</span>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl font-light"
            style={{ color: "var(--text-muted)" }}
          >
            Continuous professional learning in artificial intelligence architectures, agentic coding,
            foundational LLM engineering, and real-world AI applications.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 font-semibold"
                    : "border hover:border-violet-400/40"
                }`}
                style={
                  !isActive
                    ? {
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                      }
                    : {}
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl border transition-all duration-300 glass-card-hover flex flex-col justify-between shadow-xl overflow-hidden"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Certificate Image Thumbnail Preview */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative w-full aspect-[16/10] bg-slate-950/40 border-b cursor-pointer overflow-hidden"
                style={{ borderColor: "var(--border)" }}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-violet-600/90 text-white shadow-lg shadow-violet-500/30">
                    <Eye className="w-3.5 h-3.5" /> Click to Inspect
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Header with Issuer Pill & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-violet-500/15 text-violet-500 dark:text-violet-300 border border-violet-400/25 truncate max-w-[200px]">
                      {cert.issuer}
                    </span>
                    <span
                      className="text-[11px] font-mono flex items-center gap-1 shrink-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Calendar className="w-3 h-3" /> {cert.date}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3
                    className="text-base sm:text-lg font-bold group-hover:text-violet-400 transition-colors mb-2 line-clamp-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.title}
                  </h3>

                  {/* Summary */}
                  <p
                    className="text-xs leading-relaxed font-light mb-4 line-clamp-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {cert.summary}
                  </p>
                </div>

                <div>
                  {/* Validated Skills Tags */}
                  <div
                    className="flex flex-wrap gap-1.5 pt-3 border-t mb-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border"
                        style={{
                          backgroundColor: "var(--bg-surface)",
                          borderColor: "var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-mono border"
                        style={{
                          backgroundColor: "var(--bg-surface)",
                          borderColor: "var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all active:scale-95 hover:border-violet-400/60 hover:bg-violet-500/10"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <Eye className="w-3.5 h-3.5 text-violet-400" />
                    <span>View Certificate Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
