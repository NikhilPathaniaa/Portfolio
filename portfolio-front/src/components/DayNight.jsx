import React from 'react'
import { Link } from 'react-router-dom'

const DayNight = () => {
  return (
    <div className="section-bg">
        <div className="w-full flex justify-between px-4">
            {/* website Logo */}
            <Link  to="/Admin">
                    <img className="h-[26px] lg:h-[32px]" src="images/logo/logo.png" alt="logo" />
            </Link>
               

            <div className="flex items-center">
                {/* dark and light mode toggle */}
                <button id="theme-toggle" type="button" className="dark-light-btn">
                    <i id="theme-toggle-dark-icon" className="fa-solid text-xl fa-moon hidden"></i>
                    <i id="theme-toggle-light-icon" className="fa-solid fa-sun text-xl hidden"></i>
                </button>
                {/* mobile toggle button */}
                <button id="menu-toggle" type="button" className="menu-toggle-btn">
                    <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl "></i>
                    <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden  "></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default DayNight