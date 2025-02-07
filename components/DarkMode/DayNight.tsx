"use client";
import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import MobileNavbar from "../Common/MobileNavbar";

const DayNight: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="w-full mx-auto flex justify-between bg-[#f3f6f6] py-5 dark:bg-black lg:bg-transparent lg:px-0 lg:pt-[50px]">
      <div className="w-full flex justify-between px-4">
        <div>
          <img className="h-[26px] lg:h-[32px]" src="/logo/logo.png" alt="logo" />
        </div>
        {/* Dark Mode Toggle Button */}
        <div className="flex items-center">
          <button
            id="theme-toggle"
            type="button"
            className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full bg-white text-black transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-pink-600 hover:text-white dark:bg-gray-700  dark:text-white dark:hover:bg-pink-600 dark:hover:text-white md:w-12 md:h-12"
            onClick={toggleDarkMode}>
            {isDarkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>

          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default DayNight;
