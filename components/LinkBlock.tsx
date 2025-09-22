import React, { useRef, useEffect, useState } from 'react';

interface LinkBlockProps {
  title: string;
  url: string;
  imageUrl?: string;
  rightIcon?: React.ReactNode;
  isIconBackground?: boolean;
}

const LinkBlock: React.FC<LinkBlockProps> = ({ title, url, imageUrl, rightIcon, isIconBackground }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const baseClasses = "relative flex items-center p-3 bg-transparent backdrop-blur-md rounded-full border border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 shadow-lg shadow-black/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 overflow-hidden";
  
  // These classes create the liquid light effect on a pseudo-element
  const liquidEffectClasses = `
    before:content-[''] 
    before:absolute 
    before:inset-0 
    before:rounded-full 
    before:bg-[radial-gradient(350px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_80%)]
    before:opacity-0 
    before:transition-opacity 
    before:duration-500
    hover:before:opacity-100
    hover:border-white/20
  `;

  return (
    <a
      ref={cardRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${liquidEffectClasses}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Icon: Rendered if isIconBackground is true, positioned on the right */}
      {isIconBackground && rightIcon && (
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-2/5 flex justify-center items-center z-0"
        >
          <div className="text-stone-400 w-48 h-48 opacity-10">
            {rightIcon}
          </div>
        </div>
      )}

      {/* Foreground Content Wrapper: ensures content is on top of the background */}
      <div className="relative z-10 flex items-center w-full">
        {imageUrl && (
          <div className="w-16 h-16 ml-1 mr-2 flex-shrink-0">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        )}
        <span className="font-semibold text-lg text-stone-200 flex-grow text-left pl-2">{title}</span>

        {/* Inline Icon: Rendered if isIconBackground is false */}
        {!isIconBackground && rightIcon && (
          <div className="ml-4 flex-shrink-0 pr-2">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <div className="text-stone-400 w-16 h-16 opacity-20">
                {rightIcon}
              </div>
            </div>
          </div>
        )}
      </div>
    </a>
  );
};

export default LinkBlock;