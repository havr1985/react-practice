import { useEffect, useState } from 'react';
import { IUser } from '../../../models/IUser.ts';
import { getAllUsers } from '../../../api/api.service.ts';
import { UserItemComponent } from '../user-item/UserItemComponent.tsx';
import { Link, useSearchParams } from 'react-router-dom';
import { Pagination } from '../../pagination/Pagination.tsx';

export const UserListComponent = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(1);

  const userPerPage = 30;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers(currentPage, userPerPage)
      .then(({ users, total }) => {
        setUsers(users);
        setTotalPage(Math.ceil(total / userPerPage));
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Try again!');
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col justify-between">
          <ul className="flex flex-wrap gap-5 justify-center my-5">
            {users.map((user) => (
              <Link to={`cards/${user.id}`} key={user.id}>
                <li className="border border-green-800 rounded-2xl w-[450px] px-2">
                  <UserItemComponent user={user} />
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  );
};
