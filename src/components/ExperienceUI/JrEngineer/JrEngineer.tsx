import { useInView } from 'react-intersection-observer';
import { useWindowDim } from 'src/hooks';
import { DEVICE_WIDTHS } from 'src/constants';

import BookIcon from 'src/assets/svgs/book.svg';
import CodeIcon from 'src/assets/svgs/code.svg';
import MapIcon from 'src/assets/svgs/map.svg';
import GitActivity from 'src/assets/images/git_activity.png';
import GitPullRequest from 'src/assets/svgs/git-pull-request.svg';
import { Card } from 'src/components';

import styles from './JrEngineer.module.css';

export default function JrEngineer() {
  const { inView: textContainerInView, ref: textContainerRef } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { inView: gitContainerInView, ref: gitContainerRef } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { windowDim } = useWindowDim();

  const isLargeDevice = windowDim.width > DEVICE_WIDTHS.LARGE;

  return (
    <div className={styles.JrEngContainer}>
      <Card
        style={{
          borderTopLeftRadius: 'var(--border-radius-medium)',
          borderTopRightRadius: 60,
          borderBottomRightRadius: 'var(--border-radius-medium)',
          borderBottomLeftRadius: 60,
          marginTop: 0,
          boxShadow: isLargeDevice ? 'none' : 'var(--box-shadow-icon)',
          gridArea: isLargeDevice ? 'cardOne' : '',
        }}
      >
        <div className={styles.CustomCardContainer}>
          <p>
            Created a{' '}
            <span
              style={{
                color: 'var(--color-dark)',
              }}
            >
              Q&A
            </span>{' '}
            and{' '}
            <span
              style={{
                color: 'var(--color-dark)',
              }}
            >
              release process
            </span>{' '}
            for our kit-provisition app.
          </p>

          <div className={styles.MapIconContainer}>
            <img className={styles.MapIcon} src={MapIcon} alt='Map Icon' />
          </div>

          <p>
            Wrote <span style={{ color: 'var(--color-dark)' }}>unit-tests</span>{' '}
            for both our React and React-Native apps.
          </p>
        </div>
      </Card>

      <Card
        style={{
          backgroundColor: 'var(--color-dark)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gridArea: isLargeDevice ? 'cardTwo' : '',
        }}
      >
        <div className={styles.CardIconContainer}>
          <img className={styles.CardIcon} src={BookIcon} alt='Book Icon' />
        </div>

        <div className={styles.CardTextContainer}>
          <p style={{ color: 'var(--color-light)' }}>
            Developed reusable data grids for our Admin site using the{' '}
            <span style={{ color: 'var(--color-primary)' }}>ReactDataGrid</span>{' '}
            library.
          </p>
        </div>
      </Card>

      <div
        ref={textContainerRef}
        className={`${styles.TextContainer} ${
          textContainerInView ? styles.animate : ''
        }`}
      >
        <p>
          Completed a refactor of our kit provisioning app, updating it from a
          primitive JavaScript state into a modern <span>React-Native</span>{' '}
          application.
        </p>
      </div>

      <Card
        style={{
          backgroundColor: 'var(--color-gray)',
          boxShadow: 'var(--box-shadow-icon)',
          gridArea: isLargeDevice ? 'cardThree' : '',
        }}
      >
        <div className={styles.CardIconContainer}>
          <img className={styles.CardIcon} src={CodeIcon} alt='Code Icon' />
        </div>

        <div className={styles.CardTextContainer}>
          <p style={{ color: 'var(--color-dark)' }}>
            Developed a{' '}
            <span style={{ color: 'var(--color-secondary)' }}>quality</span> and{' '}
            <span style={{ color: 'var(--color-secondary)' }}>
              sanitization
            </span>{' '}
            workflow enabling our warehouse team to inspect and flag returned
            health kits.
          </p>
        </div>
      </Card>

      {isLargeDevice ? (
        <div
          ref={gitContainerRef}
          className={`${styles.GitContainer} ${
            gitContainerInView ? styles.animate : ''
          }`}
        >
          <div className={styles.ImgWrapper}>
            <img src={GitPullRequest} alt='2022 Github git merge icon' />
          </div>

          <img src={GitActivity} alt='2022 Github activity chart' />
        </div>
      ) : null}
    </div>
  );
}
