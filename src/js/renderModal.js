import refs from './refs';
import images from "./gallery-items";
import onArrowKeyPress from './modalSlider';

class RenderModal {
    constructor() {
        this.currentIndex = 0;
    }

   handleOpenModal = (e) => {
    const isGalleryImg = e.target.classList.contains('gallery__image');
    if (!isGalleryImg) {
      return;
    }

    e.preventDefault();
    refs.modalEl.classList.add('is-open');
    refs.lightboxImgEl.src = e.target.dataset.source;
    window.addEventListener('keydown', onArrowKeyPress);
    const currentLi = e.target.closest('.gallery__item');
    const ulArray = Array.from(refs.galleryEl.children);
    this.currentIndex = ulArray.indexOf(currentLi);
    this.activateCloseModal();
  }

   onCloseBtnClick = (e) => {
    refs.modalEl.classList.remove('is-open');
    refs.lightboxImgEl.src = '';
    window.removeEventListener('keydown', this.onEscKeyPress);
    window.removeEventListener('keydown', onArrowKeyPress);
  }

   onOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
          this.onCloseBtnClick();
      }
  }

   onEscKeyPress = (e) => {
      const ESC_KEY_CODE = `Escape`;

      if (e.code === ESC_KEY_CODE) {
          this.onCloseBtnClick();
      } 
    }
    
    activateCloseModal = () => {
        refs.closeBtnEl.addEventListener('click', this.onCloseBtnClick);
        refs.overlayEl.addEventListener('click', this.onOverlayClick);
        window.addEventListener('keydown', this.onEscKeyPress);
    }
}

const renderModal = new RenderModal();
export default renderModal;