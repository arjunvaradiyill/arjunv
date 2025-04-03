"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiAward, FiBriefcase, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  const navItems = [
    { name: 'Home', href: '#home', icon: <FiHome /> },
    { name: 'About', href: '#about', icon: <FiUser /> },
    { name: 'Projects', href: '#projects', icon: <FiCode /> },
    { name: 'Skills', href: '#skills', icon: <FiAward /> },
    { name: 'Experience', href: '#experience', icon: <FiBriefcase /> },
    { name: 'Contact', href: '#contact', icon: <FiMail /> },
  ];

  // Determine current theme for UI purposes
  const currentTheme = resolvedTheme || theme || 'light';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 dark:bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-500 dark:hover:from-yellow-300 dark:hover:to-yellow-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ARJUN V
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-2 text-yellow-100 dark:text-yellow-100 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </span>
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Navigation Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-black/90 dark:bg-black/90 backdrop-blur-sm text-yellow-100 dark:text-yellow-100 hover:text-yellow-500 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 bg-black/90 dark:bg-black/90 backdrop-blur-sm rounded-lg mt-4 border border-yellow-900/50">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2 text-yellow-100 dark:text-yellow-100 hover:text-yellow-500 hover:bg-yellow-900/20 dark:hover:bg-yellow-900/20 rounded-lg transition-colors"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 