import React from 'react'
import '../styles/AboutMe.css'

const Hero = () => {
  return (
    <div className="content-top lg:rounded-2xl bg-white ">
        <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">

            <h2 className="after-effect after:left-52">About Me</h2>
                    

            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                <div className="col-span-12 space-y-2.5">
                    <div className="lg:mr-16">
                        <p className="text-[#44566c] dark:text-color-910 leading-7"> I'm Creative Director
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam eos officia at ipsam sunt nam aut quas hic repudiandae deserunt, architecto pariatur eum labore unde similique soluta cupiditate consequuntur maiores excepturi! Pariatur sed cupiditate voluptatum rem facere, alias laudantium, commodi accusamus repellat explicabo optio quod odit velit quis quia debitis modi corporis magni et esse, architecto cumque molestiae inventore!. </p>
                        <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910"> My aim is to
                            bring across your message and identity in the most creative way. I created
                            web design for many famous brand companies. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero