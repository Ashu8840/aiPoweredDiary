

import React from 'react';
import Card from './Card';

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-6 py-12">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <Card>
            <h2 className="text-2xl font-bold text-text_primary mb-4">Welcome to the Frontend Starter</h2>
            <p className="text-text_secondary mb-4">
              This React application is a starting point for a frontend service within a monorepo architecture. It's built with TypeScript and styled using Tailwind CSS for a modern, responsive, and developer-friendly experience.
            </p>
            <p className="text-text_secondary mb-6">
              You can find all the components in the <code className="bg-background_light text-primary px-2 py-1 rounded text-sm">frontend/components</code> directory. The file structure is designed for scalability and maintainability. Feel free to explore and modify it to fit your project's needs.
            </p>
            <div className="flex justify-end">
              <button className="bg-primary hover:opacity-90 text-background font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default MainContent;