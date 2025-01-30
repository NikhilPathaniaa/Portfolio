import AboutMeText from "@/components/AboutMe/AboutMeText";
import ContactMe from "@/components/AboutMe/ContactMe";
import Service from "@/components/AboutMe/Service";
import Header from "@/components/Common/Header";
import TestimonialComponent from "@/components/Testimonial/TestimonialComponent";
import Image from "next/image";

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
      <TestimonialComponent />
      {/* <WhyMe /> */}
    </div>
  );
}
