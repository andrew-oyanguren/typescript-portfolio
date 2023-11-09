import styles from './Hamburger.module.css';

export default function Hamburger({
  onToggleDrawer,
  isActive = false,
}: {
  onToggleDrawer: () => void;
  isActive: boolean;
}) {
  console.log('[Hamburegr] (isActive): ', isActive);
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
