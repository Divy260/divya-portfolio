/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black opacity-95"></div>
      <div className="absolute top-20 -left-32 w-96 h-96 bg-teal-500/30 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[160px]"></div>

      <div className="relative container mx-auto px-6">
        {/* Section Title */}
        <SectionTitle>My Projects</SectionTitle>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex flex-col h-full p-6 rounded-2xl border border-gray-800/70 
                         bg-gradient-to-b from-gray-800/60 to-gray-900/40 
                         hover:from-gray-800/80 hover:to-gray-900/80
                         shadow-lg hover:shadow-xl hover:-translate-y-2 
                         transition-all duration-500"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800/70 text-teal-300 border border-gray-700/50 
                               px-3 py-1 rounded-full text-xs font-medium
                               group-hover:bg-teal-900/40 group-hover:text-teal-200
                               transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto inline-block text-center 
                           bg-gradient-to-r from-teal-500 to-purple-600 
                           text-white font-semibold py-2.5 px-5 rounded-xl 
                           shadow-md hover:shadow-lg transition-all duration-300"
              >
                View Project
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
