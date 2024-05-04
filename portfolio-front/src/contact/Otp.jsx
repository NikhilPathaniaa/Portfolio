import React from 'react'

const Otp = () => {
  return (
    <div classNameName="pt-3">
        <div className="pr-3 pb-4">
    <form className="w-full rounded px-8 py-6">
        <div className="mb-4">
        <span className="dark:text-white text-[25px] font-medium">Enter Your OTP :</span>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{border:'2px solid black'}} id="otp" type="text" placeholder="Enter OTP"/>
        </div>
        <div className="flex items-center justify-between">
            <button className="comment-btn bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
                Verify
             </button>
            <a className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800" href="#">
                Resend OTP
            </a>
        </div>
    </form>
</div>
</div>
                        
                    
  )
}

export default Otp