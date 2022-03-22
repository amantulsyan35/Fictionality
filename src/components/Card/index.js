export const ProductCard = ({
  src,
  alt,
  desc,
  price,
  className,
  inStock,
  handleCart,
}) => {
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
        <button className='prod-card-button btn-primary' onClick={handleCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export const CartCard = ({ src, alt, desc, price }) => {
  return (
    <div className='cart-card'>
      <div className='cart-hero'>
        <img src={src} alt={alt} />
      </div>
      <div className='cart-body'>
        <p className='cart-card-body-desc'>{desc}</p>
        <p className='cart-card-body-desc'>
          <span>₹</span> {price}
        </p>
        <p className='cart-card-body-desc'>50 %</p>
        <div className='cart-quantity'>
          <p>Quantity</p>
          <div className='cart-qty-button'>
            <button>
              <i className='fa fa-minus-square' aria-hidden='true'></i>
            </button>
            <span className='cart-qty-number'>1</span>
            <button>
              <i className='fa fa-plus-square' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
      <div className='cart-footer'>
        <button className='btn-primary'>SAVE FOR LATER</button>
        <button className='btn-secondary'>REMOVE</button>
      </div>
    </div>
  );
};
