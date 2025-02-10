import React from "react";

interface TestimonialStructureProps {
  testimonial: string;
  name: string;
  designation: string;
}
const TestimonialStructure = ({ testimonial, name, designation }: TestimonialStructureProps) => {
  return (
    <div className="flex flex-col md:flex-row  px-1 md:px-5 h-full items-start justify-between ">
      {/* <p className="font-bold ">Vendomat products ensure quality services.</p> */}
      <div className="flex flex-col items-start border-r-2 border-secondary pr-3 mr-3 md:mr-9 md:pr-9 md:h-full">
        <h4 className="text-description md:text-subheading font-['Poppins'] text-gray-700 dark:text-white font-bold mb-3">{name}</h4>
        <p className="text-description font-['Poppins'] text-start text-gray-700 dark:text-white">{designation}</p>
      </div>
      <p className="mt-4 md:mt-0 md:ml-6 font-['Poppins'] text-center md:text-left text-black dark:text-white" dangerouslySetInnerHTML={{ __html: testimonial.replace(/\n/g, "<br>") }} />
    </div>
  );
};

export default TestimonialStructure;
