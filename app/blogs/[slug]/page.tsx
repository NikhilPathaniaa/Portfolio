import { blogsData } from "@/data/BlogsData";
import BlogContent from "@/components/Blogs/BlogContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // Await params
  const post = blogsData.find((post) => post.slug === slug);
  if (!post) return { title: "Blog not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://nikhilx.vercel.app/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: "@nikhilx",
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params; // Await params
  const post = blogsData.find((post) => post.slug === slug);
  if (!post) return notFound();

  return <BlogContent post={post} slug={slug} />;
}
