import React from 'react';
import { Post } from './post';
import { Plus } from 'lucide-react';

export const MainContent = () => {
  return (
    <div className="flex-1 border-r border-gray-800">
      <div className="flex overflow-x-auto p-4 gap-2 border-b border-gray-800">
        <div className="w-16 h-16 rounded-full bg-[#232323] flex items-center justify-center cursor-pointer">
          <Plus className="w-6 h-6" />
        </div>
        {/* Story circles */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="w-16 h-16 rounded-full bg-[#232323] flex-shrink-0" />
        ))}
      </div>
      <Post />
    </div>
  );
};