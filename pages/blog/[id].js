import Nav from '/components/nav.js';
import Header from '/components/header.js'
import Footer from '/components/footer.js'
import Head from '/components/head.js'
import Contact from '/components/contact.js'
import { parse } from 'node-html-parser';
import { useRouter } from 'next/router';


export default ( { post }) => {
  const { asPath } = useRouter();
  const BASE_URL = `https://ads-habib.netlify.app${asPath }`;
  console.log(BASE_URL);
  let description = ""
  let tel = ""
  let keywords = ""
  let img = ""
  
   { ( description = parse(post.content).querySelector('#description')) && (description = parse(post.content).querySelector('#description').textContent)}
   { ( keywords = parse(post.content).querySelector('#keyword')) && (keywords = parse(post.content).querySelector('#keyword').textContent)}
   { ( tel = parse(post.content).querySelector('#tel')) && (tel = parse(post.content).querySelector('#tel').textContent)}
   { ( img = parse(post.content).querySelector('#img')) && (img = parse(post.content).querySelector('#img').getAttribute('src'))}

  return(
        <>
           <Head title = { post.title } description = { description } url = { BASE_URL} keywords = { keywords } img = { img }/>
           <Nav />
           <Header />
           <div className="container">
             <div className="row">
                <div className="col-md-12" style={{textAlign:"center"}}>
                  <h1 style={{ margin: '10px 2%' }}>{ post.title }</h1>
                  <div dangerouslySetInnerHTML={{__html: post.content}}/>
                </div>
             </div>
           </div>
           <Contact tel = {tel} title = {post.title} text = {"تواصل مع صاحب الإعلان"}/>
           <Footer />
        </>
)};

export async function getServerSideProps(context) { 
        const res = await fetch(` https://www.googleapis.com/blogger/v3/blogs/4115699089380273920/posts/${context.params.id}?key=AIzaSyCTyPxY1VlxuMroLwHG9gqPwea80ZG6l3Q`)
        const post = await res.json();
        return { props: { post } }
}