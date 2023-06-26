import axios from 'axios';
import Cookies from 'js-cookie';

const getProducts = async () => {
  const token = Cookies.get('token');
  return axios
    .get('/api/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) {
        return error.response;
      }
    });
};

const getCategories = async () => {
  const token = Cookies.get('token');
  return axios
    .get('/api/products/categories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) {
        return error.response;
      }
    });
};

export { getProducts, getCategories };
