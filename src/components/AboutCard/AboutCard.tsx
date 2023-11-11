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
      <header className={styles.header}>{<img {...iconProps} />}</header>

      <div className={styles.body}>{body}</div>
    </div>
  );
}
