/* eslint-disable no-unused-vars */
// src/components/Achievements.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import { Award } from 'lucide-react';

const Achievements = () => (
  <section id="achievements" className="relative py-20 bg-gray-950 overflow-hidden">
    {/* Subtle background gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-950 pointer-events-none" />

    <div className="container relative mx-auto px-6 lg:px-12">
      <SectionTitle>Achievements & More</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {Object.entries(portfolioData.achievements).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 
                       backdrop-blur-lg shadow-lg hover:shadow-xl transition"
          >
            {/* Icon above category */}
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-teal-400 w-6 h-6" />
              <h3 className="text-lg md:text-xl font-semibold capitalize text-white tracking-wide">
                {category}
              </h3>
            </div>

            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-teal-500 mr-2 mt-1">✔</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
