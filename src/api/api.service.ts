import { IUser } from '../models/IUser.ts';
import { IPost } from '../models/IPost.ts';

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
