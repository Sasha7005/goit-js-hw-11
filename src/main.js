import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const search = evt.target.elements['search-text'].value.trim();
  if (!search) {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(search)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        throw new Error('Invalid search query');
      }
      createGallery(images, gallery);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query.Please try again!',
        position: 'topRight',
      });
    });
}
