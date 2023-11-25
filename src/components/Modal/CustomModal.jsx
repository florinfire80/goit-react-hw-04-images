// CustomModal.jsx
import { Component } from 'react';
import basicLightbox from 'basiclightbox';

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.createModal = this.createModal.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.createModal();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    this.destroyModal();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  openModal = () => {
    this.instance.show();
  };

  closeModal = () => {
    this.instance.close();
  };

  createModal = () => {
    const { largeImageURL, altText } = this.props;

    console.dir(basicLightbox);

    this.instance = basicLightbox.create(`
      <div class="overlay" onClick="${this.props.onRequestClose}">
        <div class="modal">
          <img src="${largeImageURL}" alt="${altText}" />
        </div>
      </div>
    `);
    this.render(this.instance);
  };

  destroyModal = () => {
    if (this.instance) {
      this.instance.close();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onRequestClose();
    }
  };

  render() {
    return null;
  }
}

export default CustomModal;
