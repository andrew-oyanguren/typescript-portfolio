import { NavLink } from 'react-router-dom';

import { NAV_CONFIG } from 'src/constants';

import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      {NAV_CONFIG.map((obj) => (
        <NavLink key={obj.path} to={obj.path}>
          {({ isActive }) => (
            <div className={styles.Icon}>
              {isActive ? <span className={styles.selected}></span> : null}
              <img
                className={isActive ? styles.active : styles.inactive}
                src={obj.asset}
                alt={obj.altText}
              />
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
