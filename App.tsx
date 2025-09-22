
import React, { useState, useEffect } from 'react';
import { LinkBlockData, SocialLink } from './types.ts';
import Avatar from './components/Avatar.tsx';
import SocialLinks from './components/SocialLinks.tsx';
import Bio from './components/Bio.tsx';
import LinkBlock from './components/LinkBlock.tsx';
import { DiscordIcon } from './components/Icons.tsx';
import CharacterSection from './components/CharacterSection.tsx';

// A helper function to map icon strings from data.json to actual components
const getIconComponent = (iconName?: string): React.ReactNode | null => {
  if (iconName === 'discord') {
    return <DiscordIcon />;
  }
  return null;
};

// Define a type for a single character
interface CharacterData {
  imageUrl: string;
  name: string;
  description: string;
  imagePosition?: 'left' | 'right';
}

// Define a type for our main data structure
interface AppData {
  profile: {
    name: string;
    avatarUrl: string;
  };
  socials: SocialLink[];
  bio: string;
  links: Omit<LinkBlockData, 'rightIcon' | 'isIconBackground'>[];
  characters: CharacterData[];
}

const App: React.FC = () => {
  const [appData, setAppData] = useState<AppData | null>(null);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setAppData(data))
      .catch((error) => console.error("Could not fetch data:", error));
  }, []);

  // Show a loading state until the data is fetched
  if (!appData) {
    return (
      <div className="min-h-screen text-white p-4 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Transform link data to include the icon component
  const linkBlocks: LinkBlockData[] = appData.links.map(link => ({
    ...link,
    rightIcon: getIconComponent(link.icon),
    isIconBackground: !!link.icon,
  }));

  return (
    <div className="min-h-screen text-white p-4 flex flex-col items-center justify-start sm:justify-center">
      <main className="w-full max-w-lg mx-auto bg-[#0b0d1a] rounded-3xl shadow-2xl shadow-violet-500/10 overflow-hidden border border-white/10">
        <div className="relative">
          <Avatar imageUrl={appData.profile.avatarUrl} />
          <div className="absolute bottom-0 left-0 right-0 p-6 pt-24 bg-gradient-to-t from-[#0b0d1a] to-transparent flex flex-col items-center text-center">
            <h1 className="text-8xl bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent font-fleur px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)', transform: 'translateY(15px)' }}>
              {appData.profile.name}
            </h1>
            <div className="mt-4" style={{ transform: 'translateY(15px)' }}>
              <SocialLinks links={appData.socials} />
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <Bio>
            {appData.bio}
          </Bio>
          <div className="space-y-4">
            {linkBlocks.map((block) => (
              <LinkBlock key={block.id} {...block} />
            ))}
          </div>

          {appData.characters && appData.characters.length > 0 && (
            <div className="pt-4 space-y-4">
              <h2 className="text-5xl font-passions text-stone-200 border-b border-white/10 pb-3 mb-6 tracking-wider text-center">
                Characters
              </h2>
              {appData.characters.map((character, index) => (
                <CharacterSection 
                  key={index}
                  imageUrl={character.imageUrl}
                  name={character.name}
                  description={character.description}
                  imagePosition={character.imagePosition}
                />
              ))}
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default App;