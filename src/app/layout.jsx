import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arjun V - Portfolio',
  description: 'Fullstack Developer | MERN Stack | React | Next.js | JavaScript',
  icon: '/images/favicon.jpg',
  shortcut: '/images/favicon.jpg',
  apple: '/images/favicon.jpg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.jpg" />
      </head>
      <body className={`${inter.className} min-h-screen bg-black text-black dark:text-yellow-100`}>
        <AnimatedBackground />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 