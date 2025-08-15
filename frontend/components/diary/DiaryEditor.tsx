import React from 'react';
import Card from '../Card';
import { motion } from 'framer-motion';

const DiaryEditor: React.FC = () => {
  return (
    <Card padding="p-8">
      <input
        type="text"
        placeholder="What's on your mind?"
        className="w-full bg-transparent text-3xl font-bold text-text_primary focus:outline-none mb-4 border-b-2 border-primary/20 focus:border-primary transition-colors"
        defaultValue="Today's Reflections"
      />
      <textarea
        placeholder="Tell me everything..."
        className="w-full h-60 bg-background_light p-4 rounded-lg text-text_secondary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      ></textarea>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-2 text-sm text-text_secondary">
            {/* Rich text mock buttons */}
            <button className="px-3 py-1 hover:bg-background_light rounded">Bold</button>
            <button className="px-3 py-1 hover:bg-background_light rounded">Italic</button>
            <button className="px-3 py-1 hover:bg-background_light rounded">Emoji</button>
        </div>
        <div className="flex items-center space-x-3">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 text-sm bg-primary/20 text-primary font-semibold rounded-lg">
            Save
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
