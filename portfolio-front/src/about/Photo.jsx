import React from 'react'
import '../styles/AboutMe.css'
const Photo = () => {
  return (
    <div className='container1'>
        <div>
            <div>
                <img src="./images/about/avatar.jpg" alt="about" />
                
                <div class="pt-[100px] pb-8">
                    <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white">Nikhil Pathania </h2>
                    <h3>Web Developer </h3>
                    
                    <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                        <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                            <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                <i class="fa-solid fa-mobile-screen-button"></i>
                            </span>
                            <div class="text-left ml-2.5">
                                <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                                <p class="dark:text-white">+123 456 7890</p>
                            </div>
                        </div>
                        <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                            <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                <i class="fa-solid fa-envelope-open-text"></i>
                            </span>
                            <div class="text-left ml-2.5">
                                <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                <p class="dark:text-white">example@mail.com</p>
                            </div>
                        </div>
                        <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                            <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <div class="text-left ml-2.5">
                                <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                <p class="dark:text-white">US India china</p>
                            </div>
                        </div>
                        <div class="flex py-2.5">
                            <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                <i class="fa-solid fa-calendar-days"></i>
                            </span>
                            <div class="text-left ml-2.5">
                                <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                <p class="dark:text-white">April 28, 1000</p>
                            </div>
                        </div>
                    </div>
                    <button class="dowanload-btn">
                        <img class="mr-3" src="images/icons/dowanload.png" alt="icon" /> Download Resume
                    </button>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Photo