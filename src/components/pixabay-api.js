import axios from 'axios';

const apiKey = '39735160-014c6c17620a2b57de6626257';
const apiUrl = 'https://pixabay.com/api/';

const searchPixabayImages = (query, page = 1) => {
  const params = {
    q: query,
    page: page,
    key: apiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };

  return axios.get(apiUrl, { params });
};

export default searchPixabayImages;
