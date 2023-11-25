import { Card } from 'src/components';
import AwardIcon from 'src/assets/svgs/award.svg';
import SearchIcon from 'src/assets/svgs/search.svg';

import styles from './SoftwareEngineer.module.css';

const ACHIEVEMENTS_LIST_ITEMS = [
  <p>
    I surfaced critical <span>business metrics</span> through custom stats cards
  </p>,
  <p>
    I helped improve overall <span>testing</span> and stability
  </p>,
  <p>
    Developed <span>reusable-scalable components</span> in accordance with{' '}
    <span>design system</span>
  </p>,
  <p>
    Introduced <span>auto-generated API</span> hooks helping to standardize
    fetching across Reperio's three applications
  </p>,
];

const AchievementsList = () => {
  return (
    <div className={styles.AchievementsContainer}>
      <header className={styles.AchievementsHeader}>
        <img src={AwardIcon} alt='Award Icon' />
        <h3>Achievements</h3>
      </header>

      <ul className={styles.AchievementsList}>
        {ACHIEVEMENTS_LIST_ITEMS.map((st, idx) => (
          <li key={idx}>{st}</li>
        ))}
      </ul>
    </div>
  );
};

const cardIcon = { width: 45, height: 45, padding: 'var(--spacing-small)' };

export default function SoftwareEngineer() {
  return (
    <>
      <div className={styles.textContainer}>
        <p>
          Collaborated with Product, Design, and CS/CX to build data-driven
          features enabling our internal teams to better support our customers,
          create and track shipments, debug and handle error events, view
          metrics, and onboard organizations/clients.
        </p>
      </div>

      <Card
        style={{
          padding: 'var(--spacing-medium)',

          backgroundColor: 'var(--color-gray)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img style={cardIcon} src={SearchIcon} alt='Search Icon' />

        <p className={styles.cardText}>
          Handling strategic deployments, responding to sentry alerts, and
          researching for upcoming implementations.
        </p>
      </Card>

      <AchievementsList />
    </>
  );
}
