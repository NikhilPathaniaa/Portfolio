import ContactMe from "@/component/AboutMe/ContactMe";
import AboutMeText from "@/component/AboutMe/AboutMeText";
import Service from "@/component/AboutMe/Service";

export default function Home() {
  return (
    <div>
      <AboutMeText />
      <ContactMe />
      <Service />
      {/* <WhyMe /> */}
    </div>
  );
}
