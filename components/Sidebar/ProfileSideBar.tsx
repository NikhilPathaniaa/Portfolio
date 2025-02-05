import Address from "./profile/Address";
import Designation from "./profile/Designation";
import Email from "./profile/Email";
import FaceBook from "./profile/FaceBook";
import Github from "./profile/Github";
import ProfileImage from "./profile/ProfileImage";
import Instagram from "./profile/Instagram";
import LinkedIn from "./profile/LinkedIn";

const ProfileSideBar = () => {
  return (
    <div className="col-span-12 lg:col-span-4 sm:hidden lg:block h-screen sticky top-44">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        {/* profile image */}
        <ProfileImage />
        <div className="pt-[100px] pb-8">
          <h2 className="mt-6 mb-1 text-[26px]  font-['Poppins'] font-semibold dark:text-white"> Nikhil Pathania </h2>
          <Designation />
          <div className="flex justify-center space-x-3">
            <FaceBook />
            <Instagram />
            <Github />
            <LinkedIn />
          </div>
          {/* personal infomation start */}
          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <Email />
            <Address />
          </div>
          {/* personal infomation end*/}
          {/* dowanload button */}
          {/* https://drive.google.com/file/d/1MXwZfzVVhm7fQENOqP9XBHT6vBpSGCoj/view?usp=sharing */}
          {/* <Link href="https://drive.google.com/file/d/1MXwZfzVVhm7fQENOqP9XBHT6vBpSGCoj/view?usp=sharing">
            <button className="dowanload-btn">
              <Image className="mr-3" src="images/icons/dowanload.png" alt="icon" /> Download Resume{" "}
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
