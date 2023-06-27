import axios from 'axios';
import Cookies from 'js-cookie';

const getUserRole = async () => {
  // backend doesn't contain any api to get user details by token
  // checking permissions to this endpoint is just a hack to make the endpoint work
  // if admin token makes the request, it returns true, else false
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
