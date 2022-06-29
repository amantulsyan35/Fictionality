import './App.css';

import Navbar from './components/Navbar';
import FictionalityRoute from './routes/FictionalityRoute';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <FictionalityRoute />
    </div>
  );
};

export default App;
