import React from 'react';
import {
  CircleX,
  List,
  Music,
  Play,
  Volume1,
  Volume2,
  VolumeOff,
} from 'lucide-react';
import './BottomNav.css'; // Assuming styles are in a separate CSS file

export const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="button-item">
        <button className="button bg-red">
          <CircleX />
        </button>
        <p>Hang Up</p>
      </div>
      <div className="button-item">
        <button className="button bg-yellow">
          <Play />
        </button>
        <p>Quick Play</p>
      </div>
      <div className="button-item">
        <button className="button bg-light">
          <List />
        </button>
        <p>Playlist</p>
      </div>
      <div className="button-item">
        <button className="button bg-light">
          <Music />
        </button>
        <p>Audio list</p>
      </div>
      <div className="button-item">
        <button className="button bg-light">
          <Volume1 />
        </button>
        <p>Volume</p>
      </div>
      <div className="button-item">
        <button className="button bg-light">
          <Volume2 />
        </button>
        <p>All Volume</p>
      </div>
      <div className="button-item">
        <button className="button bg-light">
          <VolumeOff />
        </button>
        <p>Silent time</p>
      </div>
    </div>
  );
};
