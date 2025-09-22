
import React, { useRef, useEffect } from 'react';

interface CharacterSectionProps {
  imageUrl: string;
  name: string;
  description: string;
  imagePosition?: 'left' | 'right';
}

const CharacterSection: React.FC<CharacterSectionProps> = ({ imageUrl, name, description, imagePosition = 'left' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

  const baseClasses = "relative bg-transparent backdrop-blur-md rounded-3xl border border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 shadow-lg shadow-black/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-[1.02] overflow-hidden";
  
  const liquidEffectClasses = `
    before:content-[''] 
    before:absolute 
    before:inset-0 
    before:rounded-3xl 
    before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_80%)]
    before:opacity-0 
    before:transition-opacity 
    before:duration-500
    hover:before:opacity-100
    hover:border-white/20
  `;

  return (
    <div
      ref={cardRef}
      className={`${baseClasses} ${liquidEffectClasses}`}
    >
      {/* Use flex-row-reverse for right-aligned image */}
      <div className={`flex items-stretch ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {/* Image is now flush left, with 4:5 aspect ratio and increased width */}
        <div className="w-2/5 flex-shrink-0 aspect-[4/5] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Padding is now applied only to the text container */}
        <div className="w-3/5 p-8">
           {/* Font size swapped with title */}
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-stone-300 mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterSection;