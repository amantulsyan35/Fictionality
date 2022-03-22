export const addToCart = (productList, product) => {
  let itemIndex = productList.findIndex((prod) => prod._id === product._id);

  let item = {};

  if (itemIndex !== -1) {
    item = productList[itemIndex];
    item.qty += 1;
    item.price += product.price;
    productList.splice(itemIndex, 1);
    return [...productList, item];
  } else {
    return [...productList, { ...product, qty: 1 }];
  }
};
