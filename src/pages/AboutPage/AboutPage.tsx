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

  return (
    <>
      <BackgroundDesign />
      <PageTitle text='My Journey' />

      {windowDim.width > 900 ? <Drawer /> : null}

      {ABOUT_CARDS_CONFIG.map(({ cardStyles, iconProps, body }) => (
        <AboutCard
          key={iconProps.src}
          cardStyles={cardStyles}
          iconProps={iconProps}
          body={body}
        />
      ))}
    </>
  );
}
