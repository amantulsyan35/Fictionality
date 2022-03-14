import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Homepage from './Pages/Homepage';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
