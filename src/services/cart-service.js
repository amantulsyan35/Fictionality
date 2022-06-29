import axios from 'axios';

const encodedToken = window.localStorage.getItem('encodedToken');

const fetchCartProducts = async () => {
  try {
    const response = await axios.get('/api/user/cart', {
      headers: {
        authorization: encodedToken,
      },
    });

    return response && response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

const addProductsToCart = async (product) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/api/user/cart',
      headers: { authorization: encodedToken },
      data: {
        product: product,
      },
    });
    return response && response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

const removeProductsFromCart = async (product) => {
  try {
    const response = await axios({
      method: 'delete',
      url: `/api/user/cart/${product._id}`,
      headers: { authorization: encodedToken },
    });
    return response && response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

export { addProductsToCart, removeProductsFromCart, fetchCartProducts };
