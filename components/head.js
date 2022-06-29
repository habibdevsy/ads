import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultKeywords = '';
const defaultOGURL = '';
const defaultOGImage = '';
function stripHTML(html) {
  var one = html.replace(/<\/?[^>]+(>|$)/gm, "");
  var two = one.replace(/[\r\n]\s*[\r\n]/gm, "");
  return two;
}
function addProductJsonLd(name, title, url, description, imageUrl, keywords, tel) {
  const desc = stripHTML(description)
  const keyword = stripHTML(keywords)
  return {
      '@context' : "https://schema.org",
      '@type' : "LocalBusiness",
      '@id': url,
      name : title,
      headline: title,
      image : imageUrl,
      inLanguage:"ar",
      url : url,
      keywords: keyword,
      description: desc,
      telephone: tel,
      address:{'@type':"PostalAddress","addressLocality":"Kuwait","addressCountry":"Kuwait"}
    }
  }

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="google-site-verification" content="-2LcqfDSitK6wATymsfTsAcjtvPIoLpcJsRi82iI4Ao" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000000" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <script
          key={`jobJSON-${props.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(addProductJsonLd(props.name || '', props.title || '', props.url || '', props.description || '', props.img || '', props.keywords || '', props.tel || '')) }}
        />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string,
  img: string,
  tel: string
};

export default Head;

