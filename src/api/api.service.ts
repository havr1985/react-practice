import { ICart } from '../models/IUserCart.ts';
import { IUserResponse } from '../models/IUserResponse.ts';
import { IPostResponse } from '../models/IPostResponse.ts';

export const getAllUsers = async (page: number, limit: number): Promise<IUserResponse> => {
  const skip = (page - 1) * limit;
  return await fetch(import.meta.env.VITE_API_URL + `users?skip=${skip}&limit=${limit}`).then(
    (res) => res.json()
  );
};

export const getAllPost = async (page: number, limit: number): Promise<IPostResponse> => {
  const skip = (page - 1) * limit;
  return await fetch(import.meta.env.VITE_API_URL + `posts?skip=${skip}&limit=${limit}`).then(
    (res) => res.json()
  );
};

export const getCartsByUserId = async (userId: number): Promise<ICart[]> => {
  return await fetch(import.meta.env.VITE_API_URL + `users/${userId}/carts`)
    .then((res) => res.json())
    .then((json) => json.carts);
};
