import { ReactNode } from 'react';

import styles from './SkillsList.module.css';

const SKILLS_LIST = [
  ['JavaScript', 'HTML', 'CSS'],
  ['React', 'React-Native', 'TypeScript'],
  ['Redux', 'Testing', 'REST API', 'Git/GitHub', 'Figma'],
];

const renderListItems: (listConfig: string[][]) => ReactNode = (listConfig) => {
  return listConfig.map((arr: string[]) => {
    return (
      <div
        key={Math.random() * arr.length}
        className={styles.listItemContainer}
      >
        {arr.map((string) => (
          <li key={string} className={styles.listItem}>
            {string}
          </li>
        ))}
        <div className={styles.listBreak} />
      </div>
    );
  });
};

export default function SkillsList() {
  return <ul className={styles.SkillsList}>{renderListItems(SKILLS_LIST)}</ul>;
}
