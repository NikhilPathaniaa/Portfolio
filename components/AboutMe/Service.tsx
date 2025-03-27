// import Image from "next/image";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h2 className="text-[35px] text-black dark:text-white font-bold font-['Roboto_Slab'] pb-5"> What I do! </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex gap-4 rounded-lg p-6 dark:border-2 border-[#2b2b2b] bg-[#fcf4ff] dark:bg-transparent">
          <Image width={500} height={500} className="w-10 h-10 object-contain block" src="/icons/wordpress.svg" alt="icon" />
          <div className="space-y-2">
            <h3 className="dark:text-white text-black text-[22px] font-semibold  font-['Poppins']"> Wordpress</h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6] text-black font-['Poppins']"> Custom, scalable, and SEO-friendly WordPress websites tailored to your needs.</p>
          </div>
        </div>

        <div className="flex gap-4 rounded-lg p-6 dark:border-2 border-[#2b2b2b] bg-[#fefaf0] dark:bg-transparent">
          <Image width={500} height={500} className="w-10 h-10 object-contain block" src="/icons/nextjs.svg" alt="icon" />
          <div className="space-y-2">
            <h3 className="dark:text-white text-black text-[22px] font-semibold  font-['Poppins']"> Next JS</h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6] text-black font-['Poppins']"> High-performance, server-side rendered web apps for speed and scalability.</p>
          </div>
        </div>

        <div className="flex gap-4 rounded-lg p-6 dark:border-2 border-[#2b2b2b] bg-[#f3faff] dark:bg-transparent">
          <Image width={500} height={500} className="w-10 h-10 object-contain block" src="/icons/afterEffects.svg" alt="icon" />
          <div className="space-y-2">
            <h3 className="dark:text-white text-black text-[22px] font-semibold  font-['Poppins']">Promo Video</h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6] text-black font-['Poppins']">Engaging motion graphics and promotional videos created with After Effects.</p>
          </div>
        </div>

        <div className="flex gap-4 rounded-lg p-6 dark:border-2 border-[#2b2b2b] bg-[#fff4f4] dark:bg-transparent">
          <Image width={500} height={500} className="w-10 h-10 object-contain block" src="/icons/ux.png" alt="icon" />
          <div className="space-y-2">
            <h3 className="dark:text-white text-black text-[22px] font-semibold  font-['Poppins']"> UI / UX </h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6] text-black font-['Poppins']"> Intuitive and engaging user experiences that enhance usability and conversions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
