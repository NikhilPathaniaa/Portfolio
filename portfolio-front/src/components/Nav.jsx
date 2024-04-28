import React from 'react'
import AboutOne from '../navbar/AboutOne'
import ResumeOne from '../navbar/ResumeOne'
import PortfiloOne from '../navbar/PortfiloOne'
import ContactOne from '../navbar/ContactOne'
import '../styles/Navbar.css'
import Skills from '../navbar/Skills'

const Nav = () => {
  return (

    <header className='lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white' >
        <nav className='hidden lg:block' id="navbar">
            <ul className="flex">
                <li>
                    <AboutOne/>
                </li>
                <li>
                    <Skills/>
                </li>
                <li >
                    <ResumeOne/>
                </li>
                <li>
                    <PortfiloOne/>  
                </li>
                <li>
                    <ContactOne/> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav