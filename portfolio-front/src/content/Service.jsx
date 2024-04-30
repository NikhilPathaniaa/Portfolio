import React from 'react'

const Service = () => {
  return (
    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                        <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
                        
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                            <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src="images/icons/icon.svg"
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> Web Development</h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Service