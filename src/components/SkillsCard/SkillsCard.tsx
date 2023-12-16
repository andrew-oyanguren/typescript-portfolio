import styles from './SkillsCard.module.css';
import { useInView } from 'react-intersection-observer';

const SKILLS_CONFIG = [
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'React-Native',
  'TypeScript',
  'Redux',
  'Unit Tests',
  'REST API',
  'Git/GitHub',
  'Figma',
];

export default function SkillsCard() {
  const { inView, ref } = useInView({ threshold: 0 });

  console.log('inView: ', inView);

  return (
    <ul ref={ref} className={styles.SkillsContainer}>
      {SKILLS_CONFIG.map((skill) => (
        <div
          className={`${styles.itemWrapper} ${inView ? styles.animate : ''}`}
          key={skill}
        >
          <li>
            <p>{skill}</p>
          </li>
        </div>
      ))}
    </ul>
  );
}
