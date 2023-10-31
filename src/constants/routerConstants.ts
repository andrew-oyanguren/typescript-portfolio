import AboutIcon from 'src/assets/svgs/about.svg';
import ContactIcon from 'src/assets/svgs/contact.svg';
import ExperienceIcon from 'src/assets/svgs/experience.svg';
import HomeIcon from 'src/assets/svgs/home.svg';

const PATH_NAMES = Object.freeze({
  ABOUT: 'about',
  CONTACT: 'contact',
  EXPERIENCE: 'experience',
  ROOT: '/',
});

const NAV_CONFIG = [
  {
    path: PATH_NAMES.ROOT,
    asset: HomeIcon,
    altText: 'Home Icon',
  },
  {
    path: PATH_NAMES.ABOUT,
    asset: AboutIcon,
    altText: 'About Icon',
  },
  {
    path: PATH_NAMES.EXPERIENCE,
    asset: ExperienceIcon,
    altText: 'Experience Icon',
  },
  {
    path: PATH_NAMES.CONTACT,
    asset: ContactIcon,
    altText: 'Contact Icon',
  },
];

export { PATH_NAMES, NAV_CONFIG };
