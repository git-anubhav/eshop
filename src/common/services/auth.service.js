import axios from 'axios';

const login = async ({ email, password }) => {
  return axios
    .post('/api/auth/signin', {
      username: email,
      password: password,
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

const signUp = async ({ email, password, firstName, lastName, contactNumber }) => {
  return axios
    .post('/api/auth/signup', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
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

export { login, signUp };
