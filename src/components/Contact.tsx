"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Basic frontend checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your name (minimum 2 characters).");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      setErrorMessage("Please provide a subject for your message.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters long.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccessMessage(
        `Thank you, ${formData.name}! Your message has been sent directly to Hit Parekh. You'll also receive a confirmation email shortly.`
      );
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#8b5cf6", "#06b6d4", "#a855f7"],
      });
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-500 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>Initiate Contact</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s Build Something <span className="text-gradient-cyan">Amazing Together.</span>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl font-light"
            style={{ color: "var(--text-muted)" }}
          >
            Have an idea, project, or opportunity? I&apos;d love to connect, exchange ideas, and
            explore how we can create something meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards & Social Links */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div
              className="glass-panel p-8 rounded-3xl shadow-2xl"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Contact Details
              </h3>
              <p className="text-xs font-light mb-8" style={{ color: "var(--text-muted)" }}>
                Feel free to reach out directly via email, phone, or professional networks.
              </p>

              {/* Direct Info List */}
              <div className="space-y-5">
                {/* Email Item */}
                <div
                  className="p-4 rounded-2xl flex items-center justify-between gap-3 group transition-colors"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono uppercase" style={{ color: "var(--text-muted)" }}>Email Address</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold truncate block transition-colors hover:text-cyan-500"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg transition-colors shrink-0 hover:bg-slate-500/10"
                    style={{ color: "var(--text-muted)" }}
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div
                  className="p-4 rounded-2xl flex items-center justify-between gap-3 group transition-colors"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center text-violet-500 dark:text-violet-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono uppercase" style={{ color: "var(--text-muted)" }}>Phone & WhatsApp</p>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                        className="text-xs sm:text-sm font-semibold truncate block transition-colors hover:text-violet-500"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {PERSONAL_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg transition-colors shrink-0 hover:bg-slate-500/10"
                    style={{ color: "var(--text-muted)" }}
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div
                  className="p-4 rounded-2xl flex items-center gap-3.5"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-400/30 flex items-center justify-center text-rose-500 dark:text-rose-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase" style={{ color: "var(--text-muted)" }}>Primary Location</p>
                    <p className="text-xs sm:text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles Links */}
              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  Online Presence
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-semibold transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <LinkedInIcon className="w-4 h-4 text-cyan-500" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-semibold transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <GitHubIcon className="w-4 h-4 github-icon" style={{ color: "var(--text-primary)" }} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div
              className="glass-panel p-8 sm:p-10 rounded-3xl shadow-2xl text-left"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Send a Direct Message
              </h3>
              <p className="text-xs font-light mb-8" style={{ color: "var(--text-muted)" }}>
                Submitting this form redirects straight into your email client pre-addressed to Hit Parekh ({PERSONAL_INFO.email}).
              </p>

              {/* Feedback Alerts */}
              {successMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-3 text-emerald-600 dark:text-emerald-200 text-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-700 dark:text-emerald-300">Message Sent! 🎉</p>
                    <p className="mt-1 leading-relaxed">{successMessage}</p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-start gap-3 text-rose-600 dark:text-rose-200 text-xs">
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-rose-700 dark:text-rose-300">Submission Notice</p>
                    <p className="mt-1 leading-relaxed">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium uppercase tracking-wider mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Full Name <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      style={{
                        backgroundColor: "var(--input-bg)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium uppercase tracking-wider mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Email Address <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      style={{
                        backgroundColor: "var(--input-bg)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Subject <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project Collaboration / Internship Inquiry"
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    style={{
                      backgroundColor: "var(--input-bg)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Message <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team opportunity, or discussion topic..."
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    style={{
                      backgroundColor: "var(--input-bg)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 active:scale-95"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      formData.subject || "Portfolio Contact"
                    )}&body=${encodeURIComponent(
                      formData.name ? `From: ${formData.name}\n\n${formData.message}` : formData.message || ""
                    )}`}
                    title={`Direct mail to ${PERSONAL_INFO.email}`}
                    aria-label={`Direct mail to ${PERSONAL_INFO.email}`}
                    className="relative group p-3.5 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:border-cyan-400/60 hover:shadow-cyan-500/20"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                    {/* Floating Tooltip */}
                    <span
                      className="absolute -top-10 right-0 sm:left-1/2 sm:-translate-x-1/2 px-3 py-1 rounded-lg text-[11px] font-mono font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl border z-30"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Direct Mail: {PERSONAL_INFO.email}
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
