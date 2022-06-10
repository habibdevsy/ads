const siteUrl = "https://ads-habib.netlify.app/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    additionalSitemaps:[
      `${siteUrl}/serversite.xml`
  ]
   
  },
};