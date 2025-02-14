import type { Metadata } from "next";
import { Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import ProfileSideBar from "@/components/Sidebar/ProfileSideBar";
import DayNight from "@/components/DarkMode/DayNight";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "./metadata";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "800"], // or any other weight values you need
});

const roboto_slab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    ...siteConfig.openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[url('/background/bg.jpg')] dark:bg-[url('/background/bgtwo.jpg')] min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full ${poppins.variable} ${roboto_slab.variable} antialiased`}>
        <DayNight />
        <div className="h-[full] w-full mx-auto md:max-w-[992px] xl:max-w-[1280px] justify-between grid grid-cols-12 lg:mt-40 md:gap-10">
          {/* Side bar*/}
          <ProfileSideBar />
          <div className="col-span-12 lg:col-span-8">
            {/* mini Navbar */}
            <Navbar />
            <div className="bg-white dark:bg-[#111111]  shadow-md lg:rounded-3xl">
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
