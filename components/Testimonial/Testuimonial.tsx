import TestimonialCarousel from "./TestimonialCarousel";

const Testuimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-14">
      <h3 className="text-[35px] text-black dark:text-white font-bold font-['Roboto_Slab'] pb-5"> Testimonials </h3>

      <section className="w-full  cursor-default">
        <div className="border-2 bg-transparent border-secondary rounded-3xl h-auto p-4 sm:p-4 md:p-6">
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
};

export default Testuimonial;
