"use client";
import { useState } from "react";
import Image from "next/image";
interface portfolioData {
  id: number;
  preview: string;
  title: string;
  client: string;
  image: string;
  video: string;
  languages: string;
  content: string;
  category: string;
  designation: string;
  feedback: string;
  solution: string;
  result: string;
  challenge: string;
}
const BlogsList = (props: portfolioData) => {
  const [showModel, setShowModel] = useState(false);
  console.log(showModel);
  return (
    <>
      <div className="portfolio_list-two-items isotop-item plugin custom ">
        <div className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]" key={props.id}>
          <div onClick={() => setShowModel(true)} className="overflow-hidden rounded-lg">
            <Image width={500} height={500} className="w-full z-0 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src={props.image} alt="portfolio image" />
          </div>
          <span className="pt-5 text-[14px] font-normal  font-['Poppins'] text-gray-600 block dark:text-[#A6A6A6]">{props.category}</span>
          <button onClick={() => setShowModel(true)} className="font-medium font-['Poppins'] cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] text-black dark:text-white mt-2">
            {props.title}
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogsList;
