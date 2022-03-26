import axios from 'axios';
const encodedToken = window.localStorage.getItem('encodedToken');
const addProductsToWishList = async (product) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/api/user/wishlist',
      headers: { authorization: encodedToken },
      data: {
        product: product,
      },
    });
    return response && response.data.wishlist;
  } catch (error) {
    console.log(error);
  }
};

const removeProductsFromWishList = async (product) => {
  try {
    const response = await axios({
      method: 'delete',
      url: `/api/user/wishlist/${product._id}`,
      headers: { authorization: encodedToken },
    });

    return response && response.data.wishlist;
  } catch (error) {
    console.log(error);
  }
};

export { addProductsToWishList, removeProductsFromWishList };
