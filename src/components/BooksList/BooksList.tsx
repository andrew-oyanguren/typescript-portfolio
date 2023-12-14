import { BOOKS_LIST_CONFIG } from 'src/constants';

import styles from './BooksList.module.css';

export default function BooksList() {
  return (
    <section className={styles.BooksListContainer}>
      <h2 className={styles.BooksListTitle}>Here's what I'm reading</h2>
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
