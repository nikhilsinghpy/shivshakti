import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { SideNav } from '../component/Sidenav/SideNav'
import { Header } from '../pages/Header/Header'
import { Footer } from '../pages/Footer/Footer'
import { useState } from 'react'
export const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex flex-row">
        <SideNav isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <div className={`w-full transition-all ${isOpen ? 'ml-[240px]' : 'ml-[60px]'}`}>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}
