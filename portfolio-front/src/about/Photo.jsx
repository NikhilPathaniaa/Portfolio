import React from 'react'
import '../styles/AboutMe.css'

const Photo = () => {

  return (

    <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
                <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">

                    <img src="images/about/profile.jpeg"
                        className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                        alt="about" />
                    <div className="pt-[100px] pb-8">
                        <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-dark"> Nikhil Pathania </h2>
                        <h3 className="mb-4 text-[#7B7B7B] inline-block  px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"> Full stack Web Developer </h3>
                        <div className="flex justify-center space-x-3">

                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <span className="socialbtn text-[#1773EA]">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </span>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <span className="socialbtn text-[#1C9CEA]">
                                    <i className="fa-brands fa-twitter"></i>
                                </span>
                            </a>
                            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                                <span className="socialbtn text-[#e14a84]">
                                    <i className="fa-brands fa-dribbble"></i>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <span className="socialbtn text-[#0072b1]">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </span>
                            </a>
                        </div>
                        <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-#7B7B7B]">
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                                    <p className="dark:text-dark">+123 456 7890</p>
                                </div>
                            </div>
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                    <i className="fa-solid fa-envelope-open-text"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                    <p className="dark:text-dark">example@mail.com</p>
                                </div>
                            </div>
                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                    <p className="dark:text-dark">India</p>
                                </div>
                            </div>
                            <div className="flex py-2.5">
                                <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </span>
                                <div className="text-left ml-2.5">
                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                    <p className="dark:text-dark">May 1, 2024</p>
                                </div>
                            </div>
                        </div>
                        <button className="dowanload-btn">
                            <img className="mr-3" src="images/icons/dowanload.png" alt="icon" /> Download CV </button>
                    </div>
                </div>
            </div>
  )
}

export default Photo