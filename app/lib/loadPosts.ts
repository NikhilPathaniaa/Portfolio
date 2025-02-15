import fs from "fs";
import path from "path";

export function getAllBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "app/blog/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Assuming the markdown file has a title and content
    const [title, ...content] = fileContents.split("\n");
    return {
      slug: fileName.replace(/\.md$/, ""),
      title: title.replace("# ", ""), // Remove markdown header
      content: content.join("\n"),
    };
  });
  return posts;
}

export function getBlogPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), "app/blog/posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const [title, ...content] = fileContents.split("\n");
  return {
    slug,
    title: title.replace("# ", ""), // Remove markdown header
    content: content.join("\n"),
  };
}
