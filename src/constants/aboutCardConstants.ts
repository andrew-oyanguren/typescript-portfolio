import AboutCardIcon01 from 'src/assets/images/about-card-01.png';
import AboutCardIcon02 from 'src/assets/images/about-card-02.png';
import AboutCardIcon03 from 'src/assets/images/about-card-03.png';

const commonBoxShadow = 'var(--box-shadow-image)';

export const ABOUT_CARDS_CONFIG = [
  {
    cardStyles: {
      backgroundColor: 'var(--color-gray)',
      outline: '2px solid var(--color-dark)',
      boxShadow: commonBoxShadow,
    },
    body: 'begins during the pandemic circa 2020. Think rock bottom, reevaluating career choices, wife and newborn, pressure of the world on your shoulders. I found web design, and started looking at HTML & CSS. That is when I discovered JavaScript.',
    iconProps: { src: AboutCardIcon01, alt: 'About Icon One' },
  },
  {
    cardStyles: {
      outline: '2px solid var(--color-dark-gray)',
    },
    body: "While house sitting, I dedicated 10 hour days over 10 months learning how to code and building projects, and started applying for jobs immediately thereafter. It's accurate to state that I was denied over 200 times, received 4 interviews and was so close...",
    iconProps: { src: AboutCardIcon02, alt: 'About Icon Two' },
  },
  {
    cardStyles: {
      backgroundColor: 'var(--color-primary)',
      boxShadow: commonBoxShadow,
    },
    body: "Fast forward 2021, I'm driving a delivery truck discouraged, exhausted, and ready to put a pause on my dream when I received the phone call that changed my life. I was offered a position for a Jr Software Engineer with a local startup.",
    iconProps: { src: AboutCardIcon03, alt: 'About Icon Three' },
  },
];
