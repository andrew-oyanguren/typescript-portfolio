import PortfolioMobile from 'src/assets/images/portfolio-mobile.png';
import PortfolioDesktop from 'src/assets/images/portfolio-desktop.png';

export default function WebDevBody() {
  return (
    <div
      style={{ backgroundColor: 'var(--color-dark-gray)', padding: '40px 0' }}
    >
      <img src={PortfolioDesktop} alt='Portfolio Desktop View' />
      <p style={{ padding: '40px 0px' }}>
        During this period, I created three portfolio websites, a card game for
        my toddler, a single page application for an English tutor, and a
        website for a fire prevention company as well as multiple other personal
        projects.
      </p>
      <img src={PortfolioMobile} alt='Portfolio Mobile View' />
    </div>
  );
}
