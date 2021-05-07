const galleryEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const closeBtnEl = document.querySelector('[data-action="close-lightbox"]');
const lightboxImgEl = document.querySelector('.lightbox__image');
const overlayEl = document.querySelector('div.lightbox__overlay');

export default {
    galleryEl,
    modalEl,
    closeBtnEl,
    lightboxImgEl,
    overlayEl,
}