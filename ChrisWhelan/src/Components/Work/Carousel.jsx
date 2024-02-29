import React, { useState } from 'react';
import styles from './Carousel.module.css'; // Import your CSS styles


const images = [
    { src: getImageUrl("1.jpg"), alt: "Painting 1" },
    { src: getImageUrl("2.jpg"), alt: "Painting 2" },
    { src: getImageUrl("3.jpg"), alt: "Painting 3" },

  ];

export const Carousel = ({ images }) => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (index) => {
    setExpandedImage(index);
  };

  const handleClose = () => {
    setExpandedImage(null);
  };

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`${styles.image} ${expandedImage === index ? styles.expanded : ''}`}
          onClick={() => handleImageClick(index)}
        />
      ))}
      {expandedImage !== null && (
        <div className={styles.overlay} onClick={handleClose}>
          <img
            src={images[expandedImage].src}
            alt={images[expandedImage].alt}
            className={styles.expandedImage}
          />
        </div>
      )}
    </div>
  );
};