import NavBar from "@/components/Navbar";
import Image from "next/image";
import ProfileSideBar from "@/components/ProfileSideBar";
export default function Home() {
  return (
    <>
      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <ProfileSideBar />
        <div className="col-span-12 lg:col-span-8">
          <NavBar />
          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]"></div>
        </div>
      </div>
    </>
  );
}
