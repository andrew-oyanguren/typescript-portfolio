import { Drawer } from 'src/components';

import { ABOUT_CARDS_CONFIG } from 'src/constants';
import { AboutCard, PageTitle } from 'src/components';
import { useWindowDim } from 'src/hooks';

import styles from './AboutPage.module.css';

const BackgroundDesign = () => {
  return <div className={styles.BackgroundDesign} />;
};

export default function AboutPage() {
  const { windowDim } = useWindowDim();

  const isLargeDevice = windowDim.width > 1200;

  return (
    <>
      <BackgroundDesign />
      <PageTitle text='My Journey,' />

      {isLargeDevice ? <Drawer /> : null}
      <div style={{ marginTop: 'var(--spacing-large)' }}>
        {ABOUT_CARDS_CONFIG.map(({ cardStyles, iconProps, body }) => (
          <AboutCard
            key={iconProps.src}
            cardStyles={cardStyles}
            iconProps={iconProps}
            body={body}
          />
        ))}
      </div>
    </>
  );
}
