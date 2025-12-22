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
    // images: [
    //   "/Portfolio/piedap/screenshots/dashboard-view.webp",
    //   "/Portfolio/piedap/screenshots/analytics.webp",
    //   "/Portfolio/piedap/screenshots/user-management.webp",
    //   "/Portfolio/piedap/screenshots/settings.webp"
    // ],
    // imageCaptions: [
    //   "Dashboard view with key metrics and quick actions",
    //   "Analytics dashboard showing performance metrics",
    //   "User management interface with role-based access control",
    //   "Platform settings and configuration panel"
    // ],
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
    // images: [
    //   "/Portfolio/piedap/website/homepage.webp",
    //   "/Portfolio/piedap/website/features.webp",
    //   "/Portfolio/piedap/website/pricing.webp"
    // ],
    // imageCaptions: [
    //   "Modern and clean homepage design",
    //   "Product features showcase section",
    //   "Pricing plans and comparison"
    // ],
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
      "The new corporate website effectively communicates our brand story and has improved our online presence.",
    // images: [
    //   "/Portfolio/pion/website/homepage.webp",
    //   "/Portfolio/pion/website/about.webp",
    //   "/Portfolio/pion/website/services.webp",
    //   "/Portfolio/pion/website/contact.webp"
    // ],
    // imageCaptions: [
    //   "Corporate homepage with hero section",
    //   "About page showcasing company values and team",
    //   "Services overview with detailed descriptions",
    //   "Contact page with inquiry form and location"
    // ],
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
    images: [
      "/Portfolio/muziris/img1.webp",
      "/Portfolio/muziris/img2.webp"
    ],
    imageCaptions: [
      "Corporate homepage with hero section",
      "About page showcasing company values and team",
      "Services overview with detailed descriptions",
      "Contact page with inquiry form and location"
    ],
  },
];

export const portfolio = [
  {
    id: 1,
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
    id: 2,
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
