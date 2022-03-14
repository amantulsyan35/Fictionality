import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Homepage from './Pages/Homepage';
import Product from './Pages/Products';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore/:productName' element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
