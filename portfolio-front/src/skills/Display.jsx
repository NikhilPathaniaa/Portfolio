import React from 'react'

const Display = () => {
  return (
    <div>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                            <div className="col-span-12 space-y-2.5">
                                <div className="lg:mr-16">
                                    <h3>Name :</h3>
                                    <p className="text-[#44566c] dark:text-color-910 leading-7">  </p>
                                    <h3>Email :</h3>
                                    <p className="text-[#44566c] dark:text-color-910 leading-7"> </p>
                                    <h3>Message :</h3>
                                    <p className="text-[#44566c] dark:text-color-910 leading-7"> </p>
                                </div>
                                <div></div>
                            </div>
                        </div>
    </div>
  )
}

export default Display