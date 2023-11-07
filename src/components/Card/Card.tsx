import { ReactNode } from 'react';

import styles from './Card.module.css';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className={styles.Card}>{children}</div>;
}
