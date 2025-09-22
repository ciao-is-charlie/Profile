import React from 'react';
import { LinkBlockData } from './types';
import Avatar from './components/Avatar';
import SocialLinks from './components/SocialLinks';
import Bio from './components/Bio';
import LinkBlock from './components/LinkBlock';
import { DiscordIcon } from './components/Icons';

const App: React.FC = () => {

  const linkBlocks: LinkBlockData[] = [
    {
      id: 2,
      title: '查理事務所',
      url: 'https://discord.gg/FB42uFa5Wd',
      imageUrl: 'https://cdn.midjourney.com/0ce2cb00-5d85-4405-ab59-77a7e9bc7b2e/0_0.png',
      rightIcon: <DiscordIcon />,
    },
    {
      id: 1,
      title: '作品集',
      url: '#',
      imageUrl: 'https://cdn.midjourney.com/42082cd4-64a9-460a-881a-1c6774a5d17b/0_0.png',
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 flex flex-col items-center justify-start sm:justify-center">
      <main className="w-full max-w-lg mx-auto bg-[#0D0D0D] rounded-3xl shadow-2xl shadow-red-500/10 overflow-hidden border border-white/10">
        <div className="relative">
          <Avatar imageUrl="https://cdn.midjourney.com/42082cd4-64a9-460a-881a-1c6774a5d17b/0_0.png" />
          <div className="absolute bottom-0 left-0 right-0 p-6 pt-24 bg-gradient-to-t from-[#0D0D0D] to-transparent flex flex-col items-center text-center">
            <h1 className="text-7xl bg-gradient-to-r from-red-400 via-rose-400 to-amber-300 bg-clip-text text-transparent font-fleur px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)', transform: 'translateY(15px)' }}>
              Charlie
            </h1>
            <div className="mt-4" style={{ transform: 'translateY(15px)' }}>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <Bio>
            Welcome to my digital space. I'm passionate about art, technology, and creating beautiful things. Feel free to explore my work and get in touch.
          </Bio>
          <div className="space-y-4">
            {linkBlocks.map((block) => (
              <LinkBlock key={block.id} {...block} />
            ))}
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-xs text-gray-500 mt-4">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;