"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Terminal, Cpu, Database } from "lucide-react";

export default function ThreeHeroVisual() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Wireframe Icosahedron (Geometric Tech Core)
    const icosaGeometry = new THREE.IcosahedronGeometry(2.2, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, wireframeMaterial);
    group.add(icosaMesh);

    // 2. Inner Glowing Core
    const innerGeometry = new THREE.OctahedronGeometry(1.4, 2);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // 3. Floating Vertices Points (Network nodes)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const pointsMesh = new THREE.Points(icosaGeometry, pointsMaterial);
    group.add(pointsMesh);

    // 4. Orbital Ring Particles
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8);
    const color2 = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.8;

      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 3, 20);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth auto-rotation
      icosaMesh.rotation.x = elapsedTime * 0.15;
      icosaMesh.rotation.y = elapsedTime * 0.2;
      pointsMesh.rotation.x = elapsedTime * 0.15;
      pointsMesh.rotation.y = elapsedTime * 0.2;

      innerMesh.rotation.x = -elapsedTime * 0.25;
      innerMesh.rotation.y = -elapsedTime * 0.3;

      particles.rotation.y = elapsedTime * 0.08;
      particles.rotation.z = Math.sin(elapsedTime * 0.1) * 0.2;

      // Mouse parallax smooth interpolation
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      icosaGeometry.dispose();
      innerGeometry.dispose();
      particleGeometry.dispose();
      wireframeMaterial.dispose();
      innerMaterial.dispose();
      pointsMaterial.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-center">
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Floating Badges overlaying the 3D space */}
      {isClient && (
        <>
          {/* Badge 1: Top Left - AI Integration */}
          <div className="absolute top-4 left-2 sm:top-6 sm:left-4 glass-panel px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl flex items-center gap-2.5 sm:gap-3 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 animate-float pointer-events-none max-w-[200px] sm:max-w-none">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-500 dark:text-cyan-400 shrink-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">AI Powered</p>
              <p className="text-[11px] sm:text-xs font-semibold truncate" style={{ color: "var(--text-primary)" }}>Gemini API & LLMs</p>
            </div>
          </div>

          {/* Badge 2: Bottom Left - Academic Excellence */}
          <div
            className="absolute bottom-6 left-2 sm:bottom-8 sm:left-6 glass-panel px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl flex items-center gap-2.5 sm:gap-3 border border-violet-500/30 shadow-lg shadow-violet-500/10 pointer-events-none max-w-[200px] sm:max-w-none"
            style={{ animation: "float 7s ease-in-out infinite 1s" }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-violet-500/20 to-indigo-500/20 border border-violet-400/40 flex items-center justify-center text-violet-500 dark:text-violet-400 shrink-0">
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>8.84 CGPA</span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-700 dark:text-violet-300 font-mono font-semibold">
                  Distinction
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px]" style={{ color: "var(--text-muted)" }}>CVM Univ • BCA</p>
            </div>
          </div>

          {/* Badge 3: Top Right - Full Stack Web (desktop/tablet) */}
          <div
            className="hidden sm:flex absolute top-12 right-4 glass-panel px-4 py-2.5 rounded-2xl items-center gap-3 border border-blue-500/30 shadow-lg shadow-blue-500/10 pointer-events-none"
            style={{ animation: "float 8s ease-in-out infinite 2s" }}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 border border-blue-400/40 flex items-center justify-center text-blue-500 dark:text-blue-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">Full-Stack Tech</p>
              <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>Next.js • FastAPI • Three.js</p>
            </div>
          </div>

          {/* Badge 4: Bottom Right - Relational DB */}
          <div
            className="hidden sm:flex absolute bottom-12 right-6 glass-panel px-3.5 py-2 rounded-2xl items-center gap-2.5 border border-slate-300 dark:border-slate-700/60 shadow-lg pointer-events-none"
            style={{ animation: "float 6.5s ease-in-out infinite 1.5s" }}
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Database className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>Relational DBs</p>
              <p className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>MySQL & PostgreSQL</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
