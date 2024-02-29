import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <img src={getImageUrl("123.JPG")} alt="Hero Of Me" className={styles.heroImg}/>
    </section>
  )
}
