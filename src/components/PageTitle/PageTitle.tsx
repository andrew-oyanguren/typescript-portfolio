type PageTitleProps = { text: string };

import styles from './PageTitle.module.css';

export default function PageTitle({ text }: PageTitleProps) {
  return (
    <div className={styles.PageTitle}>
      <h1>{text}</h1>
    </div>
  );
}
