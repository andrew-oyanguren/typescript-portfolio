import { useInView } from 'react-intersection-observer';
import { BOOKS_LIST_CONFIG } from 'src/constants';
import BookOpenIcon from 'src/assets/svgs/book-open.svg';

import styles from './BooksList.module.css';

export default function BooksList() {
  const { ref, inView } = useInView({ threshold: 0.9 });

  return (
    <section className={styles.BooksListContainer}>
      <div className={styles.BooksListTitle}>
        <img src={BookOpenIcon} alt='Open Book Icon' />
        <h2>Here's what I'm reading</h2>
      </div>

      <ul
        ref={ref}
        className={`${styles.BooksList} ${inView ? styles.animate : ''}`}
      >
        {BOOKS_LIST_CONFIG.map(({ altText, asset }) => (
          <li key={altText} className={styles.ImageContainer}>
            <img src={asset} alt={altText} />
          </li>
        ))}
      </ul>
    </section>
  );
}
