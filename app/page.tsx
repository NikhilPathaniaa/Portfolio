import AboutMeText from "@/components/AboutMe/AboutMeText";
import ContactMe from "@/components/AboutMe/ContactMe";
import Service from "@/components/AboutMe/Service";
import Testimonials from "@/components/Testimonial/Testuimonial";
import Header from "@/components/Common/Header";
import MobileProfileSideBar from "@/components/Sidebar/MobileProfileSideBar";
import WorkHighlights from "@/components/Home/WorkHighlights";

export default function Home() {
  return (
    <div>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        {/* about page title */}
        <Header title="About Me" space={13} />
        <MobileProfileSideBar />
        <AboutMeText />
        <WorkHighlights />
      </div>
      <ContactMe />
      <Service />
      {/* <WhyMe /> */}
      {/* <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <Testimonials />
      </div> */}
    </div>
  );
}
