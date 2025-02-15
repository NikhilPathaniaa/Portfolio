// Example API module to fetch blog posts
export async function getBlogPost(slug: string) {
  // Fetch the blog post data based on the slug
  const response = await fetch(`https://your-api-endpoint.com/blog/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog post");
  }
  return await response.json();
}

export async function getAllBlogPosts() {
  // Fetch all blog posts
  const response = await fetch("https://your-api-endpoint.com/blog");
  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }
  return await response.json();
}
