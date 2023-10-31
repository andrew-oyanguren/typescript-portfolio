import { Outlet } from 'react-router-dom';

import { Navigation, Footer } from '../components';

export default function Root() {
  return (
    <>
      <p>Root Element Component</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
