import React from "react";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <span
      className={`relative inline-block text-[2.5rem] font-bold font-['Roboto_Slab'] text-gray-900 dark:text-white after:absolute after:top-[55%] after:left-[${title.length}*1rem] after:h-[0.125rem] after:w-48 md:after:w-[12rem] after:-translate-y-1/2 after:rounded-md after:bg-gradient-to-r after:from-[#fa5252] after:to-[#dd2476]`}>
      {title}
    </span>
  );
};

export default Header;
