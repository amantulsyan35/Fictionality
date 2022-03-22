import { createContext, useContext, useReducer, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const productReducerFunc = (state, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCT':
        return { ...state, filteredProducts: action.payload };
      case 'ADD_TO_CART':
        return {};
      default:
        return state;
    }
  };

  const [productState, productDispatch] = useReducer(productReducerFunc, {
    filteredProducts: [],
  });

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
