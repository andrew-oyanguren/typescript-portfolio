import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { PATH_NAMES } from './constants';
import { Loader } from 'src/components';

import Root from './routes/root';
import {
  AboutPage,
  ContactPage,
  ErrorPage,
  ExperiencePage,
  HomePage,
} from './pages';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={PATH_NAMES.ROOT}
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={() => <Loader />}
    >
      <Route index element={<HomePage />} />
      <Route path={PATH_NAMES.ABOUT} element={<AboutPage />} />
      <Route path={PATH_NAMES.EXPERIENCE} element={<ExperiencePage />} />
      <Route path={PATH_NAMES.CONTACT} element={<ContactPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
