import axios from 'axios';

const encodedToken = window.localStorage.getItem('encodedToken');
const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/products');
    const products = response.data.products;

    return products;
  } catch (error) {
    console.log(error);
  }
};

const updateProducts = async (product, type) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: type,
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { fetchProducts, updateProducts };
