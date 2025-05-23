"use client";

import { useEffect, useRef } from "react";

export const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles: any[] = [];
    const particleCount = 100;
    const maxVelocity = 0.5;
    const connectionDistance = 120;

    function randomBetween(a: number, b: number) {
      return a + Math.random() * (b - a);
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          vx: randomBetween(-maxVelocity, maxVelocity),
          vy: randomBetween(-maxVelocity, maxVelocity),
        });
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particleCount; i++) {
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgba(255, 215, 0, 0.25)";
        ctx.fill();
      }
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          let p1 = particles[i];
          let p2 = particles[j];
          let dist = Math.sqrt(
            (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)
          );
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(255, 215, 0, 0.25)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    function update() {
      for (let i = 0; i < particleCount; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    }

    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createParticles();
    }

    let animationId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);
    createParticles();
    draw();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};
