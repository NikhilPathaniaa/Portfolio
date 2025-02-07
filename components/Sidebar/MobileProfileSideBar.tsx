import Address from "./profile/Address";
import Designation from "./profile/Designation";
import Email from "./profile/Email";
import Instagram from "./profile/Instagram";
import LinkedIn from "./profile/LinkedIn";
import ProfileImage from "./profile/ProfileImage";
import Youtube from "./profile/Youtube";

const MobileProfileSideBar = () => {
  return (
    // personal info for mobile devices start
    <div className="lg:hidden">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        {/* profile image  */}

        <ProfileImage />

        <div className="pt-[100px] pb-8">
          <h2 className="mt-6 mb-1 text-[26px]  font-['Poppins'] font-semibold text-black dark:text-white"> Nikhil Pathania </h2>
          <Designation />

          <div className="flex justify-center space-x-3">
            {/* <FaceBool/>*/}
            <Youtube />
            <Instagram />
            {/* <Github /> */}
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
  );
};

export default MobileProfileSideBar;
