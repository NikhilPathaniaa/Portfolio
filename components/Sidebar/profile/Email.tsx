import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";

const Email = () => {
  const email = "freelance.nikhil1@gmail.com";
  // const handleEmailClick = () => {
  //   window.location.href = `mailto:${email}`;
  // };

  return (
    <div className="flex flex-wrap items-center border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
      <span className="bg-white dark:bg-black text-[#6AB5B9] shadow-md flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white">
        <FaEnvelopeOpenText />
      </span>
      <div className="text-left ml-2.5">
        <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]  font-['Poppins']"> Email </p>
        <p className="dark:text-white cursor-pointer  font-['Poppins']"> {email} </p>
      </div>
    </div>
  );
};

export default Email;
