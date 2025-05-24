"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);

  const randomBetween = useCallback((a: number, b: number) => {
    return a + Math.random() * (b - a);
  }, []);

  const createParticles = useCallback((width: number, height: number) => {
    const isMobile = width < 768;
    const particleCount = isMobile ? 20 : 80; // Increased to 80 for desktop
    const maxVelocity = 0.5;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        vx: randomBetween(-maxVelocity, maxVelocity),
        vy: randomBetween(-maxVelocity, maxVelocity),
      });
    }
    particlesRef.current = particles;
  }, [randomBetween]);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    // Draw particles
    particlesRef.current.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2, false);
      ctx.fillStyle = "rgba(255, 215, 0, 0.6)";
      ctx.fill();
    });

    // Draw connections
    const connectionDistance = 200;
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        const dist = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );

        if (dist < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 215, 0, ${0.5 * (1 - dist / connectionDistance)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update canvas size if needed
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      createParticles(width, height);
    }

    // Update particle positions
    particlesRef.current.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;
    });

    draw(ctx, width, height);
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [createParticles, draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
    createParticles(width, height);
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-1 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
};
