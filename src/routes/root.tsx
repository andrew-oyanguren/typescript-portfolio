import { Outlet } from 'react-router-dom';

import { Navigation } from '../components';

export default function Root() {
  return (
    <main>
      <p>Root Element Component</p>
      <Navigation />
      <Outlet />
    </main>
  );
}
