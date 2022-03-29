import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';

import { Homepage, Product, Wishlist, Checkout, Login, Signup } from '../Pages';
import PrivateRoute from './PrivateRoute';

const RouteData = () => {
  return (
    <Routes>
      <Route exact path='/user' element={<PrivateRoute />}>
        <Route exact path='/user/wishlist' element={<Wishlist />} />
        <Route exact path='/user/checkout' element={<Checkout />} />
      </Route>

      <Route path='/explore/:productName' element={<Product />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/mock' element={<Mockman />}></Route>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
};

export default RouteData;
