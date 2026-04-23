import {
  BlocksIcon,
  BracesIcon,
  Code2Icon,
  DatabaseIcon,
  GitBranchIcon,
  GlobeIcon,
  HashIcon,
  HexagonIcon,
  LayoutIcon,
  type LucideIcon,
  PaletteIcon,
  ServerIcon,
} from 'lucide-react';

interface Skill {
  name: string;
  Icon: LucideIcon;
  description: string;
}

const skillsByCategory: Record<string, Skill[]> = {
  Frontend: [
    {
      name: 'React',
      Icon: BlocksIcon,
      description: 'Component-based UI development',
    },
    {
      name: 'TypeScript',
      Icon: BracesIcon,
      description: 'Type-safe JavaScript development',
    },
    {
      name: 'Next.js',
      Icon: LayoutIcon,
      description: 'React framework for production',
    },
    {
      name: 'Tailwind',
      Icon: PaletteIcon,
      description: 'Utility-first CSS framework',
    },
  ],
  'Backend Node': [
    {
      name: 'Node.js',
      Icon: ServerIcon,
      description: 'JavaScript runtime environment',
    },
    {
      name: 'NestJS',
      Icon: Code2Icon,
      description: 'Progressive Node.js framework',
    },
  ],
  'Backend .NET': [
    {
      name: 'C#',
      Icon: HashIcon,
      description: 'Strongly-typed OOP language',
    },
    {
      name: '.NET',
      Icon: HexagonIcon,
      description: 'Cross-platform app framework',
    },
    {
      name: 'ASP.NET Core',
      Icon: ServerIcon,
      description: 'Web & API framework',
    },
    {
      name: 'Entity Framework',
      Icon: DatabaseIcon,
      description: 'ORM for .NET',
    },
  ],
  'Bases de données': [
    {
      name: 'MySQL',
      Icon: DatabaseIcon,
      description: 'Relational database management',
    },
    {
      name: 'PostgreSQL',
      Icon: DatabaseIcon,
      description: 'Advanced relational database',
    },
  ],
  Outils: [
    {
      name: 'Git',
      Icon: GitBranchIcon,
      description: 'Version control system',
    },
    {
      name: 'Docker',
      Icon: GlobeIcon,
      description: 'Container platform',
    },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills-section"
      className="bg-gradient-to-br from-secondaryDark to-secondary py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-3xl font-extrabold leading-tight tracking-tighter text-white text-center sm:text-4xl">
          Compétences
        </h2>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-8 border-b border-secondaryDark pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map(({ name, Icon, description }) => (
                  <div
                    key={name}
                    className="bg-tertiary/50 backdrop-blur-lg rounded-xl p-6 border border-secondary/50
                             transform hover:scale-105 transition-all duration-300 hover:border-primary/50
                             hover:shadow-lg hover:shadow-primary/10 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/20
                                    transition-colors duration-300"
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-medium text-white">{name}</h4>
                    </div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
