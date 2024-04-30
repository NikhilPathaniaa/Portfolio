import React from 'react'

const NavBar = () => {
  return (
                <header
                className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
                <nav className="hidden lg:block">
                    <ul className="flex">
                        <li> <a className="menu-active" href="aboutOne.html">
                                <span className="text-xl mb-1">
                                    <i className="fa-regular fa-user"></i>
                                </span> About </a></li>
                        <li> <a className="menu-item" href="resumeOne.html">
                                <span className="text-xl mb-1">
                                    <i className="fa-regular fa-file-lines"></i>
                                </span> Resume </a></li>
                        <li> <a className="menu-item" href="portfiloOne.html">
                                <span className="text-xl mb-1">
                                    <i className="fas fa-briefcase"></i>
                                </span> Works </a></li>
                        <li><a className="menu-item" href="blogOne.html">
                                <span className="text-xl mb-1">
                                    <i className="fa-brands fa-blogger"></i>
                                </span> Blogs </a></li>
                        <li> <a className="menu-item" href="contactOne.html">
                                <span className="text-xl mb-1">
                                    <i className="fa-solid fa-address-book"></i>
                                </span> Contact </a></li>
                    </ul>
                </nav>
            </header>
  )
}

export default NavBar