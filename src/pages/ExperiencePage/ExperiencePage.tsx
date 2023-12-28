import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import { PageTitle, ExperienceBar } from 'src/components';
import useWindowDim from 'src/hooks/useWindowDim';

import { getExperienceUIVariant } from 'src/components/ExperienceUI/helpers';
import { EXPERIENCE_UI_VARIANTS } from 'src/components/ExperienceUI/constants';

import styles from './ExperiencePage.module.css';

const EXP_SECTIONS_CONFIG = [
  {
    id: 'webDev',
    title: 'Web Developer',
    subTitle:
      'While I was studying, and improving my skills, I started offering my services to family and friends designing and building websites',
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.WEB_DEVELOPER),
  },
  {
    id: 'jr',
    title: 'Jr. Software Engineer',
    subTitle: "Worked on Reperio's two internal apps: Novo and Pulse.",
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.JR_ENGINEER),
  },
  {
    id: 'sr',
    title: 'Software Engineer',
    subTitle: "Held ownership of Reperio's admin site.",
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.SOFTWARE_ENGINEER),
  },
];

const PageSection = () => {
  const [experienceCirclePosition, setExperienceCirclePosition] =
    useState('top');

  const { ref: webDevRef } = useInView({ threshold: 0 });
  const { ref: jrRef, inView: jrInView } = useInView({ threshold: 0 });
  const { ref: srRef, inView: srInView } = useInView({ threshold: 0 });
  const { windowDim } = useWindowDim();

  const isMediumDevice = windowDim.width >= 768;

  const getRef = (id: string) => {
    switch (id) {
      case 'webDev':
        return webDevRef;
      case 'jr':
        return jrRef;
      case 'sr':
        return srRef;
      default:
        return null;
    }
  };

  const getSectionInVIew = useCallback(() => {
    if (jrInView) {
      return 'middle';
    } else if (srInView) {
      return 'bottom';
    } else {
      return 'top';
    }
  }, [jrInView, srInView]);

  useEffect(() => {
    setExperienceCirclePosition(getSectionInVIew());
  }, [getSectionInVIew]);

  return (
    <div className={styles.ExperiencePageContainer}>
      <PageTitle text='My Experience' />

      {EXP_SECTIONS_CONFIG.map(({ id, title, subTitle, content }) => {
        return (
          <section
            ref={getRef(id)}
            className={styles.ExperiencePageSection}
            key={id}
          >
            <div className={styles.Title}>
              <PageTitle secondaryTitle={true} text={title} />
            </div>

            <div className={styles.Subtitle}>
              <p>{subTitle}</p>
            </div>

            <div className={styles.Content}>{content}</div>
          </section>
        );
      })}

      {isMediumDevice ? (
        <ExperienceBar circlePosition={experienceCirclePosition} />
      ) : null}
    </div>
  );
};

export default function ExperiencePage() {
  return <PageSection />;
}
