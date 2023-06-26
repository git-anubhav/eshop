import axios from 'axios';
import Cookies from 'js-cookie';

const getUserRole = async () => {
  const token = Cookies.get('token');
  return axios
    .get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return 'ADMIN';
    })
    .catch((error) => {
      if (error.response) {
        return 'USER';
      }
    });
};

export { getUserRole };
