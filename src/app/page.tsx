import { Navbar } from '@/components/Navbar';
import { Hero, Projects, Skills, Contact } from '@/components/Sections';

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-secondary">
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
