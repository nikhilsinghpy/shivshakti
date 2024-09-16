import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideNav } from '../component/Sidenav/SideNav'
import { Header } from '../pages/Header/Header'
import { Footer } from '../pages/Footer/Footer'
export const Layout = () => {
  return (
    <div>
        <Header/>
        <div className='flex flex-row'>
            <SideNav/>
            <div className='w-full p-4 ' style={{height: 'calc(100vh - 65px)' , overflowY: 'auto'}}>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    </div>
  )
}
