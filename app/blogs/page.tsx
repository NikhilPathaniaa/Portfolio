import React from "react";
import BlogsList from "@/components/Blogs/BlogsList";
import Header from "@/components/Common/Header";
import { blogsData } from "@/data/BlogsData";

const BlogsPage = () => {
  return (
    <section className="bg-white lg:rounded-3xl dark:bg-[#111111]">
      <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="py-12">
          <Header title="Blogs" space={8} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] gap-x-10 gap-y-7 mb-6">
            {blogsData.map((blog) => (
              <BlogsList key={blog.id} id={blog.id} title={blog.title} excerpt={blog.excerpt} category={blog.category} date={blog.date} readTime={blog.readTime} image={blog.image} slug={blog.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
