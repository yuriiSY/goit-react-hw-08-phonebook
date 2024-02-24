import LoginForm from '../../components/LoginForm /LoginForm';
import styles from './login-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operartion';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  console.log(authError);

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={styles.login}>
      {/* <h1>Login Page</h1> */}
      {authLoading && <p>Loading...</p>}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p>{authError}</p>}
    </div>
  );
};

export default LoginPage;
