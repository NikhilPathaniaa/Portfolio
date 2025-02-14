import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-[#111111] lg:rounded-2xl px-4 sm:px-5 md:px-10 lg:px-20">
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/blogs" className="bg-[#ef4060] text-white px-6 py-2 rounded-full hover:bg-[#dd3957] transition-colors">
          Return to Blogs
        </Link>
      </div>
    </div>
  );
}
