import React from "react";
import Designation from "../Sidebar/profile/Designation";
import ProfileImage from "../Sidebar/profile/ProfileImage";
import Github from "../Sidebar/profile/Github";
import LinkedIn from "../Sidebar/profile/LinkedIn";
import Email from "../Sidebar/profile/Email";
import Address from "../Sidebar/profile/Address";
import AboutMeText from "./AboutMeText";

const MobileAboutMe = () => {
  return (
    <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
      {/* about page title */}
      <h2 className="after-effect after:left-52">About Me</h2>
      {/* personal info for mobile devices start */}
      <div className="lg:hidden">
        <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
          {/* profile image  */}

          <ProfileImage />

          <div className="pt-[100px] pb-8">
            <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Nikhil Pathania</h2>
            <Designation />

            <div className="flex justify-center space-x-3">
              {/* <FaceBool/>
                    <Instagram/> */}
              <Github />
              <LinkedIn />
            </div>

            {/* personal info start */}
            <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
              <Email />
              <Address />
            </div>
            {/* personal info end */}
          </div>
        </div>
      </div>
      {/* personal info for mobile devices end */}

      <AboutMeText />
    </div>
  );
};

export default MobileAboutMe;
