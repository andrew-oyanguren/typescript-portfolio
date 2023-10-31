import { SOCIAL_LINKS } from 'src/constants';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <ul className={styles.socialsList}>
        {SOCIAL_LINKS.map((obj) => (
          <li key={obj.url}>
            <a href={obj.url} target='_blank'>
              <img src={obj.icon} alt={obj.altText} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
