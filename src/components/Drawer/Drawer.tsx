import { useState } from 'react';

import Hamburger from './Hamburger/Hamburger';
import SkillsList from './SkillsList/SkillsList';

import styles from './Drawer.module.css';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`${styles.Drawer} ${isOpen ? styles.open : ''}`}>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '30%',
          right: '100%',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: 36 }}>Toolbox</p>
        <Hamburger onToggleDrawer={onToggleDrawer} isActive={isOpen} />
      </div>
      <SkillsList />
    </div>
  );
}
