import { Outlet } from 'react-router-dom';
import { Menu } from '../components/menu/Menu.tsx';

export const Layout = () => {
  return (
    <div>
      <Menu />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
