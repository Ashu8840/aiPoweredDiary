import React from 'react';
import Card from '../Card';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import type { Theme } from '../../contexts/ThemeContext';

const themes: { name: Theme; gradient: string; title: string }[] = [
  { name: 'jungle', gradient: 'from-green-500 to-yellow-500', title: 'Jungle' },
  { name: 'cyberpunk', gradient: 'from-cyan-400 to-pink-500', title: 'Cyberpunk' },
  { name: 'barbie', gradient: 'from-pink-500 to-purple-500', title: 'Barbie' },
  { name: 'space', gradient: 'from-indigo-500 to-red-500', title: 'Space' },
  { name: 'mars', gradient: 'from-orange-400 to-yellow-300', title: 'Mars' },
];

const ThemeSelector: React.FC = () => {
    const { setTheme } = useTheme();

  return (
    <Card>
      <h3 className="text-2xl font-bold text-text_primary mb-4">Select Your Vibe</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {themes.map((theme) => (
          <motion.div 
            key={theme.name}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center space-y-3 cursor-pointer"
            onClick={() => setTheme(theme.name)}
          >
            <div className={`w-full h-24 rounded-lg bg-gradient-to-br ${theme.gradient} shadow-md`}></div>
            <span className="font-semibold text-text_secondary">{theme.title}</span>
            <button className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
              Apply
            </button>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default ThemeSelector;