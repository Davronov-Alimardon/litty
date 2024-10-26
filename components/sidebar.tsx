import React from 'react';
import { Flame } from 'lucide-react';
import { UserList } from './user-list';
import { TrendsList } from './trends-list';

export const Sidebar = () => {
  return (
    <div className="w-[452px] border-r border-gray-800 p-4 h-screen">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="w-6 h-6 text-yellow-500" />
        <h1 className="text-lg font-bold">WHO'S LITTY</h1>
      </div>
      <UserList />
      <TrendsList />
    </div>
  );
};