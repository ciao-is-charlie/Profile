
import React from 'react';
import { ThreadsIcon } from './Icons';
import { SocialLink } from '../types';

// A helper to get the right icon component based on the name
const getSocialIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'threads':
      return <ThreadsIcon className="w-6 h-6" />;
    // Add other social icons here in the future
    default:
      return null;
  }
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex items-center space-x-4">
      {links.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-300 hover:text-white transition-colors duration-300"
          aria-label={`${link.name} Profile`}
        >
          {getSocialIcon(link.name)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
