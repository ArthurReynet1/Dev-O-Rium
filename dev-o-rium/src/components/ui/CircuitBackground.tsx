'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  opacity: number;
  targetOpacity: number;
  connections: Point[];
}

interface Line {
  start: Point;
  end: Point;
  opacity: number;
  targetOpacity: number;
}

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: Point[] = [];
    let lines: Line[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCircuit();
    };

    const createPoint = (x: number, y: number): Point => ({
      x,
      y,
      opacity: 0,
      targetOpacity: 0,
      connections: [],
    });

    const initCircuit = () => {
      points = [];
      lines = [];

      // Créer une grille de points
      const gridSize = 80;
      const cols = Math.floor(canvas.width / gridSize);
      const rows = Math.floor(canvas.height / gridSize);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          if (Math.random() > 0.5) {
            // 50% de chance d'avoir un point
            const x = i * gridSize + (Math.random() * 20 - 10);
            const y = j * gridSize + (Math.random() * 20 - 10);
            points.push(createPoint(x, y));
          }
        }
      }

      // Créer des connexions entre les points
      points.forEach((point) => {
        const nearbyPoints = points
          .filter((p) => p !== point)
          .filter((p) => {
            const distance = Math.sqrt(
              Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2),
            );
            return distance < gridSize * 1.5;
          })
          .slice(0, 2); // Limiter à 2 connexions par point

        nearbyPoints.forEach((nearPoint) => {
          if (!point.connections.includes(nearPoint)) {
            point.connections.push(nearPoint);
            nearPoint.connections.push(point);
            lines.push({
              start: point,
              end: nearPoint,
              opacity: 0,
              targetOpacity: 0,
            });
          }
        });
      });
    };

    const drawCircuit = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessiner les lignes
      lines.forEach((line) => {
        if (Math.random() < 0.005) {
          line.targetOpacity = line.targetOpacity > 0.1 ? 0 : 0.4;
        }
        line.opacity += (line.targetOpacity - line.opacity) * 0.05;

        ctx.beginPath();
        ctx.moveTo(line.start.x, line.start.y);
        ctx.lineTo(line.end.x, line.end.y);
        ctx.strokeStyle = `rgba(24, 242, 178, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Dessiner les points
      points.forEach((point) => {
        if (Math.random() < 0.005) {
          point.targetOpacity = point.targetOpacity > 0.1 ? 0 : 0.6;
        }
        point.opacity += (point.targetOpacity - point.opacity) * 0.05;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(24, 242, 178, ${point.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawCircuit);
    };

    resizeCanvas();
    drawCircuit();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20"
    />
  );
}
