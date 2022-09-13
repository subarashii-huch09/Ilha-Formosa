import {Link} from "react-router-dom"
import styles from "./Side.module.css"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Side = () => {

  let iconStyles = {fontSize: "2.75rem", margin:"0.25rem"}
  return (
    <div className={styles.wrapper}>
      <ul className={styles.sideList}>
        <li className={styles.socialIcon}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook style={iconStyles} color="blue" />
          </a>
        </li>
        <li className={styles.socialIcon}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={iconStyles} color="#E4405F " />
          </a>
        </li>
        <li className={styles.socialIcon}>
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter style={iconStyles} color="#1DA1F2" />
          </a>
        </li>
        <li>
          <Link to="/order" className={styles.sideOrder}>
            Order Online
          </Link>
        </li>
      </ul>
    </div>
  );
}
;




export default Side