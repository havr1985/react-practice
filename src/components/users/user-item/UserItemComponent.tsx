import { FC } from 'react';
import { IUser } from '../../../models/IUser.ts';

type UserPropsType = {
  user: IUser;
};

export const UserItemComponent: FC<UserPropsType> = ({ user }) => {
  return (
    <div className="flex gap-1">
      <div>
        <img src={user.image} alt={user.lastName} />
      </div>
      <div>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};
