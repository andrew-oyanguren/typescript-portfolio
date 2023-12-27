import styles from './ExperienceBar.module.css';

export default function ExperienceBar({ circlePosition = 'top' }) {
  return (
    <div className={styles.ExperienceBar}>
      <div style={{ gridArea: circlePosition }} className={styles.Circle} />
      <div className={styles.Line} />
      <div className={styles.Line} />
    </div>
  );
}
