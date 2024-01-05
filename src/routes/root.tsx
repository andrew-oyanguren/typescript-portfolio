import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useWindowDim } from 'src/hooks';

import { Footer, Navigation, ResponsiveWrapper } from '../components';
import styles from './route.module.css';

export default function Root() {
  const { windowDim } = useWindowDim();

  const isXxlDevice = windowDim.width > 1987; // birth year :)

  return (
    <div className={styles.Layout}>
      <header
        style={{ left: isXxlDevice ? `${windowDim.width * 0.005}%` : '' }}
      >
        <Navigation />
      </header>

      <div className={styles.ContentContainer}>
        <main>
          <ResponsiveWrapper>
            <Outlet />
            <ScrollRestoration />
          </ResponsiveWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
