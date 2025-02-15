import type { Metadata } from "next";
import { Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import ProfileSideBar from "@/components/Sidebar/ProfileSideBar";
import DayNight from "@/components/DarkMode/DayNight";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig, metadata } from "./metadata";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "800"],
});

const roboto_slab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

interface TitleMetadata {
  default: string;
  template: string;
}

export const layoutMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title || "Default Portfolio Title",
    template: `%s | ${siteConfig.title || "Default Portfolio Title"}`,
  } as TitleMetadata,
  description: siteConfig.description,
  openGraph: {
    ...siteConfig.openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title || "Default Portfolio Title",
    description: siteConfig.description,
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google62576671e8bf5252",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{"Nikhil Pathania - Full Stack Developer Portfolio"}</title>
        <meta name="description" content={layoutMetadata.description || "Professional portfolio of Nikhil Pathania, a Full Stack Developer specializing in web development, custom software solutions, UI/UX design, and Promo videos."} />
        <meta name="keywords" content={metadata.keywords || "Full Stack Developer, Web Development, Custom Software, UI/UX Design, Promo Videos, Nikhil Pathania"} />
        <meta name="author" content={metadata.author || "Nikhil Pathania"} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.openGraph.title || "Nikhil Pathania - Full Stack Developer Portfolio"} />
        <meta property="og:description" content={metadata.openGraph.description || "Explore the portfolio of Nikhil Pathania, a Full Stack Developer with expertise in modern web technologies."} />
        <meta property="og:url" content={metadata.openGraph.url || "https://nikhilx.vercel.app"} />
        <meta property="og:image" content={metadata.openGraph.images[0]?.url || "https://nikhilx.vercel.app/assets/banner.jpg"} />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={metadata.twitter.card || "summary_large_image"} />
        <meta name="twitter:title" content={metadata.twitter.title || "Nikhil Pathania - Full Stack Developer Portfolio"} />
        <meta name="twitter:description" content={metadata.twitter.description || "Discover the skills and projects of Nikhil Pathania, a Full Stack Developer."} />
        <meta name="twitter:image" content={metadata.twitter.image || "https://nikhilx.vercel.app/assets/banner.jpg"} />
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
