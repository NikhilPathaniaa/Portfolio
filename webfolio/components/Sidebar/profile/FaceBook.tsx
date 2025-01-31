import React from "react";
import { FaFacebook } from "react-icons/fa";

const FaceBook = () => {
  return (
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <span className="bg-white dark:bg-black  shadow-md flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white text-[#1773EA]">
        <FaFacebook />
      </span>
    </a>
  );
};

export default FaceBook;
