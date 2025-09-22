
import React from 'react';

interface BioProps {
  children: React.ReactNode;
}

const Bio: React.FC<BioProps> = ({ children }) => {
  return (
    <div className="border-l-2 border-red-500/50 pl-4">
      <p className="text-stone-300 leading-relaxed">
        {children}
      </p>
    </div>
  );
};

export default Bio;
