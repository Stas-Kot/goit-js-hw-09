import './sass/main.scss';
import renderGallery from './js/renderGallery';
import modal from './js/renderModal';
import refs from "./js/refs";

renderGallery();

refs.galleryEl.addEventListener('click', modal.handleOpenModal);