type PageTitleProps = { text: string; secondaryTitle?: boolean };

import styles from './PageTitle.module.css';

export default function PageTitle({
  text,
  secondaryTitle = false,
}: PageTitleProps) {
  return (
    <div className={styles.PageTitle}>
      {secondaryTitle ? <h2>{text}</h2> : <h1>{text}</h1>}
    </div>
  );
}
