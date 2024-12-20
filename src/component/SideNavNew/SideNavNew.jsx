import React from 'react'
import { Home, Users, FileText, Settings, User, CircleGauge } from 'lucide-react'
import siptoklogo from "../../assets/siptok.png"
import "./SideNavNew.css"
export const SideNavNew = () => {
  return (
    <div>
      <div className="w-[270px] h-screen bg-grey flex flex-col shadow-lg border-r">
        {/* Logo Section */}
        <div className="p-4 mb-6 flex justify-center items-center">
          <img src={siptoklogo} alt="siptoklogo" className="w-[110px]" />
        </div>

        {/* Menu Items */}
        <div className="flex-1">
          <div className="allmenu-list">
            <a href="#">
              <span className="text-sm font-bold">Dashboard</span>
            </a>
          </div>
          <div className="allmenu-list">
            <a href="#">
              <span className="text-sm font-bold">Manage User</span>
            </a>
          </div>
          <div className="allmenu-list">
            <a href="#">
              <span className="text-sm font-bold">Reports</span>
            </a>
          </div>
          <div className="allmenu-list">
            <a href="#">
              <span className="text-sm font-bold">Settings</span>
            </a>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-3 border-t">
          <div className="flex items-center px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
              <User className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-600">Nikhil Singh</h5>
              <p className="text-xs text-gray-500">nikhilsingh1234@gmail.com</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
