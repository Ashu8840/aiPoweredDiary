import React from 'react';
import Card from '../Card';
import { motion } from 'framer-motion';
import SparklesIcon from '../icons/SparklesIcon';
import LockIcon from '../icons/LockIcon';

const AIFeatures: React.FC = () => {
  return (
    <Card>
        <h3 className="text-2xl font-bold text-text_primary mb-4 flex items-center">
            <SparklesIcon className="w-6 h-6 mr-2 text-primary"/>
            AI Features
        </h3>
        <div className="space-y-4">
            {/* AI Diary */}
            <div className="p-4 rounded-lg bg-background_light border border-white/10">
                <h4 className="font-bold text-text_primary">AI Diary</h4>
                <p className="text-sm text-text_secondary mt-1 mb-3">Get insights from your entries. You have 5 saved entries.</p>
                <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="w-full text-sm py-2 bg-primary text-background font-bold rounded-lg"
                >
                    Open Editor
                </motion.button>
            </div>
            {/* AI Assistant */}
            <div className="p-4 rounded-lg bg-background_light border border-white/10 filter grayscale opacity-60">
                <div className="flex justify-between items-center">
                    <h4 className="font-bold text-text_primary">AI Assistant</h4>
                    <LockIcon className="w-5 h-5 text-text_secondary"/>
                </div>
                <p className="text-sm text-text_secondary mt-1 mb-3">Your personal AI life coach. Locked for free tier.</p>
                <motion.button
                     disabled
                     className="w-full text-sm py-2 bg-text_secondary text-background font-bold rounded-lg cursor-not-allowed"
                >
                    Upgrade to Unlock
                </motion.button>
            </div>
        </div>
    </Card>
  );
};

export default AIFeatures;
