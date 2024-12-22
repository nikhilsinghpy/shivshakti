import React, { useState, useRef, useEffect } from "react";
import './TabComponent.css'

const TabComponent = () => {
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
      bg.style.left = `${offsetLeft}px`;
      bg.style.width = `${offsetWidth}px`;
    }
  }, [activeIndex]);

  const navItems = [
    { label: "Tab 1", icon: "🌟", active: activeIndex === 0 },
    { label: "Tab 2", icon: "🚀", active: activeIndex === 1 },
    { label: "Tab 3", icon: "🔥", active: activeIndex === 2 },
  ];

  return (
    <div className="p-5 w-full">
      <div className="tab-wrap relative">
        <nav className="flex mt-5 items-center justify-start gap-4 px-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => handleTabClick(index)}
              className={`bg-white text-gray-700 hover:bg-gray-200 flex items-center gap-4 px-4 py-2 rounded-full font-bold tab-button ${
                item.active ? "active" : ""
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
  );
};

export default TabComponent;
