"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaAddressBook, FaBars, FaBlogger, FaBriefcase, FaRegUser, FaXmark } from "react-icons/fa6";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Dropdown */}
      {menuOpen && (
        <nav id="navbar" className="lg:hidden absolute left-0 top-20 z-[22222222] w-full rounded-b-[20px] shadow-md bg-white dark:bg-[#1d1d1d] transition-all duration-300">
          <ul>
            {[
              { href: "/", extra: "", label: "About", icon: <FaRegUser /> },
              { href: "/work", extra: "", label: "Work", icon: <FaBriefcase /> },
              // { href: "/pricing", extra: "", label: "Pricing", icon: <GrMoney /> },
              { href: "/blogs", extra: pathname.startsWith("/blogs/"), label: "Blogs", icon: <FaBlogger /> },
              { href: "/contact", extra: "", label: "Contact", icon: <FaAddressBook /> },
            ].map(({ href, label, extra, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu} // Close menu on link click
                  className={`flex mb-4 cursor-pointer items-center pt-2.5 pl-4 font-['Poppins'] text-[0.85rem] font-medium transition-colors duration-300 ease-in-out md:px-4 xl:px-5
                ${pathname === href || extra ? "text-red-500 dark:text-red-500" : "text-[#44566C] dark:text-white hover:text-red-500 dark:hover:text-red-500"}`}>
                  <span className="mr-2 text-xl">{icon}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Toggle Button */}
      <button
        aria-label="mobile toggle"
        onClick={toggleMenu}
        id="menu-toggle"
        type="button"
        className="ml-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-pink-600 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-pink-600 dark:hover:text-white lg:hidden lg:w-12">
        {menuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
      </button>
    </>
  );
};

export default MobileNavbar;
