import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white   lg:rounded-2xl dark:bg-[#111111]">
                    <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                        <div className="py-12 ">
                            <h2 className="after-effect after:left-48 lg:mt-0">Portfolio</h2>
                            {/* fillter button group */}
                            {/* fillter group buttons */}
                            <ul
                                className="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium">
                                <li className="fillter-btn mr-4 md:mx-4 is-checked" data-filter="*">All</li>
                                <li className="fillter-btn mr-4 md:mx-4" data-filter=".dev">Video</li>
                                <li className="fillter-btn mr-4 md:mx-4" data-filter=".plugin"> Web Design</li>
                                <li className="fillter-btn mr-4 md:mx-4" data-filter=".branding"> Logo</li>
                                <li className="fillter-btn mr-4 md:mx-4" data-filter=".custom">Graphic Design</li>
                            </ul>
                        </div>
                        {/* End py-12 */}

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
                                        className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                    <h2
                                        className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a href="#portfiloOne" rel="modal:open"> Chul urina </a>
                                    </h2>
                                </div>
                            </div>

                            {/* modal start for item one  */}
                            <div id="portfiloOne" className="modal-container modal">
                                <div
                                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                        UI/UX Project
                                    </h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                        <div className="space-y-2">
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                Project :&nbsp;
                                                <span className="font-medium"> Website</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i className="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                Langages :&nbsp;
                                                <span className="font-medium">Photoshop, Figma</span>
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <p
                                                className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                <i className="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                Client :&nbsp; <span className="font-medium">Envato</span>
                                            </p>
                                            <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                <i
                                                    className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                Preview :&nbsp;
                                                <span
                                                    className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                    <a href="https://www.envato.com/" target="_blank"
                                                        rel="noopener noreferrer">www.envato.com</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Mollitia placeat magnam possimus iusto blanditiis pariatur
                                        labore explicabo quo repellat hic dolorum numquam
                                        asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                        odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                        quidem! Quas magni distinctio dolorum dolore natus, vel
                                        numquam accusamus. Nostrum eligendi recusandae qui tempore
                                        deserunt!
                                    </p>
                                    <div className="pr-3">
                                        <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                            src="images/work_images/1.jpg" alt="portfolio image" />
                                    </div>
                                </div>
                                <a href="#close-modal" rel="modal:close"
                                    className="close bg-close-light dark:bg-close-dark">Close</a>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Portfolio