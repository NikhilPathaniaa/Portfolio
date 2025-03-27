"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Designation = () => {
  return (
    <p className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
      <Typewriter words={["Web Developer", "UI/UX Designer", "Video Editor", "Freelancer"]} loop={0} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
    </p>
  );
};

export default Designation;
