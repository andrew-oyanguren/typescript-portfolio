import { ReactNode } from 'react';

import styles from './SkillsList.module.css';

const SKILLS_LIST = [
  ['JavaScript', 'HTML', 'CSS'],
  ['React', 'React-Native', 'TypeScript'],
  ['Redux', 'Unit Tests', 'REST API', 'Git/GitHub', 'Figma'],
];

const renderListItems: (listConfig: string[][]) => ReactNode = (listConfig) => {
  const listItem = listConfig.map((arr: string[]) => {
    // TODO create line break
    return arr.map((string) => (
      <li key={string} className={styles.listItem}>
        {string}
      </li>
    ));
  });
  console.log('listItem: ', listItem);
  return listItem;
};

export default function SkillsList() {
  return <ul className={styles.SkillsList}>{renderListItems(SKILLS_LIST)}</ul>;
}
