import React from 'react';
import Card from '../Card';
import LockIcon from '../icons/LockIcon';

const ComingSoon: React.FC = () => {
  return (
    <Card className="relative overflow-hidden">
        <div className="filter blur-sm grayscale">
            <h3 className="text-2xl font-bold text-text_primary">AI Daily Lock</h3>
            <p className="text-text_secondary mt-2">A revolutionary feature to safeguard your most private thoughts with an AI-powered daily password. Only you can unlock your day's entry.</p>
        </div>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <LockIcon className="w-10 h-10 text-white/80"/>
            <p className="text-2xl font-bold text-white/90 mt-4">Coming Soon</p>
        </div>
    </Card>
  );
};

export default ComingSoon;
