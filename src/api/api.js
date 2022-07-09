const url = 'http://localhost:5000';

const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

const getAuthUser = async (config) => {
  const response = await fetch(`${url}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    headers: config.headers,
  });
  return response.json();
};

const fetchProducts = () => getData(`${url}/products`);
const postReview = async (id, data) => postData(`${url}/${id}/add_review`, data);

export {
  fetchProducts, postReview, getAuthUser,
};
