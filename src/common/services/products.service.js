import axios from 'axios';

const getProducts = async () => {
  return axios
    .get('/api/products')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) {
        return error.response;
      }
    });
};

export { getProducts };
