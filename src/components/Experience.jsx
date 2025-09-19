/* eslint-disable no-unused-vars */
// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-950 relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-950 to-black"></div>
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-600/20 rounded-full blur-[120px]"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]"></div>

    <div className="relative container mx-auto px-4">
      <SectionTitle>Work Experience</SectionTitle>

      <div className="relative space-y-12 before:absolute before:top-0 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500/40 before:to-purple-500/40">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="relative pl-12 md:pl-0"
          >
            <div className="md:flex md:items-center md:justify-center">
              {/* Experience Card */}
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute top-1 left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full border-4 border-gray-950 shadow-lg shadow-teal-500/30"></div>

                {/* Card Content */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-950 to-black p-6 rounded-xl shadow-lg border border-gray-800 hover:border-teal-400/60 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-teal-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4 italic">{exp.duration}</p>

                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 text-left">
                    {exp.description.map((point, i) => (
                      <li key={i} className="leading-relaxed group-hover:text-gray-200 transition-colors">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer on alternate side */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

