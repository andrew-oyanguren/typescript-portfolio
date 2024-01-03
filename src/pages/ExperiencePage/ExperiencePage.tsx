import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  BALL_POSITION,
  BallPositionType,
} from 'src/constants/experienceBarConstants';
import { DEVICE_WIDTHS } from 'src/constants';
import { PageTitle, ExperienceBar } from 'src/components';
import useWindowDim from 'src/hooks/useWindowDim';

import { getExperienceUIVariant } from 'src/components/ExperienceUI/helpers';
import { EXPERIENCE_UI_VARIANTS } from 'src/components/ExperienceUI/constants';

import styles from './ExperiencePage.module.css';

const EXP_SECTIONS_CONFIG = [
  {
    id: 'webDev',
    title: 'Web Developer',
    time_period: '2020 - 2021',
    subTitle:
      'While studying and improving my skills, I started offering my services to family and friends designing and building websites',
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.WEB_DEVELOPER),
    headerBgColor: 'var(--color-primary)',
  },
  {
    id: 'jr',
    title: 'Jr. Software Engineer',
    time_period: '2021 - 2022',
    subTitle:
      'As a part of a small team I collaborated with product, design and supply-chain to build new features, and create processes to accomplish our goals in alignment with company growth expectations.',
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.JR_ENGINEER),
    headerBgColor: 'var(--color-secondary)',
  },
  {
    id: 'se',
    title: 'Software Engineer',
    time_period: '2022 - Present',
    subTitle:
      "I held ownership of Reperio's (React) Admin site, and worked on a health kit provisioning mobile app (React-Native).",
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.SOFTWARE_ENGINEER),
    headerBgColor: 'var(--color-dark)',
  },
];

const PageSection = () => {
  const [experienceCirclePosition, setExperienceCirclePosition] =
    useState<BallPositionType>(BALL_POSITION.TOP);

  const { ref: webDevRef } = useInView({ threshold: 0 });
  const { ref: jrRef, inView: jrInView } = useInView({ threshold: 0 });
  const { ref: seRef, inView: seInView } = useInView({ threshold: 0 });
  const { windowDim } = useWindowDim();

  const isMediumDevice = windowDim.width >= DEVICE_WIDTHS.MEDIUM;
  const isLargeDevice = windowDim.width >= DEVICE_WIDTHS.LARGE;
  const isXlDevice = windowDim.width >= DEVICE_WIDTHS.XL;

  const getRef = (id: string) => {
    switch (id) {
      case 'webDev':
        return webDevRef;
      case 'jr':
        return jrRef;
      case 'se':
        return seRef;
      default:
        return null;
    }
  };

  const getSectionInVIew = useCallback(() => {
    let sectionInView: BallPositionType = BALL_POSITION.TOP;

    if (seInView) {
      sectionInView = BALL_POSITION.BOTTOM;
    } else if (jrInView) {
      sectionInView = BALL_POSITION.MIDDLE;
    }

    return sectionInView;
  }, [jrInView, seInView]);

  useEffect(() => {
    setExperienceCirclePosition(getSectionInVIew());
  }, [getSectionInVIew]);

  return (
    <div className={styles.ExperiencePageContainer}>
      <PageTitle
        style={
          isLargeDevice
            ? {
                paddingBottom: 'var(--spacing-large)',
                color: 'var(--color-primary)',
                maxWidth: 'var(--desktop-width)',
                margin: '0 auto',
                textAlign: isXlDevice ? 'right' : 'center',
              }
            : {
                color: 'var(--color-primary)',
              }
        }
        text="Here's my experience."
      />

      {EXP_SECTIONS_CONFIG.map(
        ({ id, title, time_period, subTitle, content, headerBgColor }) => {
          return (
            <section
              ref={getRef(id)}
              className={styles.ExperiencePageSection}
              key={id}
            >
              <div
                style={{ backgroundColor: headerBgColor }}
                className={styles.Header}
              >
                <PageTitle
                  style={{
                    color: 'var(--color-light)',
                  }}
                  secondaryTitle={true}
                  text={title}
                />
                {isMediumDevice ? <span>{time_period}</span> : null}
              </div>

              <div className={styles.Subtitle}>
                <p>{subTitle}</p>
              </div>

              <div className={styles.Content}>{content}</div>
            </section>
          );
        }
      )}

      {isXlDevice ? (
        <ExperienceBar circlePosition={experienceCirclePosition} />
      ) : null}
    </div>
  );
};

export default function ExperiencePage() {
  return <PageSection />;
}
