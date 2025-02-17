'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const CANVAS_HEIGHT = 800; // Hauteur fixe en pixels

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = CANVAS_HEIGHT;

    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        if (!canvas) throw new Error('Canvas not found');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * CANVAS_HEIGHT; // Utiliser la hauteur fixe
        this.radius = Math.random() * 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      draw() {
        if (!ctx) throw new Error('Canvas not found');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(24, 242, 178, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        if (!canvas) throw new Error('Canvas not found');

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > CANVAS_HEIGHT) this.speedY *= -1; // Utiliser la hauteur fixe

        this.draw();
      }
    }

    function createParticles(count: number) {
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!canvas) throw new Error('Canvas not found');
      if (!ctx) throw new Error('Canvas not found');
      ctx.clearRect(0, 0, canvas.width, CANVAS_HEIGHT); // Utiliser la hauteur fixe
      particles.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    }

    createParticles(50);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = CANVAS_HEIGHT; // Garder la hauteur fixe lors du redimensionnement
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative h-[800px] overflow-hidden bg-secondary">
      {' '}
      {/* Hauteur fixe ici aussi */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter text-white sm:text-6xl lg:text-7xl">
            Je suis <span className="text-primary">Arthur</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Développeur informatique passionné par le code et la création
            numérique. Bienvenue dans mon laboratoire d&apos;expérimentation,
            Dev-O-Rium !
          </p>
          <Button className="group bg-primary text-secondary hover:bg-primary/90 px-6 py-3 text-base font-medium rounded-md transition-colors duration-200 flex items-center justify-center">
            Voir mon travail
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
