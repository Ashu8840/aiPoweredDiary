
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-6 border-b border-slate-700 pb-4">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
