import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { SideNavNew } from '../component/SideNavNew/SideNavNew'
export const Layout = () => {  
  return (
    <div>
      <div className="flex flex-row">
        <SideNavNew />
        <Outlet />
      </div>
    </div>
  )
}
