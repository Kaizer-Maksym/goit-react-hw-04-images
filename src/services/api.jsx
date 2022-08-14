import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '28032921-de3e5fcddd16ff3ec8b59756f';

export const getImg = async (value, page) => {
  const response = await axios.get(
    `/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
