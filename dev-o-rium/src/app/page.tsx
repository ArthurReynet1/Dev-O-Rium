import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Sections/Hero/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
    </main>
  );
}
