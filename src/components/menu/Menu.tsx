import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="flex flex-col gap-5 px-4 py-8 border-r-2 w-[20%] text-3xl bg-yellow-200">
      <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-gray-500' : '')}>
        Cars
      </NavLink>
      <NavLink to={'add-cars'} className={({ isActive }) => (isActive ? 'text-gray-500' : '')}>
        Add cars
      </NavLink>
    </div>
  );
};
