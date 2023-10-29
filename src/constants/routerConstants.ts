const PATH_NAMES = Object.freeze({
  ROOT: '/',
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  CONTACT: 'contact',
});

// TODO: add assets after icon library is installed
const ROUTES_CONFIG = [
  {
    path: PATH_NAMES.ROOT,
    asset: 'Home',
  },
  {
    path: PATH_NAMES.ABOUT,
    asset: 'About',
  },
  {
    path: PATH_NAMES.EXPERIENCE,
    asset: 'Experience',
  },
  {
    path: PATH_NAMES.CONTACT,
    asset: 'Contact',
  },
];

export { PATH_NAMES, ROUTES_CONFIG };
