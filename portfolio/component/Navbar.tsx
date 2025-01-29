"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="lg:w-[660px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="hidden lg:block">
        <ul className="flex">
          <li>
            <Link href="/" className={`${pathname === "/" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <i className="fa-regular fa-user"></i>
              </span>
              About
            </Link>
          </li>
          <li>
            <Link href="/work" className={`${pathname === "/work" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <i className="fa-regular fa-user"></i>
              </span>
              Work
            </Link>
          </li>
          <li>
            <Link href="/blogs" className={`${pathname === "/blogs" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <i className="fa-regular fa-user"></i>
              </span>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${pathname === "/contact" ? "menu-active" : "menu-item"}`}>
              <span className="text-xl mb-1">
                <i className="fa-regular fa-user"></i>
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
