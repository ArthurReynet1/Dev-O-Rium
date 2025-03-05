'use client';

import { motion } from 'framer-motion';
import CircuitBackground from '../../ui/CircuitBackground';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 75 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 60 },
      { name: 'Tailwind', level: 90 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'NestJS', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    category: 'Autres',
    items: [
      { name: 'Git', level: 75 },
      { name: 'Docker', level: 50 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills-section"
      className="bg-secondary flex items-center h-screen relative overflow-hidden"
    >
      <CircuitBackground />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl">
            Compétences
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-tertiary/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/20"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full bg-primary"
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
