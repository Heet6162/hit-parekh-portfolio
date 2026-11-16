"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "@/utils/assetPath";
import { Sparkles } from "lucide-react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setIsMounted(false), 800);
          }, 300);
          return 100;
        }
        // Random incremental speed for realistic loading feel
        const diff = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + diff, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#02020a] transition-all duration-700 ease-in-out ${
        isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none scale-105"
      }`}
      aria-hidden={!isLoading}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center text-center px-4 z-10">
        {/* Animated Glowing Logo Frame */}
        <div className="relative mb-6">
          {/* Cyber spinning rings */}
          <div className="absolute -inset-3 rounded-3xl border border-cyan-500/30 animate-pulse pointer-events-none" />
          <div className="absolute -inset-6 rounded-full border border-dashed border-violet-500/20 animate-spin pointer-events-none [animation-duration:12s]" />

          {/* Logo container */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/20 bg-[#000a2e]">
            <Image
              src={getAssetPath("/images/hp-logo-dark.png")}
              alt="Hit Parekh HP Logo"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Corner accent lights */}
          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#38bdf8]" />
          <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-violet-400 rounded-full shadow-[0_0_10px_#a855f7]" />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-widest text-white uppercase font-heading mb-1.5 flex items-center gap-2">
          <span>Hit Parekh</span>
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
        </h1>

        {/* Cyber Subtitle */}
        <p className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase mb-6">
          Full-Stack &amp; AI Systems // Initializing...
        </p>

        {/* Sleek Progress Bar */}
        <div className="w-56 sm:w-64 h-1.5 rounded-full bg-slate-900 border border-white/10 overflow-hidden relative mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 transition-all duration-150 ease-out rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numeric Progress */}
        <div className="flex items-center justify-between w-56 sm:w-64 text-[11px] font-mono text-slate-400">
          <span className="text-cyan-400">STATUS: READY</span>
          <span className="font-bold text-white tracking-wider">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
