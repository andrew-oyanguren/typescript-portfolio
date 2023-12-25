import { CSSProperties, ReactNode } from 'react';

import { SkillsCard } from 'src/components';
import AboutCardIcon01 from 'src/assets/images/about-card-01.png';
import AboutCardIcon02 from 'src/assets/images/about-card-02.png';
import AboutCardIcon03 from 'src/assets/images/about-card-03.png';
import ToolIcon from 'src/assets/svgs/tool.svg';

const commonBoxShadow = 'var(--box-shadow-image)';

const paragraphStyles = {
  padding: 20,
  lineHeight: 2,
};

export const ICON_ALT_TEXT = Object.freeze({
  CARD_ONE: 'About Card One Icon',
  CARD_TWO: 'About Card Two Icon',
  CARD_THREE: 'About Card Three Icon',
  CARD_SKILLS: 'SKILLS Card Icon',
});

type IconAltTypes = (typeof ICON_ALT_TEXT)[keyof typeof ICON_ALT_TEXT];

type AboutCardConfigTypes = {
  cardStyles: CSSProperties;
  body: ReactNode;
  iconProps: { src: string; alt: IconAltTypes };
}[];

export const ABOUT_CARDS_CONFIG: AboutCardConfigTypes = [
  {
    cardStyles: {
      backgroundColor: 'rgba(255, 138, 0, 0.75)',
      outline: '2px solid var(--color-dark)',
      boxShadow: commonBoxShadow,
    },
    body: (
      <p style={paragraphStyles}>
        begins during the pandemic circa 2020. Think rock bottom, reevaluating
        career choices, wife and newborn, pressure of the world on your
        shoulders. I found web design, and started looking at HTML & CSS. That
        is when I discovered JavaScript.
      </p>
    ),
    iconProps: { src: AboutCardIcon01, alt: ICON_ALT_TEXT.CARD_ONE },
  },
  {
    cardStyles: {
      outline: '2px solid var(--color-dark-gray)',
      backgroundColor: 'rgba(189, 202, 206, 0.75)',
    },
    body: (
      <p style={paragraphStyles}>
        While house sitting, I dedicated 10 hour days over 10 months learning
        how to code and building projects, and started applying for jobs
        immediately thereafter. It's accurate to state that I was denied over
        200 times, received 4 interviews and was so close...
      </p>
    ),
    iconProps: { src: AboutCardIcon02, alt: ICON_ALT_TEXT.CARD_TWO },
  },
  {
    cardStyles: {
      backgroundColor: 'rgba(110, 173, 192, 0.75)',
      boxShadow: commonBoxShadow,
    },
    body: (
      <p style={paragraphStyles}>
        Fast forward 2021, I'm driving a delivery truck discouraged, exhausted,
        and ready to put a pause on my dream when I received the phone call that
        changed my life. I was offered a position for a Jr Software Engineer
        with a local startup.
      </p>
    ),
    iconProps: { src: AboutCardIcon03, alt: ICON_ALT_TEXT.CARD_THREE },
  },
  {
    cardStyles: {
      backgroundColor: 'var(--color-dark)',
      boxShadow: commonBoxShadow,
    },
    body: <SkillsCard />,
    iconProps: { src: ToolIcon, alt: ICON_ALT_TEXT.CARD_SKILLS },
  },
];
