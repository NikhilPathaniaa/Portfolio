import React from "react";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  console.log(title.length);

  return (
    <div>
      <h2 className={`after-effect after:left-[52rem] font-roboto_slab text-9xl font-bold`}>{title}</h2>
    </div>
  );
};

export default Header;
