import React from "react";
import { FaGithub } from "react-icons/fa6";

const Github = () => {
  return (
    <a href="https://github.com/NikhilPathaniaa" target="_blank" rel="noopener noreferrer">
      <span className="bg-white dark:bg-black shadow-md flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white text-[#e14a84]">
        <FaGithub />
      </span>
    </a>
  );
};

export default Github;
