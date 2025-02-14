"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import type { BlogPost } from "@/data/BlogsData";

interface BlogModalProps {
  blog: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal = ({ blog, isOpen, onClose }: BlogModalProps) => {
  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scroll on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto modal-container">
        <div className="min-h-screen px-4 text-center">
          <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle bg-white dark:bg-[#111111] shadow-xl rounded-2xl modal-content">
            {/* Close button */}
            <button onClick={onClose} className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <article className="relative">
              {/* Hero Section */}
              <div className="relative h-[60vh] min-h-[500px] w-full">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#ef4060] px-3 py-1 rounded-full text-sm font-medium">{blog.category}</span>
                    <span className="text-gray-200 text-sm">{blog.readTime}</span>
                  </div>
                  <h1 className="text-4xl font-bold font-['Roboto_Slab'] mb-6">{blog.title}</h1>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                      <Image src={blog.author.image} alt={blog.author.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{blog.author.name}</h3>
                      <p className="text-sm text-gray-200">{blog.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="px-8 py-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="text-gray-600 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t dark:border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="bg-[#F3F6F6] dark:bg-[#1D1D1D] px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
