import { useRoutes } from 'react-router-dom';
import { Layout } from '../layouts/Layout.tsx';
import { lazy, Suspense } from 'react';
import { AppRoutes } from './constants.ts';

const Users = lazy(() => import('../pages/UsersPage.tsx'));
const Posts = lazy(() => import('../pages/PostsPage.tsx'));
const UsersCard = lazy(() => import('../pages/UsersCardsPage.tsx'));

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
              <Users />
            </Suspense>
          )
        },
        {
          path: AppRoutes.posts,
          element: (
            <Suspense>
              <Posts />
            </Suspense>
          )
        },
        {
          path: AppRoutes.userCards,
          element: (
            <Suspense>
              <UsersCard />
            </Suspense>
          )
        }
      ]
    }
  ]);
