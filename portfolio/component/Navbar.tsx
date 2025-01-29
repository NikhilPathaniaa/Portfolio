"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAddressBook, FaBlogger, FaBriefcase, FaRegUser } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="lg:w-[35rem] h-[144px] sm:hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="sm:hidden lg:block">
        <ul className="flex font-poppins">
          <li>
            <Link href="/" className={`${pathname === "/" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <FaRegUser />
              </span>
              About
            </Link>
          </li>
          <li>
            <Link href="/work" className={`${pathname === "/work" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <FaBriefcase />
              </span>
              Work
            </Link>
          </li>
          <li>
            <Link href="/pricing" className={`${pathname === "/pricing" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <GrMoney />
              </span>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/blogs" className={`${pathname === "/blogs" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <FaBlogger />
              </span>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${pathname === "/contact" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <FaAddressBook />
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
