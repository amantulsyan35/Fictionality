import { createContext, useContext, useReducer } from 'react';
import { addToCart } from '../utils/productFeat';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const productReducerFunc = (state, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCT':
        return { ...state, filteredProducts: action.payload };
      case 'ADD_TO_CART':
        return {
          ...state,
          cartProducts: addToCart(state.cartProducts, action.payload),
        };
      case 'REMOVE_FROM_CART':
        return { ...state, cartProducts: action.payload };
      case 'ADD_TO_WISHLIST':
        return { ...state, wishListProducts: action.payload };
      case 'REMOVE_FROM_WISHLIST':
        return { ...state, wishListProducts: action.payload };
      default:
        return state;
    }
  };

  const [productState, productDispatch] = useReducer(productReducerFunc, {
    filteredProducts: [],
    cartProducts: [],
    wishListProducts: [],
  });

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
