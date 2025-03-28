import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";

const LinkedIn = () => {
  return (
    <Link aria-label="Visit Freelancer Nikhil on LinkedIn" href="https://www.linkedin.com/in/nikhil-pathania-/" target="_blank" rel="noopener noreferrer">
      <span className="bg-white dark:bg-black shadow-md flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white text-[#0072b1]">
        <FaLinkedinIn />
      </span>
    </Link>
  );
};

export default LinkedIn;
