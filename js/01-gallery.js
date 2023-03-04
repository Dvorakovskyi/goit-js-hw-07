import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    data-source="${original}"
    alt="${description}"/>
    </a>
    </div>`
  )
  .join('');
galleryEl.insertAdjacentHTML('afterbegin', galleryItem);

const handleImgClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalImgUrl = event.target.dataset.source;

  const modalWindow = basicLightbox.create(`
    <img src="${originalImgUrl}" alt="${event.target.alt}"/>
    `);
  modalWindow.show();

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modalWindow.close();
    }
  });
};

galleryEl.addEventListener('click', handleImgClick);
