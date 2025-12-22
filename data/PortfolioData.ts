export const portfolioData = [
  /* ======================================================
     1. PIEDAP – SaaS PLATFORM (CORE PRODUCT ENGINEERING)
  ====================================================== */
  {
    id: 1,
    slug: "piedap-saas-platform",
    title: "PIEDAP – Unified SaaS Platform",
    category: "SaaS Product Engineering",
    client: "Pion Global Pvt. Ltd.",
    designation: "Enterprise SaaS Platform",
    preview: "",
    image: "/Portfolio/piedap/piedap-saas.webp",
    video: "",
    languages:
      "Product Architecture, Frontend Engineering, Micro-frontends, IAM/RBAC, Dashboards",
    content: `
    <b>PIEDAP</b> is a unified, enterprise-grade SaaS ecosystem designed to bring multiple
    business-critical products under a single platform. The system integrates
    project management, assessments, compliance workflows, and platform CMS
    into one scalable and secure solution.

    The platform is built for multi-tenant organizations, enabling different
    teams and roles to collaborate efficiently while maintaining strict
    access control and data isolation.
    `,
    challenge: `
    The major challenge was building a <b>single SaaS engine</b> that could support
    multiple independent products without permission conflicts, UX inconsistency,
    or scalability limitations.

    Each product had different workflows, user roles, and dashboards,
    yet needed to function seamlessly within one ecosystem.
    `,
    solution: `
    I architected the frontend using a <b>micro-frontend approach</b>, allowing each
    product module to scale independently while sharing a common core.

    Implemented <b>IAM and RBAC</b> to manage multiple organizations, roles, and permissions.
    Designed shared design systems and product-specific dashboards to ensure
    consistency without sacrificing flexibility.
    `,
    result: `
    PIEDAP evolved into a <b>scalable enterprise SaaS platform</b> that supports
    multiple products under a unified experience.

    The platform improved operational transparency, reduced manual overhead,
    and enabled faster onboarding of new products and clients.
    `,
    feedback:
      "Nikhil played a critical role in shaping the platform architecture and user experience. His ability to think at a product and system level made PIEDAP scalable and future-ready.",
  },

  /* ======================================================
     2. PIEDAP – PRODUCT / MARKETING WEBSITE
  ====================================================== */
  {
    id: 2,
    slug: "piedap-product-website",
    title: "PIEDAP – Product Website",
    category: "SaaS Marketing Website",
    client: "Pion Global Pvt. Ltd.",
    designation: "SaaS Product Marketing",
    preview: "www.piedap.io",
    image: "/Portfolio/piedap/piedap-website.webp",
    video: "",
    languages:
      "Next.js, SSR, SEO, CMS Integration, Performance Optimization",
    content: `
    The PIEDAP product website was built to clearly communicate the platform’s
    value proposition while supporting SEO, content scalability, and lead generation.

    The goal was to create a fast, modern, and conversion-ready website
    that could evolve alongside the SaaS product.
    `,
    challenge: `
    The challenge was to translate a complex SaaS ecosystem into a
    <b>simple, compelling narrative</b> for potential customers,
    while ensuring high performance and search visibility.
    `,
    solution: `
    I designed and developed the website using <b>Next.js with server-side rendering</b>.
    A CMS-driven approach was implemented to allow marketing teams to update
    content without engineering dependency.

    SEO best practices and performance optimizations were applied throughout.
    `,
    result: `
    The website delivered faster load times, improved search engine visibility,
    and a professional product presence that supports sales and marketing efforts.
    `,
    feedback:
      "The new website helped us clearly position our product in the market. It’s fast, scalable, and easy to maintain.",
  },

  /* ======================================================
     3. PION GLOBAL – CORPORATE WEBSITE
  ====================================================== */
  {
    id: 3,
    slug: "pion-global-corporate-website",
    title: "Pion Global – Corporate Website",
    category: "Corporate Website & SEO",
    client: "Pion Global Pvt. Ltd.",
    designation: "Product Company",
    preview: "www.pionglobal.com",
    image: "/Portfolio/pionglobal/pionglobal.webp",
    video: "",
    languages:
      "Next.js, SEO, CMS, SSR, UI/UX Design",
    content: `
    Pion Global’s corporate website was redesigned to reflect the company’s
    product maturity, innovation, and credibility.

    The website serves as a central hub for branding, recruitment,
    and product discovery.
    `,
    challenge: `
    The existing website lacked clarity, performance, and SEO structure,
    making it difficult to communicate the company’s offerings effectively.
    `,
    solution: `
    I led a complete UI/UX redesign and rebuilt the website using
    <b>Next.js with SSR</b> for performance and SEO.

    Implemented a CMS-based content structure and optimized page speed,
    accessibility, and search engine visibility.
    `,
    result: `
    The new website improved brand perception, search rankings,
    and overall user engagement, supporting both sales and hiring initiatives.
    `,
    feedback:
      "The revamped website significantly improved our brand presence and made it easier for customers and candidates to understand our offerings.",
  },

  /* ======================================================
     4. THE MUZIRIS – ECOMMERCE & BUSINESS PLATFORM
  ====================================================== */
  {
    id: 4,
    slug: "the-muziris-ecommerce-platform",
    title: "The Muziris – E-commerce Platform",
    category: "E-commerce & Business Platform",
    client: "The Muziris",
    designation: "Founder-led Business",
    preview: "www.themuziris.in",
    image: "/Portfolio/muziris/muziris.webp",
    video: "",
    languages:
      "E-commerce Development, CMS, Razorpay, AWS Deployment",
    content: `
    The Muziris required a complete digital platform to manage online sales,
    inventory, payments, and business operations.

    The goal was to create a scalable e-commerce solution that reduced
    manual work and provided full operational visibility.
    `,
    challenge: `
    The client needed an end-to-end solution covering product management,
    payments, inventory tracking, and customer communication,
    without relying on multiple disconnected tools.
    `,
    solution: `
    I led the project end-to-end, from requirement gathering and system design
    to development, deployment, and client communication.

    Implemented cart, checkout, Razorpay payments, inventory management,
    admin dashboards, and CMS-driven operations.
    `,
    result: `
    The platform enabled smooth online sales, improved inventory control,
    and reduced operational overhead.

    The client gained a transparent, easy-to-manage system and
    continued as a long-term retained customer.
    `,
    feedback:
      "The platform simplified our entire business workflow. We finally have a single system to manage sales, inventory, and customer inquiries.",
  },

  /* ======================================================
     5. KHABAR FILHAL – DIGITAL NEWS PLATFORM
  ====================================================== */
  {
    id: 5,
    slug: "khabar-filhal-news-platform",
    title: "Khabar Filhal – Digital News Platform",
    category: "Website Development & SEO",
    client: "Sandeep Singh",
    designation: "Founder & Editor",
    preview: "www.khabarfilhaal.com",
    image: "/Portfolio/khabarfilhal/KhabarFilhalMockup.webp",
    video: "FtDvw04AXCQ",
    languages:
      "WordPress, SEO, RSS Integration, Multilingual Support",
    content: `
    Khabar Filhal is a multilingual digital news platform designed
    to modernize journalism and improve audience reach.

    The platform supports structured content publishing,
    video integration, and mobile-first consumption.
    `,
    challenge: `
    The client struggled with limited digital reach and
    lacked a scalable platform to publish and distribute news content effectively.
    `,
    solution: `
    I developed a custom WordPress-based news platform with
    multilingual support, RSS feeds, YouTube integration,
    and a user-friendly CMS for editorial control.
    `,
    result: `
    The platform helped Khabar Filhal establish a strong digital presence,
    increase audience engagement, and improve search visibility.
    `,
    feedback:
      "Nikhil helped us transition smoothly into digital journalism. Our reach and engagement improved significantly after the launch.",
  },
];

