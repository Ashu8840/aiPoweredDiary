import React from 'react';
import LoginPage from './LoginPage';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <LoginPage />
    </div>
  );
};

export default App;