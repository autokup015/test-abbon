import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layout/layout';

// --------------------------- Page ---------------------------

import HomePage from '../pages/home/page';
import CreateContactPage from '../pages/contact/create/page';
import ListContactPage from '../pages/contact/list/page';

import { NotFoundPage } from './notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contact/list',
        element: <ListContactPage />,
      },
      {
        path: '/contact/create',
        element: <CreateContactPage />,
      },
    ],
  },

  // NOT FOUND PAGES
  ...NotFoundPage,
]);

export { router };
