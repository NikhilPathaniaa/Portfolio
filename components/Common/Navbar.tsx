"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAddressBook, FaBlogger, FaBriefcase, FaRegUser } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="lg:w-[29rem] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="hidden lg:block">
        <ul className="flex  font-['Poppins']">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] text-[0.8125rem] font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white lg:bg-gradient-to-r lg:from-[#fa5252] lg:to-[#dd2476] lg:text-white"
                  : "mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] text-[0.8125rem] font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white"
              }>
              <span className="text-xl mb-1">
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
                  ? "menu-active mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] text-[0.8125rem] font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white lg:bg-gradient-to-r lg:from-[#fa5252] lg:to-[#dd2476] lg:text-white"
                  : "menu-item mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] text-[0.8125rem] font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white"
              }>
              <span className="text-xl mb-1">
                <FaBriefcase />
              </span>
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={`${
                pathname === "/blogs" || pathname.startsWith("/blogs/")
                  ? "menu-active mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] text-[0.8125rem] font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white lg:bg-gradient-to-r lg:from-[#fa5252] lg:to-[#dd2476] lg:text-white"
                  : "menu-item mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] text-[0.8125rem] font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white"
              }`}>
              <span className="text-xl mb-1">
                <FaBlogger />
              </span>
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "menu-active mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] text-[0.8125rem] font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white lg:bg-gradient-to-r lg:from-[#fa5252] lg:to-[#dd2476] lg:text-white"
                  : "menu-item mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#f3f6f6] text-[0.8125rem] font-medium text-[#44566C] transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white dark:bg-[#212425] dark:text-[#a6a6a6] dark:hover:text-white"
              }>
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
