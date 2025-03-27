import "./globals.css";
import { Poppins, Roboto_Slab } from "next/font/google";
import { siteConfig } from "./metadata";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import ProfileSideBar from "@/components/Sidebar/ProfileSideBar";
import DayNight from "@/components/DarkMode/DayNight";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "800"],
});

const roboto_slab = Roboto_Slab({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: siteConfig.openGraph,
  metadataBase: new URL("https://nikhilx.vercel.app"),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikhil Pathania",
    url: "https://nikhilx.vercel.app",
    image: "https://nikhilx.vercel.app/profile.jpg", // Update with your actual image
    jobTitle: "Freelance Web Developer & Digital Consultant",
    description: "I help businesses build high-converting, fast, and stunning web platforms that drive growth, improve user experience, and boost revenue.",
    sameAs: ["https://www.linkedin.com/in/nikhil-pathania"],
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
    knowsAbout: [
      "Improving website conversion rates",
      "Building SEO-optimized landing pages",
      "Creating engaging user experiences",
      "Optimizing website speed and performance",
      "Responsive design for mobile-first audiences",
      "Creating websites that generate leads and sales",
      "Brand-focused visual storytelling",
      "End-to-end product launches",
      "Marketing websites for SaaS startups",
      "Freelance development for high-growth brands",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "PES University",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={`${poppins.variable} ${roboto_slab.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </head>
      <body className={`bg-[url('/background/bg.jpg')] dark:bg-[url('/background/bgtwo.jpg')] min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full ${poppins.variable} ${roboto_slab.variable} antialiased`}>
        <DayNight />
        <div className="h-[full] w-full mx-auto md:max-w-[992px] xl:max-w-[1280px] justify-between grid grid-cols-12 lg:mt-40 md:gap-10">
          {/* Side bar*/}
          <ProfileSideBar />
          <div className="col-span-12 lg:col-span-8">
            {/* mini Navbar */}
            <Navbar />
            <div className="bg-white dark:bg-[#111111] shadow-md lg:rounded-3xl">
              {/* all pages content */}
              {children}
              <SpeedInsights />
              <Analytics />
              {/* common footer */}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
