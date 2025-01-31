import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Instagram = () => {
  return (
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <span className="bg-white dark:bg-black shadow-md flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white text-[#1C9CEA]">
        <FaInstagram />
      </span>
    </a>
  );
};

export default Instagram;
