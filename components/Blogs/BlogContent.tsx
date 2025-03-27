"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { BlogPost } from "@/data/BlogsData";
import { blogsData } from "@/data/BlogsData";

interface BlogContentProps {
  post: BlogPost;
  slug: string;
}

export default function BlogContent({ post, slug }: BlogContentProps) {
  const searchParams = useSearchParams();
  const isDirectAccess = searchParams?.get("direct") === "true";

  const getRelatedPosts = (currentPost: BlogPost) => {
    return blogsData.filter((post) => post.id !== currentPost.id && (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag)))).slice(0, 2);
  };

  if (isDirectAccess) {
    return (
      <article className="min-h-screen bg-white dark:bg-[#111111]">
        <div className="hero-image-container">
          <Image src={post.image} alt={post.title} fill className="object-cover object-center" sizes="100vw" priority />
          <div className="hero-gradient" />

          <Link href={`/blogs/${slug}`} className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all z-10">
            Exit Reader Mode
          </Link>

          <div className="hero-content">
            <div className="container mx-auto max-w-4xl">
              <div className="hero-meta">
                <span className="bg-[#ef4060] px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                <span className="text-gray-200 text-sm">{post.readTime}</span>
              </div>
              <h1 className="hero-title">{post.title}</h1>

              <div className="hero-author">
                <div className="hero-author-image">
                  <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                </div>
                <div className="hero-author-info">
                  <p className="font-medium text-white/90">{post.author.name}</p>
                  <p className="text-sm text-gray-200/80">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-3xl px-4 py-12">
          <div className="prose prose-lg dark:prose-invert">
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-12 pt-8 border-t dark:border-gray-800">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="cta-box">
            <p className="font-bold mb-4">Need help making your website faster?</p>
            <p className="mb-6">Contact me for a free consultation!</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#ef4060] text-white rounded-full hover:bg-[#ff4d6d] transition-colors group">
              Contact Me
              <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white dark:bg-[#111111] lg:rounded-2xl">
      <div className="hero-image-container">
        <Image src={post.image} alt={post.title} fill className="object-cover object-center" sizes="100vw" priority />
        <div className="hero-gradient" />

        <div className="hero-content">
          <div className="container mx-auto max-w-4xl">
            <div className="hero-meta">
              <span className="bg-[#ef4060] px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
              <span className="text-gray-200 text-sm">{post.readTime}</span>
            </div>
            <h1 className="hero-title">{post.title}</h1>

            <div className="hero-author">
              <div className="hero-author-image">
                <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
              </div>
              <div className="hero-author-info">
                <p className="font-medium text-white/90">{post.author.name}</p>
                <p className="text-sm text-gray-200/80">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link href="/blogs" className="inline-flex items-center text-[#ef4060] mb-12 hover:underline group">
          <svg className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Articles
        </Link>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="border-t dark:border-gray-800 pt-8 mb-12">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Tagged with</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t dark:border-gray-800 pt-8">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6 font-['Roboto_Slab']">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {getRelatedPosts(post).map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blogs/${relatedPost.slug}`} className="group">
                <div className="p-6 rounded-xl bg-[#F3F6F6] dark:bg-[#1D1D1D] hover:bg-[#ef4060] dark:hover:bg-[#ef4060] transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-black dark:text-white group-hover:text-white line-clamp-2">{relatedPost.title}</h4>
                    <svg className="w-5 h-5 text-[#ef4060] group-hover:text-white transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="cta-box">
          <p className="font-bold mb-4">Need help making your website faster?</p>
          <p className="mb-6">Contact me for a free consultation!</p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#ef4060] text-white rounded-full hover:bg-[#ff4d6d] transition-colors group">
            Contact Me
            <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
