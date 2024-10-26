import React from "react";
import { Badge, TrendingUp } from "lucide-react";

interface Trend {
  id: string;
  tag: string;
  posts: string;
  engagement: string;
  users: string[];
}

const trends: Trend[] = [
  {
    id: "1",
    tag: "GAMING",
    posts: "123K",
    engagement: "121.1M",
    users: ["/image.png", "/image.png", "/image.png"],
  },
  {
    id: "1",
    tag: "GAMING",
    posts: "123K",
    engagement: "121.1M",
    users: ["/image.png", "/image.png", "/image.png"],
  },
  {
    id: "1",
    tag: "GAMING",
    posts: "123K",
    engagement: "121.1M",
    users: ["/image.png", "/image.png", "/image.png"],
  },
  {
    id: "1",
    tag: "GAMING",
    posts: "123K",
    engagement: "121.1M",
    users: ["/image.png", "/image.png", "/image.png"],
  },

  {
    id: "1",
    tag: "GAMING",
    posts: "123K",
    engagement: "121.1M",
    users: ["/image.png", "/image.png", "/image.png"],
  },
  // Add more trends...
];

export const TrendsList = () => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-4">TRENDS</h2>
      <div className="space-y-2">
        {trends.map((trend) => (
          <div
            key={trend.id}
            className="flex items-center justify-between p-3 rounded-lg bg-[#232323] hover:bg-[#2A2A2A] cursor-pointer"
          >
            <div>
              <Badge className="bg-yellow-500/20 text-yellow-500">{trend.tag}</Badge>
              <div className="mt-1 text-sm text-gray-400">
                <span>{trend.posts} POSTS</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {trend.users.map((user, idx) => (
                  <img
                    key={idx}
                    src={user}
                    alt=""
                    className="w-6 h-6 rounded-full border-2 border-[#232323]"
                  />
                ))}
              </div>
              <span>{trend.engagement}</span>
              <TrendingUp className="w-4 h-4 text-yellow-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
