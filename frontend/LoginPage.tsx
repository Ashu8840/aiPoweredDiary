import React, { useState } from 'react';
import GoogleIcon from './GoogleIcon';

// Backend URL as requested.
const API_BASE_URL = 'https://aipowereddiary-1.onrender.com';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Logging in with:', { email, password });
    console.log(`Connecting to backend at: ${API_BASE_URL}`);
    // Mock API call to simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    console.log('Initiating Google Login...');
    // Logic for Google OAuth would go here.
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-cyan-400">Aura Diary</h1>
        <p className="text-gray-400 mt-2">Sign in to continue to your mind's safe space.</p>
      </div>
      
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-300 sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-gray-300 sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
          />
        </div>
        <div className="text-right">
          <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition duration-300">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-gray-900 bg-cyan-400 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-800 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 transition duration-300"
        >
          <GoogleIcon className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
      </div>
      
      <p className="text-sm text-center text-gray-400">
        Not a member?{' '}
        <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300 transition duration-300">
          Start your journey now
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
