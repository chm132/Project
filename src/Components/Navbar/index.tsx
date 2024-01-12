import { Outlet } from 'react-router-dom'
import Header from './Header'
import Menu from './Menu'


const Navbar = () => {
  return (
    <div>
      <Header />
      <Menu />

      <Outlet />
    </div>
  )
}

export default Navbar