import { useEffect, useState } from 'react';
import { getAllCars } from '../../../api/api.service.ts';
import { ICar } from '../../../models/car.model.ts';
import { CarsItem } from '../cars-item/CarsItem.tsx';

export const CarsList = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const cars: ICar[] = await getAllCars();
        setCars(cars);
      } catch (err: unknown) {
        console.error('Error fetching cars:', err);
        setError('Not fetch cars');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <>
      {error && <div>ERROR! Please try again!</div>}
      {isLoading && <div>Loading...</div>}
      {cars && (
        <div>
          <h2 className="text-center text-3xl">Cars List</h2>
          <ul className="flex flex-wrap gap-10 my-8 px-4 justify-center">
            {cars.map((car) => (
              <li key={car.id}>
                <CarsItem car={car} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
