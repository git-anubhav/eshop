import axios from 'axios';
import Cookies from 'js-cookie';

const placeOrder = async (order) => {
  const token = Cookies.get('token');
  return axios
    .post('/api/orders', order, {
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

export { placeOrder };
