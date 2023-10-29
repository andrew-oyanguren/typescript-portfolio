import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <p>Root Element Component</p>
      <Outlet />
    </>
  );
}
