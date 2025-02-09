import React, { useState, useRef, useEffect } from 'react'
import './TabComponent.css'

const TabComponent = ({ navItems, tabContents }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef([])

  const handleTabClick = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    // Scroll to the active tab background position when the activeIndex changes
    const activeTab = tabRefs.current[activeIndex]
    if (activeTab) {
      const bg = document.querySelector('.tab-button-backg')
      const { offsetLeft, offsetWidth } = activeTab
      bg.style.left = `${offsetLeft - 7.5}px`
      bg.style.width = `${offsetWidth + 15}px`
      bg.classList.toggle('hide-after', activeIndex === 0)
      bg.classList.toggle('hide-before', activeIndex === 4)
    }
  }, [activeIndex])

  return (
    <>
      <div className="p-5 w-full">
        <div className="tab-wrap relative">
          <nav className="flex mt-5 items-center gap-5 px-[7px] w-full">
            {navItems.map((item, index) => (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(index)}
                className={`bg-white text-gray-700 hover:bg-gray-200 flex items-center gap-4 px-4 py-2 rounded-full font-bold tab-button w-full ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <span
                  className={`w-7 h-7 tab-component-svg rounded-full p-2 flex justify-center items-center ${
                    activeIndex === index
                      ? 'bg-blue-500 text-white'
                      : ' bg-gray-200'
                  }`}
                >
                  {item.icon}
                </span>
                <span className="tab-component-label">{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="tab-button-backg"></div>
          <div className="tab-card bg-white w-full mt-5  rounded-2xl p-4">
            {tabContents?.length > 0 ? tabContents[activeIndex] : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default TabComponent
