import React from 'react';

export interface LinkBlockData {
  id: number;
  title: string;
  url: string;
  imageUrl?: string;
  rightIcon?: React.ReactNode;
}
