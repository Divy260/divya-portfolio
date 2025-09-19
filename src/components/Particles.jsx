import React from 'react';
import { motion } from 'framer-motion';

import { useCallback as ReactUseCallback } from 'react';
const Particles = () => {
  const COLORS = ['#2DD4BF', '#A78BFA', '#60A5FA', '#F472B6'];
  const PARTICLE_COUNT = 30;
  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const Particle = ReactUseCallback(({ color }) => {
    const size = getRandom(5, 15);
    const duration = getRandom(15, 30);
    const delay = getRandom(0, 10);
    const x = getRandom(0, 100);
    const y = getRandom(-20, 120);

    return (
      <motion.div
        className="absolute rounded-full opacity-50 dark:opacity-70"
        style={{ width: `${size}px`, height: `${size}px`, backgroundColor: color, left: `${x}%`, top: `${y}%` }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], y: [y, y + getRandom(-100, 100)], x: [x, x + getRandom(-50, 50)] }}
        transition={{ duration, delay, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
      />
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => <Particle key={i} color={COLORS[i % COLORS.length]} />)}
    </div>
  );
};

export default Particles;