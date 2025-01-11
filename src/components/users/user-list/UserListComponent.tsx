import { useEffect, useState } from 'react';
import { IUser } from '../../../models/IUser.ts';
import { getAllUsers } from '../../../api/api.service.ts';
import { UserItemComponent } from '../user-item/UserItemComponent.tsx';
import { NavLink, Outlet } from 'react-router-dom';

export const UserListComponent = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllUsers()
      .then((allUsers) => {
        setUsers(allUsers);
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Try again!');
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex justify-between">
          <ul className="flex flex-col gap-5 justify-center my-5">
            {users.map((user) => (
              <NavLink
                to={`cards/${user.id}`}
                key={user.id}
                className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
                <li className="border border-green-800 rounded-2xl w-[450px] px-2">
                  <UserItemComponent user={user} />
                </li>
              </NavLink>
            ))}
          </ul>
          <div className="my-5">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
