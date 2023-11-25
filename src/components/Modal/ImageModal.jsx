import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const ImageModal = ({ isOpen, largeImageURL, altText, onRequestClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onRequestClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onRequestClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div class={styles.overlay} onClick={() => onRequestClose()}>
      <div class={styles.modal}>
        <img src={largeImageURL} alt={altText} />
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool,
  largeImageURL: PropTypes.string,
  altText: PropTypes.string,
  onRequestClose: PropTypes.func.isRequired,
};

export default ImageModal;
