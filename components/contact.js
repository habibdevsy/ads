import style from '/styles/contact.module.css'
import { string } from 'prop-types';

const Contact = (prop) => (
   <>
    <div className = {style.callButtons}>
        <div className = {style.top}>
            <div className = {style.text}>
                {/* <p>رقم { prop.title }</p> */}
                {/* <p>تواصل مع صاحب الإعلان</p> */}
                <p>{ prop.text }</p>
            </div> 
        </div>
        <div className = {style.bottom}>
            <div className = {style.left}>
                <a aria-label='اتصال' href={`tel:${prop.tel}`}>
                    <i className = {style.icon + " " + "bi bi-telephone"}></i>
                </a>
            </div> 
            <div className = {style.right}>
                <a aria-label='واتسأب' href={`https://wa.me/${prop.tel}`}>
                    <i className = {style.icon + " " + "bi bi-whatsapp"}></i>
                </a>
            </div> 
        </div>
     </div>
    </>
);

Contact.propTypes = {
    tel: string,
    title: string,
    text: string
  };

export default Contact;
