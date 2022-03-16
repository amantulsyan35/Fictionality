import './checkout.css';
import '../../styles/base.css';

import { CartCard } from '../../components/Card';

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
  return (
    <div className='cart-container'>
      <div className='cart-heading'>
        <h4>MY CART (2)</h4>
      </div>

      <main>
        <section className='cart-product-section'>
          <CartCard
            src='https://cdn.wallpapersafari.com/83/43/cGUTKa.jpg'
            alt='naruto_manga'
            desc='Naruto Manga VOL.1'
            price='200'
          />
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

            <p class='cart-checkout-save'>You will save 1999 on this order</p>
            <div class='cart-checkout-footer'>
              <button class='btn-primary'>PLACE ORDER</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
