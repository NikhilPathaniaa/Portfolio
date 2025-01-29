import ContactMe from "@/component/AboutMe/ContactMe";
import AboutMeText from "@/component/AboutMe/AboutMeText";
import Service from "@/component/AboutMe/Service";
import Header from "@/component/Common/Header";

export default function Home() {
  return (
    <div>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        {/* about page title */}
        <Header title="About Me" />
        <AboutMeText />
      </div>
      <ContactMe />
      <Service />
      {/* <WhyMe /> */}
    </div>
  );
}
