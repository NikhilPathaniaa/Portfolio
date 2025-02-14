export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  content: string;
  tags: string[];
  relatedLinks?: {
    title: string;
    url: string;
  }[];
}

export const blogsData: BlogPost[] = [
  {
    id: 1,
    title: "Why Small Businesses Need a Fast Website",
    excerpt: "Discover why website speed is crucial for small business success and how it impacts your SEO, user experience, and bottom line.",
    category: "Web Performance",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/blog_images/first/hero.webp",
    slug: "why-small-businesses-need-fast-website",
    author: {
      name: "Nikhil Pathania",
      image: "/about/profile.webp",
      role: "Full Stack Developer",
    },
    content: `
      <div class="prose-content">
        <p class="lead">In today's digital world, having a website is essential for small businesses. But just having a website isn't enough—it needs to be <strong>fast</strong>. A slow website can drive potential customers away, hurt your search engine ranking, and reduce your sales. Here's why speed matters and how it can impact your business.</p>

        <h2>1. First Impressions Matter</h2>
        <p>Your website is often the first interaction potential customers have with your business. Studies show that users form an opinion about a website <strong>within 0.05 seconds</strong>. If your site loads slowly, visitors may leave before they even see what you offer.</p>
        
        <div class="my-8">
          <img src="/blog_images/first/img1.webp" alt="Website speed impact on first impressions" class="rounded-lg shadow-lg" />
        </div>

        <h2>2. Better User Experience = More Sales</h2>
        <p>A fast website improves the user experience, making it easier for customers to browse your products or services. If a site takes too long to load, users are likely to <strong>abandon their cart or move to a competitor</strong>.</p>

        <h2>3. Higher Google Rankings (SEO Benefits)</h2>
        <p>Google considers page speed as a ranking factor. A slow website can push your business lower in search results, making it harder for customers to find you. A faster site means <strong>better SEO and more traffic</strong>.</p>

        <div class="my-8">
          <img src="/blog_images/first/img2.webp" alt="SEO benefits of fast websites" class="rounded-lg shadow-lg" />
        </div>

        <h2>4. More Mobile Visitors</h2>
        <p>With more people browsing on mobile devices, a slow-loading website can be frustrating. Google also prioritizes mobile-friendly, fast-loading sites in search rankings.</p>

        <h2>5. Reduces Bounce Rate</h2>
        <p>Bounce rate refers to how quickly visitors leave your site. If your website takes more than <strong>3 seconds to load, 40% of users will leave</strong>. A fast website keeps visitors engaged longer, increasing the chances of conversion.</p>

        <h2>6. Competitive Advantage</h2>
        <p>If your competitor's website loads faster, they are <strong>more likely to win the customer</strong>. Ensuring your website is quick gives you an edge over slower competitors.</p>

        <h2>How to Improve Your Website Speed</h2>
        <ul class="checklist">
          <li>✅ Optimize images (compress large files)</li>
          <li>✅ Use a fast hosting provider</li>
          <li>✅ Enable caching to reduce load times</li>
          <li>✅ Minimize the use of heavy scripts and animations</li>
          <li>✅ Use a Content Delivery Network (CDN) to speed up page delivery</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>A fast website isn't just about convenience—it's a business necessity. It helps with <strong>SEO, user experience, and sales</strong>. If you want your small business to succeed online, investing in website speed optimization is a smart move.</p>

        <div class="cta-box bg-[#F3F6F6] dark:bg-[#1D1D1D] p-6 rounded-xl mt-8">
          <p class="font-bold mb-2">Need help making your website faster?</p>
          <p>Contact me for a free consultation!</p>
        </div>
      </div>
    `,
    tags: ["Web Performance", "SEO", "Small Business", "Web Development", "User Experience"],
    relatedLinks: [
      {
        title: "How to Optimize Images for Web",
        url: "/blogs/optimize-images-for-web",
      },
      {
        title: "SEO Best Practices for 2024",
        url: "/blogs/seo-best-practices-2024",
      },
    ],
  },
];
