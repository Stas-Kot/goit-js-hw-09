import refs from "./refs";
import images from "./gallery-items";

function createGalleryItemsMarkup(images) {
  return images.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
     <a
     class="gallery__link"
     href="${original}"
     >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </li>
    `;
  })
    .join('')
}

const galleryMarkup = createGalleryItemsMarkup(images);
export default function renderGallery() {
  refs.galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);
}