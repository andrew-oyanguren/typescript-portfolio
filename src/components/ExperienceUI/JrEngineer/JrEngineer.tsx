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

  const { inView: imgContainerInView, ref: imgContainerRef } = useInView({
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

      <div
        ref={textContainerRef}
        className={`${styles.TextContainer} ${
          textContainerInView ? styles.animate : ''
        }`}
      >
        <p>
          Led refactor updating Pulse from its primitive state into an updated
          <span> React Native</span> application
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
            Responsible for handling{' '}
            <span style={{ color: 'var(--color-secondary)' }}>
              Sentry alerts and debugging
            </span>
            .
          </p>
        </div>
      </Card>

      {isLargeDevice ? (
        <div
          ref={imgContainerRef}
          className={`${styles.ImgContainer} ${
            imgContainerInView ? styles.animate : ''
          }`}
        >
          <div
            style={{
              border: '4px solid var(--color-primary)',
              borderRadius: 'var(--border-radius-circle)',
              padding: 'var(--spacing-small)',
              marginBottom: 'var(--spacing-small)',
            }}
          >
            <img
              style={{
                width: 50,
                height: 50,
              }}
              src={GitPullRequest}
              alt='2022 Github git merge icon'
            />
          </div>

          <img src={GitActivity} alt='2022 Github activity chart' />
        </div>
      ) : null}
    </div>
  );
}
