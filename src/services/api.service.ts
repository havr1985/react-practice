import { ITodo } from '../models/task.model.ts';

export const getTodos = async (): Promise<ITodo[]> => {
  return await fetch(import.meta.env.VITE_API_URL).then((res) => res.json());
};
