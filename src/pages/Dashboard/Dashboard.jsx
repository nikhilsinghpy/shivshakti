import React from 'react'
import './dashboard.css'
import { Home, Volume2, Mic, Calendar, MapPin } from "lucide-react";
export const Dashboard = () => {

  const navItems = [
    { label: "Home", icon: <Home />, active: true },
    { label: "Speakers", icon: <Volume2 />, active: false },
    { label: "Announcers", icon: <Mic />, active: false },
    { label: "Schedule", icon: <Calendar />, active: false },
    { label: "Zones", icon: <MapPin />, active: false },
  ];
  // const cards = [

  //   {
  //     title: "Speakers",
  //     online: 27,
  //     offline: 10,
  //     bgColor: "bg-blue-400",
  //     icon: "🔊",
  //   },
  //   {
  //     title: "Announcers",
  //     online: 27,
  //     offline: 10,
  //     bgColor: "bg-green-400",
  //     icon: "🎤",
  //   },
  //   {
  //     title: "Schedules",
  //     online: 27,
  //     offline: 10,
  //     bgColor: "bg-lime-300",
  //     icon: "📅",
  //   },
  //   {
  //     title: "Zones",
  //     online: 27,
  //     offline: 10,
  //     bgColor: "bg-sky-200",
  //     icon: "📡",
  //   },
  // ];
  return (
    <div className="p-5 w-full">
      <div className="tab-wrap">
        <nav className="flex mt-5 items-center justify-start gap-4 ">
            {navItems.map((item, index) => (
              <button className={`bg-white text-gray-700 hover:bg-gray-200 flex items-center gap-4 px-4 py-2 rounded-full font-bold tab-button ${item.active ? 'active' : ''}`}>
                <span className={`w-8 h-8  rounded-full  p-2 flex justify-center items-center ${item.active ? 'bg-blue-400 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>{item.icon}</span>
                <span className="font-bold">{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="tab-card bg-white w-full mt-5 min-h-[500px] rounded-2xl p-4">
          </div>
      </div>
    </div>
  )
}

{/* <button
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  item.active
                    ? 'bg-grey-400 '
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button> */}