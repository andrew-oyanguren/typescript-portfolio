import BookIcon from 'src/assets/svgs/book.svg';
import CodeIcon from 'src/assets/svgs/code.svg';
import MapIcon from 'src/assets/svgs/map.svg';
import { Card } from 'src/components';

import styles from './JrEngineer.module.css';

const cardIcon = { width: 45, height: 45, padding: 'var(--spacing-small)' };

export default function JrEngineer() {
  return (
    <div className={styles.Container}>
      <Card style={{ backgroundColor: 'var(--color-gray)' }}>
        <img style={cardIcon} src={CodeIcon} alt='Code Icon' />

        <p
          className={styles.textSpacing}
          style={{ color: 'var(--color-dark)' }}
        >
          Responsible for Pulse{' '}
          <span style={{ color: 'var(--color-secondary)' }}>
            releases and debugging
          </span>
          .
        </p>
      </Card>

      <Card
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 0,

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p className={styles.textSpacing}>
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

        <img style={cardIcon} src={MapIcon} alt='Map Icon' />

        <p className={styles.textSpacing}>
          I was Instrumental in FE decisions when building{' '}
          <span style={{ color: 'var(--color-dark)' }}>new features</span>.
        </p>
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
        <img style={cardIcon} src={BookIcon} alt='Book Icon' />

        <p className={styles.textSpacing}>
          Researched and successfully integrated React libraries into Novo.
          Developed data grids, and forms using{' '}
          <span style={{ color: 'var(--color-primary)' }}>React-Hook-Form</span>{' '}
          and{' '}
          <span style={{ color: 'var(--color-primary)' }}>React-DataGrid</span>
        </p>
      </Card>
    </div>
  );
}
