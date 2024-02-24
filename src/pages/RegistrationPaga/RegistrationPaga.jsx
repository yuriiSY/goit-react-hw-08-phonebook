import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operartion';
import style from './registration-page.module.css';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

const RegistrationPaga = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      {authLoading && <p>Loading...</p>}
      <RegistrationForm onSubmit={handleSignup} />
      {authError && <p className={style.text}>{authError}</p>}
    </main>
  );
};

export default RegistrationPaga;
