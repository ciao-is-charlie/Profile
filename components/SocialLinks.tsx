import React from 'react';
import { ThreadsIcon } from './Icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center">
      <a
        href="https://www.threads.com/@ciao.is.charlie" // Replace with your Threads profile URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-300 hover:text-white transition-colors duration-300"
        aria-label="Threads Profile"
      >
        <ThreadsIcon className="w-7 h-7" />
      </a>
    </div>
  );
};

export default SocialLinks;