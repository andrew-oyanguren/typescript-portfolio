import BookIcon from 'src/assets/svgs/book.svg';
import CodeIcon from 'src/assets/svgs/code.svg';
import MapIcon from 'src/assets/svgs/map.svg';
import { Card } from 'src/components';

import styles from './JrEngineer.module.css';

export default function JrEngineer() {
  return (
    <div className={styles.JrEngContainer}>
      <Card
        style={{
          borderTopLeftRadius: 'var(--border-radius-medium)',
          borderTopRightRadius: 60,
          borderBottomRightRadius: 'var(--border-radius-medium)',
          borderBottomLeftRadius: 60,
        }}
      >
        <div className={styles.CustomCardContainer}>
          <p>
            Developed a{' '}
            <span
              style={{
                color: 'var(--color-dark)',
              }}
            >
              Q&A
            </span>{' '}
            and release process for Pulse to the Play Store.
          </p>

          <img className={styles.mapIcon} src={MapIcon} alt='Map Icon' />

          <p>
            I was Instrumental in FE decisions when building{' '}
            <span style={{ color: 'var(--color-dark)' }}>new features</span>.
          </p>
        </div>
      </Card>

      <div className={styles.textContainer}>
        <p>
          Led refactor updating Pulse from its primitive state into an updated
          <span> React Native</span> application
        </p>
      </div>

      <Card
        style={{
          backgroundColor: 'var(--color-dark)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <img className={styles.cardIcon} src={BookIcon} alt='Book Icon' />

        <p className={styles.cardText}>
          Researched and successfully integrated React libraries into Novo.
          Developed data grids, and forms using{' '}
          <span style={{ color: 'var(--color-primary)' }}>React-Hook-Form</span>{' '}
          and{' '}
          <span style={{ color: 'var(--color-primary)' }}>React-DataGrid</span>
        </p>
      </Card>

      <Card
        style={{
          backgroundColor: 'var(--color-light-gray)',
        }}
      >
        <img className={styles.cardIcon} src={CodeIcon} alt='Code Icon' />

        <p style={{ color: 'var(--color-dark)' }}>
          Responsible for handling{' '}
          <span style={{ color: 'var(--color-secondary)' }}>
            Sentry alerts and debugging
          </span>
          .
        </p>
      </Card>
    </div>
  );
}
