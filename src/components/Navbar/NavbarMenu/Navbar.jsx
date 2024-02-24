import { Link } from 'react-router-dom';

import NavbarAuth from '../NavbarAuth/NavbarAuth';
import NavbarUser from '../NavbarUser/NavbarUser';
import styles from './navbar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.menu}>
          <Link to="/" className={styles.link}>
            Phonebook
          </Link>
          {isLogin ? <NavbarUser /> : <NavbarAuth />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
