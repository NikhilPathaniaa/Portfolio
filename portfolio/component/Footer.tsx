import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-transparent ">
      <p className="text-center py-6 text-gray-lite dark:text-color-910 font-poppins">
        © 2025 All Rights Reserved by _
        <Link className="hover:text-[#FA5252] duration-300 transition font-poppins" href="https://github.com/NikhilPathaniaa" target="_blank" rel="noopener noreferrer">
          Nikhil Pathania
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
