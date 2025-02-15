declare module "lib/api" {
  export function getBlogPost(slug: string): Promise<any>;
  export function getAllBlogPosts(): Promise<any[]>;
}
