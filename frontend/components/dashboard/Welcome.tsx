import React from 'react';
import { motion } from 'framer-motion';

const Welcome: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-text_primary">
        Welcome back, <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Ayush</span>
      </h1>
      <p className="mt-4 text-lg text-text_secondary">
        Your mind deserves a place to breathe. Let's capture today's thoughts.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 bg-primary text-background font-bold rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
      >
        Start Your Journey
      </motion.button>
    </motion.div>
  );
};

export default Welcome;
