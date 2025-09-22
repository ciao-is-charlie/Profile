import React from 'react';

interface LinkBlockProps {
  title: string;
  url: string;
  imageUrl?: string;
  rightIcon?: React.ReactNode;
}

const LinkBlock: React.FC<LinkBlockProps> = ({ title, url, imageUrl, rightIcon }) => {
  
  const RightContent = () => {
    if (rightIcon) {
      return (
        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
          <div className="text-stone-400 w-8 h-8">
            {rightIcon}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 bg-zinc-900/80 rounded-xl hover:bg-zinc-800/90 border border-zinc-800/80 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    >
      {imageUrl && (
        <div className="w-12 h-12 mr-4 flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <span className="font-semibold text-stone-200 flex-grow text-left">{title}</span>
      <div className="ml-4 flex-shrink-0">
        <RightContent />
      </div>
    </a>
  );
};

export default LinkBlock;