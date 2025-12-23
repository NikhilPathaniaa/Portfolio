"use client";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Common/Header";

// ... (keep the existing imports and constants)

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "50a0280b-d354-4a54-95f9-96890d1bef87",
          name: formData.get("name"),
          mobile: formData.get("number"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Thank you! Your message has been sent successfully.", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        form.reset();
        setIsSubmitted(true);
      } else {
        toast.error("Oops! Failed to send message. Please try again.", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("Something went wrong. Please try again later.", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const getInputClasses = (isDisabled: boolean) => {
    return `block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] ${
      isDisabled 
        ? 'border-gray-300 dark:border-gray-700 cursor-not-allowed' 
        : 'border-[#B5B5B5] dark:border-[#333333]'
    } appearance-none text-black dark:text-white dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer ${
      isDisabled ? 'opacity-70' : ''
    }`;
  };

  return (
    <div className="bg-white lg:rounded-3xl dark:bg-[#111111]">
      <ToastContainer position="bottom-center" autoClose={4000} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <div className="mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
        <Header title="Contact" space={11} />
      </div>
      <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-[rgb(248,251,251)] rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h3 className="text-[1.5625rem] text-center">
            <span className="text-[rgb(68,86,108)] font-poppins dark:text-[#A6A6A6]">I'm always open to discussing product</span>
            <br />
            <span className="font-semibold font-poppins text-black dark:text-white">design work or partnerships.</span>
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="text"
              name="name"
              required
              disabled={isSubmitting || isSubmitted}
              minLength={4}
              maxLength={50}
              pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$"
              title="Name must be at least 4 characters, contain only letters and single spaces between words."
              placeholder=" "
              className={getInputClasses(isSubmitting || isSubmitted)}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Name
            </label>
          </div>

          {/* Mobile Number Input */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="tel"
              name="number"
              required
              disabled={isSubmitting || isSubmitted}
              pattern="[6789][0-9]{9}"
              title="Please enter a valid 10-digit Indian mobile number starting with 6-9"
              placeholder=" "
              maxLength={10}
              className={getInputClasses(isSubmitting || isSubmitted)}
            />
            <label
              htmlFor="number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Mobile Number
            </label>
          </div>

          {/* Email Input */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="email"
              name="email"
              required
              disabled={isSubmitting || isSubmitted}
              pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address"
              placeholder=" "
              className={getInputClasses(isSubmitting || isSubmitted)}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Email
            </label>
          </div>

          {/* Message Textarea */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <textarea
              name="message"
              required
              disabled={isSubmitting || isSubmitted}
              minLength={10}
              maxLength={500}
              rows={4}
              placeholder=" "
              className={`${getInputClasses(isSubmitting || isSubmitted)} resize-none`}
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            aria-label="submit"
            className={`px-6 py-3 rounded-lg border-2 mt-3 font-semibold cursor-pointer transition-all duration-300 ease-in-out ${
              isSubmitted
                ? 'bg-green-500 text-white border-transparent'
                : isSubmitting
                ? 'bg-gray-300 text-gray-500 border-transparent cursor-wait'
                : 'border-color-910 text-black dark:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white hover:border-transparent transform hover:-translate-y-0.5 hover:shadow-md'
            } flex items-center justify-center gap-2 min-w-[180px] mx-auto`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : isSubmitted ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Message Sent!
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}