/* eslint-disable no-unused-vars */
// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Contact = () => (
  <section
    id="contact"
    className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
  >
    {/* Decorative Gradient Orbs */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

    <div className="container relative mx-auto px-4">
      <SectionTitle>Get in Touch</SectionTitle>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-center mb-16 max-w-2xl mx-auto text-gray-300 leading-relaxed"
      >
        I’m always open to exciting opportunities, collaborations, or just a friendly chat.
        Let’s connect and create something amazing together!
      </motion.p>

      <div className="flex flex-wrap justify-center gap-10">
        {portfolioData.contactButtons.map((link, i) => {
          const { IconComponent } = link;
          return (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-8 w-44 h-44 
                          bg-white/5 backdrop-blur-xl border border-white/10 
                          rounded-2xl shadow-lg transition-all duration-300 
                          hover:shadow-purple-500/30 ${link.hover}`}
              whileHover={{ scale: 1.08, y: -10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className={`${link.color} mb-4`}>
                <IconComponent size={42} />
              </div>
              <span className="text-lg font-semibold tracking-wide text-gray-100">
                {link.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);

export default Contact;


