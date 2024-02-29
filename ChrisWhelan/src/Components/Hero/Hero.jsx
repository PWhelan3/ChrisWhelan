import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <img src={getImageUrl("Img1.jpg")} alt="Painting" className={styles.heroImg}/>
    </section>
  )
}
