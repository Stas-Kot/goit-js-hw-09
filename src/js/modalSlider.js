import modal from './renderModal';
import images from "./gallery-items";
import refs from './refs';

export default function onArrowKeyPress(e) {
  const RIGHT_KEY_CODE = "ArrowRight";
  const LEFT_KEY_CODE = "ArrowLeft";
  const isArrowKey = e.code === RIGHT_KEY_CODE || e.code === LEFT_KEY_CODE;
  if (!isArrowKey) {
    return;
  }

  if (e.code === RIGHT_KEY_CODE) {
    modal.currentIndex += 1;
    if (modal.currentIndex > images.length - 1) {
      modal.currentIndex = 0;
    }
  } else if (e.code === LEFT_KEY_CODE) {
    modal.currentIndex -= 1;
    if (modal.currentIndex < 0) {
      modal.currentIndex = images.length - 1;
    }
  }
  setModalImg(modal.currentIndex);
}

function setModalImg(index) {
  refs.lightboxImgEl.src = images[index].original;
  refs.lightboxImgEl.alt = images[index].description;
}