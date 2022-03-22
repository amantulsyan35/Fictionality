export const ProductCard = ({ src, alt, desc, price, className, inStock }) => {
  return (
    <div className='prod-card'>
      <div className='prod-card-hero'>
        <img src={src} alt={alt} />
        <span className='prod-card-wishlist'>
          <i className={`fas fa-heart ${className}`}></i>
        </span>
      </div>
      <div className='prod-card-body'>
        <p className='prod-card-desc'>{desc}</p>
        <p className='prod-card-price'>
          <span>₹</span> {price}
        </p>
        <p className='prod-card-price'>
          {inStock ? 'In Stock' : 'Out Of Stock'}
        </p>
      </div>
      <div className='prod-card-footer'>
        <button className='prod-card-button btn-primary'>Add To Cart</button>
      </div>
    </div>
  );
};

export const CartCard = ({ src, alt, desc, price }) => {
  return (
    <div class='cart-card'>
      <div class='cart-hero'>
        <img src={src} alt={alt} />
      </div>
      <div class='cart-body'>
        <p class='cart-card-body-desc'>{desc}</p>
        <p class='cart-card-body-desc'>
          <span>₹</span> {price}
        </p>
        <p class='cart-card-body-desc'>50 %</p>
        <div class='cart-quantity'>
          <p>Quantity</p>
          <div class='cart-qty-button'>
            <button>
              <i class='fa fa-minus-square' aria-hidden='true'></i>
            </button>
            <span class='cart-qty-number'>1</span>
            <button>
              <i class='fa fa-plus-square' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
      <div class='cart-footer'>
        <button class='btn-primary'>SAVE FOR LATER</button>
        <button class='btn-secondary'>REMOVE</button>
      </div>
    </div>
  );
};
