import axios from 'axios';
import Cookies from 'js-cookie';

const getAddresses = async () => {
  const token = Cookies.get('token');
  return axios
    .get('/api/addresses', {
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

const addAddress = async (address) => {
  const token = Cookies.get('token');
  return axios
    .post('/api/addresses', address, {
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

export { getAddresses, addAddress };
