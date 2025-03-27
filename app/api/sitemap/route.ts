import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://nikhilx.vercel.app";

  // Example blog/work data (replace with real data from CMS or file)
  const staticRoutes = ["", "work", "pricing", "contact"];
  const blogSlugs = ["my-first-post", "seo-tips"]; // Replace with dynamic data

  const urls = [
    ...staticRoutes.map(
      (route) => `
    <url>
      <loc>${baseUrl}/${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${route === "" ? "1.0" : "0.8"}</priority>
    </url>`
    ),
    ...blogSlugs.map(
      (slug) => `
    <url>
      <loc>${baseUrl}/blogs/${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
    ),
  ].join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
