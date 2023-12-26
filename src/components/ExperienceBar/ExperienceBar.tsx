import styles from './ExperienceBar.module.css';

export default function ExperienceBar() {
  return (
    <div className={styles.ExperienceBar}>
      <div style={{ gridArea: 'bottom' }} className={styles.Circle} />
      <div className={styles.Line} />
      <div className={styles.Line} />
    </div>
  );
}
