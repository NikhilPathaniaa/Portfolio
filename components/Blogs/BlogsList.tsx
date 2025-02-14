import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogsListProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const BlogsList = ({ title, excerpt, category, date, readTime, image, slug }: BlogsListProps) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <article className="rounded-xl p-4 dark:bg-[#1D1D1D] bg-[#F3F6F6] cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
        <div className="flex flex-col gap-4">
          {/* Image Container */}
          <div className="relative h-52 w-full rounded-lg overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover transform hover:scale-110 transition-all duration-500" />
            {/* Category Badge */}
            <div className={`absolute top-4 left-4 ${date}`}>
              <span className="bg-[#ef4060] text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow">
            {/* Meta Info */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">{readTime}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-2 font-['Roboto_Slab']">{title}</h2>

            {/* Excerpt */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{excerpt}</p>

            {/* Read More Link */}
            <div className="mt-auto flex items-center text-[#ef4060] font-medium group">
              <span className="relative">
                Read Article
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ef4060] group-hover:w-full transition-all duration-300" />
              </span>
              <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogsList;
