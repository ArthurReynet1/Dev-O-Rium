import { Navbar } from '@/components/Navbar';
import Contact from '@/components/Sections/Contact/Contact';
import Hero from '@/components/Sections/Hero/Hero';
import Projects from '@/components/Sections/Projects/Projects';
import Skills from '@/components/Sections/Skills/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <div className="relative">
        <Hero />
        <Projects />
      </div>
      <Skills />
      <Contact />
    </main>
  );
}
