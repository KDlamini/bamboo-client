const url = 'https://shopcart-v1.herokuapp.com';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAuthUser = async (config) => {
  try {
    const response = await fetch(`${url}/auth/user`, {
      method: 'GET',
      mode: 'cors',
      headers: config.headers,
    });
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchProducts = () => getData(`${url}/products`);
const postReview = async (id, review) => postData(`${url}/${id}/add_review`, review);
const newRegistration = async (user) => postData(`${url}/users/register`, user);
const newSession = async (user) => postData(`${url}/auth/login`, user);

export {
  fetchProducts, postReview, getAuthUser, newRegistration, newSession,
};
