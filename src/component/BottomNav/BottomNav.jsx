import React from 'react'
import {
    PhoneOff,
    PlayCircle,
    List,
    Music,
    Volume,
    Volume2,
    VolumeX,
  } from "lucide-react";
export const BottomNav = () => {
  return (
    <div className="fixed bottom-5 left-50 w-[800px] bg-gray-800 shadow-lg rounded-lg " style={{zIndex: 600}}>
      <div className="flex justify-around items-center py-3 px-4">
        {/* Hang up */}
        <div className="flex flex-col items-center">
          <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600">
            <PhoneOff size={24} />
          </button>
          <span className="text-white text-sm mt-1">Hang up</span>
        </div>

        {/* Quick play */}
        <div className="flex flex-col items-center">
          <button className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600">
            <PlayCircle size={24} />
          </button>
          <span className="text-white text-sm mt-1">Quick play</span>
        </div>

        {/* Playlist */}
        <div className="flex flex-col items-center">
          <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600">
            <List size={24} />
          </button>
          <span className="text-white text-sm mt-1">Playlist</span>
        </div>

        {/* Audio fit */}
        <div className="flex flex-col items-center">
          <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600">
            <Music size={24} />
          </button>
          <span className="text-white text-sm mt-1">Audio fit</span>
        </div>

        {/* Volume */}
        <div className="flex flex-col items-center">
          <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600">
            <Volume size={24} />
          </button>
          <span className="text-white text-sm mt-1">Volume</span>
        </div>

        {/* All volume */}
        <div className="flex flex-col items-center">
          <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600">
            <Volume2 size={24} />
          </button>
          <span className="text-white text-sm mt-1">All volume</span>
        </div>

        {/* Silent time */}
        <div className="flex flex-col items-center">
          <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600">
            <VolumeX size={24} />
          </button>
          <span className="text-white text-sm mt-1">Silent time</span>
        </div>
      </div>
    </div>
  )
}
