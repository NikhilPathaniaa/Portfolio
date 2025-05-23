"use client";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import MobileNavbar from "../Common/MobileNavbar";
import Image from "next/image";
import Link from "next/link";

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
    <div className="w-full mx-auto flex justify-between bg-[#f3f6f6] py-[1.25rem] dark:bg-black lg:bg-transparent lg:dark:bg-transparent px-0 md:px-[7.5rem] lg:pt-[50px]">
      <div className="w-full flex justify-between px-4">
        <div className="pt-2 lg:hidden">
          <Link href="/">
            <Image width={100} height={26} src="/logo/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="pt-2 hidden lg:block cursor-default">
          <Image width={100} height={26} src="/logo/logo.png" alt="logo" />
        </div>
        {/* Dark Mode Toggle Button */}
        <div className="flex items-center">
          <button
            aria-label="Theme Change"
            id="theme-toggle"
            type="button"
            className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full bg-white text-black transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-pink-600 hover:text-white dark:bg-gray-700  dark:text-white dark:hover:bg-pink-600 dark:hover:text-white md:w-12 md:h-12"
            onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>

          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default DayNight;
