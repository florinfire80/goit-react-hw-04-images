// ImageGallery.jsx
import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ul className={styles['imageGallery']}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            altText={image.altText}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
