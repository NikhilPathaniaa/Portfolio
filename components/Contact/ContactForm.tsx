"use client";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import Header from "../Common/Header";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Move this outside component to avoid recreation
const projectTypes = [
  { id: "basic", name: "Basic Website", description: "Simple, elegant websites for personal use or portfolios" },
  { id: "standard", name: "Standard Website", description: "Feature-rich websites for businesses and startups" },
  { id: "design", name: "UI/UX Design", description: "Custom design solutions for your digital presence" },
  { id: "video", name: "Promo Video", description: "Engaging video content for your brand" },
  { id: "custom", name: "Custom Project", description: "Have something else in mind? Let's discuss!" },
];

const getProjectTypeFromPlan = (planName: string): string => {
  const projectTypeMap: { [key: string]: string } = {
    "Basic Website": "basic",
    "Standard Website": "standard",
    "UI/UX Design": "design",
    "Promo Video": "video",
  };
  return projectTypeMap[planName] || "custom";
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const selectedPlan = {
    name: searchParams?.get("plan") || "",
    price: searchParams?.get("price") || "",
  };

  useEffect(() => {
    if (!searchParams || !selectedPlan.name) return;

    const form = document.querySelector("form") as HTMLFormElement;
    if (!form) return;

    const projectTypeSelect = form.querySelector('[name="project_type"]') as HTMLSelectElement;
    if (projectTypeSelect) {
      projectTypeSelect.value = getProjectTypeFromPlan(selectedPlan.name);
    }
  }, [searchParams, selectedPlan.name]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get("name") as string;
    const mobile = formData.get("number") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validation checks with improved toast styling
    const toastConfig = {
      position: "bottom-center" as const,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored" as const,
      style: {
        fontSize: "14px",
        fontWeight: "500",
        borderRadius: "8px",
        padding: "12px 20px",
      },
    };

    if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/) || name.length < 4) {
      toast.error("Please enter a valid name (at least 4 letters, only single spaces between words)", toastConfig);
      return;
    }

    // Enhanced mobile number validation
    const mobileRegex = /^(?!0000000000|1111111111|2222222222|3333333333|4444444444|5555555555|6666666666|7777777777|8888888888|9999999999|0123456789|1234567890|9876543210)[6789]\d{9}$/;

    if (!mobileRegex.test(mobile)) {
      toast.error("Please enter a valid Indian mobile number starting with 6-9", toastConfig);
      return;
    }

    // Check for sequential or repeated patterns
    const repeatingPattern = /(.)\1{4,}/; // Checks for 5 or more repeated digits
    const sequentialAsc = /(012|123|234|345|456|567|678|789)\d*/;
    const sequentialDesc = /(987|876|765|654|543|432|321|210)\d*/;

    if (repeatingPattern.test(mobile) || sequentialAsc.test(mobile) || sequentialDesc.test(mobile)) {
      toast.error("Please enter a valid mobile number without repetitive or sequential patterns", toastConfig);
      return;
    }

    if (message.length < 10) {
      toast.error("Please enter a detailed message (at least 10 characters)", toastConfig);
      return;
    }

    // Enhanced email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const disposableEmailDomains = ["tempmail.com", "temp-mail.org", "guerrillamail.com", "sharklasers.com", "mailinator.com", "yopmail.com", "temp.com", "fakeinbox.com", "tempmail.net", "tmpmail.org", "10minutemail.com", "trashmail.com"];

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address", toastConfig);
      return;
    }

    const emailDomain = email.split("@")[1].toLowerCase();
    if (disposableEmailDomains.includes(emailDomain)) {
      toast.error("Please use a valid permanent email address", toastConfig);
      return;
    }

    // Proceed with form submission if validation passes
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
          selected_plan: selectedPlan.name,
          pricing_type: selectedPlan.price,
          project_type: formData.get("project_type"),
          budget_range: formData.get("budget_range"),
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Thank you! Your message has been sent successfully.", {
          ...toastConfig,
          icon: () => "🎉",
        });
        form.reset();
      } else {
        toast.error("Oops! Failed to send message. Please try again.", toastConfig);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("Something went wrong. Please try again later.", toastConfig);
    }
  }

  return (
    <div className="bg-white lg:rounded-3xl dark:bg-[#111111]">
      <ToastContainer position="bottom-center" autoClose={4000} limit={1} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <div className="mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
        <Header title="Contact" space={11} />
      </div>
      <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-[rgb(248,251,251)] rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
        {/* Show selected plan if exists */}
        {selectedPlan.name && (
          <div className="mb-8 p-4 rounded-lg bg-[#FF6464]/10 dark:bg-[#FF6464]/20">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Selected Plan: {selectedPlan.name}</h4>
            <p className="text-gray-600 dark:text-gray-300">{selectedPlan.price && `Pricing: ${selectedPlan.price}`}</p>
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h3 className="text-[1.5625rem]">
            <span className="text-[rgb(68,86,108)] font-poppins dark:text-[#A6A6A6]">I&apos;m always open to discussing product</span>
            <br />
            <span className="font-semibold font-poppins text-black dark:text-white">design work or partnerships.</span>
          </h3>
          {/* <DotLottieReact
            src="https://lottie.host/5f45e21b-2cff-4a6e-9c11-161a26c9978c/JO2OMOW93M.lottie" // Replace with your actual animation path
            loop
            autoplay
            className="w-24 h-24"
          /> */}
        </div>
        <form onSubmit={handleSubmit}>
          {/* for name */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="text"
              name="name"
              required
              minLength={4}
              maxLength={50}
              pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$"
              title="Name must be at least 4 characters, contain only letters and single spaces between words. Cannot start/end with space or have consecutive spaces."
              placeholder=" "
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-black dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
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
              type="tel"
              name="number"
              required
              pattern="[6789][0-9]{9}"
              title="Please enter a valid 10-digit Indian mobile number starting with 6-9"
              placeholder=" "
              maxLength={10}
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-black dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
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
              pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid permanent email address"
              placeholder=" "
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-black dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
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
              minLength={10}
              maxLength={500}
              rows={4}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-black dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"></textarea>

            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Message
            </label>
          </div>

          {/* Update hidden input names to match exactly */}
          <input type="hidden" name="selected_plan" value={selectedPlan.name || ""} />
          <input type="hidden" name="pricing_type" value={selectedPlan.price || ""} />

          {/* Add project type selection */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <select
              name="project_type"
              required
              defaultValue={selectedPlan.name ? getProjectTypeFromPlan(selectedPlan.name) : ""}
              className="appearance-none block w-full px-4 py-3 text-base text-gray-900 dark:text-white
                bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-[#FF6464] focus:border-transparent
                dark:focus:ring-[#FF6464] transition-all duration-200
                cursor-pointer">
              <option value="" disabled>
                Select Project Type
              </option>
              {projectTypes.map((type) => (
                <option key={type.id} value={type.id} className="py-2">
                  {type.name}
                </option>
              ))}
            </select>

            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Floating label */}
            <label
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
              -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 peer-focus:px-2 
              peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
              peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 
              peer-focus:scale-75 left-1">
              Project Type
            </label>
          </div>

          {/* Add budget range field */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <select
              name="budget_range"
              required
              defaultValue=""
              className="appearance-none block w-full px-4 py-3 text-base text-gray-900 dark:text-white
                bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-[#FF6464] focus:border-transparent
                dark:focus:ring-[#FF6464] transition-all duration-200
                cursor-pointer">
              <option value="" disabled>
                Select Budget Range
              </option>
              <option value="under_5k">Under ₹5,000</option>
              <option value="5k_10k">₹5,000 - ₹10,000</option>
              <option value="10k_20k">₹10,000 - ₹20,000</option>
              <option value="above_20k">Above ₹20,000</option>
              <option value="flexible">Flexible / Discuss</option>
            </select>

            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Floating label */}
            <label
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
              -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-800 px-2 peer-focus:px-2 
              peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
              peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 
              peer-focus:scale-75 left-1">
              Budget Range
            </label>
          </div>

          <button
            type="submit"
            aria-label="submit"
            className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent text-black dark:text-white">
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
