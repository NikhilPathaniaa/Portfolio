import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
      <span className="flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white bg-white dark:bg-black text-[#FD7590] shadow-md">
        <FaLocationDot />
      </span>
      <div className="text-left ml-2.5">
        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]  font-['Poppins']"> Location </p>
        <p className="dark:text-white text-black  font-['Poppins']">Bangalore, India</p>
      </div>
    </div>
  );
};

export default Address;
