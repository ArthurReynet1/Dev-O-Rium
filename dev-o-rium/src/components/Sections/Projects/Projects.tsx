'use client';

import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  stacks: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MyPokedex',
    image: '/pokedex-icon.jpg',
    description:
      'Application simple utilisant PokeAPI pour afficher les informations des Pokemons.',
    stacks: ['React', 'NestJS', 'Tailwind'],
    link: '#',
  },
  {
    id: 2,
    title: 'Aucun projet',
    image: '/dev-o-rium-logo-square.svg',
    description: "Pas d'autre projet pour le moment",
    stacks: ['DevORium'],
    link: '#',
  },
  {
    id: 3,
    title: 'Aucun projet',
    image: '/dev-o-rium-logo-square.svg',
    description: "Pas d'autre projet pour le moment",
    stacks: ['DevORium'],
    link: '#',
  },
  {
    id: 4,
    title: 'Aucun projet',
    image: '/dev-o-rium-logo-square.svg',
    description: "Pas d'autre projet pour le moment",
    stacks: ['DevORium'],
    link: '#',
  },
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section
      id="projects-section"
      className="bg-secondaryDark flex items-center h-screen sticky top-0"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            Projets
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="relative flex-[0_0_70%] min-w-0 px-6 md:flex-[0_0_35%]"
                  onClick={() => scrollTo(index)}
                >
                  <div
                    className="transition-all duration-300 transform-gpu"
                    style={{
                      opacity: selectedIndex === index ? 1 : 0.6,
                      transform: `scale(${selectedIndex === index ? 1 : 0.8})`,
                      transformOrigin: 'center center',
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer border-2 border-primary/30 bg-tertiary/60"
                    >
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-[240px] w-full object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-xs mb-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.stacks.map((stack, stackIndex) => (
                            <span
                              key={stackIndex}
                              className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-4">
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  selectedIndex === index
                    ? 'bg-primary w-5'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button className="group bg-primary text-secondary hover:bg-primary/90 px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 flex items-center justify-center">
            Voir le projet
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
