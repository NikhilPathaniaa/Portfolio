"use client";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import Header from "../Common/Header";

export function ContactForm() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Save reference to form before async operation
    const form = e.currentTarget;
    const formData = new FormData(form);

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
      toast.success("Message sent successfully! ✅", { position: "top-right", autoClose: 3000 });
      form.reset(); // ✅ Reset form after success
    } else {
      toast.error("Failed to send message. ❌ Please try again.", { position: "top-right", autoClose: 3000 });
    }
  }

  return (
    <div className="bg-white lg:rounded-2xl dark:bg-[#111111] ">
      <ToastContainer /> {/* Toast Notification Container */}
      <div className="mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
        <Header title="Contact" />
      </div>
      <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-[rgb(248,251,251)] rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
        <h3 className="text-[1.5625rem]">
          <span className="text-[rgb(68,86,108)] font-poppins dark:text-[#A6A6A6]">I'm always open to discussing product</span>
          <br />
          <span className="font-semibold font-poppins dark:text-white">design work or partnerships.</span>
        </h3>

        <form onSubmit={handleSubmit}>
          {/* for name */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            />

            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Name
            </label>
          </div>
          {/* for number */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="number"
              name="number"
              required
              placeholder=" "
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            />
            <label
              htmlFor="number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              mobile
            </label>
          </div>
          {/* for email */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Email
            </label>
          </div>
          {/* message input */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <textarea
              name="message"
              required
              rows={4}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"></textarea>

            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white">
            Submit Form
          </button>
          {/* {status && <p className="mt-2 text-sm text-gray-600">{status}</p>} */}
        </form>
      </div>
    </div>
  );
}

// export function ContactForm() {
//   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     // Save reference to form before async operation
//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify({
//           access_key: "50a0280b-d354-4a54-95f9-96890d1bef87",
//           name: formData.get("name"),
//           mobile: formData.get("number"),
//           email: formData.get("email"),
//           message: formData.get("message"),
//         }),
//       });

//       const result = await response.json();
//       if (result.success) {
//         toast.success("Message sent successfully! ✅", { position: "top-right", autoClose: 3000 });
//         form.reset(); // ✅ Reset form after success
//       } else {
//         toast.error("Failed to send message. ❌ Please try again.", { position: "top-right", autoClose: 3000 });
//       }
//     } catch (error) {
//       toast.error("Something went wrong. ❌", { position: "top-right", autoClose: 3000 });
//     }
//   }

//   return (
//     <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
//       <ToastContainer /> {/* Toast Notification Container */}
//       <div className="mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
//         <Header title="Contact" />
//       </div>
//       <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-[rgb(248,251,251)] rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
//         <h3 className="text-[1.5625rem]">
//           <span className="text-[rgb(68,86,108)] font-poppins dark:text-[#A6A6A6]">I'm always open to discussing product</span>
//           <br />
//           <span className="font-semibold font-poppins dark:text-white">design work or partnerships.</span>
//         </h3>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="relative z-0 w-full mt-[40px] mb-8 group">
//             <input type="text" name="name" required placeholder=" " className="block py-2.5 px-0 w-full text-sm border-b-2 border-[#B5B5B5] focus:border-[#FF6464] peer" />
//             <label className="absolute text-sm text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8">Name</label>
//           </div>

//           {/* Mobile */}
//           <div className="relative z-0 w-full mt-[40px] mb-8 group">
//             <input type="number" name="number" required placeholder=" " className="block py-2.5 px-0 w-full text-sm border-b-2 border-[#B5B5B5] focus:border-[#FF6464] peer" />
//             <label className="absolute text-sm text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8">Mobile</label>
//           </div>

//           {/* Email */}
//           <div className="relative z-0 w-full mt-[40px] mb-8 group">
//             <input type="email" name="email" required placeholder=" " className="block py-2.5 px-0 w-full text-sm border-b-2 border-[#B5B5B5] focus:border-[#FF6464] peer" />
//             <label className="absolute text-sm text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
//           </div>

//           {/* Message */}
//           <div className="relative z-0 w-full mt-[40px] mb-8 group">
//             <textarea name="message" required rows={4} placeholder=" " className="block py-2.5 px-0 w-full text-sm border-b-2 border-[#B5B5B5] focus:border-[#FF6464] peer"></textarea>
//             <label className="absolute text-sm text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8">Message</label>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="px-6 py-2 rounded-lg border-[2px] mt-3 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition duration-300">
//             Submit Form
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
