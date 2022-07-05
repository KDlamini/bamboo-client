const url = 'http://localhost:5000/products';

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

const fetchProducts = () => getData(url);
const postReview = async (id, data) => postData(`${url}/${id}/add_review`, data);

export {
  fetchProducts, postReview,
};
