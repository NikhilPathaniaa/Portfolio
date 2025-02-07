"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaAddressBook, FaBars, FaBriefcase, FaRegUser, FaXmark } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldCloseMenu, setShouldCloseMenu] = useState(false);

  // Function href toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const pathname = usePathname();
  //   const handleMenuItemClick = (pathname: any) => {
  //     // setActiveLink(pathname);
  //     setShouldCloseMenu(true); // Set shouldCloseMenu href true when a menu item is clicked
  //   };

  useEffect(() => {
    if (shouldCloseMenu) {
      setMenuOpen(false);
      setShouldCloseMenu(false); // Reset shouldCloseMenu after closing the menu
    }
  }, [shouldCloseMenu]); // Only run the effect when shouldCloseMenu changes

  return (
    <>
      <nav id="navbar" className={menuOpen ? "lg:hidden block" : "lg:hidden hidden"}>
        <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "flex cursor-pointer items-center pt-2.5 pb-2.5 pl-4 font-['Poppins'] text-[0.8125rem] font-medium text-red-500 transition-colors duration-300 ease-in-out hover:text-red-500 dark:text-red-500 dark:hover:text-red-500 md:px-4 xl:px-5"
                  : "flex cursor-pointer items-center pt-2.5 pb-2.5 pl-4 font-['Poppins'] text-[0.8125rem] font-medium text-[#44566C] transition-colors duration-300 ease-in-out hover:text-red-500 dark:text-white dark:hover:text-red-500 md:px-4 xl:px-5"
              }
              //   onClick={handleMenuItemClick}>
            >
              <span className="mr-2 text-xl">
                <FaRegUser />
              </span>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className={
                pathname === "/work"
                  ? "flex cursor-pointer items-center pt-2.5 pb-2.5 pl-4 font-['Poppins'] text-[0.8125rem] font-medium text-red-500 transition-colors duration-300 ease-in-out hover:text-red-500 dark:text-red-500 dark:hover:text-red-500 md:px-4 xl:px-5"
                  : "flex cursor-pointer items-center pt-2.5 pb-2.5 pl-4 font-['Poppins'] text-[0.8125rem] font-medium text-[#44566C] transition-colors duration-300 ease-in-out hover:text-red-500 dark:text-white dark:hover:text-red-500 md:px-4 xl:px-5"
              }
              //   onClick={handleMenuItemClick}>
            >
              <span className="mr-2 text-xl">
                <FaBriefcase />
              </span>
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className={
                pathname === "/pricing"
                  ? "flex cursor-pointer items-center pt-2.5 pb-2.5 pl-4 font-['Poppins'] text-[0.8125rem] font-medium text-red-500 transition-colors duration-300 ease-in-out hover:text-red-500 dark:text-red-500 dark:hover:text-red-500 md:px-4 xl:px-5"
                  : "flex cursor-pointer items-center pt-2.5 pb-2.5 pl-4 font-['Poppins'] text-[0.8125rem] font-medium text-[#44566C] transition-colors duration-300 ease-in-out hover:text-red-500 dark:text-white dark:hover:text-red-500 md:px-4 xl:px-5"
              }
              //   onClick={handleMenuItemClick}>
            >
              <span className="mr-2 text-xl">
                <GrMoney />
              </span>
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "flex cursor-pointer items-center pt-2.5 pb-2.5 pl-4 font-['Poppins'] text-[0.8125rem] font-medium text-red-500 transition-colors duration-300 ease-in-out hover:text-red-500 dark:text-red-500 dark:hover:text-red-500 md:px-4 xl:px-5"
                  : "flex cursor-pointer items-center pt-2.5 pb-2.5 pl-4 font-['Poppins'] text-[0.8125rem] font-medium text-[#44566C] transition-colors duration-300 ease-in-out hover:text-red-500 dark:text-white dark:hover:text-red-500 md:px-4 xl:px-5"
              }
              //   onClick={handleMenuItemClick}>
            >
              <span className="mr-2 text-xl">
                <FaAddressBook />
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        id="menu-toggle"
        type="button"
        className="ml-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-pink-600 hover:text-white dark:bg-gray-700  dark:text-white dark:hover:bg-pink-600 dark:hover:text-white lg:hidden lg:w-12">
        {!menuOpen ? <FaBars id="menu-toggle-open-icon" className="text-xl" /> : <FaXmark id="menu-toggle-close-icon" className="text-xl" />}
      </button>
    </>
  );
};

export default MobileNavbar;
