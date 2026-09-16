import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GAP = 9;
const RADIUS = 170;
const STRENGTH = 52;
const SPRING = 0.08;
const FRICTION = 0.74;
const MAX_DPR = 2;

type Speck = {
  hx: number;
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  light: boolean;
  alpha: number;
};

function buildSpecks(width: number, height: number): Speck[] {
  const specks: Speck[] = [];
  const cols = Math.ceil(width / GAP) + 1;
  const rows = Math.ceil(height / GAP) + 1;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const jitterX = (Math.random() - 0.5) * GAP;
      const jitterY = (Math.random() - 0.5) * GAP;
      const x = col * GAP + jitterX;
      const y = row * GAP + jitterY;
      const tone = Math.random();
      specks.push({
        hx: x,
        hy: y,
        x,
        y,
        vx: 0,
        vy: 0,
        size: tone > 0.9 ? 2 : 1.05 + tone * 0.55,
        light: tone > 0.28,
        alpha: tone > 0.28 ? 0.16 + tone * 0.28 : 0.2 + tone * 0.15,
      });
    }
  }

  return specks;
}

export default function StaticField() {
  const { pathname } = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const enabled = !pathname.endsWith("/resume");

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -9999, y: -9999, on: false };
    let specks: Speck[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let cancelled = false;

    const sizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      specks = buildSpecks(width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f4ecda";
      for (const speck of specks) {
        if (!speck.light) continue;
        ctx.globalAlpha = speck.alpha;
        ctx.fillRect(speck.x, speck.y, speck.size, speck.size);
      }
      ctx.fillStyle = "#050605";
      for (const speck of specks) {
        if (speck.light) continue;
        ctx.globalAlpha = speck.alpha;
        ctx.fillRect(speck.x, speck.y, speck.size, speck.size);
      }
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      if (cancelled) return;

      const radiusSq = RADIUS * RADIUS;
      let energy = 0;

      for (const speck of specks) {
        if (pointer.on) {
          const dx = speck.x - pointer.x;
          const dy = speck.y - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < radiusSq && distSq > 0.25) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / RADIUS) ** 2 * STRENGTH;
            speck.vx += (dx / dist) * force;
            speck.vy += (dy / dist) * force;
          }
        }

        speck.vx += (speck.hx - speck.x) * SPRING;
        speck.vy += (speck.hy - speck.y) * SPRING;
        speck.vx *= FRICTION;
        speck.vy *= FRICTION;
        speck.x += speck.vx;
        speck.y += speck.vy;
        energy += speck.vx * speck.vx + speck.vy * speck.vy;
      }

      draw();

      if (pointer.on || energy > 0.04) {
        frame = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const start = () => {
      if (running || motion.matches) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.on = true;
      start();
    };

    const onPointerLeave = () => {
      pointer.on = false;
      start();
    };

    const onResize = () => {
      sizeCanvas();
      draw();
    };

    sizeCanvas();
    draw();

    if (!motion.matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
      document.documentElement.addEventListener("mouseleave", onPointerLeave);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} className="static-field" aria-hidden />;
}
