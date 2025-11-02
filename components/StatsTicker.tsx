
import React from 'react';

const StatItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center mx-4">
    <span className="text-xl font-semibold uppercase tracking-wider">{text}</span>
    <span className="text-black text-2xl mx-4 font-gorditas">*</span>
  </div>
);

const StatsTicker: React.FC = () => {
  const items = [
    '80+ Team Members', '12+ Worldwide languages', '1520 + Project Completed', '1020+ Satisfied Clients',
  ];
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="bg-brand-lime text-black py-4 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex">
        {duplicatedItems.map((item, index) => (
          <StatItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
};

export default StatsTicker;
