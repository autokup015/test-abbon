import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout";

// --------------------------- Page ---------------------------

import HomePage from "../pages/home/page";

import ConatctPage from "../pages/contact/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ConatctPage />,
      },
    ],
  },
]);

export { router };
