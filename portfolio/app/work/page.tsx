import React from "react";
import { portfolio } from "@/data/PortfolioData";
import PortfolioList from "@/component/Portfolio/PortfolioList";
import Header from "@/component/Common/Header";
const WorkPage = () => {
  return (
    <section id="portfolio" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="py-12 ">
          <Header title="My Portfolio" />
          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
            {/* portfolio items one start */}

            {portfolio.map((values) => (
              <PortfolioList key={values.id} id={values.id} title={values.title} image={values.image} video={values.video} languages={values.languages} content={values.content} client={values.client} preview={values.preview} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
