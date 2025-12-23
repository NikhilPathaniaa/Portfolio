import type { BlogPost } from "@/data/BlogsData";

export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nikhil Pathania",
          url: "https://nikhilx.vercel.app",
        }),
      }}
    />
  );
}

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nikhil Pathania",
          url: "https://nikhilx.vercel.app",
          jobTitle: "Web Developer, UI/UX Designer & Video Creator",
          sameAs: [
            "https://github.com/yourusername",
            "https://linkedin.com/in/yourusername",
            // Add other social profiles
          ],
        }),
      }}
    />
  );
}

export function BlogPostJsonLd({ post }: { post: BlogPost }) {
  console.log(post.title);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
          datePublished: post.date,
          image: post.image,
          url: `https://nikhilx.vercel.app/blogs/${post.slug}`,
        }),
      }}
    />
  );
}
