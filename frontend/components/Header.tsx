
import React from 'react';
import LogoIcon from './icons/LogoIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <LogoIcon className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-slate-100 tracking-wider">
              Frontend
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Services</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
