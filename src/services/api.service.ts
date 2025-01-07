import { IData } from '../models/task.model.ts';

export const getTodos = async (): Promise<IData> => {
  return await fetch(import.meta.env.VITE_API_URL).then((res) => res.json());
};
