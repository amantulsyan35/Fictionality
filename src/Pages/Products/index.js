//THIRD PART DEPENDENCIES
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// CONTEXT
import { useProductFilter } from '../../context/product-filter-context';
import { useProduct } from '../../context/product-context';

//CSS + COMP
import './product.css';
import '../../styles/base.css';
import { ProductCard } from '../../components/Card';

import { ProductFilter, ProductFilterComp } from './productPageComp';

//UTILS
import { getSortedData, getFilteredProducts } from '../../utils/productFilter';
import { addToCart, addToWishList } from '../../utils/productFeat';
import { wrapAsync } from '../../utils/wrapAsync';

//SERVICES
import { fetchProducts } from '../../services/product-service';
import { addProductsToCart } from '../../services/cart-service';
import {
  addProductsToWishList,
  removeProductsFromWishList,
} from '../../services/wishlist-service';

// MAIN PRODUCT COMPONENT
const Product = () => {
  const { filterState, filterDispatch } = useProductFilter();
  const { productState, productDispatch } = useProduct();
  let param = useParams();
  const encodeToken = window.localStorage.getItem('encodedToken');

  useEffect(() => {
    wrapAsync(async () => {
      let categoryProduct = [];

      const products = await fetchProducts();

      if (param.productName === 'best-sellers') {
        categoryProduct = products.filter((p) => p.bestSeller === true);
      } else {
        categoryProduct = products.filter(
          (p) => p.categoryName === param.productName
        );

        let filteredProducts = getFilteredProducts(
          getSortedData(categoryProduct, filterState.sortBy),
          filterState.showInventoryAll,
          filterState.rateBy,
          filterState.priceRange
        );

        productDispatch({
          type: 'FETCH_PRODUCT',
          payload: filteredProducts,
        });
      }
    })();
  }, [filterState]);

  //RESET FUNCTION
  const handleReset = () => {
    filterDispatch({
      type: 'RESET',
    });
  };

  // CART FUNCTIONALITY
  const handleCart = wrapAsync(async (product) => {
    if (encodeToken) {
      const productsExists = addToCart(productState.cartProducts, product);

      if (!productsExists) {
        const cartProducts = await addProductsToCart(product);
        productDispatch({
          type: 'ADD_TO_CART',
          payload: cartProducts,
        });
        alert(`${product.title} has been added to cart`);
      } else {
        alert(`${product.title} already exists`);
      }
    } else {
      alert('You are not logged in');
    }
  });

  //WISHLIST FUNCTION
  const handleWishlist = wrapAsync(async (product) => {
    if (encodeToken) {
      const productsExists = addToWishList(
        productState.wishListProducts,
        product
      );

      if (!productsExists) {
        const wishListProducts = await addProductsToWishList(product);
        productDispatch({
          type: 'ADD_TO_WISHLIST',
          payload: wishListProducts,
        });
        alert(`${product.title} has been added to wishlist`);
      } else {
        const wishListProducts = await removeProductsFromWishList(product);
        productDispatch({
          type: 'ADD_TO_WISHLIST',
          payload: wishListProducts,
        });
        alert(`${product.title} removed from wishList`);
      }
    } else {
      alert('You are not logged in');
    }
  });

  return (
    <div className='product-container'>
      <aside>
        <ProductFilterComp className='prod-filter-heading'>
          <h4>FILTERS</h4>
          <button className='btn-primary' onClick={handleReset}>
            Clear
          </button>
        </ProductFilterComp>

        {/* PRICE FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>PRICE</h4>
          <input
            type='range'
            max='100000'
            min='0'
            step='1000'
            value={filterState.priceRange}
            onChange={(e) => {
              filterDispatch({
                type: 'RANGE',
                payload: Number(e.target.value),
              });
            }}
          />
        </ProductFilterComp>

        {/* CATEGORY FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>CATEGORY</h4>
          {['Fiction', 'Tutorial', 'Non-Fiction', 'Best-Sellers'].map(
            (productLabel) => {
              return (
                <ProductFilter
                  key={productLabel}
                  label={productLabel}
                  type='checkbox'
                  onChange={(e) => {}}
                  checked={
                    productLabel.toLocaleLowerCase() === param.productName
                      ? true
                      : false
                  }
                />
              );
            }
          )}
        </ProductFilterComp>

        {/* RATING FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>RATING</h4>
          {[
            { label: '4 stars & above', rateType: 4 },
            { label: '3 stars & above', rateType: 3 },
            { label: '2 stars & above', rateType: 2 },
            { label: '1 stars & above', rateType: 1 },
          ].map((productDetail) => {
            return (
              <ProductFilter
                key={productDetail.rateType}
                label={productDetail.label}
                type='radio'
                name='range'
                onChange={() => {
                  filterDispatch({
                    type: 'RATING',
                    payload: productDetail.rateType,
                  });
                }}
                checked={
                  filterState.rateBy &&
                  filterState.rateBy === productDetail.rateType
                }
              />
            );
          })}
        </ProductFilterComp>

        {/* SORT FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>SORT BY</h4>
          {[
            { label: 'Price - Low to High', sortType: 'PRICE_LOW_TO_HIGH' },
            { label: 'Price - High to Low', sortType: 'PRICE_HIGH_TO_LOW' },
          ].map((productDetail) => {
            return (
              <ProductFilter
                key={productDetail.sortType}
                label={productDetail.label}
                type='radio'
                name='sort'
                onChange={() =>
                  filterDispatch({
                    type: 'SORT',
                    payload: productDetail.sortType,
                  })
                }
                checked={
                  filterState.sortBy &&
                  filterState.sortBy === productDetail.sortType
                }
              />
            );
          })}
        </ProductFilterComp>

        {/* OTHER FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>OTHERS</h4>
          <ProductFilter
            label='Include Out Of Stock'
            type='checkbox'
            checked={filterState.showInventoryAll}
            onChange={() => filterDispatch({ type: 'TOGGLE_INVENTORY' })}
          />
        </ProductFilterComp>
      </aside>

      {/* PRODUCTS SECTION */}
      <main className='prod-main'>
        <div className='prod-heading'>
          <h4>Showing All Products</h4>
          <span>(Showing {productState.filteredProducts.length} Products)</span>
        </div>
        <div className='prod-container'>
          {productState.filteredProducts &&
            productState.filteredProducts.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  src={p.coverImage}
                  alt={p.title}
                  desc={p.title}
                  price={p.price}
                  inStock={p.inStock}
                  className={
                    productState.wishListed
                      ? 'prod-wishlisted'
                      : 'prod-wishlist-icon'
                  }
                  handleCart={() => handleCart(p)}
                  handleWishlist={() => handleWishlist(p)}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default Product;
