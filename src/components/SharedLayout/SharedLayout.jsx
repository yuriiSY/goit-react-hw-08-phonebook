import Navbar from '../../components/Navbar/NavbarMenu/Navbar';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
