'use client';

import { Button } from '@/components/ui/button';
import useParticleCanvas from '@/hooks/useParticleCanvas';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useParticleCanvas(canvasRef, {
    count: 100,
    color: '24, 242, 178',
    enabled: !prefersReducedMotion,
  });

  const scrollToSkills = () => {
    document
      .getElementById('skills-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] overflow-hidden bg-secondary">
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
          <Button
            onClick={scrollToSkills}
            className="group bg-primary text-secondary hover:bg-primary/90 px-6 py-3 text-base font-medium rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            Découvrir mes compétences
            <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
