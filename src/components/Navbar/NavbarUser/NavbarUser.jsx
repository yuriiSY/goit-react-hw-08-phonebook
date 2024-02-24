import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operartion';
import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={styles.block}>
      <p className={styles.text}>{name}</p>
      <button className={styles.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
