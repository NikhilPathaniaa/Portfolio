import ContactMe from "@/component/AboutMe/ContactMe";
import AboutMeText from "@/component/AboutMe/AboutMeText";
import Service from "@/component/AboutMe/Service";

export default function Home() {
  return (
    <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <h2 className="after-effect after:left-48 lg:mt-0">About</h2>
      <AboutMeText />
      <ContactMe />
      <Service />
      {/* <WhyMe /> */}
    </div>
  );
}
