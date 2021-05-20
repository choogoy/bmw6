import openModal from './openModal.js';
import closeModal from './closeModal.js';

const toggleModal = () => {
    const modal = document.querySelector('.modal');
    const designText = document.querySelector('.design-text');

    designText.onclick = event => {
        if (event.target.classList.contains('more')) {
            openModal(modal);
        }
    };

    modal.onclick = event => {
        if (event.target.classList.contains('overlay') || event.target.closest('.modal__close')) {
            closeModal(modal);
        }
    };
};

export default toggleModal;