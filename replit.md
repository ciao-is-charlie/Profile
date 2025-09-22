# Personal Profile Card

## Overview
This is a React + TypeScript + Vite personal profile application that displays a beautiful profile card with user information, social links, bio, and character gallery. The project was imported from GitHub and configured to run in the Replit environment.

## Recent Changes (2025-09-22)
- Fixed syntax error in vite.config.ts
- Installed Node.js dependencies 
- Configured Vite for Replit environment:
  - Set host to 0.0.0.0 for proxy compatibility
  - Set port to 5000 (required for Replit)
  - Removed GitHub Pages base path configuration
- Updated HTML script source path
- Set up Frontend workflow running on port 5000

## Project Architecture
- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (via CDN)
- **Fonts**: Google Fonts (Cactus Classical Serif, Fleur De Leah, Passions Conflict)
- **Data**: Static JSON file with profile information

## Project Structure
- `App.tsx` - Main application component
- `components/` - React components (Avatar, Bio, LinkBlock, SocialLinks, CharacterSection, Icons)
- `data.json` - Profile data and configuration
- `index.html` - HTML template with Tailwind and fonts
- `index.tsx` - React app entry point
- `vite.config.ts` - Vite configuration for development server

## User Preferences
- Clean, elegant design with gradient text effects
- Character gallery with alternating left/right image positions
- Social media integration
- Responsive design for mobile and desktop

## Development
- Run `npm run dev` to start development server
- Server runs on port 5000 (configured for Replit)
- Hot module reloading enabled