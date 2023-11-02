import { Outlet } from 'react-router-dom';

import { Footer, Navigation, ResponsiveWrapper } from '../components';

export default function Root() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          backgroundColor: '#fffcfae2',
          paddingTop: 40,
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        <Navigation />
      </header>

      <main>
        <ResponsiveWrapper>
          <Outlet />
        </ResponsiveWrapper>
      </main>
      <Footer />
    </div>
  );
}
