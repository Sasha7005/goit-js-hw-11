import axios from 'axios';

export function getImagesByQuery(query) {
  axios('https://pixabay.com/api/', {
    params: {
      key: '52821628-dae3b3c31b624417cff84e51c',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      return [];
    });
}
