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



{/* <section className={styles.container}>
        <img src={getImageUrl("1.jpg")} alt="Painting" className={styles.work-img}/>
            {/* <p>Work</p>
            <div className={styles.carosel-container}>
                <ul className={styles.list}>
                    <li className={styles.list-item}><a><img src={getImageUrl("pxArt-2.png")} alt="Painting" className={styles.work-img}/></a></li>
                    <li className={styles.list-item}><a><img src={getImageUrl("pxArt-4.png")} alt="Painting" className={styles.work-img}/></a></li>
                    <li className={styles.list-item}><a><img src={getImageUrl("pxArt-9.png")} alt="Painting" className={styles.work-img}/></a></li>
                </ul>
            </div>
    </section> */}