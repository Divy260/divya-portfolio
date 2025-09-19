import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold text-center mb-16 relative pb-4"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-teal-500 rounded-full"></span>
  </motion.h2>
);
export default SectionTitle;