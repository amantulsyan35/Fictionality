import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './wishlist.css';
import '../../styles/base.css';
import { ProductCard } from '../../components/Card';
import { useProduct } from '../../context/product-context';
import { wrapAsync } from '../../utils/wrapAsync';
import { addToCart } from '../../utils/productFeat';
import { removeProductsFromWishList } from '../../services/wishlist-service';

const Wishlist = () => {
  const { productState, productDispatch } = useProduct();
  let navigate = useNavigate();
  const encodedToken = window.localStorage.getItem('encodedToken');
  useEffect(() => {
    async function showWishList() {
      const response = await axios({
        method: 'get',
        url: '/api/user/wishlist',
        headers: { authorization: encodedToken },
      });

      productDispatch({
        type: 'ADD_TO_WISHLIST',
        payload: response.data.wishlist,
      });
    }
    showWishList();
  });

  const handleWishlist = wrapAsync(async (product) => {
    const wishListProducts = await removeProductsFromWishList(product);
    productDispatch({
      type: 'ADD_TO_WISHLIST',
      payload: wishListProducts,
    });
    alert(`${product.title} removed from wishList`);
  });

  const handleCart = wrapAsync(async (product) => {
    const productsExists = addToCart(productState.cartProducts, product);

    const encodedToken = window.localStorage.getItem('encodedToken');

    if (!productsExists) {
      const response = await axios({
        method: 'post',
        url: '/api/user/cart',
        headers: { authorization: encodedToken },
        data: {
          product: product,
        },
      });

      const response2 = await axios({
        method: 'delete',
        url: `/api/user/wishlist/${product._id}`,
        headers: { authorization: encodedToken },
      });

      productDispatch({
        type: 'ADD_TO_CART',
        payload: response.data.cart,
      });
      productDispatch({
        type: 'ADD_TO_WISHLIST',
        payload: response2.data.wishlist,
      });
      alert(`${product.title} has been added to cart`);
      navigate('/user/checkout');
    } else {
      const response2 = await axios({
        method: 'delete',
        url: `/api/user/wishlist/${product._id}`,
        headers: { authorization: encodedToken },
      });
      productDispatch({
        type: 'ADD_TO_WISHLIST',
        payload: response2.data.wishlist,
      });
      navigate('/user/checkout');
    }
  });

  return (
    <div className='wishlist-container'>
      <div className='wishlist-heading'>
        <h4>MY WISHLIST</h4>
      </div>

      <main className='wishlist-main'>
        {productState.wishListProducts &&
          productState.wishListProducts.map((prod) => {
            return (
              <ProductCard
                key={prod._id}
                src={prod.coverImage}
                alt={prod.title}
                desc={prod.title}
                price={prod.price}
                inStock={prod.inStock}
                className='prod-wishlisted'
                handleCart={() => handleCart(prod)}
                handleWishlist={() => handleWishlist(prod)}
              />
            );
          })}
        {productState.wishListProducts.length === 0 && (
          <img
            alt='no_wishlist'
            src='https://payload.cargocollective.com/1/1/44904/10607674/Wishlist.gif'
          />
        )}
      </main>
    </div>
  );
};

export default Wishlist;
