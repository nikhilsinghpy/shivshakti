import React, { useState } from 'react'
import {
  CircleX,
  List,
  Music,
  Play,
  Volume1,
  Volume2,
  VolumeOff,
} from 'lucide-react'
import './BottomNav.css'
import PopupDialog from '../PopupDialog/PopupDialog '

export const BottomNav = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [view, setView] = useState('Default Title')
  const [title, setTitle] = useState('Default Title')

  const handleButtonClick = (form) => {
    setIsDialogOpen(true)
    setView(form)
    setTitle(form) // Update title with the selected form
  }

  const renderForm = () => {
    switch (view) {
      case 'Hang Up':
        return <h1>Call Ended</h1>
      case 'Quick Play':
        return <h1>Playing Now</h1>
      case 'Playlist':
        return <h1>Your Playlist</h1>
      case 'Audio list':
        return <h1>Audio List</h1>
      case 'Speaker volume':
        return <h1>Adjust Speaker Volume</h1>
      case 'All Speakers volume':
        return <h1>Adjust All Speakers Volume</h1>
      case 'Silent time':
        return <h1>Silence Activated</h1>
      default:
        return <h1>404 - Page Not Found</h1>
    }
  }

  return (
    <>
      <div className="bottom-nav">
        <div className="button-item">
          <button
            className="button bg-red"
            onClick={() => handleButtonClick('Hang Up')}
          >
            <CircleX />
          </button>
          <p>Hang Up</p>
        </div>
        <div className="button-item">
          <button
            className="button bg-yellow"
            onClick={() => handleButtonClick('Quick Play')}
          >
            <Play />
          </button>
          <p>Quick Play</p>
        </div>
        <div className="button-item">
          <button
            className="button bg-light"
            onClick={() => handleButtonClick('Playlist')}
          >
            <List />
          </button>
          <p>Playlist</p>
        </div>
        <div className="button-item">
          <button
            className="button bg-light"
            onClick={() => handleButtonClick('Audio list')}
          >
            <Music />
          </button>
          <p>Audio list</p>
        </div>
        <div className="button-item">
          <button
            className="button bg-light"
            onClick={() => handleButtonClick('Speaker volume')}
          >
            <Volume1 />
          </button>
          <p>Volume</p>
        </div>
        <div className="button-item">
          <button
            className="button bg-light"
            onClick={() => handleButtonClick('All Speakers volume')}
          >
            <Volume2 />
          </button>
          <p>All Volume</p>
        </div>
        <div className="button-item">
          <button
            className="button bg-light"
            onClick={() => handleButtonClick('Silent time')}
          >
            <VolumeOff />
          </button>
          <p>Silent time</p>
        </div>
      </div>
      <PopupDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={title}
        height="40vh"
        width="40vw"
      >
        {renderForm()}
      </PopupDialog>
    </>
  )
}
