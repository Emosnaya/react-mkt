import React from 'react'
import Sidebar from '../views/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-8 min-h-screen">
        <Sidebar/>
        
        <main className='lg:col-span-3 xl:col-span-7 p-8 col-span-2 h-screen overflow-y-scroll no-scrollbar'>
            <Outlet/>
        </main>
    </div>
  )
}
