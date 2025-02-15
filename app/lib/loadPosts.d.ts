declare module "lib/loadPosts" {
  export function getAllBlogPosts(): Promise<any[]>;
  export function getBlogPost(slug: string): Promise<any>;
}
