import React from 'react'
import { Header } from './header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'

export const MainLayout = () => {
  return (
    <div className='layout'>
        <div className='wrap'>
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
