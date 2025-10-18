import axios from 'axios';

export function getImg(item) {
  axios('https://pixabay.com/api/', {
    params: {
      key: '52821628-dae3b3c31b624417cff84e51c',
      q: item,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => {
      return response.data.hits;
    })
    .catch(() => {
      return [];
    });
}
