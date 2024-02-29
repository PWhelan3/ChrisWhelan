import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Work.module.css";

export const Work = () => {
  return (
    <section className={styles.container}>
        <img src={getImageUrl("1.jpg")} alt="Painting" className={styles.work-img}/>
            {/* <p>Work</p>
            <div className={styles.carosel-container}>
                <ul className={styles.list}>
                    <li className={styles.list-item}><a><img src={getImageUrl("pxArt-2.png")} alt="Painting" className={styles.work-img}/></a></li>
                    <li className={styles.list-item}><a><img src={getImageUrl("pxArt-4.png")} alt="Painting" className={styles.work-img}/></a></li>
                    <li className={styles.list-item}><a><img src={getImageUrl("pxArt-9.png")} alt="Painting" className={styles.work-img}/></a></li>
                </ul>
            </div> */}
    </section>
  )
}