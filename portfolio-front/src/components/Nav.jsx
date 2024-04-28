import React from 'react'
import AboutOne from '../navbar/AboutOne'
import ResumeOne from '../navbar/ResumeOne'
import PortfiloOne from '../navbar/PortfiloOne'
import ContactOne from '../navbar/ContactOne'
import '../styles/Navbar.css'

const Nav = () => {
  return (
    <div>
        <nav id="navbar">
            <ul>
                <li className='menu-active'>
                    <AboutOne/>
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
    </div>
  )
}

export default Nav