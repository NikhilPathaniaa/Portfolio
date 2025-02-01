import React from "react";

const Service = () => {
  return (
    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h3 className="text-[35px] dark:text-white font-bold font-['Roboto_Slab'] pb-5"> What I do! </h3>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex gap-4 rounded-lg p-6 dark:border-2 border-[#2b2b2b] bg-[#fcf4ff] dark:bg-transparent">
          <img className="w-10 h-10 object-contain block" src="/icons/wordpress.svg" alt="icon" />
          <div className="space-y-2">
            <h3 className="dark:text-white text-[22px] font-semibold  font-['Poppins']"> Wordpress</h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]  font-['Poppins']"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-lg p-6 dark:border-2 border-[#2b2b2b] bg-[#fefaf0] dark:bg-transparent">
          <img className="w-10 h-10 object-contain block" src="/icons/nextjs.svg" alt="icon" />
          <div className="space-y-2">
            <h3 className="dark:text-white text-[22px] font-semibold  font-['Poppins']"> Next JS</h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]  font-['Poppins']"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-lg p-6 dark:border-2 border-[#2b2b2b] bg-[#f3faff] dark:bg-transparent">
          <img className="w-10 h-10 object-contain block" src="/icons/reactjs.svg" alt="icon" />
          <div className="space-y-2">
            <h3 className="dark:text-white text-[22px] font-semibold  font-['Poppins']"> React JS</h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]  font-['Poppins']"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-lg p-6 dark:border-2 border-[#2b2b2b] bg-[#fff4f4] dark:bg-transparent">
          <img className="w-10 h-10 object-contain block" src="/icons/ux.png" alt="icon" />
          <div className="space-y-2">
            <h3 className="dark:text-white text-[22px] font-semibold  font-['Poppins']"> UI / UX </h3>
            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]  font-['Poppins']"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
