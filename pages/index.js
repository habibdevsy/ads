import Nav from '/components/nav.js';
import homeStyle from '/styles/home.module.css';
import Footer from '/components/footer.js'
import Image from "next/image"
import Contact from '/components/contact.js'
import Head from '/components/head.js'

export default () => {
  return(
  <div>
     <Head title="إعلانات الحبيب"/>
    <Nav />
    <section>
      <div className = {homeStyle.parent+ " " + homeStyle.textWhite }>
        <Image className= {homeStyle.imageLanding}
              src = "/static/kuwaitTowers.webp"
              alt = "الكويت"
              width = "800"
              height = "800"
              objectFit = "cover"
              objectPosition = "center"
              priority = "hight"
        />
        <h1 className={homeStyle.child}>إعلانك يحلق في سماء الكويت</h1>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row" style={{ margin: '50px 0' }}>
          <div className = {homeStyle.iconSection + " " + "col-md-4"}>
            <a style={{color:'#3c31e1'}} href="https://wa.me/00963933569558" target="_blank">
              <i className = {homeStyle.icon + " " + "bi bi-whatsapp"}></i>
            </a>
            <h3>تواصل معنا</h3>
            <h4 className = {homeStyle.detail}>أنقر على رمز الواتسأب</h4>
          </div>
          <div className = {homeStyle.iconSection + " " + "col-md-4"}>
            <i className = {homeStyle.icon + " " + "bi bi-clipboard2-data"}></i>
            <h3>زودنا بمعلوماتك</h3>
            <h4 className = {homeStyle.detail}>نريد معلومات عن مهنتك</h4>
          </div>
          <div className = {homeStyle.iconSection + " " + "col-md-4"}>
            <i className = {homeStyle.icon + " " + "bi bi-currency-dollar"}></i>
            <h3>تمتع بإعلانك</h3>
            <h4 className = {homeStyle.detail}>تفرغ لخدمة عملائك </h4>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className = {homeStyle.parent+ " " + homeStyle.textWhite }>
        <Image className= {homeStyle.imageLanding}
              src = "/static/success.webp"
              alt = "إعلانات الكويت"
              width = "700px"
              height = "700px"
              objectFit = "cover"
              objectPosition = "center"
              priority = "hight"
        /> 
        <h2 className={homeStyle.child}>إعلانات إحترافية تضمن لك الوصول إلى كافة مناطق الكويت</h2>
      </div>
    </section>
    <Contact tel = "+963933569558" text = "تواصل معنا لإضافة إعلانك" />
    <Footer/>
  </div> 
)};
