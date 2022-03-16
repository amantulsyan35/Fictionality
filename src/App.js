import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Homepage from './Pages/Homepage';
import Product from './Pages/Products';
import Wishlist from './Pages/Wishlist';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore/:productName' element={<Product />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default App;
