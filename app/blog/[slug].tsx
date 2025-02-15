import { useRouter } from "next/router";
import { getBlogPost, getAllBlogPosts } from "../lib/loadPosts"; // Adjusted import statement

// Define the Post interface
interface Post {
  slug: string;
  title: string;
  content: string;
  excerpt?: string; // Optional if you have an excerpt
  keywords?: string[]; // Optional if you have keywords
  image?: string; // Optional if you have an image
}

// Define the Params interface
interface Params {
  slug: string;
}

const BlogPost = ({ post }: { post: Post }) => {
  // Specify the type of post
  const router = useRouter();

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <head>
        <title>{post.title} - Nikhil Pathania</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords?.join(", ") || "blog"} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://nikhilx.vercel.app/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
      </head>
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
};

export async function getStaticPaths() {
  const posts = getAllBlogPosts(); // Fetch all blog posts
  const paths = posts.map((post: Post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: Params }) {
  const post = getBlogPost(params.slug); // Fetch the specific blog post

  return { props: { post } };
}

export default BlogPost;
