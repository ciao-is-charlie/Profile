import React from 'react';

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return (
    <div className="w-full aspect-[4/5] overflow-hidden">
      <img
        src={imageUrl}
        alt="Profile Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;