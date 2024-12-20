import React, { useState } from "react";
import { Home, Users, FileText, Settings, User, CircleGauge } from "lucide-react";
import siptoklogo from "../../assets/siptok.png";
import { Link, useNavigate } from "react-router-dom";
import "./SideNavNew.css";

export const SideNavNew = () => {
  const [active, setActive] = useState("dashboard");

  const navigate = useNavigate();

  const handleClick = (item) => {
    setActive(item);
    navigate(`/${item}`);
  };


  

  return (
    <div>
      <div className="w-[270px] h-screen bg-white flex flex-col  ">
        {/* Logo Section */}
        <div className="p-4 mb-6 flex justify-center items-center">
          <img src={siptoklogo} alt="siptoklogo" className="w-[110px]" />
        </div>

        {/* Menu Items */}
        <div className="flex-1">
          <div className="space-y-2">
            {/* Dashboard */}
            <div className="side-nav-item-wrapper">
              <div
                className={`side-nav-item ${active === "dashboard" ? "active" : ""}`}
                onClick={() => handleClick("dashboard")}
              >
                <div className="flex items-center text-gray-600  transition-all cursor-pointer">
                  <CircleGauge className="h-5 w-5 mr-3" />
                  <span className="text-sm font-bold">Dashboard</span>
                </div>
              </div>
            </div>

            {/* Manage User */}
            <div className="side-nav-item-wrapper">
              <div
                className={`side-nav-item ${active === "manage-user" ? "active" : ""}`}
                onClick={() => handleClick("manage-user")}
              >
                <div className="flex items-center text-gray-600  transition-all cursor-pointer">
                  <Users className="h-5 w-5 mr-3" />
                  <span className="text-sm font-bold">Manage User</span>
                </div>
              </div>
            </div>

            {/* Reports */}
            <div className="side-nav-item-wrapper">
              <div
                className={`side-nav-item ${active === "report-setting" ? "active" : ""}`}
                onClick={() => handleClick("report-setting")}
              >
                <div className="flex items-center text-gray-600  transition-all cursor-pointer">
                  <FileText className="h-5 w-5 mr-3" />
                  <span className="text-sm font-bold">Reports</span>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="side-nav-item-wrapper">
              <div
                className={`side-nav-item ${active === "setting" ? "active" : ""}`}
                onClick={() => handleClick("setting")}
              >
                <div className="flex items-center text-gray-600  transition-all cursor-pointer">
                  <Settings className="h-5 w-5 mr-3" />
                  <span className="text-sm font-bold">Settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-3 border-t">
          <div className="flex items-center px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
              <User className="h-5 w-5" />
            </div>
            <span className="flex flex-col">
              <h5 className="text-sm text-gray-600">Nikhil Singh</h5>
              <p className="text-xs text-gray-500">nikhilsingh1234@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
