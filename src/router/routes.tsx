import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layouts/Layout.tsx';
import { UsersPage } from '../pages/UsersPage.tsx';
import { PostsPage } from '../pages/PostsPage.tsx';
import { CartsList } from '../components/catrs/carts-list/CartsList.tsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <UsersPage />
      },
      { path: 'cards/:id', element: <CartsList /> },
      { path: 'posts', element: <PostsPage /> }
    ]
  }
]);
