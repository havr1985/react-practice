import { IUser } from '../models/IUser.ts';
import { IPost } from '../models/IPost.ts';
import { ICart } from '../models/IUserCart.ts';

export const getAllUsers = async (): Promise<IUser[]> => {
  return await fetch(import.meta.env.VITE_API_URL + 'users')
    .then((res) => res.json())
    .then((json) => json.users);
};

export const getAllPost = async (): Promise<IPost[]> => {
  return await fetch(import.meta.env.VITE_API_URL + 'posts')
    .then((res) => res.json())
    .then((json) => json.posts);
};

export const getCartsByUserId = async (userId: number): Promise<ICart[]> => {
  return await fetch(import.meta.env.VITE_API_URL + `users/${userId}/carts`)
    .then((res) => res.json())
    .then((json) => json.carts);
};
