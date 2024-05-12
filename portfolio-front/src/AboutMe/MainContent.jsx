import React, { useEffect, useState } from "react";
import WhyMe from "./WhyMe";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [scrollDirection, setScrollDirection] = useState("vertical");

  useEffect(() => {
    const handleScroll = () => {
      const whyMeComponent = document.getElementById("why-me");
      if (whyMeComponent) {
        const rect = whyMeComponent.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollDirection("horizontal");
        } else {
          setScrollDirection("vertical");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
      <div className="col-span-12 space-y-2.5">
        <div className="lg:mr-16">
          <p className="text-[#44566c] dark:text-color-910 leading-7">
            Hey there! I'm <span className="text-[#FA5252]">Nikhil Pathania</span>, your web magician here to make your online dreams a reality. I specialize in crafting stunning websites and web applications tailored to your unique needs.
          </p>
          <div className={scrollDirection === "horizontal" ? "overflow-x-auto" : ""}>
            <WhyMe id="why-me" />
          </div>

          <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pt-5 pb-5"> Let's Connect! </h3>
          <div className="flex items-center">
            <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
              Ready to elevate your online presence? <br />
              Let's chat and turn your ideas into reality. <br />
              Hit me up and let's make digital dreams happen.
            </p>
            <Link to="/Contact" className="dowanload-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
