import PortfolioMobile from 'src/assets/images/portfolio-mobile.png';
import PortfolioDesktop from 'src/assets/images/portfolio-desktop.png';

import styles from './WebDeveloper.module.css';

export default function WebDevBody() {
  return (
    <div className={styles.Container}>
      <img src={PortfolioDesktop} alt='Portfolio Desktop View' />

      <p className={styles.description}>
        During this period, I created three portfolio websites, a card game for
        my toddler, a single page application for an English tutor, and a
        website for a fire prevention company as well as multiple other personal
        projects.
      </p>

      <img src={PortfolioMobile} alt='Portfolio Mobile View' />
    </div>
  );
}
