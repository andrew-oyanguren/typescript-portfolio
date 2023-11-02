import { ReactNode } from 'react';

import styles from './ResponsiveWrapper.module.css';

type ResponsiveWrapperProps = {
  children: ReactNode;
};

export default function ResponsiveWrapper({
  children,
}: ResponsiveWrapperProps) {
  return <div className={styles.ResponsiveWrapper}>{children}</div>;
}
