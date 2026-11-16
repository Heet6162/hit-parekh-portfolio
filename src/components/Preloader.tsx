"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "@/utils/assetPath";
import { Sparkles, Terminal, Cpu, ShieldCheck } from "lucide-react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("INITIALIZING NEURAL CORE...");
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Dynamic status text sync with loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 12) + 6, 100);

        if (next < 25) {
          setStatusMessage("LOADING CORE ASSETS & STYLES...");
        } else if (next < 50) {
          setStatusMessage("INITIALIZING THREE.JS 3D ENGINE...");
        } else if (next < 75) {
          setStatusMessage("CALIBRATING HIT'S AI ASSISTANT...");
        } else if (next < 95) {
          setStatusMessage("COMPILING FULL-STACK CAPABILITIES...");
        } else {
          setStatusMessage("SYSTEM 100% OPERATIONAL • WELCOME");
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setIsMounted(false), 800);
          }, 350);
          return 100;
        }

        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setProgress(100);
    setStatusMessage("ACCESS GRANTED");
    setIsLoading(false);
    setTimeout(() => setIsMounted(false), 500);
  };

  if (!isMounted) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between py-12 sm:py-16 px-6 bg-[#01030b] select-none transition-all duration-700 ease-out cursor-pointer ${
        isLoading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none scale-105 filter blur-xs"
      }`}
      aria-label="Loading Screen - Click to skip"
    >
      {/* Background Cyber Ambient Atmosphere */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-violet-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header: System Spec Bar */}
      <div className="relative w-full max-w-xl flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-400 font-bold tracking-wider">HP.PORTFOLIO // V2.0</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Cpu className="w-3.5 h-3.5 text-violet-400" />
          <span>REACT 19 • NEXT.JS 16</span>
        </div>
      </div>

      {/* Centerpiece: Glowing Holographic HP Reactor */}
      <div className="relative flex flex-col items-center justify-center my-auto z-10">
        {/* Animated Cyber Hologram Rings */}
        <div className="relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 mb-8">
          {/* Outermost rotating tick ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-spin [animation-duration:20s] pointer-events-none" />

          {/* Middle counter-rotating ring */}
          <div className="absolute inset-3 rounded-full border border-violet-500/30 animate-spin [animation-direction:reverse] [animation-duration:14s] pointer-events-none" />

          {/* Glowing pulse aura */}
          <div className="absolute inset-6 rounded-full bg-cyan-500/15 blur-xl animate-pulse pointer-events-none" />

          {/* Inner glass bezel for official HP logo */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_35px_rgba(56,189,248,0.35)] bg-[#000a2e] flex items-center justify-center transition-transform hover:scale-105">
            <Image
              src={getAssetPath("/images/hp-logo-dark.png")}
              alt="Hit Parekh Official Logo"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Orbiting Satellite Dots */}
          <div
            className="absolute inset-0 animate-spin [animation-duration:6s] pointer-events-none"
            style={{ transformOrigin: "center center" }}
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
          </div>
          <div
            className="absolute inset-0 animate-spin [animation-duration:8s] [animation-direction:reverse] pointer-events-none"
            style={{ transformOrigin: "center center" }}
          >
            <span className="absolute bottom-1 right-6 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_#a855f7]" />
          </div>
        </div>

        {/* Large Cinematic Percentage */}
        <div className="text-center mb-3">
          <div className="text-5xl sm:text-6xl font-extrabold font-mono tracking-tighter bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent drop-shadow-lg inline-block">
            {progress}
            <span className="text-2xl sm:text-3xl font-light text-cyan-400/70 ml-1">%</span>
          </div>
        </div>

        {/* Identity & Subtitle */}
        <h2 className="text-lg sm:text-xl font-bold tracking-widest text-white uppercase font-heading flex items-center gap-2 mb-1.5">
          <span>Hit Parekh</span>
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
        </h2>

        {/* Dynamic Diagnostic Log Message */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-[11px] font-mono text-cyan-400 tracking-wider">
          <Terminal className="w-3 h-3 text-cyan-400" />
          <span>{statusMessage}</span>
        </div>
      </div>

      {/* Bottom Area: Laser Progress Bar & Skip Hint */}
      <div className="relative w-full max-w-md flex flex-col items-center gap-3 z-10">
        {/* Sleek Dual-tone Progress Track */}
        <div className="w-full h-1.5 sm:h-2 rounded-full bg-slate-900/90 border border-white/10 overflow-hidden relative shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_rgba(56,189,248,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>AI &amp; WEB PROTOCOLS</span>
          </span>
          <span className="hover:text-cyan-400 transition-colors">
            CLICK ANYWHERE TO ENTER ↵
          </span>
        </div>
      </div>
    </div>
  );
}
