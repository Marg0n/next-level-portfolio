"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface Point {
  x: number;
  y: number;
}

interface StringArtProps {
  children: ReactNode;
}

const StringArt = ({ children }: StringArtProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const anchorPointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number | null>(null);
  const [mousePosition, setMousePosition] = useState<Point>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const devicePixelRatio = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    const generateAnchorPoints = (width: number, height: number) => {
      const points: Point[] = [];
      const pointCount = width < 768 ? 40 : 60;
      const radius = Math.min(width, height) * 0.3;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < pointCount; i++) {
        const angle = (i / pointCount) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        points.push({ x, y });
      }
      anchorPointsRef.current = points;
    };

    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);

      generateAnchorPoints(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [devicePixelRatio]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const anchorPoints = anchorPointsRef.current;

      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      for (const point of anchorPoints) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const point of anchorPoints) {
        const dx = point.x - mousePosition.x;
        const dy = point.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const skipFactor = Math.abs(Math.sin(angle * 5)) < 0.3;
        if (skipFactor) continue;

        const maxDistance = Math.max(dimensions.width, dimensions.height) * 0.7;
        const opacity = 0.1 + 0.4 * (1 - Math.min(1, distance / maxDistance));
        const hue = ((angle * 180) / Math.PI + 180) % 360;

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(mousePosition.x, mousePosition.y);
        ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      const gradient = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        30,
      );
      gradient.addColorStop(0, "rgba(33,33,33,0.2)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.1)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 30, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, mousePosition, devicePixelRatio]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center flex-col overflow-hidden rounded-high bg-gray-900"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 !w-full !h-full pointer-events-none z-0"
      />

      <div className="relative z-10 w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default StringArt;