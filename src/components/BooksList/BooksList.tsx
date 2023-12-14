import { BOOKS_LIST_CONFIG } from 'src/constants';
import BookOpenIcon from 'src/assets/svgs/book-open.svg';

import styles from './BooksList.module.css';

export default function BooksList() {
  return (
    <section className={styles.BooksListContainer}>
      <div className={styles.BooksListTitle}>
        <img src={BookOpenIcon} alt='Open Book Icon' />
        <h2>Here's what I'm reading</h2>
      </div>

      <ul className={styles.BooksList}>
        {BOOKS_LIST_CONFIG.map(({ altText, asset }) => (
          <li key={altText} className={styles.ImageContainer}>
            <img src={asset} alt={altText} />
          </li>
        ))}
      </ul>
    </section>
  );
}
