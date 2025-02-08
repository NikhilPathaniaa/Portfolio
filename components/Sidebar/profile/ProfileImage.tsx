import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return <Image width={240} height={240} src="/about/profile.webp" className="absolute left-[50%] transform -translate-x-[50%] drop-shadow-xl mx-auto rounded-[1.25rem] -mt-[8.75rem]" alt="about" />;
};

export default ProfileImage;
