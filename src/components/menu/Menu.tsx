import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="border-2 border-green-950 rounded-2xl bg-green-300">
      <nav className="flex gap-10 py-4 px-2 justify-center text-3xl ">
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
          Users
        </NavLink>

        <NavLink to={'posts'} className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
          Posts
        </NavLink>
      </nav>
    </div>
  );
};
