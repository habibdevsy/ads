import { getServerSideSitemap} from "next-sitemap";

export const GetPost = async () => {
    const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/4115699089380273920/posts?key=AIzaSyCTyPxY1VlxuMroLwHG9gqPwea80ZG6l3Q')
  
    return await res.json()
};

export const getServerSideProps = async (ctx) => {
    const siteUrl = "https://ads-habib.netlify.app";
    const data = await GetPost();
    const fields = data === null || data === void 0 ? void 0 : data.items.map((data) => ({
        loc: `${siteUrl}/${data.id}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemap(ctx, fields);
};

export default function Site() {
    //console
}