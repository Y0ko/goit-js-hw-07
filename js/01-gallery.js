import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const onGalaryItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class = "gallery__item">
    <a class = "gallery_link" href=${original}>
    <img class= "gallery__image" src = "${preview}" data-source = "${original}"alt = "${description}"\>
    </a>
    </div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', onGalaryItems);

galleryEl.addEventListener('click', showImage);

function showImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(
      `
 		<img src="${event.target.dataset.source}">
 	
    `
    )
    .show();
}

// console.log(galleryItems);
