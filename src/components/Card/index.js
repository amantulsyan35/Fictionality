export const ProductCard = ({ src, alt, desc, price }) => {
  return (
    <div className='prod-card'>
      <div className='prod-card-hero'>
        <img src={src} alt={alt} />
        <span className='prod-card-wishlist'>
          <i className='fas fa-heart prod-wishlist-icon'></i>
        </span>
      </div>
      <div className='prod-card-body'>
        <p className='prod-card-desc'>{desc}</p>
        <p className='prod-card-price'>
          <span>₹</span> {price}
        </p>
      </div>
      <div className='prod-card-footer'>
        <button className='prod-card-button btn-primary'>Add To Cart</button>
      </div>
    </div>
  );
};
