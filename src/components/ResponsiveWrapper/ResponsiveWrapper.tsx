import { ReactNode } from 'react';

import styles from './ResponsiveWrapper.module.css';

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return <div className={styles.ResponsiveWrapper}>{children}</div>;
}
