
import './dashboard.css'
import { Home, Volume2, Mic, Calendar, MapPin } from 'lucide-react'
import React, { useState, useRef, useEffect } from "react";
export const Dashboard = () => {
  const navItems = [
    { label: 'Home', icon: <Home />, active: true },
    { label: 'Speakers', icon: <Volume2 />, active: false },
    { label: 'Announcers', icon: <Mic />, active: false },
    { label: 'Schedule', icon: <Calendar />, active: false },
    { label: 'Zones', icon: <MapPin />, active: false },
  ]
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

    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef([]);
  
    const handleTabClick = (index) => {
      setActiveIndex(index);
    };
  
    useEffect(() => {
      // Scroll to the active tab background position when the activeIndex changes
      const activeTab = tabRefs.current[activeIndex];
      if (activeTab) {
        const bg = document.querySelector(".tab-button-backg");
        const { offsetLeft, offsetWidth } = activeTab;
        bg.style.left = `${offsetLeft - 7.5}px`;
        bg.style.width = `${offsetWidth+15}px`;
      }
    }, [activeIndex]);
  return (
    <>
    <div className="p-5 w-full">
      <div className="tab-wrap relative">
        <nav className="flex mt-5 items-center justify-start gap-4 px-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => handleTabClick(index)}
              className={`bg-white text-gray-700 hover:bg-gray-200 flex items-center gap-4 px-4 py-2 rounded-full font-bold tab-button ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full p-2 flex justify-center items-center ${
                  item.active
                    ? "bg-blue-400 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.icon}
              </span>
              <span className="font-bold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="tab-button-backg"></div>
        <div className="tab-card bg-white w-full mt-5 min-h-[500px] rounded-2xl p-4">
          <p>Content for Tab {activeIndex + 1}</p>
        </div>
      </div>
    </div>
    </>
  )
}
