import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class ImageModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    largeImageURL: PropTypes.string,
    altText: PropTypes.string,
  };

  render() {
    const { largeImageURL, altText, onRequestClose } = this.props;

    return (
      <div class={styles.overlay} onClick={() => onRequestClose()}>
        <div class={styles.modal}>
          <img src={largeImageURL} alt={altText} />
        </div>
      </div>
    );
  }
}
