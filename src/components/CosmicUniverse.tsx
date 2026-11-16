"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

export default function CosmicUniverse() {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Generate random stars with varied sizes, colors, and twinkling speeds
    const starColors = ["#ffffff", "#38bdf8", "#818cf8", "#c084fc", "#fde047"];
    const generatedStars: Star[] = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.7 ? 1.5 : Math.random() < 0.9 ? 2.5 : 3.5,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }));

    // Generate shooting stars with staggered delays
    const generatedShootingStars: ShootingStar[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      top: Math.random() * 45 + 5,
      left: Math.random() * 70 + 10,
      duration: Math.random() * 1.5 + 2,
      delay: i * 5 + Math.random() * 3,
    }));

    setStars(generatedStars);
    setShootingStars(generatedShootingStars);
  }, []);

  if (!mounted || theme !== "dark") return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-700"
      style={{ opacity: 1 }}
    >
      {/* Deep Cosmos Nebulas */}
      <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-transparent blur-[140px]" />
      <div className="absolute top-[35%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-bl from-cyan-950/35 via-blue-950/20 to-transparent blur-[140px]" />
      <div className="absolute -bottom-[15%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-violet-950/30 via-slate-950/40 to-transparent blur-[130px]" />

      {/* Twinkling Starfield */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full animate-cosmic-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow:
              star.size > 2 ? `0 0 8px 1px ${star.color}` : `0 0 4px ${star.color}`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Shooting Stars / Meteors */}
      {shootingStars.map((m) => (
        <span
          key={m.id}
          className="absolute h-[1.5px] w-28 bg-gradient-to-r from-transparent via-cyan-400 to-white animate-meteor"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
}

