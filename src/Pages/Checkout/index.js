import { useEffect } from 'react';

import './checkout.css';
import '../../styles/base.css';

import { CartCard } from '../../components/Card';

import { useProduct } from '../../context/product-context';
import { wrapAsync } from '../../utils/wrapAsync';

import { updateProducts } from '../../services/product-service';
import {
  fetchCartProducts,
  removeProductsFromCart,
} from '../../services/cart-service';
import { addProductsToWishList } from '../../services/wishlist-service';

const CartDetail = ({ className, title, price, qty }) => {
  return (
    <div className={className}>
      <p>{title}</p>
      {qty && <p>{`(${qty} items)`}</p>}
      <p>
        <span>₹</span> {price}
      </p>
    </div>
  );
};

const Checkout = () => {
  const { productState, productDispatch } = useProduct();
  useEffect(() => {
    wrapAsync(async () => {
      productDispatch({
        type: 'ADD_TO_CART',
        payload: await fetchCartProducts(),
      });
    })();
  }, [productState.cartProducts]);

  const handleIncrement = wrapAsync(async (product) => {
    await updateProducts(product, 'increment');
  });

  const handleDecrement = wrapAsync(async (product) => {
    if (product.qty === 1) {
      const cartProducts = await removeProductsFromCart(product, 'decrement');
      productDispatch({
        type: 'ADD_TO_CART',
        payload: cartProducts,
      });
    } else {
      await updateProducts(product, 'decrement');
    }
  });

  const handleWishlist = wrapAsync(async (product) => {
    const wishListProducts = await addProductsToWishList(product);
    productDispatch({
      type: 'ADD_TO_WISHLIST',
      payload: wishListProducts,
    });
    alert(`${product.title} has been added to wishlist`);
  });

  const handleDelete = wrapAsync(async (product) => {
    const cartProducts = await removeProductsFromCart(product);
    productDispatch({
      type: 'ADD_TO_CART',
      payload: cartProducts,
    });
  });

  return (
    <div className='cart-container'>
      <div className='cart-heading'>
        <h4>MY CART {`(${productState.cartProducts.length})`}</h4>
      </div>

      <main className='checkout-main'>
        <section className='cart-product-section'>
          {productState.cartProducts &&
            productState.cartProducts.map((prod) => {
              return (
                <CartCard
                  key={prod._id}
                  src={prod.coverImage}
                  alt={prod.title}
                  desc={prod.title}
                  price={prod.price}
                  discount={prod.discount}
                  qty={prod.qty}
                  handleIncrement={() => handleIncrement(prod)}
                  handleDecrement={() => handleDecrement(prod)}
                  handleWishlist={() => handleWishlist(prod)}
                  handleDelete={() => handleDelete(prod)}
                />
              );
            })}
        </section>
        <section className='cart-checkout-section'>
          <div className='cart-details-heading'>
            <h4>PRICE DETAILS</h4>
          </div>
          <div className='cart-details-container'>
            <CartDetail
              className='cart-details'
              title='Price'
              price='200'
              qty='2'
            />
            <CartDetail className='cart-details' title='Discount' price='200' />
            <CartDetail
              className='cart-details'
              title='Delivery Charges'
              price='200'
            />
            <CartDetail
              className='cart-total'
              title='TOTAL AMOUNT'
              price='200'
            />

            <p className='cart-checkout-save'>
              You will save 1999 on this order
            </p>
            <div className='cart-checkout-footer'>
              <button className='btn-primary'>PLACE ORDER</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
