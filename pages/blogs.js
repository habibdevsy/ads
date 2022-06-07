import Link from 'next/link';
import Nav from '/components/nav.js'
import Header from '/components/header.js'
import Footer from '/components/footer.js'
import Contact from '/components/contact.js'

export default function Blog({ posts }) {
    return (
      <>
        <Nav />
        <Header />
          {posts.items.map((post) => ( 
            <div className="card" key={post.id}>
          
              {/* <Link href={`/blog/${post.id}`} as={`/posts/${encodeURIComponent(post.title)}`}> */}
              <Link prefetch href={`/blog/${post.id}`}>
              
              <a>
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <span className="start badge bg-secondary" style={{ margin: '5px' }}>{post.published.slice(0,10)}</span>
                    {/* <Link href={`/blogsByLabel/${post.labels}`}>  */}
                    <span className="start badge bg-success">{post.labels}</span>
                    {/* </Link> */}
                  </div>
              </a>
                </Link>
            </div>
            ))}
        <Contact tel = "+963933569558" text = "تواصل معنا لإضافة إعلانك"/>
        <Footer />
     </>
    )
  }
  
  export async function getStaticProps() {
    const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/4115699089380273920/posts?key=AIzaSyCTyPxY1VlxuMroLwHG9gqPwea80ZG6l3Q')

    const posts = await res.json()

    return {
      props: {
        posts,
      },
    }
  }