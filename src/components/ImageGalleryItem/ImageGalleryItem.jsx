// ImageGalleryItem.js
import React, { useState, useEffect } from 'react';
import styles from './ImageGalleryItem.module.css';
import ImageModal from 'components/Modal/ImageModal';

const ImageGalleryItem = ({ webformatURL, largeImageURL, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log('Starea modalului a fost schimbată:', isOpen);
  }, [isOpen]);

  return (
    <li className={styles['gallery-item']} onClick={handleImageClick}>
      <img
        className={styles['gallery-item-image']}
        src={webformatURL}
        alt={altText}
      />

      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          onRequestClose={handleImageClick}
          largeImageURL={largeImageURL}
          altText={altText}
        />
      )}
    </li>
  );
};

export default ImageGalleryItem;
