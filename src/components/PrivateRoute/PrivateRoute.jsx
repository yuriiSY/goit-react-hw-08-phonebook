import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';
const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <p>Loading...</p>;
  }

  return isLogin && token ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
