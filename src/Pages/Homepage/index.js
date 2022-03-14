import { Link } from 'react-router-dom';

import './index.css';
import '../../styles/base.css';

const HomepageCard = ({ className, to, title }) => {
  return (
    <div className={className}>
      <div className='hpg-genre-name'>
        <Link to={to}>
          <h3>{title}</h3>
        </Link>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div class='homepage-category'>
      <div class='hpg-genre-container-1'>
        <HomepageCard className='hpg-genre-1' to='#' title='Fiction' />
        <HomepageCard className='hpg-genre-2' to='#' title='Tutorials' />
        <HomepageCard className='hpg-genre-3' to='#' title='Non Fiction' />
      </div>
      <div class='hpg-genre-container-2'>
        <HomepageCard className='hpg-best-genre' to='#' title='Bestsellers' />
      </div>
    </div>
  );
};

export default Homepage;
