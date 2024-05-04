import React, { useState } from 'react';

const Otp = ({ onSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp);
  };

  return (
    <div className="pt-3">
      <div className="pr-3 pb-4">
        <form className="w-full rounded px-8 py-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <span className="dark:text-white text-[25px] font-medium">Enter Your OTP:</span>
            <input
              autoFocus
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ border: '2px solid black' }}
              id="otp"
              type="text"
              placeholder="Enter OTP"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;