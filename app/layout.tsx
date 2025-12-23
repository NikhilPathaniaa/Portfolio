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
    jobTitle: "Nikhil Pathania – Business Growth Expert",
    description: "High-converting websites, UI/UX, and explainer videos that grow businesses. Need a strategy to increase revenue? Let's talk.",
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
      "Development for high-growth brands",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    publisher: {
      "@type": "Person",
      name: "Nikhil Pathania",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://nikhilx.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // 🥖 Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nikhilx.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://nikhilx.vercel.app/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blogs",
        item: "https://nikhilx.vercel.app/blogs",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Pricing",
        item: "https://nikhilx.vercel.app/pricing",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact & Work With Me",
        item: "https://nikhilx.vercel.app/contact",
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${roboto_slab.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
