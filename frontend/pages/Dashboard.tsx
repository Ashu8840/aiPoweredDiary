import React from 'react';
import { motion } from 'framer-motion';
import Welcome from '../components/dashboard/Welcome';
import ThemeSelector from '../components/dashboard/ThemeSelector';
import AIFeatures from '../components/dashboard/AIFeatures';
import ChatPanel from '../components/dashboard/ChatPanel';
import UpgradePlan from '../components/dashboard/UpgradePlan';
import DiaryEditor from '../components/diary/DiaryEditor';
import AIAnalysis from '../components/dashboard/AIAnalysis';
import ComingSoon from '../components/dashboard/ComingSoon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Dashboard: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <Welcome />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-8">
        <div className="lg:col-span-8 space-y-8">
          <ThemeSelector />
          <DiaryEditor />
        </div>
        <div className="lg:col-span-4 space-y-8">
          <AIFeatures />
          <UpgradePlan />
        </div>
        <div className="lg:col-span-6">
            <AIAnalysis />
        </div>
         <div className="lg:col-span-6">
            <ChatPanel />
        </div>
        <div className="lg:col-span-12">
            <ComingSoon />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
