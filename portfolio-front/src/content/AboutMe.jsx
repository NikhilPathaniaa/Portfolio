import React from 'react'

const AboutMe = () => {
  return (
                        <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                        {/* about page title */}
                        <h2 className="after-effect after:left-52">About Me</h2>
                        {/* personal info for mobile devices start */}
                        <div className="lg:hidden">
                            <div
                                className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                                {/* profile image  */}
                                <img src="images/about/avatar.jpg"
                                    className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                                    alt="about" />
                                <div className="pt-[100px] pb-8">
                                    <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Monalisa Ashley
                                    </h2>
                                    <h3
                                        className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                                        Ui/Ux Designer </h3>

                                    <div className="flex justify-center space-x-3">
                                        {/* facebook icon and link */}
                                        <a href="https://www.facebook.com/" target="_blank"
                                            rel="noopener noreferrer">
                                            <span className="socialbtn text-[#1773EA]">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </span>
                                        </a>
                                        {/* twitter icon and link */}
                                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                            <span className="socialbtn text-[#1C9CEA]">
                                                <i className="fa-brands fa-twitter"></i>
                                            </span>
                                        </a>
                                        {/* dribbble icon and link */}
                                        <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                                            <span className="socialbtn text-[#e14a84]">
                                                <i className="fa-brands fa-dribbble"></i>
                                            </span>
                                        </a>
                                        {/* linkedin icon and link */}
                                        <a href="https://www.linkedin.com/" target="_blank"
                                            rel="noopener noreferrer">
                                            <span className="socialbtn text-[#0072b1]">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </span>
                                        </a>
                                    </div>

                                    {/* personal info start */}
                                    <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                                        <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                                            <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                                <i className="fa-solid fa-mobile-screen-button"></i>
                                            </span>
                                            <div className="text-left ml-2.5">
                                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                                                <p className="dark:text-white">+123 456 7890</p>
                                            </div>
                                        </div>

                                        <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                            <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                                <i className="fa-solid fa-envelope-open-text"></i>
                                            </span>
                                            <div className="text-left ml-2.5">
                                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                                <p className="dark:text-white">example@mail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                            <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </span>
                                            <div className="text-left ml-2.5">
                                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                                <p className="dark:text-white">Hong kong china</p>
                                            </div>
                                        </div>

                                        <div className="flex py-2.5">
                                            <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                                <i className="fa-solid fa-calendar-days"></i>
                                            </span>
                                            <div className="text-left ml-2.5">
                                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                                <p className="dark:text-white">May 27, 1990</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* personal info end */}

                                    {/* dowanload button */}
                                    <button className="dowanload-btn">
                                        <img className="mr-3" src="images/icons/dowanload.png" alt="icon" /> Download
                                        CV
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* personal info for mobile devices end */}

                        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                            <div className="col-span-12 space-y-2.5">
                                <div className="lg:mr-16">
                                    <p className="text-[#44566c] dark:text-color-910 leading-7"> I'm Creative Director
                                        and UI/UX Designer from Sydney, Australia, working in web development and
                                        print media. I enjoy turning complex problems into simple, beautiful and
                                        intuitive designs. </p>
                                    <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910"> My aim is to
                                        bring across your message and identity in the most creative way. I created
                                        web design for many famous brand companies. </p>
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </div>
  )
}

export default AboutMe