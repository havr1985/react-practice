import { Menu } from '../components/menu/Menu.tsx';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Menu />

      <div className="flex-1 bg-blue-200 py-4">
        <Outlet />
      </div>
    </div>
  );
};
