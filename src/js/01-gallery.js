// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line
// // Описаний в документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const gallery = document.querySelector('.gallery');
// const galleryCard = ({ preview, original, description } = {}) => {
//   return `
//   <li class="gallery__item">
//     <a class="gallery__link"
//     href="${preview}">
//       <img
//         class="gallery__image"
//         src="${original}"
//         data-source="large-image.jpg"
//         alt="${description}"
//       />
//     </a>
//   </li>`;
// };

// const galleryList = galleryItems.map(e => galleryCard(e));
// gallery.insertAdjacentHTML('afterbegin', galleryList.join(''));

// const currentTarget = event.target;
// if (currentTarget.nodeName !== 'IMG') {
//   return;
// }

// Change code below this line
// const galleryList = document.querySelector('.gallery');
// const galleryCard = ({ preview, original, description } = {}) => {
//   return `
//   <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
// };
// const galleryAr = galleryItems.map(el => galleryCard(el));

// galleryList.insertAdjacentHTML('afterbegin', galleryAr.join(''));

// // Модальне вікно

// const onImageClick = event => {
//   // відмінна дії за замовчуванням
//   event.preventDefault();

//   const currentTarget = event.target;
//   // перевірка на картинку

//   if (currentTarget.nodeName !== 'IMG') {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `<img src ="${currentTarget.dataset.source}" width="800"height="600">`
//   );
//   const escapeHandler = event => {
//     if (event.code === 'Escape') {
//       instance.close();
//       document.removeEventListener('keydown', escapeHandler);
//     }
//   };
//   instance.show();
//   document.addEventListener('keydown', escapeHandler);
// };
// galleryList.addEventListener('click', onImageClick);
// const gallerySLb = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: '250',
// });
// console.log(galleryItems);

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGalleryItem = (hrefImg, srclImg, descr) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${hrefImg}">
    <img
      class="gallery__image"
      src="${srclImg}"
      alt="${descr}"
    />
  </a>
</li>`;
};

const render = () => {
  const images = galleryItems.map(({ original, preview, description }) =>
    createGalleryItem(original, preview, description)
  );
  gallery.insertAdjacentHTML('beforeend', images.join(''));
};
render();

const gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
