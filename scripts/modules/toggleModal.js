import openModal from './openModal.js';
import closeModal from './closeModal.js';

const toggleModal = () => {
    const modal = document.querySelector('.modal');
    const more = document.querySelector('.more');

    more.onclick = () => openModal(modal);
    modal.onclick = event => {
        if (event.target.classList.contains('overlay') || event.target.closest('.modal__close')) {
            closeModal(modal);
        }
    };
};

export default toggleModal;