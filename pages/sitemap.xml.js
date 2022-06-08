import * as fs from "fs";
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  // const BASE_URL = "http://localhost:3000";
  const BASE_URL = "https://delightful-conkies-028434.netlify.app";

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "sitemap.xml.js",
        "404.js",
        "api",
        "blog",
        "_app.js"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

    async function getPosts() {
      const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/4115699089380273920/posts?key=AIzaSyCTyPxY1VlxuMroLwHG9gqPwea80ZG6l3Q')
  
      return await res.json()
    }

    const posts = await getPosts()

    const dynamicPaths = posts.items.map( post => {
      return `${BASE_URL}/blog/${post.id}`      
    })

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              // <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;