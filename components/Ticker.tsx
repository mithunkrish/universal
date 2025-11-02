
import React from 'react';

const TickerItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center mx-4">
    <span className="text-xl font-semibold uppercase tracking-wider">{text}</span>
    <span className="text-brand-lime text-2xl mx-4 font-gorditas">*</span>
  </div>
);

const Ticker: React.FC = () => {
  const items = [
    'Application Design', 'Website Design & Logo', 'UI/UX Mobile Design',
    'Business Branding', 'Mobile Application Design', 'UI/UX Mobile Design'
  ];
  const duplicatedItems = [...items, ...items];

  return (
    <div className="bg-brand-lime text-black py-4 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex">
        {duplicatedItems.map((item, index) => (
          <TickerItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
};

export default Ticker;
