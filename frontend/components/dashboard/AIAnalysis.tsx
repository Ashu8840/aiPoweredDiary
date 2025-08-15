import React from 'react';
import Card from '../Card';
import ChartBarIcon from '../icons/ChartBarIcon';

const AIAnalysis: React.FC = () => {
  return (
    <Card className="h-full">
      <h3 className="text-2xl font-bold text-text_primary mb-4 flex items-center">
        <ChartBarIcon className="w-6 h-6 mr-2 text-primary" />
        Your Weekly Analysis
      </h3>
      <div className="space-y-4">
        {/* Mock Chart */}
        <div className="w-full h-40 bg-background_light rounded-lg flex items-center justify-center">
            <p className="text-text_secondary text-sm">[Chart.js placeholder for mood streaks]</p>
        </div>
        <ul className="text-sm text-text_secondary space-y-2">
            <li className="flex items-center"><span className="text-primary mr-2">✔</span>Your mood was <span className="font-bold text-text_primary mx-1">70% positive</span> this week.</li>
            <li className="flex items-center"><span className="text-primary mr-2">✔</span>You wrote the most on <span className="font-bold text-text_primary mx-1">Tuesdays</span>.</li>
            <li className="flex items-center"><span className="text-primary mr-2">✔</span>Keywords detected: <span className="font-bold text-text_primary mx-1">work, project, future</span>.</li>
        </ul>
      </div>
    </Card>
  );
};

export default AIAnalysis;
