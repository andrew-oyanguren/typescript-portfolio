import { PageTitle } from 'src/components';

import { getExperienceUIVariant } from 'src/components/ExperienceUI/helpers';
import { EXPERIENCE_UI_VARIANTS } from 'src/components/ExperienceUI/constants';

import styles from './ExperiencePage.module.css';

const EXP_SECTIONS_CONFIG = [
  {
    title: 'Web Developer',
    subTitle:
      'While I was studying, and improving my skills, I started offering my services to family and friends designing and building websites',
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.WEB_DEVELOPER),
  },
  {
    title: 'Jr. Software Engineer',
    subTitle: "Worked on Reperio's two internal apps: Novo and Pulse.",
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.JR_ENGINEER),
  },
  {
    title: 'Software Engineer',
    subTitle: "Held ownership of Reperio's admin site.",
    content: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.SOFTWARE_ENGINEER),
  },
];

const PageSection = () => {
  return (
    <>
      <PageTitle text='Experience' />
      {EXP_SECTIONS_CONFIG.map(({ title, subTitle, content }) => (
        <section className={styles.ExperiencePageSection} key={title}>
          <PageTitle secondaryTitle={true} text={title} />

          <p className={styles.subTitle}>{subTitle}</p>

          <div className={styles.content}>{content}</div>
        </section>
      ))}
    </>
  );
};

export default function ExperiencePage() {
  return <PageSection />;
}
