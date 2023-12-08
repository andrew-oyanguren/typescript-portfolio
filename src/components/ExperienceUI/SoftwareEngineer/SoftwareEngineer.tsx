import AwardIcon from 'src/assets/svgs/award.svg';

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

export default function SoftwareEngineer() {
  return (
    <div className={styles.EngContainer}>
      <div className={styles.TextCard}>
        <p>
          Collaborated with Product, Design, and CS/CX to build data-driven
          features enabling our internal teams to better support our customers,
          create and track shipments, debug and handle error events, view
          metrics, and onboard organizations/clients.
        </p>
      </div>

      <p>
        Handled <span>strategic-deployments</span>, and <span>research</span>{' '}
        for upcoming implementations.
      </p>

      <AchievementsList />
    </div>
  );
}
