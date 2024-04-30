import React from 'react'
// import About from '../navigation/About'
import { Link } from 'react-router-dom'
import Portfolio from '../portfilo/Portfolio'

const NavBar = () => {
  return (
                <header
                className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
                <nav className="hidden lg:block">
                    <ul className="flex">
                        <li>    
                            <Link className="menu-active" to="/About">
                                <span className="text-xl mb-1">
                                    <i className="fa-regular fa-user"></i>
                                </span>About
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-active" to="/Skills">
                                <span className="text-xl mb-1">
                                    <i className="fa-regular fa-user"></i>
                                </span>Skills
                            </Link>
                        </li>
                        <li> <a className="menu-item" href="resumeOne.html">
                                <span className="text-xl mb-1">
                                    <i className="fa-regular fa-file-lines"></i>
                                </span> Resume </a></li>
                        <li> 
                            <Link className="menu-active" to="/Portfolio">
                                <span className="text-xl mb-1">
                                    <i className="fa-regular fa-user"></i>
                                </span>work
                            </Link>
                        </li>

                        <li>
                            <Link className="menu-active" to="/Contact">
                                <span className="text-xl mb-1">
                                    <i className="fa-regular fa-user"></i>
                                </span>Contact
                            </Link>

                        </li>
                    </ul>
                </nav>
            </header>
  )
}

export default NavBar