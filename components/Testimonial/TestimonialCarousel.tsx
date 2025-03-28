"use client";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader scroll elements
import TestimonialStructure from "./TestimonialStructure";

const TestimonialCarousel = () => {
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState(true);
  console.log(animation);
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktopOrLaptop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktopOrLaptop(e.matches);
    };

    // Add listener for changes
    mediaQuery.addListener(handleMediaChange);

    // Clean up the listener on component unmount
    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  useEffect(() => {
    setAnimation(false);
    setTimeout(() => {
      setAnimation(true);
    }, 100);
  }, [count]);

  return (
    <Carousel
      showThumbs={false}
      autoPlay={false}
      interval={3000}
      infiniteLoop={false}
      className=" w-full"
      onChange={(e: number) => setCount(e)}
      showStatus={false}
      showArrows={isDesktopOrLaptop}
      swipeable={true} // Enable swiping
      emulateTouch={true} // Enable dragging
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
      showIndicators={false} // Hide dots (pagination indicators)
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} className=" absolute left-0 transform -translate-y-1/2  w-10 z-10  border-gray-500 h-[40px] p-2 rounded-full" aria-label={label}>
            <svg width="9" height="16" className="ml-1 stroke-black dark:stroke-white" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.125 15.5C8.12479 12.7727 7.8603 8.40911 0.625001 8.22728C3.12502 8.303 8.125 6.86365 8.125 0.499999" stroke="black" fill="none"></path>
            </svg>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} className="absolute right-0 transform -translate-y-1/2 w-10 z-10 border-gray-500 h-[40px] p-2 rounded-full" aria-label={label}>
            <svg width="9" height="16" className="ml-2 stroke-black dark:stroke-white" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.125 0.5C1.12522 3.22727 1.3897 7.59089 8.625 7.77272C6.12499 7.697 1.125 9.13635 1.125 15.5" fill="none"></path>
            </svg>
          </button>
        )
      }>
      {[
        <TestimonialStructure
          key="1"
          name="Sandeep Singh"
          testimonial=" ``Nikhil Pathania has enormously helped Khabar Filhal to go digital by creating a website which has made it very easy for us to engage with the audience and seamlessly broadcast news which we were struggling to do earlier. We now not only have a strong online and social media presence but are also getting increased views and a loyal audience base.``"
          designation="Founder, Editor (khabar filhal)"
        />,
      ]}
    </Carousel>
  );
};

export default TestimonialCarousel;
