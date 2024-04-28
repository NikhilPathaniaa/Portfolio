import React from 'react'
import AboutOne from '../navbar/AboutOne'
import ResumeOne from '../navbar/ResumeOne'
import PortfiloOne from '../navbar/PortfiloOne'
import ContactOne from '../navbar/ContactOne'
import '../styles/Navbar.css'
import Skills from './Skills'

const Nav = () => {
  return (
    <header className='lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white' >
        <nav className='hidden lg:block' id="navbar">
            <ul>
                <li className='menu-active'>
                    <AboutOne/>
                </li>
                <li className='menu-item'>
                    <Skills/>
                </li>
                <li className='menu-item'>
                    <ResumeOne/>
                </li>
                <li className='menu-item'>
                    <PortfiloOne/>  
                </li>
                <li className='menu-item'>
                    <ContactOne/> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav