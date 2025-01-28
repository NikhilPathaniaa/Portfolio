"use client";
import Link from "next/link";
import { useState } from "react";
// import About from '../navigation/About'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/About"); // Set the active link initially

  return (
    <header className="lg:w-[660px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="hidden lg:block">
        <ul className="flex">
          <li>
            <Link className={activeLink === "/About" ? "menu-active" : "menu-item"} href="/About">
              <span className="text-xl mb-1">
                <i className="fa-regular fa-user"></i>
              </span>
              About
            </Link>
          </li>

          <li>
            <Link className={activeLink === "/Resume" ? "menu-active" : "menu-item"} href="/Resume">
              <span className="text-xl mb-1">
                <i className="fa-regular fa-file-lines"></i>
              </span>
              Resume
            </Link>
          </li>
          <li>
            <Link className={activeLink === "/Portfolio" ? "menu-active" : "menu-item"} href="/Portfolio">
              <span className="text-xl mb-1">
                <i className="fas fa-briefcase "></i>
              </span>
              work
            </Link>
          </li>

          <li>
            <Link className={activeLink === "/Blogs" ? "menu-active" : "menu-item"} href="/Blogs">
              <span className="text-xl mb-1">
                <i className="fa-brands fa-blogger "></i>
              </span>
              Blogs
            </Link>
          </li>

          <li>
            <Link className={activeLink === "/Contact" ? "menu-active" : "menu-item"} href="/Contact">
              <span className="text-xl mb-1">
                <i className="fa-solid fa-address-book"></i>
              </span>
              Contact
            </Link>
          </li>

          <li>
            <Link className={activeLink === "/Skills" ? "menu-active" : "menu-item"} href="/Skills">
              <span className="text-xl mb-1">
                <i className="fa-brands fa-blogger"></i>
              </span>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
