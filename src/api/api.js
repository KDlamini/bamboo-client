const url = 'http://localhost:5000';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAuthData = async (url, config) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: config.headers,
    });
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

const postAuthData = async (url, config, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: config.headers,
    });
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchProducts = () => getData(`${url}/products`);
const postReview = (id, review) => postData(`${url}/${id}/add_review`, review);
const newRegistration = (user) => postData(`${url}/users/register`, user);
const newSession = (user) => postData(`${url}/auth/login`, user);
const getAuthUser = (config) => getAuthData(`${url}/auth/user`, config);
const AddNewAddress = (userId, config, address) => postAuthData(`${url}/auth/user/${userId}/add_address`, config, address);

export {
  fetchProducts, postReview, getAuthUser, newRegistration, newSession, AddNewAddress,
};
