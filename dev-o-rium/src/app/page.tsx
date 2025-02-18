import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Sections/Hero/Hero';
import Projects from '@/components/Sections/Projects/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <div className="relative">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
