"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "@/utils/assetPath";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  FileText,
  Mail,
  RotateCcw,
  Minimize2,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from "@/data/portfolioData";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  actions?: {
    label: string;
    actionType: "resume" | "scroll" | "url" | "email";
    target: string;
  }[];
}

interface AiAssistantProps {
  onOpenResume?: () => void;
}

export default function AiAssistant({ onOpenResume }: AiAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "👋 Hi there! I'm Hit's AI Assistant. You can ask me anything about Hit Parekh's full-stack projects, technical skillset, education (BCA 8.84 CGPA), or how to get in touch!",
      timestamp: "Just now",
      actions: [
        { label: "🚀 Top Projects", actionType: "scroll", target: "projects" },
        { label: "⚡ Skill Set", actionType: "scroll", target: "skills" },
        { label: "📄 View Resume", actionType: "resume", target: "" },
        { label: "📬 Contact Hit", actionType: "scroll", target: "contact" },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, messages, isTyping]);

  // Context-aware response generator
  const generateResponse = (query: string): { text: string; actions?: Message["actions"] } => {
    const q = query.toLowerCase().trim();

    // 1. Resume / CV
    if (q.includes("resume") || q.includes("cv") || q.includes("biodata") || q.includes("download")) {
      return {
        text: "You can view Hit's complete verified Curriculum Vitae right here, or download the direct PDF file.",
        actions: [
          { label: "📄 View Interactive CV", actionType: "resume", target: "" },
          { label: "📥 Direct PDF Link", actionType: "url", target: getAssetPath("/Hit_Parekh_Resume.pdf") },
        ],
      };
    }

    // 2. Projects
    if (
      q.includes("project") ||
      q.includes("work") ||
      q.includes("portfolio") ||
      q.includes("watch hub") ||
      q.includes("mental health") ||
      q.includes("space flight")
    ) {
      return {
        text: "Hit has built 5+ standout software projects spanning e-commerce, AI mentors, cyber threat intelligence, and 3D WebGL experiences:\n\n• **Premium Watch Hub**: Full-stack luxury horology platform (Next.js, FastAPI, MySQL, role-based auth).\n• **Gemini AI Mental Health Platform**: Context-aware conversational AI with weighted scoring.\n• **Cyber Threat Intelligence Dashboard**: Security metric visualization and mock CVE tracker.\n• **3D WebGL Space Flight Experience**: Interactive browser simulation using Three.js.\n• **FastCampus Academic Portal**: Student portal with attendance tracking & session auth.",
        actions: [
          { label: "Explore Projects Section", actionType: "scroll", target: "projects" },
          { label: "Visit GitHub", actionType: "url", target: PERSONAL_INFO.github },
        ],
      };
    }

    // 3. Technical Skills
    if (
      q.includes("skill") ||
      q.includes("language") ||
      q.includes("framework") ||
      q.includes("python") ||
      q.includes("react") ||
      q.includes("fastapi") ||
      q.includes("next") ||
      q.includes("stack") ||
      q.includes("technolog")
    ) {
      return {
        text: "Hit's core technical stack covers 38+ technologies across full-stack & AI engineering:\n\n• **Languages**: JavaScript, TypeScript, Python, PHP, C, C++, Java, SQL\n• **Frontend**: React, Next.js, Tailwind CSS, Three.js, HTML5, CSS3\n• **Backend**: FastAPI, PHP, RESTful APIs, Google Gemini API, JWT, Session Auth\n• **Databases**: MySQL, PostgreSQL, MongoDB, SQLAlchemy\n• **Dev Tools**: Git, GitHub, Docker, VS Code, Postman",
        actions: [
          { label: "View Technical Skills Section", actionType: "scroll", target: "skills" },
        ],
      };
    }

    // 4. Education & CGPA
    if (
      q.includes("education") ||
      q.includes("college") ||
      q.includes("university") ||
      q.includes("cgpa") ||
      q.includes("grade") ||
      q.includes("degree") ||
      q.includes("bca") ||
      q.includes("study")
    ) {
      return {
        text: "Hit is an academic scholar pursuing his **Bachelor of Computer Applications (BCA)** at **CVM University** (2024–2027) with an outstanding **8.84 CGPA (Distinction)**. He also achieved **83.4% in HSC** (Gujarat Secondary & Higher Secondary Education Board).",
        actions: [
          { label: "View Education Timeline", actionType: "scroll", target: "education" },
        ],
      };
    }

    // 5. Certifications
    if (q.includes("certif") || q.includes("award") || q.includes("course") || q.includes("achievement")) {
      return {
        text: "Hit holds verified credentials including:\n\n• **Prompt Engineering for Generative AI** (Google Cloud & DeepLearning.AI)\n• **Cybersecurity Fundamentals** (Cisco Networking Academy)\n• **Data Structures & Algorithms in Python**\n• **Relational Database Design & SQL**",
        actions: [
          { label: "View Certifications Gallery", actionType: "scroll", target: "certifications" },
        ],
      };
    }

    // 6. Contact, Hire, Availability
    if (
      q.includes("contact") ||
      q.includes("hire") ||
      q.includes("email") ||
      q.includes("phone") ||
      q.includes("job") ||
      q.includes("availab") ||
      q.includes("call") ||
      q.includes("reach") ||
      q.includes("location")
    ) {
      return {
        text: "Hit is **actively available for hire** for software engineering, full-stack web developer, and AI integration opportunities.\n\n• **Email**: hitparekh888@gmail.com\n• **Phone**: +91 97262 90288\n• **Location**: Anand, Gujarat, India\n• **Profiles**: LinkedIn & GitHub",
        actions: [
          { label: "Go to Contact Form", actionType: "scroll", target: "contact" },
          { label: "Send Direct Email", actionType: "email", target: "hitparekh888@gmail.com" },
        ],
      };
    }

    // 7. About Hit / Who is Hit
    if (q.includes("who is") || q.includes("about") || q.includes("hit") || q.includes("bio")) {
      return {
        text: "Hit Parekh is a passionate Full-Stack Web Developer and AI enthusiast from Anand, Gujarat. He specializes in architecting clean, secure web applications, integrating Gemini LLMs, and building interactive 3D WebGL experiences.",
        actions: [
          { label: "Read Developer Bio", actionType: "scroll", target: "about" },
        ],
      };
    }

    // Default Fallback
    return {
      text: "I can help you explore Hit's portfolio! Feel free to ask about his **projects**, **skills**, **education (CGPA 8.84)**, **certifications**, or how to **hire / contact** him.",
      actions: [
        { label: "Explore Projects", actionType: "scroll", target: "projects" },
        { label: "View Skills", actionType: "scroll", target: "skills" },
        { label: "Contact Hit", actionType: "scroll", target: "contact" },
      ],
    };
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = inputMessage.trim();
    if (!text) return;

    // Append user message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking and typing response
    setTimeout(() => {
      const response = generateResponse(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actions: response.actions,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: NonNullable<Message["actions"]>[number]) => {
    if (action.actionType === "resume") {
      onOpenResume?.();
    } else if (action.actionType === "scroll") {
      const el = document.getElementById(action.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (action.actionType === "url") {
      window.open(action.target, "_blank", "noopener,noreferrer");
    } else if (action.actionType === "email") {
      window.location.href = `mailto:${action.target}`;
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "ai",
        text: "Chat cleared! How can I assist you with Hit Parekh's portfolio today?",
        timestamp: "Just now",
        actions: [
          { label: "🚀 Projects", actionType: "scroll", target: "projects" },
          { label: "⚡ Skills", actionType: "scroll", target: "skills" },
          { label: "📄 Resume", actionType: "resume", target: "" },
        ],
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 hover:from-cyan-400 hover:via-sky-400 hover:to-violet-500 text-white shadow-xl shadow-cyan-500/30 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Open Hit's AI Assistant"
          >
            {/* Pulsing indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>

            <Bot className="w-5 h-5 text-white animate-bounce [animation-duration:2.5s]" />
            <span className="text-xs font-semibold tracking-wide font-sans hidden sm:inline">
              Hit&apos;s AI Assistant
            </span>
          </button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          className="fixed bottom-5 right-3 sm:right-6 w-[92vw] sm:w-[410px] h-[540px] max-h-[85vh] z-50 rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-200"
          style={{
            backgroundColor: "var(--glass-bg)",
            borderColor: "var(--border)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3.5 border-b flex items-center justify-between shrink-0"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-cyan-400/40 shrink-0 bg-[#000a2e]">
                <Image
                  src={getAssetPath("/images/hp-logo-dark.png")}
                  alt="Hit's AI"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-slate-900" />
              </div>
              <div>
                <h4 className="text-xs font-bold flex items-center gap-1.5" style={{ color: "var(--text-primary)" }}>
                  <span>Hit&apos;s AI Assistant</span>
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </h4>
                <p className="text-[10px] font-mono text-emerald-500 font-medium">
                  ● Online • Knowledge Base Ready
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                className="p-1.5 rounded-lg hover:bg-slate-500/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Reset Chat"
                aria-label="Reset Chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-500/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Minimize Chat"
                aria-label="Minimize Chat"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => {
              const isAi = msg.sender === "ai";

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAi ? "items-start" : "items-end"}`}
                >
                  <div className="flex items-start gap-2 max-w-[88%]">
                    {isAi && (
                      <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                    )}

                    <div
                      className={`p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                        isAi
                          ? "rounded-tl-sm border"
                          : "rounded-tr-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/10"
                      }`}
                      style={
                        isAi
                          ? {
                              backgroundColor: "var(--bg-card)",
                              borderColor: "var(--border)",
                              color: "var(--text-primary)",
                            }
                          : {}
                      }
                    >
                      {msg.text}

                      {/* Action buttons embedded in message */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-slate-500/20 flex flex-wrap gap-1.5">
                          {msg.actions.map((act) => (
                            <button
                              key={act.label}
                              type="button"
                              onClick={() => handleActionClick(act)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-600 dark:text-cyan-300 border border-cyan-400/30 transition-all cursor-pointer"
                            >
                              <span>{act.label}</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="text-[9px] font-mono mt-1 px-1 text-slate-500 dark:text-slate-400">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div
                  className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm border flex items-center gap-1.5"
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div
            className="px-3 py-2 border-t flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0"
            style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)" }}
          >
            {[
              "Show projects",
              "Technical skills",
              "Education & CGPA",
              "View resume",
              "Contact details",
            ].map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => {
                  setInputMessage(prompt);
                  setTimeout(() => {
                    const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
                    inputMessage; // trigger
                  }, 50);
                }}
                className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium border border-slate-300 dark:border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 border-t flex items-center gap-2 shrink-0"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything about Hit..."
              className="flex-1 px-3.5 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
              style={{
                backgroundColor: "var(--input-bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
              aria-label="Ask Hit's AI Assistant"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
