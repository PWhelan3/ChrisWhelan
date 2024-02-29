import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out with any enquiries!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.iconimg} src={getImageUrl("icons/email.jpg")} alt="Email icon" />
          <a href="mailto:myemail@email.com">chriswhelanart@email.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.iconimg} src={getImageUrl("icons/insta.jpg")} alt="Instagram icon" />
          <a href="https://www.instagram.com/christopherwhelanart">@christopherwhelanart</a>
        </li>
      </ul>
      <div className={styles.bottomBlur}></div>
    </footer>
  );
};