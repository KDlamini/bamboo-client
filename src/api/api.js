const url = 'https://shopcart-v1.herokuapp.com';
const geoLocationUrl = 'https://api.ipgeolocation.io/ipgeo?apiKey=24f6c248269d4012ac782238eb67dfe9';

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
const postReview = (id, review) => postData(`${url}/${id}/review`, review);
const newRegistration = (user) => postData(`${url}/users/register`, user);
const newSession = (user) => postData(`${url}/auth/login`, user);
const getAuthUser = (config) => getAuthData(`${url}/auth/user`, config);
const AddNewAddress = (id, config, address) => postAuthData(`${url}/auth/user/${id}/address`, config, address);
const removeAddress = (userId, id, config, address) => postAuthData(`${url}/auth/user/${userId}/address/${id}`, config, address);
const modifyAddress = (userId, id, config, address) => postAuthData(`${url}/auth/user/${userId}/address/${id}/edit`, config, address);
const fetchGeoLocation = () => getData(geoLocationUrl);

export {
  fetchProducts, postReview, getAuthUser, newRegistration, newSession, AddNewAddress,
  removeAddress, modifyAddress, fetchGeoLocation,
};
