import { Drawer } from 'src/components';

import { ABOUT_CARDS_CONFIG, ICON_ALT_TEXT } from 'src/constants';
import { AboutCard, PageTitle } from 'src/components';
import { useWindowDim } from 'src/hooks';

import styles from './AboutPage.module.css';

const renderCards = (isLargeDevice: boolean) => {
  let cards = ABOUT_CARDS_CONFIG;

  if (isLargeDevice) {
    cards = ABOUT_CARDS_CONFIG.filter(
      ({ iconProps }) => iconProps.alt !== ICON_ALT_TEXT.CARD_SKILLS
    );
  }

  return cards.map(({ cardStyles, iconProps, body }) => (
    <AboutCard
      key={iconProps.src}
      cardStyles={cardStyles}
      iconProps={iconProps}
      body={body}
    />
  ));
};

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
      <div className={styles.AboutCardsContainer}>
        {/* filter */}
        {renderCards(isLargeDevice)}
      </div>
    </>
  );
}
