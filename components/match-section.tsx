import { X, Heart } from "lucide-react";
import React from "react";

interface MatchUser {
  id: string;
  username: string;
  avatar: string;
  tags: string[];
}

const matchUsers: MatchUser[] = [
  {
    id: "1",
    username: "@JOHN.DOE",
    avatar: "/image.png",
    tags: ["GAMING", "TECH"],
  },
  {
    id: "2",
    username: "@JOHN.DOE",
    avatar: "/image.png",
    tags: ["GAMING", "TECH", "MUSIC"],
  },
  {
    id: "3",
    username: "@JOHN.DOE",
    avatar: "/image.png",
    tags: ["GAMING", "TECH"],
  },
  {
    id: "4",
    username: "@JOHN.DOE",
    avatar: "/image.png",
    tags: ["GAMING", "TECH"],
  },
  {
    id: "5",
    username: "@JOHN.DOE",
    avatar: "/image.png",
    tags: ["GAMING", "TECH"],
  },
];

export const MatchSection = () => {
  return (
    <div className="w-[452px] h-[392px] bg-[#1D1D1D] border border-[#333333]">
      {/* Header */}
      <div className="w-full h-[52px] border-b border-[#333333] flex items-center justify-center">
        <h2 className="font-['SF_Pro_Text'] text-2xl font-medium text-[#E5E5E5] uppercase">
          Match
        </h2>
      </div>

      {/* Match List */}
      <div className="w-full">
        {matchUsers.map((user) => (
          <div key={user.id} className="w-full h-[68px] flex items-center px-4">
            {/* Avatar */}
            <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
              <img src={user.avatar} alt="" className="w-full h-full object-cover" />
            </div>

            {/* User Info */}
            <div className="ml-4">
              <p className="font-['SF_Pro_Text'] text-sm text-[#EBCF83] uppercase">
                {user.username}
              </p>
              <div className="flex gap-1 mt-1">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="h-4 px-3 bg-[#EBCF83] rounded-lg text-xs font-normal uppercase leading-4 text-[#1A1A1A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center gap-4">
              <button className="w-8 h-8 rounded-full bg-[#939393] flex items-center justify-center">
                <X className="w-4 h-4 text-[#1A1A1A]" />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#EBCF83] flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#1A1A1A]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchSection;
