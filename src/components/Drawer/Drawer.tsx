import { useState } from 'react';

import Hamburger from './Hamburger/Hamburger';
import SkillsList from './SkillsList/SkillsList';

import ToolIcon from 'src/assets/svgs/tool.svg';
import styles from './Drawer.module.css';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const DrawerStyles = `${styles.Drawer} ${isOpen ? styles.open : ''}`;

  return (
    <div className={DrawerStyles}>
      <img src={ToolIcon} className={styles.Icon} />

      <div className={styles.HamburgerContainer}>
        {!isOpen ? <p>Toolbox</p> : null}
        <Hamburger onToggleDrawer={onToggleDrawer} isActive={isOpen} />
      </div>

      <SkillsList />
    </div>
  );
}
