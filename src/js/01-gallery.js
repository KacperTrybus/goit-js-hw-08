import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryItems.forEach(image => {
  const newLiItem = document.createElement('li');
  const newImage = document.createElement('img');
  const newLink = document.createElement('a');
  newLink.className = 'gallery__item';
  newLink.setAttribute('href', `${image.original}`);
  newLink.addEventListener('click', event => {
    event.preventDefault();
  });

  galleryList.append(newLiItem);
  newLiItem.append(newLink);
  newLink.append(newImage);

  newImage.classList.add('gallery__image');
  newImage.src = image.preview;
  newImage.alt = 'Image description';
});

let galleryLightbox = new SimpleLightbox('.gallery__item', {
  captionType: 'attr',
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
