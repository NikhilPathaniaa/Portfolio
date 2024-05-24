import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Designation = () => {
  return (
    <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
      <Typewriter words={["Eat", "Sleep", "Code", "Repeat!"]} loop={5} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} onLoopDone={handleDone} onType={handleType} />
    </h3>
  );
};

export default Designation;
