import { Drawer } from 'src/components';

import { ABOUT_CARDS_CONFIG } from 'src/constants';
import { AboutCard, PageTitle } from 'src/components';
import { useWindowDim } from 'src/hooks';

const BackgroundDesign = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '50%',
        background:
          'linear-gradient(233deg, rgba(220,230,234,1) 50%, rgba(245,245,245,1) 100%)',
        zIndex: -1,
      }}
    />
  );
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
