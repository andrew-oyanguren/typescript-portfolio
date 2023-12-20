import { Outlet } from 'react-router-dom';

import { Footer, Navigation, ResponsiveWrapper } from '../components';
import styles from './route.module.css';

export default function Root() {
  return (
    <div className={styles.Layout}>
      <header>
        <Navigation />
      </header>

      <div className={styles.ContentContainer}>
        <main>
          <ResponsiveWrapper>
            <Outlet />
          </ResponsiveWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
