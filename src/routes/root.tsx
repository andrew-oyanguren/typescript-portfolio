import { Outlet } from 'react-router-dom';

import { Navigation, Footer } from '../components';

export default function Root() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
