// import { Link } from 'react-router-dom';

import './product.css';
import '../../styles/base.css';
import { ProductCard } from '../../components/Card';

const ProductFilterComp = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const ProductFilter = ({ label, type }) => {
  return (
    <div className='prod-func'>
      <input type={type} />
      <label>{label}</label>
    </div>
  );
};

const Product = () => {
  return (
    <div class='product-container'>
      <aside>
        <ProductFilterComp className='prod-filter-heading'>
          <h4>FILTERS</h4>
          <button className='btn-primary'>Clear</button>
        </ProductFilterComp>

        {/* PRICE FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>PRICE</h4>
          <input type='range' />
        </ProductFilterComp>

        {/* CATEGORY FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>CATEGORY</h4>
          {['Fiction', 'Tutorials', 'Non-Fiction'].map((productLabel) => {
            return <ProductFilter label={productLabel} type='checkbox' />;
          })}
        </ProductFilterComp>

        {/* RATING FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>RATING</h4>
          {[
            '4 stars & above',
            '3 stars & above',
            '2 stars & above',
            '1 stars & above',
          ].map((productLabel) => {
            return <ProductFilter label={productLabel} type='radio' />;
          })}
        </ProductFilterComp>

        {/* SORT FILTER */}
        <ProductFilterComp className='prod-filter'>
          <h4 className='prod-filter-type'>SORT BY</h4>
          {['Price - Low to High', 'Price - High to Low'].map(
            (productLabel) => {
              return <ProductFilter label={productLabel} type='radio' />;
            }
          )}
        </ProductFilterComp>
      </aside>

      {/* PRODUCTS SECTION */}
      <main className='prod-main'>
        <div className='prod-heading'>
          <h4>Showing All Products</h4>
          <span>(Showing 20 Products)</span>
        </div>
        <div className='prod-container'>
          <ProductCard
            src='https://cdn.wallpapersafari.com/83/43/cGUTKa.jpg'
            alt='naruto_manga'
            desc='Naruto Manga VOL.1'
            price='200'
            className='prod-wishlist-icon'
          />
        </div>
      </main>
    </div>
  );
};

export default Product;
