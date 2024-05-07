import React from 'react'
import './Style.css'
import DarkMode from './DarkMode'

const DayNight = () => {
  return (
    <div className="section-bg">
        <div className="w-full flex justify-between px-4">
            <div>
                <img class="h-[26px] lg:h-[32px]" src="images/logo/logo.png" alt="logo" />
            </div>
            <DarkMode/>
        </div>
    </div>
  )
}

export default DayNight