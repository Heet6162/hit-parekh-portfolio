"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${className}`}
      style={{
        background: theme === "dark"
          ? "rgba(56, 189, 248, 0.1)"
          : "rgba(14, 165, 233, 0.12)",
        border: `1px solid ${theme === "dark" ? "rgba(56, 189, 248, 0.25)" : "rgba(14, 165, 233, 0.35)"}`,
      }}
    >
      {/* Glow ring on hover */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: theme === "dark"
            ? "0 0 20px rgba(56, 189, 248, 0.4)"
            : "0 0 20px rgba(251, 191, 36, 0.4)",
        }}
      />

      {/* Icon transition */}
      <span className="relative z-10 transition-all duration-300">
        {theme === "dark" ? (
          <Sun
            className="w-4.5 h-4.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45"
            style={{ color: "#fbbf24", width: 18, height: 18 }}
          />
        ) : (
          <Moon
            className="w-4.5 h-4.5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
            style={{ color: "#60a5fa", width: 18, height: 18 }}
          />
        )}
      </span>
    </button>
  );
}
