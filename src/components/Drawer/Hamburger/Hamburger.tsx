import styles from './Hamburger.module.css';

export default function Hamburger({
  onToggleDrawer,
  isActive = false,
}: {
  onToggleDrawer: () => void;
  isActive: boolean;
}) {
  return (
    <div
      className={`${styles.Hamburger} ${isActive ? styles.active : ''}`}
      onClick={onToggleDrawer}
    >
      <div className={styles.lineWrapper}>
        {[1, 2, 3].map((_, idx) => (
          <span key={idx} className={styles.line} />
        ))}
      </div>
    </div>
  );
}
