import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Work.module.css";

export const Work = () => {
  return (
    <div id="work" className={styles.container}>
        <p className={styles.title}>Work</p>
        <div className={styles.carosel}>
            <img src={getImageUrl("1.jpg")} alt="Painting" className={`${styles.window} ${styles.img1}`}/>
            <img src={getImageUrl("2.jpg")} alt="Painting" className={`${styles.window} ${styles.img1}`}/>
            <img src={getImageUrl("3.jpg")} alt="Painting" className={`${styles.window} ${styles.img1}`}/>
        </div>
    </div>
  )
}
