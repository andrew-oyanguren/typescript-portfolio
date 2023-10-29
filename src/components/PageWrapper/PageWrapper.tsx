import { ReactNode } from 'react';

import styles from './PageWrapper.module.css';

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return <div className={styles.PageWrapper}>{children}</div>;
}
