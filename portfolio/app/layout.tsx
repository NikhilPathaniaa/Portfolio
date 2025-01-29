import Navbar from "@/component/Navbar";
import ProfileSideBar from "@/component/Sidebar/ProfileSideBar";
import type { Metadata } from "next";
import { Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";
import "./tailwind.css";
import Footer from "@/component/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
  subsets: ["latin"],
});

const roboto_Slab = Roboto_Slab({
  variable: "--font-Roboto_Slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full ${poppins.variable} ${roboto_Slab.variable} antialiased `}>
        <div className="flex mt-24 justify-between">
          {/* Side bar*/}
          <ProfileSideBar />
          <div className="col-span-12 lg:col-span-8">
            <Navbar />
            <div className="bg-white w-[55vw] border-2 border-gray-50 shadow-md rounded-xl">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
