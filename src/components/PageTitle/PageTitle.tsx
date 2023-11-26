type PageTitleProps = {
  text: string;
  secondaryTitle?: boolean;
  style?: React.CSSProperties;
};

import styles from './PageTitle.module.css';

export default function PageTitle({
  text,
  secondaryTitle = false,
  style,
}: PageTitleProps) {
  return (
    <div className={styles.PageTitle} style={style}>
      {secondaryTitle ? <h2>{text}</h2> : <h1>{text}</h1>}
    </div>
  );
}
