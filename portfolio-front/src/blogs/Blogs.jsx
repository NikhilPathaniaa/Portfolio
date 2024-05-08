import React, { useState } from 'react'
import BlogsPopUp from './BlogsPopUp'

const Blogs = () => {
    const [showModel, setShowModel] = useState(false);
  return (
    <div>
        <section class="bg-white lg:rounded-2xl dark:bg-[#111111]">
                    <div class="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
                        <div class="pb-12">
                            <h2 class="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
                            <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
                                {/* blog items one start */}
                                <div
                                    class="p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2">
                                    <div onClick={() => setShowModel(true)} class="overflow-hidden rounded-lg">
                                        
                                            <img class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                                src="images/blog_images/small/1.jpg" alt="blog image" />
                                    </div>
                                    <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                        <span>17 April</span>
                                        <span class="dot-icon">Inspiration</span>
                                    </div>
                                    <h3 onClick={() => setShowModel(true)}
                                        class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                        <a href="#ex1" rel="modal:open">How to Own Your Audience by Creating an Email
                                            List.</a>
                                    </h3>
                                </div>
                                {/* blog items one end */}

                                {/* blog items two start */}

                                <div
                                    class="p-5 rounded-lg mb-2 h-full bg-[#eefbff] dark:bg-transparent dark:border-[#212425] dark:border-2">
                                    <div class="overflow-hidden rounded-lg">
                                        <a href="#ex2" rel="modal:open">
                                            <img class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                                src="images/blog_images/small/2.jpg" alt="blog image" />
                                        </a>
                                    </div>
                                    <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                        <span>10 April</span>
                                        <span class="dot-icon">Inspiration</span>
                                    </div>
                                    <h3
                                        class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                        <a href="#ex2" rel="modal:open"> Everything You Need to Know About Web
                                            Accessibility. </a>
                                    </h3>
                                </div>
                                {/* blog items two end */}

                                {/* blog items three start */}
                                <div
                                    class="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2 bg-[#fcf4ff] dark:bg-transparent">
                                    <div class="overflow-hidden rounded-lg">
                                        <a href="#ex3" rel="modal:open">
                                            <img class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                                src="images/blog_images/small/3.jpg" alt="blog image" />
                                        </a>
                                    </div>
                                    <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                        <span>21 April</span>
                                        <span class="dot-icon">Web Design</span>
                                    </div>
                                    <h3
                                        class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                        <a href="#ex3" rel="modal:open">he window know to say beside you</a>T
                                    </h3>
                                </div>
                                {/* blog items three end */}

                                {/* blog items four start */}
                                <div
                                    class="p-5 rounded-lg mb-2 h-full dark:border-[#212425] bg-[#fcf4ff] dark:bg-transparent dark:border-2">
                                    <div class="overflow-hidden rounded-lg">
                                        <a href="#ex4" rel="modal:open">
                                            <img class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                                src="images/blog_images/small/4.jpg" alt="blog image" />
                                        </a>
                                    </div>
                                    <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                        <span>27 April</span>
                                        <span class="dot-icon">Inspiration</span>
                                    </div>
                                    <h3
                                        class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                        <a href="#ex4" rel="modal:open">Top 10 Toolkits for Deep Learning in 2021.</a>
                                    </h3>
                                </div>
                                {/* blog items four end */}

                            </div>
                        </div>
                    </div>

                </section>
                {/* blog section end */}

            {/* modal  for item one start */}
            {showModel &&  <BlogsPopUp onClose={()=> setShowModel(false)}/>}
    </div>
    
  )
}

export default Blogs