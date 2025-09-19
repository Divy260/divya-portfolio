/* eslint-disable no-unused-vars */
// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

// --- ANIMATED BACKGROUND (Aurora + Particles) ---
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {/* Aurora gradients */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
      className="absolute -top-32 left-0 w-[150%] h-[150%] bg-gradient-to-tr from-purple-500 via-teal-500 to-pink-500 opacity-40 blur-3xl animate-pulse"
    />
    {/* Floating blurred shapes */}
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 0.3, y: 0 }}
      transition={{ duration: 1.5 }}
      className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 0.3, y: 0 }}
      transition={{ duration: 1.8 }}
      className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl"
    />
    {/* Particles */}
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.span
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-70"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, -30],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 6 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
      />
    ))}
  </div>
);

// --- ANIMATED TEXT ---
const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  stagger = 0.02,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: 0.1 },
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };
  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-[0.25em]">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={childVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

const Hero = () => {
  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden px-4"
    >
      <AuroraBackground />
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Title */}
          <AnimatedText
            text={`Hi, I'm ${portfolioData.hero.title}`}
            el="h1"
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 text-white tracking-tight"
          />
          {/* Subtitle */}
          <AnimatedText
            text={portfolioData.hero.subtitle}
            el="p"
            className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl font-light text-gray-300"
          />
          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          >
            {portfolioData.hero.highlights.map((text, index) => (
              <span
                key={index}
                className="bg-gray-700/50 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-200"
              >
                {text}
              </span>
            ))}
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={portfolioData.resumePdf}
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-yellow-400 text-black font-semibold py-3 px-8 rounded-2xl shadow-lg transition-transform flex items-center justify-center gap-2"
            >
              Download Resume <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition-transform"
            >
              View My Work
            </motion.a>
          </motion.div>
          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mt-12"
          >
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Github />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Linkedin />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



