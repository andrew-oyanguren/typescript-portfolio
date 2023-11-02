import { IMAGE_CONFIG } from 'src/constants/imageConstants';

import styles from './ImageView.module.css';

export default function ImageView() {
  return (
    <div className={styles.ImageView}>
      {IMAGE_CONFIG.map((obj) => (
        <div key={obj.asset} className={styles.ImageContainer}>
          <p className={styles.title}>{obj.title}</p>
          <img src={obj.asset} alt={obj.altText} />
        </div>
      ))}
    </div>
  );
}
