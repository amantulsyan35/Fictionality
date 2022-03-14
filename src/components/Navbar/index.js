//External Dependencies
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaCartPlus } from 'react-icons/fa';

import './index.css';
import '../../styles/base.css';

const NavSearch = () => {
  return (
    <div className='nav-search'>
      <FaSearch />
      <input type='search' placeholder='search' />
    </div>
  );
};

const NavList = ({ icon }) => {
  return (
    <li>
      <Link to='#'>
        {icon === 'heart' && <FaHeart className='nav-icon' />}
        {icon === 'cart' && <FaCartPlus className='nav-icon' />}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-logo'>
        <Link to='#'>[ &#128296;, &#128119;]</Link>
      </div>
      <NavSearch />
      <div className='nav-links-container'>
        <ul className='nav-links'>
          <NavList icon='heart' />
          <NavList icon='cart' />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
