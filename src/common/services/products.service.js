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

const getProduct = async (id) => {
  const token = Cookies.get('token');
  return axios
    .get(`/api/products/${id}`, {
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

const deleteProduct = async (id) => {
  const token = Cookies.get('token');
  return axios
    .delete(`/api/products/${id}`, {
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

const addProduct = async (product) => {
  const token = Cookies.get('token');
  return axios
    .post(`/api/products`, product, {
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

const modifyProduct = async (id, product) => {
  const token = Cookies.get('token');
  return axios
    .put(`/api/products/${id}`, product, {
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

export { getProducts, getProduct, getCategories, deleteProduct, addProduct, modifyProduct };
