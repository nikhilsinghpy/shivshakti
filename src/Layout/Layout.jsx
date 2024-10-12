import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { SideNav } from '../component/Sidenav/SideNav'
import { Header } from '../pages/Header/Header'
import { Footer } from '../pages/Footer/Footer'
import { useState } from 'react'
export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className="flex flex-row">
        <SideNav isOpen={isOpen} toggle={toggle}/>
        <div className="w-full ml-[240px]">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}
