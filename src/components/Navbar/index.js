//External Dependencies
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaHeart, FaCartPlus } from 'react-icons/fa';

import './Navbar.css';
import '../../styles/base.css';

const NavSearch = () => {
  return (
    <div className='nav-search'>
      <FaSearch />
      <input type='search' placeholder='search' />
    </div>
  );
};

const NavList = ({ icon, to }) => {
  return (
    <li>
      {icon === 'heart' && (
        <Link to={to}>
          <FaHeart className='nav-icon' />
        </Link>
      )}
      {icon === 'cart' && (
        <Link to={to}>
          <FaCartPlus className='nav-icon' />
        </Link>
      )}
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-logo'>
        <Link to='/'>[ &#128214;, &#9961;]</Link>
      </div>
      <NavSearch />
      <div className='nav-links-container'>
        <ul className='nav-links'>
          <NavList icon='heart' to='/wishlist' />
          <NavList icon='cart' to='/checkout' />
          <Link to='/signup' className='btn-primary '>
            Signup
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
