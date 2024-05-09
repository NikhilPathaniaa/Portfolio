import React from 'react'
import WhyMe from './WhyMe'

const MainContent = () => {
  return (
    <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                            <div className="col-span-12 space-y-2.5">
                                <div className="lg:mr-16">
                                    <p className="text-[#44566c] dark:text-color-910 leading-7"> 

                                    Hey there! I'm <span className='text-[#FA5252]'>Nikhil Pathania</span>, your web magician here to make your online dreams a reality. 
                                    I specialize in crafting stunning websites and web applications tailored to your unique needs.

                                    </p>
                                    <WhyMe/>

                                    <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pt-5 pb-5"> Let's Connect! </h3>
                                    <div className='flex items-center'>
                                        <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                                        Ready to elevate your online presence? <br/> 
                                        Let's chat and turn your ideas into reality.  <br/>
                                        Hit me up and let's make digital dreams happen.
                                        </p> 
                                        <button className="dowanload-btn">Get in Touch </button>                                    
                                    </div>
                                    
                                </div>
                                <div></div>
                            </div>
                        </div>
  )
}

export default MainContent