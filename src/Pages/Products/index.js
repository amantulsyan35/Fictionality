//THIRD PART DEPENDENCIES
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// CONTEXT
import { useProductFilter } from '../../context/product-filter-context';
import { useProduct } from '../../context/product-context';

//CSS + COMP
import './product.css';
import '../../styles/base.css';
import { ProductCard } from '../../components/Card';

//UTILS
import { getSortedData, getFilteredProducts } from '../../utils/productFilter';

// COMPONENTS NEEDED BY THIS SPECIFIC PAGE
const ProductFilterComp = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const ProductFilter = ({ label, type, name, onChange, checked }) => {
  return (
    <div className='prod-func'>
      <input checked={checked} onChange={onChange} name={name} type={type} />
      <label>{label}</label>
    </div>
  );
};

// MAIN PRODUCT COMPONENTS
const Product = () => {
  const { filterState, filterDispatch } = useProductFilter();
  const { productState, productDispatch } = useProduct();
  let param = useParams();

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('/api/products');
      let categoryProduct = [];

      if (param.productName === 'best-sellers') {
        categoryProduct = response.data.products.filter(
          (p) => p.bestSeller === true
        );
      } else {
        categoryProduct = response.data.products.filter(
          (p) => p.categoryName === param.productName
        );
      }

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
    fetchProducts();
  }, [filterState]);

  //RESET FUNCTION

  const handleReset = () => {
    filterDispatch({
      type: 'RESET',
    });
  };

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
                  className='prod-wishlist-icon'
                />
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default Product;
