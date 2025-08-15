import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoIcon from './icons/LogoIcon';
import { ThemeContext, Theme } from '../contexts/ThemeContext';

const themes: { name: Theme; color: string }[] = [
  { name: 'jungle', color: 'bg-green-500' },
  { name: 'cyberpunk', color: 'bg-cyan-400' },
  { name: 'barbie', color: 'bg-pink-500' },
  { name: 'space', color: 'bg-indigo-500' },
  { name: 'mars', color: 'bg-red-500' },
];

const Header: React.FC = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const { setTheme } = useContext(ThemeContext);

  return (
    <header className="bg-card/60 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <LogoIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-text_primary tracking-wider">
              Aura Diary
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="text-text_secondary hover:text-primary transition-colors duration-300">Dashboard</a>
            <a href="#" className="text-text_secondary hover:text-primary transition-colors duration-300">AI Diary</a>
            <a href="#" className="text-text_secondary hover:text-primary transition-colors duration-300">AI Assistant</a>
            <a href="#" className="text-text_secondary hover:text-primary transition-colors duration-300">Chatbot</a>
            <a href="#" className="bg-primary/20 text-primary px-3 py-1.5 rounded-full hover:bg-primary/30 transition-colors duration-300">Upgrade</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {themes.map(theme => (
                <button
                  key={theme.name}
                  onClick={() => setTheme(theme.name)}
                  className={`w-5 h-5 rounded-full ${theme.color} transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary`}
                  aria-label={`Switch to ${theme.name} theme`}
                />
              ))}
            </div>
            <div className="relative">
              <button onClick={() => setProfileOpen(!isProfileOpen)} className="focus:outline-none">
                <img
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/50"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  alt="User avatar"
                />
              </button>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg py-1 border border-white/10"
                  >
                    <a href="#" className="block px-4 py-2 text-sm text-text_secondary hover:bg-background_light">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-text_secondary hover:bg-background_light">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-text_secondary hover:bg-background_light">Logout</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
