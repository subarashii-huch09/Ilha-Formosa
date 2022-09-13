import styles from "./Footer.module.css"
import {Link} from "react-router-dom"


const Footer = () => {
  const email = "info@ilhaformosa.co.nz"
  const phoneNum = "+64-4-123-4567";
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.styleFlex}>
          <ul>
            <li>
              <h3 className={styles.contactTitle}>Contact Us</h3>
            </li>
            <li className={styles.contactItem}>123 Oriental Parade</li>
            <li className={styles.contactItem}>Wellington 6011</li>
            <li className={styles.contactItem}>
              Tel:<a href={`tel:${phoneNum}`}> 04-123-4567</a>
            </li>
            <li className={styles.contactItem}>
              Email:<a href={`mailto:${email}`}> info@ilhaformosa.co.nz</a>
            </li>
          </ul>
          <ul>
            <li>
              <h2>
                <Link className={styles.footerTitle} to="/">
                  Ilha Formosa
                </Link>
              </h2>
            </li>
            <li>
              <button className={styles.staffLogInBtn}>Staff Login-in</button>
            </li>
          </ul>
        </div>

        <p className={styles.copyright}>
          Created by Ching-Wen Hu | All Rights Reserved
        </p>
      </div>
    </>
  );
}




export default Footer