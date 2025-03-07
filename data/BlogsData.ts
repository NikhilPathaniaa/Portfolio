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
  {
    id: 2,
    title: "Is Your Website Costing You Customers? 6 Mistakes You Must Fix",
    excerpt: "Your website should bring in customers, not drive them away. Discover the top mistakes businesses make and how to fix them for better conversions.",
    category: "Web Design & Optimization",
    date: "March 20, 2024",
    readTime: "6 min read",
    image: "/blog_images/second/hero.webp",
    slug: "website-costing-you-customers",
    author: {
      name: "Nikhil Pathania",
      image: "/about/profile.webp",
      role: "Full Stack Developer & UI/UX Designer",
    },
    content: `
        <div class="prose-content">
          <p class="lead">Your website is often the first interaction potential customers have with your business. But if it's not designed well, loads slowly, or is confusing to navigate, it could be driving visitors away—costing you sales and leads. Here are the six most common website mistakes businesses make and how to fix them.</p>
  
          <h2>1. Slow Loading Speed</h2>
          <p>Did you know that <strong>40% of visitors leave a website that takes more than 3 seconds to load?</strong> A slow website means lost revenue. You can fix this by optimizing images, enabling caching, and using a Content Delivery Network (CDN).</p>
          
          <div class="my-8">
            <img src="/blog_images/second/img1.webp" alt="Slow website impact" class="rounded-lg shadow-lg" />
          </div>
  
          <h2>2. Poor Mobile Experience</h2>
          <p>More than <strong>60% of users browse the internet on mobile devices</strong>. If your website isn't mobile-friendly, you're losing customers. Use responsive design to ensure your site looks great on all screen sizes.</p>
  
          <h2>3. Confusing Navigation</h2>
          <p>Can visitors easily find what they're looking for? If not, they’ll leave. Keep your navigation simple, intuitive, and well-structured.</p>
  
          <h2>4. Outdated Design</h2>
          <p>Your website reflects your brand. If it looks outdated, visitors may assume your business is outdated too. Modernize your design with clean layouts, readable fonts, and engaging visuals.</p>
          
          <div class="my-8">
            <img src="/blog_images/second/img2.webp" alt="Modern vs outdated website design" class="rounded-lg shadow-lg" />
          </div>
  
          <h2>5. Lack of Clear Call-to-Actions (CTAs)</h2>
          <p>Does your website guide users to take action? Whether it’s making a purchase, signing up for a service, or contacting you, strong CTAs are crucial for conversions.</p>
  
          <h2>6. Poor SEO Practices</h2>
          <p>If your website isn’t optimized for search engines, potential customers won’t find you. Use proper meta tags, structured content, and fast-loading pages to improve your ranking.</p>
  
          <h2>How to Fix These Issues (Without Stress)</h2>
          <ul class="checklist">
            <li>✅ Improve your site speed with performance optimizations</li>
            <li>✅ Use a responsive design for a seamless mobile experience</li>
            <li>✅ Simplify navigation for better user flow</li>
            <li>✅ Update your design to a modern, professional look</li>
            <li>✅ Add clear CTAs to drive user actions</li>
            <li>✅ Optimize SEO for better search visibility</li>
          </ul>
  
          <h2>Final Thoughts</h2>
          <p>A well-optimized website is an investment that pays off in higher conversions, better customer trust, and increased revenue. If you need help improving your website’s performance and design, let’s work together to create a site that drives results.</p>
  
          <div class="cta-box bg-[#F3F6F6] dark:bg-[#1D1D1D] p-6 rounded-xl mt-8">
            <p class="font-bold mb-2">Need a website that converts visitors into customers?</p>
            <p>Contact me today for a free consultation!</p>
          </div>
        </div>
      `,
    tags: ["Web Design", "SEO", "User Experience", "Website Optimization", "Business Growth"],
    relatedLinks: [
      {
        title: "Top 10 Web Design Trends for 2024",
        url: "/blogs/web-design-trends-2024",
      },
      {
        title: "How to Improve Website Speed in 5 Easy Steps",
        url: "/blogs/improve-website-speed",
      },
    ],
  },
];
