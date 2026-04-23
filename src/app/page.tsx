import { Navbar } from '@/components/Navbar';
import { Hero, Skills, Contact } from '@/components/Sections';

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-secondary">
      <Navbar />
      <Hero />
      <Skills />
      <Contact />
    </main>
  );
}
