import React from 'react'
import Image from '../profile/Image'
import Designation from '../profile/Designation'
import FaceBool from '../profile/FaceBool'
import Instagram from '../profile/Instagram'
import Github from '../profile/Github'
import LinkedIn from '../profile/LinkedIn'
import Email from '../profile/Email'
import Address from '../profile/Address'

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
                                
                                <Image/>
                                
                                <div className="pt-[100px] pb-8">
                                    <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Nikhil Pathania</h2>
                                    <Designation/>

                                    <div className="flex justify-center space-x-3">
                                        <FaceBool/>
                                        <Instagram/>
                                        <Github/>
                                        <LinkedIn/>
                                    </div>

                                    {/* personal info start */}
                                    <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                                        <Email/>
                                        <Address/>
                                    </div>
                                    {/* personal info end */}

                                    {/* dowanload button */}
                                    <button className="dowanload-btn"><img className="mr-3" src="images/icons/dowanload.png" alt="icon" /> Download Resume</button>
                                </div>
                            </div>
                        </div>
                        {/* personal info for mobile devices end */}

                        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                            <div className="col-span-12 space-y-2.5">
                                <div className="lg:mr-16">
                                    <p className="text-[#44566c] dark:text-color-910 leading-7"> 
                                        Welcome to my portfolio! I'm Nikhil Pathania, a passionate and versatile web developer with a knack for creating responsive, user-friendly websites. With a focus on both aesthetics and functionality, I specialize in crafting captivating UI/UX designs that leave a lasting impression.
                                    </p>
                                    <hr/>
                                    <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                                        My expertise spans across various technologies, allowing me to bring your vision to life effectively. Whether it's building dynamic websites with WordPress or developing complex applications using ReactJS, Spring Boot, and MySQL, I thrive on delivering solutions that exceed expectations.
                                    </p>
                                    <hr/>
                                    <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                                        On the front end, I leverage my skills in ReactJS, HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS to craft visually stunning and intuitive interfaces. Meanwhile, my proficiency in server-side development using Spring Boot and MySQL ensures robust functionality and seamless user experiences.
                                    </p>
                                    <hr/>
                                    <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                                        I'm also well-versed in creating and optimizing RESTful APIs, harnessing tools like Postman, Swagger, and Spring Security to ensure top-notch performance and security. Additionally, my familiarity with version control systems like Git/GitHub allows for efficient collaboration and code management.
                                    </p>
                                    <hr/>
                                    <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                                        With a background in Java, JDBC, Servlets, and Spring MVC, I bring a comprehensive skill set to the table, enabling me to tackle diverse projects with confidence and precision.
                                    </p>
                                    <hr/>
                                    <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                                        Whether you're a business seeking to establish your online presence or a fellow developer in need of collaboration, I'm committed to delivering excellence and driving innovation. Let's turn your ideas into reality together!
                                    </p>
                                    <hr/>
                                    <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                                        Feel free to explore my portfolio and get in touch to discuss how we can work together to bring your projects to life. I look forward to the opportunity to collaborate with you!
                                    </p>                                     
                                </div>
                                <div></div>
                            </div>
                        </div>

                        
                    </div>
  )
}

export default AboutMe