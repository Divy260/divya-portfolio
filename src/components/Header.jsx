/* eslint-disable no-unused-vars */
// src/components/Header.jsx
// ==================================================================
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Header = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ id, name }) => (
    <a
      href={`#${id}`}
      onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
      className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-300"
    >
      {name}
      {activeSection === id && (
        <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 rounded-full" layoutId="underline" />
      )}
    </a>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-gray-900/70 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
          >
            {portfolioData.name}
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {portfolioData.navLinks.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-gray-300 hover:text-teal-400 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-gray-800 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-2" aria-label="Close menu"><X size={28} /></button>
              <nav className="flex flex-col items-start justify-center h-full space-y-6">
                {portfolioData.navLinks.map(link => <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} className="text-2xl font-medium hover:text-teal-500 transition-colors">{link.name}</a>)}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;