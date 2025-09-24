(() => {
    const { useState, useEffect, useRef, StrictMode, createElement: e } = React;

    const ThreadsIcon = (props) => (
      e('svg', { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 878 1000", xmlSpace: "preserve", ...props },
          e('g', null,
              e('path', { fill: "currentColor", d: "M446.7,1000h-0.3c-149.2-1-263.9-50.2-341-146.2C36.9,768.3,1.5,649.4,0.3,500.4v-0.7 c1.2-149.1,36.6-267.9,105.2-353.4C182.5,50.2,297.3,1,446.4,0h0.3h0.3c114.4,0.8,210.1,30.2,284.4,87.4 c69.9,53.8,119.1,130.4,146.2,227.8l-85,23.7c-46-165-162.4-249.3-346-250.6c-121.2,0.9-212.9,39-272.5,113.2 C118.4,271,89.6,371.4,88.5,500c1.1,128.6,29.9,229,85.7,298.5c59.6,74.3,151.3,112.4,272.5,113.2c109.3-0.8,181.6-26.3,241.7-85.2 c68.6-67.2,67.4-149.7,45.4-199.9c-12.9-29.6-36.4-54.2-68.1-72.9c-8,56.3-25.9,101.9-53.5,136.3c-36.9,45.9-89.2,71-155.4,74.6 c-50.1,2.7-98.4-9.1-135.8-33.4c-44.3-28.7-70.2-72.5-73-123.5c-2.7-49.6,17-95.2,55.4-128.4c36.7-31.7,88.3-50.3,149.3-53.8 c44.9-2.5,87-0.5,125.8,5.9c-5.2-30.9-15.6-55.5-31.2-73.2c-21.4-24.4-54.5-36.8-98.3-37.1c-0.4,0-0.8,0-1.2,0 c-35.2,0-83,9.7-113.4,55L261.2,327c40.8-60.6,107-94,186.6-94c0.6,0,1.2,0,1.8,0c133.1,0.8,212.4,82.3,220.3,224.5 c4.5,1.9,9,3.9,13.4,5.9c62.1,29.2,107.5,73.4,131.4,127.9c33.2,75.9,36.3,199.6-64.5,298.3C673.1,965,579.6,999.1,447,1000 L446.7,1000L446.7,1000z M488.5,512.9c-10.1,0-20.3,0.3-30.8,0.9c-76.5,4.3-124.2,39.4-121.5,89.3c2.8,52.3,60.5,76.6,116,73.6 c51-2.7,117.4-22.6,128.6-154.6C552.6,516,521.7,512.9,488.5,512.9z" }))
      )
    );
    const DiscordIcon = (props) => (
      e('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 126.644 96", fill: "currentColor", ...props },
          e('path', { d: "M81.15,0c-1.2376,2.1973-2.3489,4.4704-3.3591,6.794-9.5975-1.4396-19.3718-1.4396-28.9945,0-.985-2.3236-2.1216-4.5967-3.3591-6.794-9.0166,1.5407-17.8059,4.2431-26.1405,8.0568C2.779,32.5304-1.6914,56.3725.5312,79.8863c9.6732,7.1476,20.5083,12.603,32.0505,16.0884,2.6014-3.4854,4.8998-7.1981,6.8698-11.0623-3.738-1.3891-7.3497-3.1318-10.8098-5.1523.9092-.6567,1.7932-1.3386,2.6519-1.9953,20.281,9.547,43.7696,9.547,64.0758,0,.8587.7072,1.7427,1.3891,2.6519,1.9953-3.4601,2.0457-7.0718,3.7632-10.835,5.1776,1.97,3.8642,4.2683,7.5769,6.8698,11.0623,11.5419-3.4854,22.3769-8.9156,32.0509-16.0631,2.626-27.2771-4.496-50.9172-18.817-71.8548C98.9811,4.2684,90.1918,1.5659,81.1752.0505l-.0252-.0505ZM42.2802,65.4144c-6.2383,0-11.4159-5.6575-11.4159-12.6535s4.9755-12.6788,11.3907-12.6788,11.5169,5.708,11.4159,12.6788c-.101,6.9708-5.026,12.6535-11.3907,12.6535ZM84.3576,65.4144c-6.2637,0-11.3907-5.6575-11.3907-12.6535s4.9755-12.6788,11.3907-12.6788,11.4917,5.708,11.3906,12.6788c-.101,6.9708-5.026,12.6535-11.3906,12.6535Z" })
      )
    );

    const Avatar = ({ imageUrl }) => {
      return e('div', { className: "w-full aspect-[4/5] overflow-hidden" },
        e('img', { src: imageUrl, alt: "Profile Avatar", className: "w-full h-full object-cover" })
      );
    };

    const getSocialIcon = (name) => {
      switch (name.toLowerCase()) {
        case 'threads':
          return e(ThreadsIcon, { className: "w-6 h-6" });
        default:
          return null;
      }
    };

    const SocialLinks = ({ links }) => {
      return e('div', { className: "flex items-center space-x-4" },
        links.map(link =>
          e('a', {
            key: link.name,
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-stone-300 hover:text-white transition-colors duration-300",
            'aria-label': `${link.name} Profile`
          }, getSocialIcon(link.name))
        )
      );
    };

    const Bio = ({ children }) => {
      return e('div', { className: "border-l-2 border-red-500/50 pl-4" },
        e('p', { className: "text-stone-300 leading-relaxed whitespace-pre-line" }, children)
      );
    };

    const LinkBlock = ({ id, title, url, imageUrl, rightIcon, isIconBackground }) => {
      const cardRef = useRef(null);
      const isGlassButton = id === 1;

      useEffect(() => {
        if (isGlassButton || !cardRef.current) return;
        
        const card = cardRef.current;
        const handleMouseMove = (e) => {
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
      }, [isGlassButton]);

      let linkClasses;
      if (isGlassButton) {
        linkClasses = "liquid-glass-button w-full relative flex items-center overflow-hidden";
      } else {
        linkClasses = "relative flex items-center p-3 bg-transparent backdrop-blur-md rounded-full border border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 shadow-lg shadow-black/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 overflow-hidden liquid-effect-base liquid-link";
      }
      
      return e('a', {
          ref: cardRef,
          href: url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: linkClasses
        },
        isIconBackground && rightIcon && e('div', {
          'aria-hidden': "true",
          className: "absolute inset-y-0 right-0 w-2/5 flex justify-center items-center z-0"
        }, e('div', { className: "text-stone-400 w-48 h-48 opacity-10" }, rightIcon)),
        e('div', { className: "relative z-10 flex items-center w-full" },
          imageUrl && e('div', { className: `w-16 h-16 ${isGlassButton ? '' : 'ml-1'} mr-2 flex-shrink-0` },
            e('img', { src: imageUrl, alt: title, className: "w-full h-full object-cover rounded-full" })
          ),
          e('span', { className: `font-semibold text-lg text-stone-200 flex-grow text-left ${isGlassButton ? '' : 'pl-2'}` }, title),
          !isIconBackground && rightIcon && e('div', { className: "ml-4 flex-shrink-0 pr-2" },
            e('div', { className: "w-16 h-16 flex-shrink-0 flex items-center justify-center" },
              e('div', { className: "text-stone-400 w-16 h-16 opacity-20" }, rightIcon)
            )
          )
        )
      );
    };

    const CharacterSection = ({ imageUrl, name, description, imagePosition = 'left' }) => {
      const cardRef = useRef(null);
      useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const handleMouseMove = (e) => {
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
      
      return e('div', {
          ref: cardRef,
          className: `${baseClasses} liquid-effect-base liquid-character-card`
        },
        e('div', { className: `flex items-stretch ${imagePosition === 'right' ? 'flex-row-reverse' : ''}` },
          e('div', { className: "w-2/5 flex-shrink-0 aspect-[4/5] overflow-hidden" },
            e('img', { src: imageUrl, alt: name, className: "w-full h-full object-cover" })
          ),
          e('div', { className: "w-3/5 p-8" },
            e('h3', { className: "text-xl font-bold text-white" }, name),
            e('p', { className: "text-stone-300 mt-2 leading-relaxed" }, description)
          )
        )
      );
    };

    const getIconComponent = (iconName) => {
      if (iconName === 'discord') {
        return e(DiscordIcon);
      }
      return null;
    };

    const App = () => {
      const [appData, setAppData] = useState(null);

      useEffect(() => {
        fetch('./data.json')
          .then((res) => res.json())
          .then((data) => setAppData(data))
          .catch((error) => console.error("Could not fetch data:", error));
      }, []);

      if (!appData) {
        return e('div', { className: "min-h-screen text-white p-4 flex items-center justify-center" }, "Loading...");
      }

      const linkBlocks = appData.links.map(link => ({
        ...link,
        rightIcon: getIconComponent(link.icon),
        isIconBackground: !!link.icon,
      }));

      return e('div', { className: "min-h-screen text-white p-4 flex flex-col items-center justify-start sm:justify-center" },
        e('main', { className: "w-full max-w-lg mx-auto bg-[#0b0d1a] rounded-3xl shadow-2xl shadow-violet-500/10 overflow-hidden border border-white/10" },
          e('div', { className: "relative" },
            e(Avatar, { imageUrl: appData.profile.avatarUrl }),
            e('div', { className: "absolute bottom-0 left-0 right-0 p-6 pt-24 bg-gradient-to-t from-[#0b0d1a] to-transparent flex flex-col items-center text-center" },
              e('h1', { className: "text-8xl bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent font-fleur px-4", style: { textShadow: '0 2px 10px rgba(0,0,0,0.3)', transform: 'translateY(15px)' } }, appData.profile.name),
              e('div', { className: "mt-4", style: { transform: 'translateY(15px)' } },
                e(SocialLinks, { links: appData.socials })
              )
            )
          ),
          e('div', { className: "p-6 space-y-6" },
            e(Bio, null, appData.bio),
            e('div', { className: "space-y-4" },
              linkBlocks.map((block) => e(LinkBlock, { key: block.id, ...block }))
            ),
            appData.characters && appData.characters.length > 0 && e('div', { className: "pt-4 space-y-4" },
              e('h2', { className: "text-5xl font-passions text-stone-200 border-b border-white/10 pb-3 mb-6 tracking-wider text-center" }, "Characters"),
              appData.characters.map((character, index) =>
                e(CharacterSection, {
                  key: index,
                  imageUrl: character.imageUrl,
                  name: character.name,
                  description: character.description,
                  imagePosition: character.imagePosition
                })
              )
            )
          )
        )
      );
    };

    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error("Could not find root element to mount to");
    }
    const root = ReactDOM.createRoot(rootElement);
    root.render(e(StrictMode, null, e(App)));
})();