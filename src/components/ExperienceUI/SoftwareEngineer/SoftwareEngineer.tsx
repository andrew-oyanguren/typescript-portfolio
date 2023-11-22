import { Card } from 'src/components';
import AwardIcon from 'src/assets/svgs/award.svg';
import SearchIcon from 'src/assets/svgs/search.svg';

import styles from './SoftwareEngineer.module.css';

const ACHIEVEMENTS_LIST_ITEMS = [
  <p>
    I surfaced critical{' '}
    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
      business metrics
    </span>{' '}
    through custom stats cards
  </p>,
  <p>
    I helped improve overall{' '}
    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
      testing
    </span>{' '}
    and stability
  </p>,
  <p>
    Developed{' '}
    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
      reusable-scalable components
    </span>{' '}
    in accordance with{' '}
    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
      design system
    </span>
  </p>,
  <p>
    Introduced{' '}
    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
      auto-generated API
    </span>{' '}
    hooks helping to standardize fetching across Reperio's three applications
  </p>,
];

const AchievementsList = () => {
  return (
    <div className={styles.AchievementsContainer}>
      <div className={styles.AchievementsHeader}>
        <img src={AwardIcon} alt='Award Icon' />
        <p>Achievements</p>
      </div>

      <ul className={styles.AchievementsList}>
        {ACHIEVEMENTS_LIST_ITEMS.map((st, idx) => (
          <li key={idx}>{st}</li>
        ))}
      </ul>
    </div>
  );
};

const searchCardStyles = {
  padding: 20,
  backgroundColor: 'var(--color-gray)',
};

export default function SoftwareEngineer() {
  return (
    <div className={styles.Container}>
      <div className={styles.textContainer}>
        <p>
          Collaborated with Product, Design, and CS/CX to build data-driven
          features enabling our internal teams to better support our customers,
          create and track shipments, debug and handle error events, view
          metrics, and onboard organizations/clients.
        </p>
      </div>

      <Card style={searchCardStyles}>
        <img
          style={{ width: 45, height: 45 }}
          src={SearchIcon}
          alt='Search Icon'
        />
        <p style={{ color: 'var(--color-dark)' }}>
          Handling strategic deployments, responding to sentry alerts, and
          researching for upcoming implementations.
        </p>
      </Card>

      <AchievementsList />
    </div>
  );
}
