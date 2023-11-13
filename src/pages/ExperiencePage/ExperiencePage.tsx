import { PageTitle } from 'src/components';

import { getExperienceUIVariant } from 'src/components/ExperienceUI/helpers';
import { EXPERIENCE_UI_VARIANTS } from 'src/components/ExperienceUI/constants';

const EXP_SECTIONS_CONFIG = [
  {
    title: 'Web Developer',
    description:
      'While I was studying, and improving my skills, I started offering my services to family and friends designing and building websites',
    body: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.WEB_DEVELOPER),
  },
  {
    title: 'Jr. Software Engineer',
    description: "Worked on Reperio's two internal apps: Novo and Pulse.",
    body: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.JR_ENGINEER),
  },
  {
    title: 'Software Engineer',
    description: "Held ownership of Reperio's admin site.",
    body: getExperienceUIVariant(EXPERIENCE_UI_VARIANTS.SOFTWARE_ENGINEER),
  },
];

const PageSection = () => {
  return (
    <>
      {EXP_SECTIONS_CONFIG.map(({ title, description, body }) => (
        <section style={{ marginTop: 40 }} key={title}>
          <PageTitle text={title} />
          <p style={{ backgroundColor: 'tan', padding: 10 }}>{description}</p>

          <div style={{ marginTop: 40, backgroundColor: 'pink' }}>{body}</div>
        </section>
      ))}
    </>
  );
};

export default function ExperiencePage() {
  return <PageSection />;
}
