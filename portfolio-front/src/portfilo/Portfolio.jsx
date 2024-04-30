import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white   lg:rounded-2xl dark:bg-[#111111]">
                    <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                        <div className="py-12 ">
                            <h2 className="after-effect after:left-48 lg:mt-0">Portfolio</h2>   
                        </div>

                        <div id="isotop-gallery-wrapper" className="mymix portfolio_list-two  two-col ">
                            <div className="grid-sizer"></div>
                            {/* portfolio items one start */}
                            <div className="portfolio_list-two-items isotop-item plugin custom ">
                                <div
                                    className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a href="#portfiloOne" rel="modal:open">
                                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src="images/work_images/small/1.jpg" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web Developer</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloOne" rel="modal:open"> Khabarfilhal </a>
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
  )
}

export default Portfolio