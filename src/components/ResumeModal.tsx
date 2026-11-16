"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  CheckCircle2,
  FileText,
  ExternalLink,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Hit_Parekh_Resume.pdf";
    link.download = "Hit_Parekh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0c1222] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Modal Action Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-slate-200">
              Curriculum Vitae • Hit Parekh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-medium border border-white/10 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              id="download-resume-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all active:scale-95"
              title="Download PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div ref={resumeRef} className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0a0f1d] text-left">
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-lg shrink-0 bg-slate-900">
                <Image
                  src="/images/myphoto.jpeg"
                  alt="Hit Parekh"
                  fill
                  sizes="100px"
                  className="object-cover object-[center_12%]"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono mt-1">
                  {PERSONAL_INFO.title}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-2.5 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" /> {PERSONAL_INFO.location}
                  </span>
                  <span className="text-slate-600">•</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-1 hover:text-cyan-300 text-slate-300"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.email}
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-1 hover:text-violet-300 text-slate-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-violet-400" /> {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300 flex items-center gap-1.5"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <GitHubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-white">
                  {PERSONAL_INFO.education.degree}
                </h4>
                <p className="text-xs text-slate-300">
                  {PERSONAL_INFO.education.university} — Anand, Gujarat, India
                </p>
              </div>
              <div className="sm:text-right">
                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
                <p className="text-[11px] font-mono text-slate-400 mt-1">
                  {PERSONAL_INFO.education.duration}
                </p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Featured Technical Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                    <span className="text-[11px] font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.slice(0, 6).map((cat) => (
                <div key={cat.title} className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
                  <p className="font-semibold text-slate-200 font-mono text-[11px] mb-1">
                    {cat.title}:
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Verified Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-2.5 rounded-lg bg-slate-900/50 border border-white/5 flex items-center justify-between gap-2"
                >
                  <div>
                    <p className="font-semibold text-white">{cert.title}</p>
                    <p className="text-[11px] text-slate-400">{cert.issuer}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