export const portfolio = [
  {
    id: 1,
    slug: "khabar-filhal-news-platform",
    title: "Khabar Filhal",
    category: "Website Development",
    client: "Sandeep Singh",
    preview: "khabarfilhaal.com",
    image: "/Portfolio/khabarfilhal/KhabarFilhalMockup.webp",
    video: "FtDvw04AXCQ",
    languages: "WordPress, SEO, Multilingual CMS",
    content:
      "A multilingual digital news platform built to improve online visibility, audience engagement, and scalable content publishing.",
  },

  {
    id: 2,
    slug: "piedap-saas-platform",
    title: "PIEDAP – SaaS Platform",
    category: "SaaS Product Engineering",
    client: "Pion Global Pvt. Ltd.",
    preview: "",
    image: "/Portfolio/piedap/piedap-saas.webp",
    video: "",
    languages: "React, Next.js, Micro-frontends, IAM, RBAC",
    content:
      "A unified enterprise SaaS platform integrating project management, assessments, compliance, and CMS under a single ecosystem.",
  },

  {
    id: 3,
    slug: "piedap-product-website",
    title: "PIEDAP – Product Website",
    category: "SaaS Marketing Website",
    client: "Pion Global Pvt. Ltd.",
    preview: "piedap.io",
    image: "/Portfolio/piedap/piedap-website.webp",
    video: "",
    languages: "Next.js, SSR, SEO, CMS",
    content:
      "A high-performance SaaS product website built for SEO, scalability, and lead generation.",
  },

  {
    id: 4,
    slug: "pion-global-website",
    title: "Pion Global – Corporate Website",
    category: "Corporate Website & SEO",
    client: "Pion Global Pvt. Ltd.",
    preview: "pionglobal.com",
    image: "/Portfolio/pionglobal/pionglobal.webp",
    video: "",
    languages: "Next.js, SEO, CMS, UI/UX",
    content:
      "A modern corporate website redesigned to strengthen branding, performance, and search visibility.",
  },

  {
    id: 5,
    slug: "the-muziris-ecommerce-platform",
    title: "The Muziris – E-commerce Platform",
    category: "E-commerce Platform",
    client: "The Muziris",
    preview: "themuziris.in",
    image: "/Portfolio/muziris/muziris.webp",
    video: "",
    languages: "E-commerce, Razorpay, CMS, AWS",
    content:
      "A full-scale e-commerce and business management platform with payments, inventory, and admin dashboards.",
  },
];
