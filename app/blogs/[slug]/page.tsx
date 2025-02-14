import BlogContent from "@/components/Blogs/BlogContent";
import { blogsData } from "@/data/BlogsData";
import { notFound } from "next/navigation";
import { BlogPostJsonLd } from "@/components/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogsData.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostJsonLd post={post} />
      <BlogContent post={post} slug={resolvedParams.slug} />
    </>
  );
}
