import { useInView } from 'react-intersection-observer';

import { useWindowDim } from 'src/hooks';
import { DEVICE_WIDTHS } from 'src/constants';

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

  const { windowDim } = useWindowDim();

  const isLargeDevice = windowDim.width > DEVICE_WIDTHS.LARGE;

  return (
    <div className={styles.WebDevContainer}>
      <div ref={imgOneRef} className={styles.WebDevImgWrapper}>
        <img
          className={`${imgOneInView ? styles.animate : ''}`}
          src={PortfolioHomePage}
          alt='Portfolio home page'
        />
      </div>

      <p>
        During this period, I created my Jr. portfolio website, and multiple
        single page applications. One for an English tutor and the other a fire
        prevention company. In addition I designed and developed several
        personal projects.
      </p>

      <div ref={imgTwoRef} className={styles.WebDevImgWrapper}>
        <img
          style={{ animationDelay: isLargeDevice ? '0.5s' : '' }}
          className={`${imgTwoInView ? styles.animate : ''}`}
          src={PortfolioContactPage}
          alt='Portfolio contact page'
        />
      </div>
    </div>
  );
}
