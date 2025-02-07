import React from "react";

interface HeaderProps {
  title: string;
  space: number;
}
const Header = ({ title, space }: HeaderProps) => {
  return (
    <span className="relative inline-block text-[2.5rem] font-bold font-['Roboto_Slab'] text-gray-900 dark:text-white">
      {title}
      {/* Separate Span for Underline */}
      <span
        className="md:block hidden absolute top-[55%] h-[0.125rem] w-48 md:w-[12rem] -translate-y-1/2 rounded-md bg-gradient-to-r from-[#fa5252] to-[#dd2476]"
        style={{ left: `${space}rem` }} // Apply left spacing dynamically
      />
    </span>
  );
};

export default Header;
