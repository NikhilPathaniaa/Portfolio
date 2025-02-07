"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DotLottieReact
        src="https://lottie.host/4faab2d0-9039-44a5-901e-5e8a751ac528/YUPm16GewZ.lottie" // Replace with your actual animation path
        loop
        autoplay
        className="w-96 h-96"
      />
    </div>
  );
};

export default NotFoundPage;
