export const getSortedData = (productList, sortBy) => {
  if (sortBy === null) return productList;

  return productList.sort((a, b) =>
    sortBy === 'PRICE_HIGH_TO_LOW'
      ? parseInt(b.price, 10) - parseInt(a.price, 10)
      : parseInt(a.price, 10) - parseInt(b.price, 10)
  );
};

// export const getRatedData = (productList, rateBy) => {
//   if (rateBy === null) return productList;

//   return productList.filter((p) => p.rating >= rateBy);
// };

export const getFilteredProducts = (
  productList,
  showInventoryAll,
  rateBy,
  priceRange
) => {
  return productList
    .filter(({ inStock }) => (showInventoryAll ? true : inStock))
    .filter(({ rating }) => rating >= rateBy)
    .filter(({ price }) => price <= priceRange);
};
