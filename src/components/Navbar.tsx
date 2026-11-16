"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  FileText,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll listener for background blur and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
          isScrolled ? "py-3 shadow-md" : "py-4.5"
        }`}
        style={{
          backgroundColor: isScrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
          borderColor: isScrolled ? "var(--nav-border)" : "transparent",
          boxShadow: isScrolled ? "var(--shadow-nav)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: Custom HP Monogram */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Hit Parekh Home"
            >
              <div
                className="relative flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 shadow-md group-hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-accent)",
                }}
              >
                <span className="font-heading font-extrabold text-base tracking-tighter bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                  HP
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#05070f] animate-pulse" />
              </div>
              <div className="flex flex-col text-left">
                <span
                  className="font-heading font-bold text-sm tracking-tight transition-colors group-hover:text-cyan-500"
                  style={{ color: "var(--text-primary)" }}
                >
                  Hit Parekh
                </span>
                <span
                  className="text-[11px] font-mono tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Developer • AI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border shadow-sm backdrop-blur-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs rounded-full transition-all duration-200 cursor-pointer font-medium ${
                      isActive
                        ? "shadow-sm font-semibold"
                        : "hover:bg-slate-500/10"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: "var(--nav-active-bg)",
                            color: "var(--nav-active-text)",
                            border: "1px solid var(--nav-active-border)",
                            boxShadow: "0 2px 8px rgba(2, 132, 199, 0.25)",
                          }
                        : { color: "var(--text-secondary)" }
                    }
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons: Theme Toggle + Mobile Hamburger */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl border transition-colors focus:outline-none"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-full border-l shadow-2xl p-6 pt-24 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border)",
          }}
        >
          <div className="space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-widest px-3 mb-2" style={{ color: "var(--text-muted)" }}>
              Navigation
            </p>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "shadow-sm font-semibold"
                      : "hover:bg-slate-500/10"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: "var(--nav-active-bg)",
                          color: "var(--nav-active-text)",
                          border: "1px solid var(--nav-active-border)",
                        }
                      : { color: "var(--text-primary)" }
                  }
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t space-y-3" style={{ borderColor: "var(--border)" }}>
            <a
              href="/Hit_Parekh_Resume.pdf"
              download="Hit_Parekh_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm shadow-lg shadow-cyan-500/20"
              style={{ color: "#ffffff" }}
            >
              <FileText className="w-4 h-4" style={{ color: "#ffffff" }} />
              <span style={{ color: "#ffffff" }}>Download Resume</span>
            </a>

            <div
              className="px-3 py-2 rounded-lg border flex items-center gap-2"
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                borderColor: "rgba(16, 185, 129, 0.25)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                Available for Hire
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
