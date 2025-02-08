import Link from "next/link";
import React from "react";
const ContactMe = () => {
  return (
    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h3 className="text-[35px] text-black dark:text-white font-bold font-['Roboto_Slab'] pt-5 pb-5">🚀 Let&apos;s Build Something Awesome – Contact Me Today! </h3>
      <div className="flex flex-wrap items-center">
        <p className="text-[#44566c] leading-7 mt-2.5 dark:text-[#a6a6a6] font-['Poppins']">
          Ready to elevate your online presence? <br />
          Let&apos;s chat and turn your ideas into reality. <br />
          Hit me up and let&apos;s make digital dreams happen.
        </p>
        <Link href="/contact" className="mx-auto mt-6 flex items-center rounded-[35px] bg-gradient-to-r from-[#fa5252] via-[#fa5252] to-[#dd2476] px-8 py-3 text-lg text-white transition-all duration-200 ease-linear hover:bg-gradient-to-l">
          Let&apos;s Work Together!
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
