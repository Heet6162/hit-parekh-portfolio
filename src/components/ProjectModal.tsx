"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Database,
  Cpu,
  Shield,
  Sparkles,
  Info,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-scale">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-accent)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* Header Bar */}
        <div
          className="px-6 py-4 border-b flex items-center justify-between shrink-0"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-400/30">
              {project.category}
            </span>
            <span className="text-xs font-mono hidden sm:inline" style={{ color: "var(--text-muted)" }}>
              Hit Parekh Portfolio
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl transition-colors hover:bg-slate-500/15"
            style={{ color: "var(--text-primary)" }}
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Mockup Preview Banner */}
          <div
            className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border shadow-lg"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-medium font-mono" style={{ color: "var(--accent-blue)" }}>
              {project.tagline}
            </p>
          </div>

          {/* Overview Narrative */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              Project Narrative & Purpose
            </h4>
            <p className="text-sm leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>
              {project.longDescription}
            </p>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <Cpu className="w-3.5 h-3.5 text-violet-500" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border"
                  style={{
                    backgroundColor: "var(--tag-bg)",
                    color: "var(--tag-text)",
                    borderColor: "var(--tag-border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Checklist */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Core Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 p-3 rounded-xl border"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              Technical Architecture
            </h4>
            <div className="space-y-3">
              {project.architecture.frontend && (
                <div
                  className="p-3.5 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <Layers className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-semibold" style={{ color: "var(--text-primary)" }}>
                      Frontend Layer:{" "}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {project.architecture.frontend}
                    </span>
                  </div>
                </div>
              )}
              {project.architecture.backend && (
                <div
                  className="p-3.5 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <Cpu className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-semibold" style={{ color: "var(--text-primary)" }}>
                      Backend Layer:{" "}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {project.architecture.backend}
                    </span>
                  </div>
                </div>
              )}
              {project.architecture.database && (
                <div
                  className="p-3.5 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <Database className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-semibold" style={{ color: "var(--text-primary)" }}>
                      Database Schema:{" "}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {project.architecture.database}
                    </span>
                  </div>
                </div>
              )}
              {project.architecture.aiOrGraphics && (
                <div
                  className="p-3.5 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-semibold" style={{ color: "var(--text-primary)" }}>
                      AI / Graphics Engine:{" "}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {project.architecture.aiOrGraphics}
                    </span>
                  </div>
                </div>
              )}
              {project.architecture.security && (
                <div
                  className="p-3.5 rounded-xl border flex items-start gap-3"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <Shield className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-semibold" style={{ color: "var(--text-primary)" }}>
                      Security & Auth:{" "}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {project.architecture.security}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div
          className="px-6 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <Info className="w-4 h-4 text-cyan-500" />
            <span>Connected to Hit Parekh&apos;s verified GitHub repository</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all hover:border-cyan-400/50"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <GitHubIcon className="w-4 h-4" style={{ fill: "var(--text-primary)" }} />
              <span>GitHub Repo</span>
            </a>

            <a
              href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-cyan-500/20 active:scale-95"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff" }}>
                {project.liveUrl !== "#" ? "Launch Live App" : "View on GitHub"}
              </span>
              <ExternalLink className="w-4 h-4" style={{ color: "#ffffff" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
