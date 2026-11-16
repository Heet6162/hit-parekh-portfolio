"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { getAssetPath } from "@/utils/assetPath";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMailClick = (e: React.MouseEvent) => {
    // Open Gmail web composer directly in a new tab so it works seamlessly on all browsers
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="relative border-t pt-16 pb-28 sm:pb-32 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
        color: "var(--text-muted)",
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: "var(--border)" }}>
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
                {/* Dark mode logo */}
                <Image
                  src={getAssetPath("/images/hp-logo-dark.png")}
                  alt="Hit Parekh HP Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain dark:block hidden filter drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                />
                {/* Light mode logo */}
                <Image
                  src={getAssetPath("/images/hp-logo-light.png")}
                  alt="Hit Parekh HP Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain dark:hidden block"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base" style={{ color: "var(--text-primary)" }}>
                  Hit Parekh
                </span>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  Full-Stack Web Developer • AI Enthusiast
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed font-light max-w-md" style={{ color: "var(--text-secondary)" }}>
              Building modern web applications, AI-powered platforms, and interactive digital
              experiences with clean code, robust architectures, and creative problem solving.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Anand, Gujarat, India</span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">BCA (CGPA 8.84)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 text-left">
            <p className="text-xs font-mono uppercase tracking-widest mb-4 font-semibold" style={{ color: "var(--text-primary)" }}>
              Explore Portfolio
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors py-1 block hover:text-cyan-500 dark:hover:text-cyan-300"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles & Direct Contacts */}
          <div className="md:col-span-3 text-left space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest mb-2 font-semibold" style={{ color: "var(--text-primary)" }}>
              Connect Directly
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" style={{ fill: "var(--text-primary)" }} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4 text-cyan-500" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={handleMailClick}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border transition-all hover:border-violet-400/50 hover:bg-violet-500/10 cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-violet-500 dark:text-violet-400" />
              </a>
            </div>

            <div className="text-xs font-mono space-y-1.5" style={{ color: "var(--text-muted)" }}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={handleMailClick}
                className="block transition-colors hover:text-cyan-400 cursor-pointer truncate"
                style={{ color: "var(--text-secondary)" }}
                title="Email Hit Parekh"
              >
                {PERSONAL_INFO.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="block transition-colors hover:text-cyan-400 cursor-pointer"
                title="Call Hit Parekh"
              >
                {PERSONAL_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          <p className="text-center sm:text-left">
            &copy; {currentYear} Hit Parekh. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 font-medium">
            <span>Designed & Developed by Hit Parekh.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs transition-colors hover:text-cyan-500"
            style={{ color: "var(--text-muted)" }}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
