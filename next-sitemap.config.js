const siteUrl = "http://localhost:3000";

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