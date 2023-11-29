import { CSSProperties, ReactNode } from 'react';
import styles from './AboutCard.module.css';

type AboutCardTypes = {
  body: ReactNode;
  cardStyles?: CSSProperties;
  iconProps: { src: string; alt: string };
};

export default function AboutCard({
  body,
  cardStyles,
  iconProps,
}: AboutCardTypes) {
  return (
    <div className={styles.AboutCard} style={cardStyles}>
      <header className={styles.AboutCardHeader}>
        {<img {...iconProps} />}
      </header>

      <div className={styles.Body}>{body}</div>
    </div>
  );
}
