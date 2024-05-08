import React, { useState } from 'react';

const Otp = ({ id, onSuccess }) => {
  const [otp, setOtp] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      const response = await fetch(`http://localhost/submit-otp?otp=${otp}&id=${id}`,{
        method:"POST",
        headers:{"content-Type":"application/json"}
    })
    if (!response.ok) {
        throw new Error('Failed to verify OTP');
      }
      // Clear input fields
      setOtp('');

      setSubmitStatus('success');
      // Clear the success message after a certain time
      setTimeout(() => setSubmitStatus(null), 3000);
      onSuccess();
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Set submit status to error
      setSubmitStatus('error');
    }    

}

  return (
    <div className="pt-3">
      <div className="pr-3 pb-4">
        <form className="w-full rounded px-8 py-6" onSubmit={handleSubmit}>
        {submitStatus === 'success' && <span style={{ color: 'green' }}>OTP verified successfully!</span>}
        {submitStatus === 'error' && <span style={{ color: 'red' }}>Wrong OTP</span>}
          <div className="mb-4">
            <span className="dark:text-white text-[25px] font-medium">Enter Your OTP:</span>
            <input
              autoFocus
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ border: '2px solid black' }}
              id="otp"
              type="number"
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
