import React from 'react'

const Email = () => {
  return (
    <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
        <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
            <i className="fa-solid fa-envelope-open-text"></i>
        </span>
        <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
            <p className="dark:text-white">developernikhil1@gmail.com</p>
        </div>
    </div>
  )
}

export default Email