import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Homepage from './Pages/Homepage';
import Product from './Pages/Products';
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Chceckout';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore/:productName' element={<Product />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
