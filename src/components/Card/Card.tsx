import { ReactNode, CSSProperties } from 'react';

import styles from './Card.module.css';

type CardProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function Card({ children, style }: CardProps) {
  return (
    <div style={style} className={styles.Card}>
      {children}
    </div>
  );
}
