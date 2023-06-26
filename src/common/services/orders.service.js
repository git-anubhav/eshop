import axios from 'axios';
import Cookies from 'js-cookie';

const placeOrder = async (order) => {
  const token = Cookies.get('token');
  order.user = '64982278c0d51d4407dea77b';
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
