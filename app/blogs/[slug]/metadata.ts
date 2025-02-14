import type { Metadata } from "next";
import { blogsData } from "@/data/BlogsData";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | null> {
  const post = blogsData.find((post) => post.slug === params.slug);

  if (!post) {
    return null;
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      authors: [post.author.name],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: `@${post.author.name.replace(/\s+/g, "")}`,
    },
    alternates: {
      canonical: `/blogs/${params.slug}`,
    },
    keywords: post.tags,
    authors: [{ name: post.author.name, url: `/author/${post.author.name.toLowerCase().replace(/\s+/g, "-")}` }],
    category: post.category,
  };
}
