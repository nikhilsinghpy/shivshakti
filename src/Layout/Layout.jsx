import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { SideNav } from '../component/Sidenav/SideNav'
import { Header } from '../pages/Header/Header'
import { Footer } from '../pages/Footer/Footer'
import { useState } from 'react'
export const Layout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isOpen}/>
        <div className='flex flex-row'>
            <SideNav isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <div className='w-full p-4 ' style={{height: 'calc(100vh - 65px)' , overflowY: 'auto'}}>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    </div>
  )
}
