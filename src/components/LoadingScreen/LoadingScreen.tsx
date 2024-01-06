import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  return (
    <div className={styles.LoadingScreen}>
      <div className={styles.AnimationContainer}>
        <div className={styles.Top}></div>
        <div className={styles.Middle}>
          <div className={styles.Lights}></div>
          <div className={styles.Lights}></div>
          <div className={styles.Lights}></div>
        </div>
        <div className={styles.LazersContainer}>
          <div className={styles.Lazer}></div>
          <div className={styles.Lazer}></div>
        </div>
      </div>
    </div>
  );
}
