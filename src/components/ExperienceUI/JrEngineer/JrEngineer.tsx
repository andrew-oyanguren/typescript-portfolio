import BookIcon from 'src/assets/svgs/book.svg';
import CodeIcon from 'src/assets/svgs/code.svg';
import MapIcon from 'src/assets/svgs/map.svg';
import { Card } from 'src/components';

import styles from './JrEngineer.module.css';

export default function JrEngineer() {
  return (
    <div className={styles.Container}>
      <Card style={{ backgroundColor: 'var(--color-gray)' }}>
        <img style={{ width: 45, height: 45 }} src={CodeIcon} alt='Code Icon' />
        <p style={{ color: 'var(--color-dark)' }}>
          Responsible for Pulse{' '}
          <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>
            releases and debugging
          </span>
          .
        </p>
      </Card>

      <p>GitHub Canvas Placeholder</p>

      <Card
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 0,
        }}
      >
        <p>
          Developed a{' '}
          <span style={{ color: 'var(--color-dark)', fontWeight: 'bold' }}>
            Q&A
          </span>{' '}
          and release process for Pulse to the Play Store.
        </p>
        <img style={{ width: 45, height: 45 }} src={MapIcon} alt='Map Icon' />
        <p>
          I was Instrumental in FE decisions when building{' '}
          <span style={{ color: 'var(--color-dark)', fontWeight: 'bold' }}>
            new features
          </span>
          .
        </p>
      </Card>

      <div className={styles.textContainer}>
        <p>
          Led refactor updating Pulse from its primitive state into an updated
          <span> React Native</span> application
        </p>
      </div>

      <Card style={{ backgroundColor: 'var(--color-dark)' }}>
        <img style={{ width: 45, height: 45 }} src={BookIcon} alt='Book Icon' />
        <p>
          Researched and successfully integrated React libraries into Novo.
          Developed data grids, and forms using{' '}
          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
            React-Hook-Form
          </span>{' '}
          and{' '}
          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
            React-DataGrid
          </span>
        </p>
      </Card>
    </div>
  );
}
