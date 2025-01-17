import { FC } from 'react';
import { ICar } from '../../../models/car.model.ts';

type propType = {
  car: ICar;
};

export const CarsItem: FC<propType> = ({ car }) => {
  return (
    <div className="w-32 border border-black rounded-2xl px-4 bg-white">
      <h2>{car.brand}</h2>
      <p>Price: {car.price}$</p>
      <p>Year: {car.year}</p>
    </div>
  );
};
