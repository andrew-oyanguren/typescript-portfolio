import { CSSProperties, ReactNode } from 'react';

import { SkillsCard } from 'src/components';
import AboutCardIcon01 from 'src/assets/images/about-card-01.png';
import AboutCardIcon02 from 'src/assets/images/about-card-02.png';
import AboutCardIcon03 from 'src/assets/images/about-card-03.png';
import ToolIcon from 'src/assets/svgs/tool.svg';

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
    },
    body: (
      <p style={paragraphStyles}>
        begins early pandemic circa 2020. Think rock bottom; reevaluating career
        choices, wife and newborn, pressure of the world on my shoulders. After
        discovering web design, I started learning HTML & CSS. Shortly after I
        discovered JavaScript.
      </p>
    ),
    iconProps: { src: AboutCardIcon01, alt: ICON_ALT_TEXT.CARD_ONE },
  },
  {
    cardStyles: {
      backgroundColor: 'rgba(189, 202, 206, 0.75)',
    },
    body: (
      <p style={paragraphStyles}>
        Over the next 12 months I taught myself how to code. I was constantly
        improving and expanded my knowledge until I felt ready to start
        applying. I was denied over 200 times, and after 4 interviews I was not
        selected. As a result, I accepted that landing my first job in tech
        would take extraordinary perseverance.
      </p>
    ),
    iconProps: { src: AboutCardIcon02, alt: ICON_ALT_TEXT.CARD_TWO },
  },
  {
    cardStyles: {
      backgroundColor: 'rgba(110, 173, 192, 0.75)',
    },
    body: (
      <p style={paragraphStyles}>
        Fast forward late 2021, I'm driving a delivery truck feeling
        discouraged, exhausted and ready to put a pause on my dream when I
        received a phone call that changed my life. I was offered a Jr Software
        Engineer position with a local startup.
      </p>
    ),
    iconProps: { src: AboutCardIcon03, alt: ICON_ALT_TEXT.CARD_THREE },
  },
  {
    cardStyles: {
      backgroundColor: 'var(--color-dark)',
    },
    body: <SkillsCard />,
    iconProps: { src: ToolIcon, alt: ICON_ALT_TEXT.CARD_SKILLS },
  },
];
