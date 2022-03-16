import './wishlist.css';
import '../../styles/base.css';

import { ProductCard } from '../../components/Card';

const Wishlist = () => {
  return (
    <div class='wishlist-container'>
      <div class='wishlist-heading'>
        <h4>MY WISHLIST</h4>
      </div>

      <main className='wishlist-main'>
        <ProductCard
          src='https://cdn.wallpapersafari.com/83/43/cGUTKa.jpg'
          alt='naruto_manga'
          desc='Naruto Manga VOL.1'
          price='200'
          className='prod-wishlisted'
        />
      </main>
    </div>
  );
};

export default Wishlist;
