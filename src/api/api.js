const url = 'https://shopcart-v1.herokuapp.com/products';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchProducts = () => getData(url);

export default fetchProducts;
