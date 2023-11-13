import { PageTitle } from 'src/components';

import PortfolioMobile from 'src/assets/images/portfolio-mobile.png';
import PortfolioDesktop from 'src/assets/images/portfolio-desktop.png';

const EXP_SECTIONS_CONFIG = [
  {
    title: 'Web Developer',
    description:
      'While I was studying, and improving my skills, I started offering my services to family and friends designing and building websites',
    body: (
      <>
        <img src={PortfolioDesktop} alt='Portfolio Desktop View' />
        <p>
          During this period, I created three portfolio websites, a card game
          for my toddler, a single page application for an English tutor, and a
          website for a fire prevention company as well as multiple other
          personal projects.
        </p>
        <img src={PortfolioMobile} alt='Portfolio Mobile View' />
      </>
    ),
  },
  {
    title: 'Jr. Software Engineer',
    description: "Worked on Reperio's two internal apps: Novo and Pulse.",
    body: (
      <>
        <p>card placeholder</p>
        <p>image placeholder</p>
        <p>card placeholder</p>
        <p>
          Led refactor updating Pulse from its primitive state into an updated
          React Native application
        </p>
        <p>card placeholder</p>
      </>
    ),
  },
  {
    title: 'Software Engineer',
    description: "Held ownership of Reperio's admin site.",
    body: (
      <>
        <p>Description Section</p>
        <p>Responsibility Card</p>
        <p>Achievements Section</p>
      </>
    ),
  },
];

const PageSection = () => {
  return (
    <>
      {EXP_SECTIONS_CONFIG.map(({ title, description, body }) => (
        <section key={title}>
          <PageTitle text={title} />
          <p>{description}</p>
          <div className='body'>{body}</div>
        </section>
      ))}
    </>
  );
};

export default function ExperiencePage() {
  return <PageSection />;
}
