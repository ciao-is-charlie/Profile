
import React from 'react';

export interface LinkBlockData {
  id: number;
  title: string;
  url: string;
  imageUrl?: string;
  icon?: string; // Icon name from data.json
  rightIcon?: React.ReactNode; // The actual component to render
  isIconBackground?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
}
