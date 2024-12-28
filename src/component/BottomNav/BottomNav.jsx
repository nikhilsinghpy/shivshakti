import { CircleX, List, Music, Play, Volume1, Volume2, VolumeOff } from "lucide-react";
import React from "react";
import Polygon from "../../assets/Polygon 2.png"
export const BottomNav = () => {
  return (
    <div
      className="fixed bottom-5 left-65 w-[800px] bg-gray-800 shadow-lg rounded-2xl p-3 flex gap-2"
      style={{ zIndex: 600, left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="button-item w-full min-h-[50px] flex items-center justify-center flex-col border-r-1 border-gray-600">
        <button className="bg-[#EE786C] text-white p-2 rounded-full"><CircleX /></button>
        <p className="text-white font-[500] text-[12px] mt-2">Hang Up</p>
      </div>
      <div className="button-item w-full min-h-[50px] flex items-center justify-center flex-col border-r-1 border-gray-600">
        <button className="bg-[#FEC610] text-white p-2 rounded-full"><Play /></button>
        <p className="text-white font-[500] text-[12px] mt-2">Quick Play</p>
      </div>
      <div className="button-item w-full min-h-[50px] flex items-center justify-center flex-col border-r-1 border-gray-600">
        <button className="bg-[#D9D9D91C] text-white p-2 rounded-full"><List /></button>
        <p className="text-white font-[500] text-[12px] mt-2">Playlist</p>
      </div>

      <div className="button-item w-full min-h-[50px] flex items-center justify-center flex-col border-r-1 border-gray-600">
        <button className="bg-[#D9D9D91C] text-white p-2 rounded-full"><Music /></button>
        <p className="text-white font-[500] text-[12px] mt-2">Audio list</p>
      </div>
      <div className="button-item w-full min-h-[50px] flex items-center justify-center flex-col border-r-1 border-gray-600">
        <button className="bg-[#D9D9D91C] text-white p-2 rounded-full"><Volume1 /></button>
        <p className="text-white font-[500] text-[12px] mt-2">Volume</p>
      </div>
      <div className="button-item w-full min-h-[50px] flex items-center justify-center flex-col border-r-1 border-gray-600">
        <button className="bg-[#D9D9D91C] text-white p-2 rounded-full"><Volume2 /></button>
        <p className="text-white font-[500] text-[12px] mt-2">All Volume</p>
      </div>
      <div className="button-item w-full min-h-[50px] flex items-center justify-center flex-col ">
        <button className="bg-[#D9D9D91C] text-white p-2 rounded-full"><VolumeOff /></button>
        <p className="text-white font-[500] text-[12px] mt-2">Silent time</p>
      </div>
    </div>
  );
};
