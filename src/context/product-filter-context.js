import { createContext, useContext, useReducer } from 'react';

const ProductFilterContext = createContext();

const ProductFilterProvider = ({ children }) => {
  const initialState = {
    showInventoryAll: false,
    sortBy: 'PRICE_LOW_TO_HIGH',
    rateBy: 1,
    priceRange: 100000,
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_INVENTORY':
        return { ...state, showInventoryAll: !state.showInventoryAll };
      case 'SORT':
        return { ...state, sortBy: action.payload };
      case 'RATING':
        return { ...state, rateBy: action.payload };
      case 'RANGE':
        return { ...state, priceRange: action.payload };
      case 'RESET':
        return { ...initialState };
      default:
        return state;
    }
  };

  const [filterState, filterDispatch] = useReducer(reducerFunc, initialState);

  return (
    <ProductFilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

const useProductFilter = () => useContext(ProductFilterContext);

export { useProductFilter, ProductFilterProvider };
