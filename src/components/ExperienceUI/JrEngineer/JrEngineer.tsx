import BookIcon from 'src/assets/svgs/book.svg';
import CodeIcon from 'src/assets/svgs/code.svg';
import MapIcon from 'src/assets/svgs/map.svg';
import { Card } from 'src/components';

import styles from './JrEngineer.module.css';

const cardIcon = { width: 45, height: 45, padding: 'var(--spacing-small)' };

export default function JrEngineer() {
  return (
    <>
      <Card style={{ backgroundColor: 'var(--color-gray)' }}>
        <img style={cardIcon} src={CodeIcon} alt='Code Icon' />

        <p style={{ color: 'var(--color-dark)' }}>
          Responsible for Pulse{' '}
          <span style={{ color: 'var(--color-secondary)' }}>
            releases and debugging
          </span>
          .
        </p>
      </Card>

      <Card
        style={{
          borderTopLeftRadius: 60,
          borderTopRightRadius: 'var(--border-radius-common)',
          borderBottomRightRadius: 60,
          borderBottomLeftRadius: 'var(--border-radius-common)',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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

        <img style={cardIcon} src={MapIcon} alt='Map Icon' />

        <p>
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

        <p className={styles.cardText}>
          Researched and successfully integrated React libraries into Novo.
          Developed data grids, and forms using{' '}
          <span style={{ color: 'var(--color-primary)' }}>React-Hook-Form</span>{' '}
          and{' '}
          <span style={{ color: 'var(--color-primary)' }}>React-DataGrid</span>
        </p>
      </Card>
    </>
  );
}
