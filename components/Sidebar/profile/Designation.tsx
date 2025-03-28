"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Designation = () => {
  return (
    <p className="mb-4 text-[#4A4A4A] inline-block dark:bg-[#252525] px-5 py-1.5 rounded-lg dark:text-[#EAEAEA]">
      <Typewriter words={["Web Developer", "UI/UX Designer", "Video Editor", "Freelancer"]} loop={0} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
    </p>
  );
};

export default Designation;
