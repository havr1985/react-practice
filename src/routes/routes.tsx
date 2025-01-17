import { useRoutes } from 'react-router-dom';
import { AppRoutes } from './constants.ts';
import { Layout } from '../layouts/Layout.tsx';
import { lazy, Suspense } from 'react';

const Cars = lazy(() => import('../pages/CarsPage.tsx'));
const AddCars = lazy(() => import('../pages/AddCarsPage.tsx'));

export const Routes = () =>
  useRoutes([
    {
      path: AppRoutes.root,
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense>
              <Cars />
            </Suspense>
          )
        },
        {
          path: AppRoutes.addCars,
          element: (
            <Suspense>
              <AddCars />
            </Suspense>
          )
        }
      ]
    }
  ]);
