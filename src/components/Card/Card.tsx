import { ReactNode, CSSProperties } from 'react';

import styles from './Card.module.css';

type CardProps = {
  children: ReactNode;
  style?: CSSProperties;
};

/* 
  The Card style prop allows for unique card styling.
  style must be a style object:
  {color: 'red', padding: 20}
*/

export default function Card({ children, style }: CardProps) {
  return (
    <div style={style} className={styles.Card}>
      {children}
    </div>
  );
}
