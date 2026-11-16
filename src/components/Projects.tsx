"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-500 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>Featured Engineering Work</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl font-light"
            style={{ color: "var(--text-muted)" }}
          >
            Real-world full-stack web applications, interactive 3D WebGL experiences, and AI-powered
            platforms built with clean architectures and production-level rigor.
          </p>
        </div>

        {/* Detailed Project Cards */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="group rounded-3xl border transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:border-cyan-400/50"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
                  {/* Mockup Image Column */}
                  <div
                    className={`lg:col-span-6 relative cursor-pointer ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden border transition-all shadow-md aspect-[16/10]"
                      style={{
                        backgroundColor: "var(--bg-surface)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        priority={idx < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                      {/* Expand Overlay Pill */}
                      <div
                        className="absolute top-3 right-3 px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 shadow-md backdrop-blur-md"
                        style={{
                          backgroundColor: "var(--bg-surface)",
                          borderColor: "var(--border-accent)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                        <span>Inspect</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Information Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between text-left ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      {/* Project Index & Category */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-bold">
                          0{idx + 1}
                        </span>
                        <span className="w-4 h-[1px]" style={{ backgroundColor: "var(--border)" }} />
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 transition-colors cursor-pointer group-hover:text-cyan-500 dark:group-hover:text-cyan-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p
                        className="text-xs sm:text-sm font-medium mb-4 font-mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {project.tagline}
                      </p>

                      {/* Core Description */}
                      <p
                        className="text-sm leading-relaxed font-light mb-6"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {project.description}
                      </p>

                      {/* Key Features Preview */}
                      <div className="space-y-2 mb-6">
                        {project.keyFeatures.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                            <span
                              className="text-xs leading-snug"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono border"
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

                    {/* Action Buttons */}
                    <div
                      className="flex flex-wrap items-center gap-3 pt-4 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-cyan-500/20 active:scale-95"
                        style={{ color: "#ffffff" }}
                      >
                        <span style={{ color: "#ffffff" }}>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#ffffff" }} />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all active:scale-95 hover:border-cyan-400/50"
                        style={{
                          backgroundColor: "var(--bg-surface)",
                          borderColor: "var(--border)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <GitHubIcon className="w-3.5 h-3.5" style={{ fill: "var(--text-primary)" }} />
                        <span>GitHub Repo</span>
                      </a>

                      <a
                        href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono ml-auto transition-colors hover:underline"
                        style={{ color: "var(--accent-blue)" }}
                      >
                        <span>{project.liveUrl !== "#" ? "Live Demo" : "Repository"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
