/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolioData.js';

// Reuse Aurora Background for thematic sync
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
      className="absolute -top-32 left-0 w-[150%] h-[150%] bg-gradient-to-tr from-purple-500 via-teal-500 to-pink-500 opacity-30 blur-3xl animate-pulse"
    />
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="relative z-10 container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Who I Am</h3>
            <div className="text-lg leading-relaxed space-y-6 text-gray-300">
              {portfolioData.about.introduction.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          >
            <EducationPanel />
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 shadow-xl"
        >
          <SkillsPanel />
        </motion.div>
      </div>
    </section>
  );
};

// Skills Panel Component
const SkillsPanel = () => {
  const skillCategoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };
  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-white mb-8 text-center">My Professional Skillset</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.about.skills.map((cat) => {
          const { IconComponent } = cat;
          return (
            <motion.div
              key={cat.category}
              variants={skillCategoryVariants}
              className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-gray-700/40"
            >
              <div className="flex items-center mb-4">
                <IconComponent className="h-7 w-7 mr-3 text-teal-400" />
                <h4 className="text-xl font-bold text-white">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillTagVariants}
                    className="bg-gray-800/70 text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-500/70 hover:text-white transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Education Panel Component (Timeline UI)
const EducationPanel = () => (
  <div>
    <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
    <div className="relative border-l-2 border-teal-500/40 ml-4 pl-8 py-4 space-y-12">
      {portfolioData.about.education.map((edu, index) => {
        const { IconComponent } = edu;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-11 top-1 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center ring-4 ring-gray-800">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white">
                <IconComponent size={16} />
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-1">{edu.year}</p>
            <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
            <p className="text-lg text-gray-300">{edu.institute}</p>
            <p className="text-md font-mono text-teal-400">{edu.grade}</p>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default About;
