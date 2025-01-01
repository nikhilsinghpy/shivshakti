import React, { useState, useRef, useEffect } from 'react'
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb'
import './Imports.css'
export const Imports = () => {
  const breadcrumditem = [
    { label: 'Setting', link: '#' },
    { label: 'Imports', link: '#' },
  ]

  const navItems = [
    { label: 'Distinct Employee Record',  active: true  , class:'bg-[#00ADEE]'},
    { label: 'Invalid /Duplicate employee record',  active: true ,class:'bg-[#EE786C]'},
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef([])

  const handleTabClick = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    // Scroll to the active tab background position when the activeIndex changes
    const activeTab = tabRefs.current[activeIndex]
    if (activeTab) {
      const bg = document.querySelector('.tab-button-backg-import')
      const { offsetLeft, offsetWidth } = activeTab
      bg.style.left = `${offsetLeft - 15}px`
      bg.style.width = `${offsetWidth + 30}px`
    }
  }, [activeIndex])
  return (
    <div className="py-[3rem] px-[2rem] w-full">
      <Breadcrumb items={breadcrumditem} />
      <div className="bg-white  p-[2rem] rounded-3xl mt-5 w-full min-h-[200px]">
        <h2>Upload Employee details</h2>
        <div className="flex w-full mt-5 mb-5 gap-3">
          <input type="file" id="file-upload" className="hidden" />
          <label
            htmlFor="file-upload"
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600 cursor-pointer transition"
          >
            Choose File
          </label>

          <label className="flex items-center text-sm text-gray-500">
            <input
              type="checkbox"
              className="mr-2 border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
            Upload default format
          </label>
          <button className="bg-green-500 text-white px-12 py-2 rounded-lg font-medium hover:bg-green-600 transition">
            Upload
          </button>
        </div>
        <div className="tab-wrap-import relative">
          <nav className="flex mt-5 items-center justify-start px-[5rem] w-full gap-[3rem]">
            {navItems.map((item, index) => (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(index)}
                className={`${item.class} text-white font-[400] py-2 px-4 tab-button-import rounded-full text-[18px]`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="tab-button-backg-import"></div>
          <div className="tab-card-import bg-[#F1F2F7] w-full mt-5  rounded-[3rem] p-4">

          </div>
        </div>
      </div>
    </div>
  )
}
