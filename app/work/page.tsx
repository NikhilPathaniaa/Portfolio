"use client";
import React from "react";
import { portfolio } from "@/data/PortfolioData";
import PortfolioList from "@/components/Portfolio/PortfolioList";
import Header from "@/components/Common/Header";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const WorkPage = () => {
  return (
    <section id="portfolio" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="py-12 ">
          <Header title="Portfolio" space={12} />
          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
            {/* portfolio items one start */}
            {/* filter */}
            {/* <div>
              <ul className="flex flex-wrap -mb-1 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                  <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    All
                  </a>
                </li>
                <li className="mr-2">
                  <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    Wordpress
                  </a>
                </li>
                <li className="mr-2">
                  <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    Next JS
                  </a>
                </li>
                <li className="mr-2">
                  <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    React JS
                  </a>
                </li>
              </ul>
            </div> */}
            <DotLottieReact
              src="https://lottie.host/809eff59-7bdc-4902-9888-5dc14ecbbc9d/4z0PuE0LrC.lottie" // Replace with your actual animation path
              loop
              autoplay
              className="w-80 h-80 hidden md:block"
            />
            {portfolio.map((values) => (
              <PortfolioList
                key={values.id}
                category={values.category}
                id={values.id}
                title={values.title}
                image={values.image}
                video={values.video}
                languages={values.languages}
                content={values.content}
                client={values.client}
                preview={values.preview}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
