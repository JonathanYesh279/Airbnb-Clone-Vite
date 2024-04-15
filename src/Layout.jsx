import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col p-4 min-h-screen'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
