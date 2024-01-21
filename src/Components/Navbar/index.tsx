import { Outlet } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Navbar = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
