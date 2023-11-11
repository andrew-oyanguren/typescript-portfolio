import styles from './SkillsCard.module.css';

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
  return (
    <ul className={styles.SkillsContainer}>
      {SKILLS_CONFIG.map((skill) => (
        <div className={styles.itemWrapper} key={skill}>
          <li
            style={{ width: `${Math.floor(Math.random() * (90 - 60) + 60)}%` }}
          >
            {skill}
          </li>
        </div>
      ))}
    </ul>
  );
}
