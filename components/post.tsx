import React from "react";
import { MoreHorizontal, Flame, Search, Trophy, Bookmark } from "lucide-react";

export const Post = () => {
  return (
    <div className="w-[608px] mx-auto min-h-[782px] bg-[#1D1D1D] border border-[#333333]">
      {/* Header */}
      <div className="h-12 bg-[#1D1D1D] px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
            <img src="/image.png" alt="" className="w-full h-full object-cover" />
          </div>
          <span className="text-[11px] font-bold text-[#EBCF83]">tyrantlabel</span>
        </div>
        <button>
          <MoreHorizontal className="w-8 h-8 text-[#EBCF83]" />
        </button>
      </div>

      {/* Main Image */}
      <div className="w-full h-[512px] relative">
        <img src="/image2.png" alt="" className="w-full h-full object-cover" />
        <button className="absolute bottom-8 left-1/2 -translate-x-1/2 h-8 px-4 bg-[#EBCF83] rounded-2xl flex items-center">
          <span className="text-[11px] font-bold uppercase text-black ml-6">Go to Store</span>
        </button>
      </div>

      {/* Action Bar */}
      <div className="h-[86px] px-4">
        <div className="flex items-center mt-4 mb-8">
          <div className="flex items-center flex-1">
            <Flame className="w-4 h-4 text-[#EBCF83] mr-2" />
            <Search className="w-4 h-4 text-[#EBCF83] transform -scale-x-100" />
            <Bookmark className="w-4 h-4 text-[#EBCF83] ml-auto" />
          </div>
        </div>
        {/* Dots */}
        <div className="flex gap-1 justify-center">
          <div className="w-1 h-1 rounded-full bg-[#EBCF83]" />
          <div className="w-1 h-1 rounded-full bg-[#EBCF83] opacity-50" />
          <div className="w-1 h-1 rounded-full bg-[#EBCF83] opacity-50" />
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2 justify-end mt-2">
          <button className="w-10 h-8 bg-[#7F00AB] bg-gradient-to-t from-[#7F00AB] to-[rgba(127,0,171,0.25)] rounded-2xl flex items-center justify-center">
            <Trophy className="w-4 h-4 text-[#EBCF83]" />
          </button>
          <button className="w-10 h-8 bg-[#EBCF83] rounded-2xl flex items-center justify-center">
            <span className="text-black text-[11px] font-bold">$</span>
          </button>
          <button className="w-10 h-8 bg-[#EBCF83] rounded-2xl flex items-center justify-center">
            <span className="text-[11px] font-bold text-black">→</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        <p className="text-[#EBCF83] text-[11px] font-bold">190 likes</p>
        <div className="mt-4 space-y-4">
          <p className="text-[#EBCF83] text-[11px] font-semibold">
            <span className="font-bold">tyrantlabel</span> We are launching our new online store and
            music network app ... <span className="text-[#EBCF83]/50">more</span>
          </p>
          <p className="text-[#EBCF83]/50 text-[11px] font-medium">View all 53 comments</p>
          <div className="space-y-2">
            <p className="text-[#EBCF83] text-[11px] font-bold">
              randomguy123 This is a random comment to display under a post.
              <span className="float-right">
                <span className="text-[9px] text-[#EBCF83]/50 mr-1">23</span>
                <Flame className="w-4 h-4 text-[#EBCF83] inline" />
              </span>
            </p>
            <p className="text-[#EBCF83] text-[11px] font-bold">
              randomguy123 This is a random comment to display under a post.
            </p>
          </div>
          <p className="text-[#EBCF83]/50 text-[11px] font-light uppercase">14 hours ago</p>
        </div>
      </div>

      {/* Comment Input */}
      <div className="h-12 border-t border-[#333333] mt-4 px-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          className="bg-transparent text-[11px] text-[#E5E5E5] placeholder-[#E5E5E5] outline-none"
        />
        <button className="text-[11px] font-semibold text-[#EBCF83]">Post</button>
      </div>
    </div>
  );
};

export default Post;
