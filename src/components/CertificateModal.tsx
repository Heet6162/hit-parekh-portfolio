"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ShieldCheck,
  Calendar,
  Building,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  FileText,
  BadgeCheck,
  Maximize2,
} from "lucide-react";
import { Certification } from "@/data/portfolioData";

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-scale">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-accent)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 35px -10px rgba(56, 189, 248, 0.25)",
        }}
      >
        {/* Top Header Bar */}
        <div
          className="px-6 py-4 border-b flex items-center justify-between shrink-0"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span
                className="text-xs font-mono font-semibold uppercase tracking-wider block"
                style={{ color: "var(--text-primary)" }}
              >
                Verified Certificate
              </span>
              <span className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>
                {cert.issuer}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl transition-colors hover:bg-slate-500/15"
            style={{ color: "var(--text-primary)" }}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Certificate Image Frame */}
          <div
            className="relative rounded-2xl overflow-hidden border p-2 group transition-all"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="relative w-full rounded-xl overflow-hidden bg-slate-950/40 flex items-center justify-center border border-black/10 dark:border-white/10 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>

            {/* Top-Right Action Button: Full Screen / Open Image */}
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all shadow-lg hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-primary)",
                border: "1.5px solid var(--accent-blue)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
              }}
              title="Open full size certificate image in new tab"
            >
              <Maximize2 className="w-3.5 h-3.5" style={{ color: "var(--accent-blue)" }} />
              <span>Full Screen</span>
            </a>
          </div>

          {/* Certificate Meta Details */}
          <div className="space-y-4 text-left">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-400/30">
                  {cert.category}
                </span>
                {cert.credentialId && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-400/30 flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5" /> ID: {cert.credentialId}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                {cert.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono mt-2" style={{ color: "var(--text-muted)" }}>
                <span className="flex items-center gap-1.5 font-semibold" style={{ color: "var(--accent-blue)" }}>
                  <Building className="w-3.5 h-3.5" /> {cert.issuer}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {cert.date}
                </span>
              </div>
            </div>

            {/* Summary description */}
            <p className="text-xs sm:text-sm leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>
              {cert.summary}
            </p>

            {/* Validated Skills */}
            <div className="pt-3 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="text-[11px] font-mono uppercase tracking-wider mb-2.5 flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent-blue)" }} />
                Validated Skills & Competencies:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono border"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div
          className="px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs shrink-0"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Open Certificate Image button - Distinct and high contrast in light & dark mode */}
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm hover:scale-[1.02] active:scale-95"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                border: "1.5px solid var(--border-accent)",
              }}
            >
              <FileText className="w-4 h-4" style={{ color: "var(--accent-blue)" }} />
              <span>Open Certificate Image</span>
            </a>

            {/* Verify Credential online link */}
            {cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                style={{ color: "#ffffff" }}
              >
                <ExternalLink className="w-3.5 h-3.5" style={{ color: "#ffffff" }} />
                <span style={{ color: "#ffffff" }}>Verify Online</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold transition-all hover:opacity-80 active:scale-95"
            style={{
              backgroundColor: "var(--bg-primary)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
