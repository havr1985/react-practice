import axios from 'axios';
import { ICar } from '../models/car.model.ts';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`
});

export const getAllCars = async (): Promise<ICar[]> => {
  const { data } = await axiosInstance.get<ICar[]>('cars');
  return data;
};

export const createCar = async (newCar: ICar): Promise<ICar> => {
  const { data } = await axiosInstance.post('cars', newCar);
  return data;
};
