export const addToCart = (productList, product) => {
  return productList.some((prod) => prod._id === product._id);
};

export const addToWishList = (productList, product) => {
  return productList.some((prod) => prod._id === product._id);
};
