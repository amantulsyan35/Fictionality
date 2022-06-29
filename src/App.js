import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Homepage, Product, Wishlist, Checkout, Login, Signup } from './Pages';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore/:productName' element={<Product />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
