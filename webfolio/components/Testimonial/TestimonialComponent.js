"use client";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { testimonials } from "@/data/testimonials";

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonial, setTestimonial] = useState(testimonials[0]);
  console.log(testimonial);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
      setTestimonial(testimonials[currentIndex]);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, testimonials]);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What our customers say</h2>
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} swipeable={true} dynamicHeight={true} centerMode={true} centerSlidePercentage={80} transitionTime={1000}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-56 rounded-full mx-auto mb-4" />
              <p className="text-lg text-gray-600 mb-4">{testimonial.quote}</p>
              <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-lg text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialComponent;
