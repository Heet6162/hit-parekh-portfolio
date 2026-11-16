"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  ChevronDown,
  Sparkles,
  Terminal,
  MapPin,
  ExternalLink,
  FileText,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { getAssetPath } from "@/utils/assetPath";
import ThreeHeroVisual from "./ThreeHeroVisual";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = PERSONAL_INFO.roles;

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        if (currentText === currentRole) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(70);
        }
      } else {
        // Deleting backward
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Space: subtle grid */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      {/* Space: nebula glow orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Personal Branding */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill: Available for Opportunities */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono shadow-md mb-6"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{PERSONAL_INFO.status}</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span
                className="flex items-center gap-1 font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                <MapPin className="w-3 h-3 text-cyan-500" /> Anand, Gujarat
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-4 leading-[1.0] tracking-tight">
              <span
                className="block text-xl sm:text-2xl md:text-3xl font-semibold mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                Hi, I&apos;m
              </span>
              <span
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 bg-clip-text text-transparent drop-shadow-lg"
              >
                Hit Parekh.
              </span>
            </h1>

            {/* Subheading with Dynamic Typing */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <p
                className="text-lg sm:text-2xl font-mono font-semibold"
                style={{ color: "var(--accent-blue)" }}
              >
                <span>{currentText}</span>
                <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-500 dark:bg-cyan-400 animate-pulse align-middle" />
              </p>
            </div>

            {/* Slogan */}
            <p
              className="text-sm sm:text-base font-semibold tracking-wide uppercase font-mono mb-4 flex items-center gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500" />
              Building Digital Experiences Through Code, Creativity & Innovation
            </p>

            {/* Professional Description (Bio) */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a Full-Stack Web Developer passionate about building modern web applications,
              AI-powered platforms, interactive experiences, and scalable digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                id="hero-view-resume-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border shadow-lg transition-all duration-300 active:scale-95 hover:border-cyan-400/60 hover:scale-[1.02] cursor-pointer"
                style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                <FileText className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href={getAssetPath("/Hit_Parekh_Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-direct-resume-pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono font-medium border transition-all duration-300 active:scale-95 hover:border-violet-400/60 hover:text-cyan-500"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-muted)" }}
                title="Open PDF directly in new tab or download"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>PDF (Direct)</span>
              </a>
            </div>

            {/* Social Links & Academic Badge */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t w-full" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-xl border transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-500/10"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label="Hit Parekh GitHub"
                >
                  <GitHubIcon className="w-5 h-5 github-icon group-hover:scale-110 transition-transform" style={{ color: "var(--text-primary)" }} />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-xl border transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-500/10"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label="Hit Parekh LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group p-2.5 rounded-xl border transition-all duration-200 hover:border-violet-400/60 hover:bg-violet-500/10"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label="Email Hit Parekh"
                >
                  <Mail className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <div className="hidden sm:block h-5 w-[1px] bg-slate-700" />

              <div
                className="flex items-center gap-2 text-xs font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="px-2 py-1 rounded-md bg-violet-500/15 border border-violet-500/30 text-violet-600 dark:text-violet-300 font-semibold">
                  BCA 2024–2027
                </span>
                <span>CVM University</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">• 8.84 CGPA</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Three.js WebGL Core */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <ThreeHeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="relative mt-8 sm:mt-12 flex justify-center z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="group flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 flex justify-center p-1 transition-colors">
            <div className="w-1.5 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
