import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black dark:bg-black text-yellow-200 dark:text-yellow-200 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-yellow-400 dark:text-yellow-400 font-medium">
              Made with <span className="text-yellow-500">❤️</span> by Arjun V
            </p>
            <p className="text-sm text-yellow-300 dark:text-yellow-300">
              © {new Date().getFullYear()} Arjun V. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
} 