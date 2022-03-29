import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const encodedToken = window.localStorage.getItem('encodedToken');

  return encodedToken ? <Outlet /> : <Navigate to='/login' />;
};
export default PrivateRoute;
