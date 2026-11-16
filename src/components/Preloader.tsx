"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "@/utils/assetPath";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1400; // Fast, smooth 1.4s intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => setIsMounted(false), 700);
        }, 200);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setIsLoading(false);
    setTimeout(() => setIsMounted(false), 400);
  };

  if (!isMounted) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020308] select-none transition-all duration-700 ease-in-out cursor-pointer ${
        isLoading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none scale-105 filter blur-xs"
      }`}
      aria-label="Loading portfolio - Click to enter"
    >
      {/* Ambient Neon Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-violet-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Subtle Scanline Beam */}
      <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />

      {/* Center Container: Minimalist Signature Reveal */}
      <div className="relative flex flex-col items-center text-center z-10 px-4">
        {/* Floating Transparent HP Logo */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 flex items-center justify-center animate-float">
          {/* Subtle Backlight Ripple */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl animate-pulse pointer-events-none" />

          {/* Clean Transparent Logo with Cyan Neon Glow */}
          <Image
            src={getAssetPath("/images/hp-logo-dark.png")}
            alt="Hit Parekh HP Logo"
            width={144}
            height={144}
            className="w-full h-full object-contain filter drop-shadow-[0_0_24px_rgba(56,189,248,0.55)]"
            priority
          />
        </div>

        {/* Minimalist Name with High-End Letter Spacing */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-[0.35em] sm:tracking-[0.45em] text-white uppercase font-heading mb-2">
          Hit Parekh
        </h1>

        {/* Precision Progress Counter */}
        <div className="flex items-center gap-3 my-3">
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-cyan-400/60" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-cyan-400">
            {progress.toString().padStart(2, "0")} %
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
        </div>

        {/* Laser Hairline Progress Bar */}
        <div className="w-48 sm:w-60 h-[2px] rounded-full bg-slate-900 overflow-hidden relative shadow-[0_0_10px_rgba(0,0,0,0.8)] mt-1">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(56,189,248,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtle Enter Prompt */}
        <p className="mt-8 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          Tap anywhere to skip
        </p>
      </div>
    </div>
  );
}
