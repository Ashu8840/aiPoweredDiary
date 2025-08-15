import React from 'react';
import Card from '../Card';
import { motion } from 'framer-motion';

const UpgradePlan: React.FC = () => {
  const daysLeft = 23;
  const trialDays = 30;
  const progress = (daysLeft / trialDays) * 100;

  return (
    <Card>
      <h3 className="font-bold text-text_primary">Current Plan: <span className="text-primary font-semibold">Free</span></h3>
      <p className="text-sm text-text_secondary mt-2">
        You have <span className="font-bold text-text_primary">{daysLeft} days</span> left in your trial.
      </p>
      
      <div className="w-full bg-background_light rounded-full h-2.5 my-4">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <motion.button
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
      >
        Upgrade Now
      </motion.button>
    </Card>
  );
};

export default UpgradePlan;
