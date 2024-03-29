import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Work.module.css";

export const Work = () => {
  return (
    <div id="work" className={styles.container}>
        <p className={styles.title}>Work</p>
        <div className={styles.carousel}>
          <div>
            <img src={getImageUrl("1.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
            <div className={styles.content}></div>
          </div>
          <img src={getImageUrl("2.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
          <img src={getImageUrl("3.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
          <img src={getImageUrl("1.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
          <img src={getImageUrl("2.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
          <img src={getImageUrl("3.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
          <img src={getImageUrl("1.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
          <img src={getImageUrl("2.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
          <img src={getImageUrl("3.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
         </div>
    </div>
  )
}









// import React from 'react';
// import { getImageUrl } from "../../utils";
// import styles from "./Work.module.css";

// export const Work = () => {
//   return (
//     <div id="work" className={styles.container}>
//         <p className={styles.title}>Work</p>
//         <div className={styles.carousel}>
//             <img src={getImageUrl("1.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//             <img src={getImageUrl("2.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//             <img src={getImageUrl("3.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//             <img src={getImageUrl("1.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//             <img src={getImageUrl("2.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//             <img src={getImageUrl("3.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//             <img src={getImageUrl("1.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//             <img src={getImageUrl("2.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//             <img src={getImageUrl("3.jpg")} alt="Painting" className={`${styles.window} ${styles.img1} ${styles.carouselimage}`}/>
//         </div>
//     </div>
//   )
// }
