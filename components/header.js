import style from '/styles/header.module.css'
import Image from "next/image"

const Header = () => (
    <>
        <header className = {style.parent+ " " + style.textWhite }>
            <div className = {style.test}>
                <Image className= {style.imageLanding}
                    src = "/static/kuwaitTowers.webp"
                    alt = "الكويت"
                    width = "800"
                    height = "500"
                    objectFit = "cover"
                    objectPosition = "center"
                    priority = "hight"
                />
                <div className={style.child}>
                    <h1>إعلانات الحبيب</h1>
                    <h2>إعلانك يحلق في سماء الكويت</h2>
                    <h3>
                        <a style={{color:'#ffeb3b'}} href="https://wa.me/00963933569558" target="_blank">انقر هنا لإضافة إعلانك</a>              
                    </h3>
                </div>
            </div>
        </header>
    </>
)
export default Header;