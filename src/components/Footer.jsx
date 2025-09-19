/* eslint-disable no-unused-vars */
// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Footer = () => (
  <footer className="relative overflow-hidden py-10 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent border-t border-cyan-500/20">
    {/* Background Glow */}
    <div className="absolute inset-0">
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl opacity-40" />
    </div>

    <div className="relative container mx-auto px-6 text-center">
      {/* Brand / Name
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3"
      >
        {portfolioData.name}
      </motion.h2> */}

      {/* Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 text-sm"
      >
        &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-500 text-xs mt-2"
      >
        Designed & Developed with ❤️ using React, Tailwind CSS & Framer Motion.
      </motion.p>

      {/* Optional Social Links Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center gap-6 mt-6"
      >
        {portfolioData.contactButtons.slice(0, 3).map((link, i) => {
          const { IconComponent } = link;
          return (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <IconComponent size={22} />
            </a>
          );
        })}
      </motion.div>
    </div>
  </footer>
);

export default Footer;

