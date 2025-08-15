import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'p-4' | 'p-6' | 'p-8';
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Card: React.FC<CardProps> = ({ children, className = '', padding = 'p-6' }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`bg-card/70 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg ${padding} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
