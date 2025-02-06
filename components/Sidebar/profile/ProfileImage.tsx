import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return <Image width={500} height={500} src="/about/profile.jpeg" className="w-[240px] h-[240px] absolute left-[50%] transform -translate-x-[50%] drop-shadow-xl mx-auto rounded-[33%_67%_68%_32%/_40%_62%_38%_60%] -mt-[140px]" alt="about" />;
};

export default ProfileImage;
