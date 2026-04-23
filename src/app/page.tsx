import { Navbar } from '@/components/Navbar';
import { Hero, Projects, Skills, Contact } from '@/components/Sections';

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
