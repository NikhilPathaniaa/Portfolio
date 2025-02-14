import Header from "@/components/Common/Header";
import Link from "next/link";
import { FaWordpress } from "react-icons/fa";
import { MdCheckCircleOutline } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

const pricingPlans = [
  {
    name: "Basic Website",
    priceText: "₹4,999",
    duration: "Base package",
    icon: <FaWordpress className="w-10 h-10 text-[#21759B] group-hover:scale-110 transition-transform" />,
    description: "Perfect for students and small businesses",
    features: ["Responsive Mobile-First Design", "3-5 Pages Website", "Contact Form & Social Media Integration", "Basic SEO Optimization", "15 Days Support & Maintenance"],
    popular: false,
    ctaText: "Get Started",
    ctaLink: "/contact",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10",
  },
  {
    name: "Custom Website",
    priceText: "₹9,999",
    duration: "Premium package",
    icon: <TbBrandNextjs className="w-10 h-10 text-black dark:text-white group-hover:scale-110 transition-transform" />,
    description: "For businesses needing more features",
    features: ["Everything in Basic +", "Custom Design & Animations", "5-8 Dynamic Pages", "Advanced SEO & Analytics", "1 Month Support & Maintenance"],
    popular: true,
    ctaText: "Get Free Consultation",
    ctaLink: "/contact",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10",
  },
  {
    name: "UI/UX Design",
    priceText: "₹3,999",
    duration: "Per design project",
    icon: "✨",
    description: "Modern and user-friendly interface design",
    features: ["Wireframing & Prototypes", "Mobile-First Design", "User Flow Design", "Design System", "Source Files Included"],
    popular: false,
    ctaText: "Start Design",
    ctaLink: "/contact",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/10",
  },
  {
    name: "Promo Video",
    priceText: "₹2,999",
    duration: "Per video project",
    icon: "🎬",
    description: "Engaging promotional videos for your brand",
    features: ["30-60 Seconds Video", "Background Music", "Basic Animations", "HD Quality Export", "Social Media Formats"],
    popular: false,
    ctaText: "Start Video",
    ctaLink: "/contact",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-[#111111] lg:rounded-3xl pt-12 md:py-12 px-4 sm:px-6 lg:px-8">
      <Header title="Pricing" space={10} />

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-gray-600 font-poppins dark:text-gray-300">Affordable web solutions for your digital presence</p>
      </div>

      {/* All Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`group relative bg-white dark:bg-gray-800 rounded-2xl transition-all duration-300 hover:scale-[1.02]
              ${plan.popular ? "ring-2 ring-[#FF6464]" : "ring-1 ring-gray-200 dark:ring-gray-700"}
              hover:shadow-lg hover:shadow-[#FF6464]/10`}>
            {plan.popular && <div className="absolute -top-3 right-4 bg-[#FF6464] text-white px-4 py-1 rounded-full text-xs font-medium">Popular</div>}

            <div className="p-6">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${plan.bgColor}`}>
                  {typeof plan.icon === "string" ? <span className="text-2xl transform hover:scale-110 transition-transform">{plan.icon}</span> : <div className="transform hover:scale-110 transition-transform">{plan.icon}</div>}
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-poppins">{plan.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold font-poppins bg-gradient-to-r from-[#FF6464] to-[#FF6464]/80 bg-clip-text text-transparent">{plan.priceText}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">{plan.duration}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <MdCheckCircleOutline className="w-4 h-4 text-[#FF6464] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-poppins">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={`/contact?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.priceText)}`}
                className={`block w-full py-3 text-center text-sm font-semibold transition-all duration-300 rounded-xl font-poppins
                  ${plan.popular ? "bg-[#FF6464] text-white hover:bg-[#FF6464]/90" : "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"}`}>
                {plan.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
