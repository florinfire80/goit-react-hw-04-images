import { useEffect, useRef } from 'react';
import basicLightbox from 'basiclightbox';

const CustomModal = props => {
  const { largeImageURL, altText, onRequestClose } = props;
  const instanceRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onRequestClose();
      }
    };

    const createModal = () => {
      console.dir(basicLightbox);

      instanceRef.current = basicLightbox.create(`
        <div class="overlay" onClick="${onRequestClose}">
          <div class="modal">
            <img src="${largeImageURL}" alt="${altText}" />
          </div>
        </div>
      `);
      render(instanceRef.current);
    };

    const destroyModal = () => {
      if (instanceRef.current) {
        instanceRef.current.close();
      }
    };

    const render = instance => {};

    document.addEventListener('keydown', handleKeyDown);
    createModal();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      destroyModal();
    };
  });

  return null;
};

export default CustomModal;
