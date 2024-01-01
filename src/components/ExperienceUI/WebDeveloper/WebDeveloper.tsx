import { useInView } from 'react-intersection-observer';

import PortfolioHomePage from 'src/assets/images/portfolio_home_page.png';
import PortfolioContactPage from 'src/assets/images/portfolio_contact_page.png';
import styles from './WebDeveloper.module.css';

export default function WebDevBody() {
  const { ref: imgOneRef, inView: imgOneInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { ref: imgTwoRef, inView: imgTwoInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={styles.WebDevContainer}>
      <div ref={imgOneRef} className={styles.WebDevImgWrapper}>
        <img
          style={{ opacity: 0 }}
          className={`${styles.WebDevImgOne} ${
            imgOneInView ? styles.animate : ''
          }`}
          src={PortfolioHomePage}
          alt='Portfolio home page'
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
          className={`${styles.WebDevImgTwo} ${
            imgTwoInView ? styles.animate : ''
          }`}
          src={PortfolioContactPage}
          alt='Portfolio contact page'
        />
      </div>
    </div>
  );
}
