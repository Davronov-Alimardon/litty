import React from 'react';
import { Badge } from './ui/badge';
import { Flame } from 'lucide-react';

interface User {
  id: string;
  name: string;
  username: string;
  followers: string;
  tags: string[];
}

const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    username: '@JOHN.DOE',
    followers: '77.8K',
    tags: ['GAMING', 'TECH']
  },
  {
    id: '1',
    name: 'John Doe',
    username: '@JOHN.DOE',
    followers: '77.8K',
    tags: ['GAMING', 'TECH']
  },
  {
    id: '1',
    name: 'John Doe',
    username: '@JOHN.DOE',
    followers: '77.8K',
    tags: ['GAMING', 'TECH']
  },
  // Add more users...
];

export const UserList = () => {
  return (
    <div className="space-y-2">
      {users.map(user => (
        <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-[#232323] hover:bg-[#2A2A2A] cursor-pointer">
          <div className="flex items-center gap-3">
            <img src="/image.png" alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">{user.username}</p>
              <div className="flex gap-1">
                {user.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-yellow-500/20 text-yellow-500">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>{user.followers}</span>
            <Flame className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      ))}
    </div>
  );
};