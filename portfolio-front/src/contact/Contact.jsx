import React, { useState } from 'react';

const Contact = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };
    console.log(data);

    // Send data to the server
    try {
      const response = await fetch('http://localhost/add', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to add query or request');
    }
    // Clear input fields
    setName('');
    setEmail('');
    setMessage('');

    setSubmitStatus('success');
    // Clear the success message after a certain time
    setTimeout(() => setSubmitStatus(null), 3000);

  }
  catch (error) {
    console.error('Error adding comment:', error);
    // Set submit status to error
    setSubmitStatus('error');
  }    

  };

  return (
    <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
        Contact
      </h2>
      <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
        <h3 className="text-4xl">
          <span className="text-gray-lite dark:text-[#A6A6A6]">I'm always open to discussing product</span>
          <br />
          <span className="font-semibold dark:text-white">design work or partnerships.</span>
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Form inputs */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
    <input
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
      placeholder=" "
      required
    />
    <label
      htmlFor="name"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
    >
      Name *
    </label>
  </div>

  {/* email input */}
  <div className="relative z-0 w-full mb-8 group">
    <input
      type="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
      placeholder=" "
      id="email"
      required
    />
    <label
      htmlFor="email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
    >
      Email *
    </label>
  </div>

  {/* message input */}
  <div className="relative z-0 w-full mb-8 group">
    <input
      type="text"
      name="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
      placeholder=" "
      id="message"
      required
    />
    <label
      htmlFor="message"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
    >
      What's Your Requirement *
    </label>
  </div>

          {/* Submit button */}
          <input
            type="submit"
            className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
          />
<br />
<br />
{submitStatus === 'success' && <span style={{ color: 'green' }} className="block mt-2 text-green-500 transform transition-all duration-500 ease-in-out animate-bounce">Message sent successfully!</span>}
{submitStatus === 'error' && <span style={{ color: 'red' }} className="block mt-2 text-red-500 transform transition-all duration-500 ease-in-out animate-pulse">Failed to send message. Please try again later.</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
