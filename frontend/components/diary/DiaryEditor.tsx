import React, { useState } from 'react';
import Card from '../Card';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../../config';

const DiaryEditor: React.FC = () => {
  const [title, setTitle] = useState("Today's Reflections");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const handleSave = async () => {
    setStatus('saving');
    try {
      // We are hitting the /api/test endpoint to confirm connectivity.
      const response = await fetch(`${API_BASE_URL}/api/test`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Successfully connected to backend:', data);
      setStatus('saved');
    } catch (error) {
      console.error('Error connecting to backend:', error);
      setStatus('error');
    } finally {
      // Reset status after 2 seconds
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <Card padding="p-8">
      <input
        type="text"
        placeholder="What's on your mind?"
        className="w-full bg-transparent text-3xl font-bold text-text_primary focus:outline-none mb-4 border-b-2 border-primary/20 focus:border-primary transition-colors"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Tell me everything..."
        className="w-full h-60 bg-background_light p-4 rounded-lg text-text_secondary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-2 text-sm text-text_secondary">
            {/* Rich text mock buttons */}
            <button className="px-3 py-1 hover:bg-background_light rounded">Bold</button>
            <button className="px-3 py-1 hover:bg-background_light rounded">Italic</button>
            <button className="px-3 py-1 hover:bg-background_light rounded">Emoji</button>
        </div>
        <div className="flex items-center space-x-3">
          <motion.button
            onClick={handleSave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors w-24 text-center ${
              status === 'saving' ? 'bg-secondary text-background cursor-not-allowed' :
              status === 'saved' ? 'bg-green-500 text-white' :
              status === 'error' ? 'bg-red-500 text-white' :
              'bg-primary/20 text-primary'
            }`}
            disabled={status === 'saving'}
          >
            {
              status === 'saving' ? 'Saving...' :
              status === 'saved' ? 'Saved!' :
              status === 'error' ? 'Error!' :
              'Save'
            }
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 text-sm bg-primary text-background font-bold rounded-lg">
            Run AI Analysis
          </motion.button>
        </div>
      </div>
    </Card>
  );
};

export default DiaryEditor;
