import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPost = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> Features </h3>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div class="about-box bg-[#fefaf0] dark:bg-transparent">
                <img class="w-10 h-10 object-contain block" src="images/icons/spring.svg" alt="icon" />
                <div class="space-y-2">
                  <h3 class="dark:text-white text-[22px] font-semibold"> SpringBoot</h3>
                  <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                </div>
              </div>
            </div>
            <div>
              <div class="about-box bg-[#fefaf0] dark:bg-transparent">
                <img class="w-10 h-10 object-contain block" src="images/icons/spring.svg" alt="icon" />
                <div class="space-y-2">
                  <h3 class="dark:text-white text-[22px] font-semibold"> SpringBoot</h3>
                  <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderPost;
