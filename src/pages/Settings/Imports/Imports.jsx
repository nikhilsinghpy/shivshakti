import React, { useState } from 'react'
import './Imports.css'
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb'
import TabComponent from '../../../component/TabComponent/TabComponent'
const Imports = () => {
  const [activeTab, setActiveTab] = useState('distinct')

  const navItems = [
    { label: 'Home',  active: true },
    { label: 'Speakers', active: false },
  ]

  return (
    <div className="w-full p-5">
      <Breadcrumb
        items={[{ label: 'Settings', link: '/settings' }, { label: 'Imports' }]}
      />
      <div className="card bg-white mt-5 rounded-3xl p-4 w-full min-h-[70vh]">
        <h1 className="text-xl font-bold text-gray-600">
          Upload Employee Details
        </h1>
        <div className="flex items-center gap-4 mb-6 mt-4">
          <input type="file" id="file-upload" className="hidden" />
          <label
            htmlFor="file-upload"
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600 cursor-pointer transition"
          >
            Choose File
          </label>

          <label className="flex items-center text-sm text-gray-700">
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
        <TabComponent navItems={navItems} />
      </div>
    </div>
  )
}

export default Imports
