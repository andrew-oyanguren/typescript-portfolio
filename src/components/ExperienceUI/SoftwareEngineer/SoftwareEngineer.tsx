import { useInView } from 'react-intersection-observer';

import AwardIcon from 'src/assets/svgs/award.svg';
import styles from './SoftwareEngineer.module.css';

const ACHIEVEMENTS_LIST_ITEMS = [
  <p>
    Built a robust and reusable form component implementing the third-party
    library <span>React-Hook-Form</span>.
  </p>,
  <p>
    Using Redux's (fetching tool) <span>RTK Query</span>, I introduced{' '}
    <span>auto-generated</span> API hooks helping to standardize fetching across
    Reperio's 3 applications.
  </p>,
  <p>
    Designed and developed a Stats page that included filterable custom cards
    that surfaced real time <span>business metrics</span> and <span>KPI's</span>
    .
  </p>,
  <p>
    Through implementation with Amazon Web Services <span>AWS</span>, I
    developed permissions and content accesibility constraints for our internal
    users.
  </p>,
];

const AchievementsList = () => {
  const { inView: achievementsListInView, ref: achievementsListRef } =
    useInView({ threshold: 0 });

  return (
    <div className={styles.AchievementsContainer}>
      <header className={styles.AchievementsHeader}>
        <img
          className={achievementsListInView ? styles.animate : ''}
          src={AwardIcon}
          alt='Award Icon'
        />
        <h3 className={achievementsListInView ? styles.animate : ''}>
          Achievements
        </h3>
      </header>

      <ul ref={achievementsListRef} className={styles.AchievementsList}>
        {ACHIEVEMENTS_LIST_ITEMS.map((st, idx) => (
          <li
            className={achievementsListInView ? styles.animate : ''}
            key={idx}
          >
            {st}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SoftwareEngineer() {
  const { inView: textCardInView, ref: textCardRef } = useInView({
    threshold: 0,
  });

  return (
    <div className={styles.EngContainer}>
      <div
        ref={textCardRef}
        className={`${styles.TextCard} ${textCardInView ? styles.animate : ''}`}
      >
        <p>
          Some of my responsibilities included handling strategic deployments,
          responding to Sentry alerts to assist and track engineering related
          issues, research for future implementations, as well as presenting
          feature demos following new releases.
        </p>
      </div>

      <p>
        <span>Realignment:</span> What problem are we solving
        <span style={{ color: 'var(--color-primary)' }}>?</span> What value are
        we providing
        <span style={{ color: 'var(--color-primary)' }}>?</span>
      </p>

      <AchievementsList />
    </div>
  );
}
