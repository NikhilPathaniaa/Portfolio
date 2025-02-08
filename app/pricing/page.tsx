import Header from "@/components/Common/Header";
import Link from "next/link";
import { MdCheckCircleOutline } from "react-icons/md";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import dynamic from "next/dynamic";

// const DotLottieReact = dynamic(() => import("@lottiefiles/dotlottie-react").then((module) => module.DotLottieReact), {
//   ssr: false,
//   loading: () => (
//     <div className="relative w-80 h-80 flex items-center justify-center overflow-hidden">
//       <svg viewBox="0 0 200 200" className="w-full h-full animate-[rotate_10s_linear_infinite]">
//         <defs>
//           <radialGradient id="grad" cx="50%" cy="50%" r="50%">
//             <stop offset="0%" stopColor="#ff00ff" />
//             <stop offset="100%" stopColor="#00ffff" />
//           </radialGradient>
//         </defs>
//         <path
//           fill="url(#grad)"
//           d="M53.4,-68.6C67.9,-56.6,78.1,-37.4,81,-18.1C83.9,1.2,79.6,20.6,69.3,34.9C59.1,49.2,42.9,58.4,26.8,66.2C10.8,74.1,-5.1,80.5,-22.6,78.5C-40,76.5,-58.9,66,-68.1,50.9C-77.3,35.7,-76.8,15,-70.6,-3.8C-64.4,-22.6,-52.6,-39.4,-38.1,-51.6C-23.7,-63.9,-6.8,-71.7,11.6,-75.6C29.9,-79.5,49.8,-79.6,53.4,-68.6Z"
//           transform="translate(100 100) scale(1)"
//         />
//       </svg>
//     </div>
//   ),
// });
const tiers = [
  // By wordpress
  {
    name: "WordPress",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$29",
    description: "The perfect plan if you're just getting started with our product.",
    features: ["25 products", "Up to 10,000 subscribers", "Advanced analytics", "24-hour support response time"],
    featured: false,
  },
  // By coding nextjs and reactjs
  {
    name: "Coding Nextjs and Reactjs",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: ["Unlimited products", "Unlimited subscribers", "Advanced analytics", "Dedicated support representative", "Marketing automations", "Custom integrations"],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className=" bg-white dark:bg-[#111111] lg:rounded-3xl pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <Header title="Pricing" space={10} />
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 dark:text-gray-300 sm:text-xl/8">
          Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
        </p>
        {/* <DotLottieReact
          src="https://lottie.host/af055a8b-9ede-4563-9478-4cb795d345c3/2GebhRjEwn.lottie" // Replace with your actual animation path
          loop
          autoplay
          className="w-80 h-80 "
        /> */}
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? "relative bg-gray-900 shadow-2xl" : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured ? "" : tierIdx === 0 ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl" : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}>
            <h3 id={tier.id} className={classNames(tier.featured ? "text-indigo-400" : "text-indigo-600", "text-base/7 font-semibold")}>
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className={classNames(tier.featured ? "text-white" : "text-gray-900", "text-5xl font-semibold tracking-tight")}>{tier.priceMonthly}</span>
              <span className={classNames(tier.featured ? "text-gray-400" : "text-gray-500", "text-base")}>/month</span>
            </p>
            <p className={classNames(tier.featured ? "text-gray-300" : "text-gray-600", "mt-6 text-base/7")}>{tier.description}</p>
            <ul role="list" className={classNames(tier.featured ? "text-gray-300" : "text-gray-600", "mt-8 space-y-3 text-sm/6 sm:mt-10")}>
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <MdCheckCircleOutline aria-hidden="true" className={classNames(tier.featured ? "text-indigo-400" : "text-indigo-600", "h-6 w-5 flex-none")} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              aria-describedby={tier.id}
              className={classNames(
                tier.featured ? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500" : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}>
              Get started today
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
