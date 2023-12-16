import { useInView } from 'react-intersection-observer';

import PortfolioDesktop from 'src/assets/images/portfolio-desktop.png';
import styles from './WebDeveloper.module.css';

export default function WebDevBody() {
  const { ref: imgOneRef, inView: imgOneInView } = useInView({
    threshold: 0,
  });

  const { ref: imgTwoRef, inView: imgTwoInView } = useInView({
    threshold: 0,
  });

  return (
    <div className={styles.WebDevContainer}>
      <div ref={imgOneRef} className={styles.WebDevImgWrapper}>
        <img
          style={{ opacity: 0 }}
          className={`${styles.WebDevImg} ${
            imgOneInView ? styles.animate : ''
          }`}
          src={PortfolioDesktop}
          alt='Portfolio Desktop View'
        />
      </div>

      <p>
        During this period, I created three portfolio websites, a card game for
        my toddler, a single page application for an English tutor, and a
        website for a fire prevention company as well as multiple other personal
        projects.
      </p>

      <div ref={imgTwoRef} className={styles.WebDevImgWrapper}>
        <img
          style={{ opacity: 0 }}
          className={`${styles.WebDevImg} ${
            imgTwoInView ? styles.animate : ''
          }`}
          src={PortfolioDesktop}
          alt='Portfolio Mobile View'
        />
      </div>
    </div>
  );
}
