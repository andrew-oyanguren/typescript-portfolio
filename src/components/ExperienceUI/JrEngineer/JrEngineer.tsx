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
          marginTop: 0,
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

          <div className={styles.MapIconContainer}>
            <img className={styles.MapIcon} src={MapIcon} alt='Map Icon' />
          </div>

          <p>
            I was Instrumental in FE decisions when building{' '}
            <span style={{ color: 'var(--color-dark)' }}>new features</span>.
          </p>
        </div>
      </Card>

      <div className={styles.TextContainer}>
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
        <div className={styles.CardIconContainer}>
          <img className={styles.CardIcon} src={BookIcon} alt='Book Icon' />
        </div>

        <div className={styles.CardTextContainer}>
          <p style={{ color: 'var(--color-light)' }}>
            Researched and successfully integrated React libraries into Novo.
            Developed data grids, and forms using{' '}
            <span style={{ color: 'var(--color-primary)' }}>
              React-Hook-Form
            </span>{' '}
            and{' '}
            <span style={{ color: 'var(--color-primary)' }}>
              React-DataGrid
            </span>
          </p>
        </div>
      </Card>

      <Card
        style={{
          backgroundColor: 'var(--color-light-gray)',
        }}
      >
        <div className={styles.CardIconContainer}>
          <img className={styles.CardIcon} src={CodeIcon} alt='Code Icon' />
        </div>

        <div className={styles.CardTextContainer}>
          <p style={{ color: 'var(--color-dark)' }}>
            Responsible for handling{' '}
            <span style={{ color: 'var(--color-secondary)' }}>
              Sentry alerts and debugging
            </span>
            .
          </p>
        </div>
      </Card>
    </div>
  );
}
