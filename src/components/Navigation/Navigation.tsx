import { NavLink } from 'react-router-dom';

import { ROUTES_CONFIG } from 'src/constants';

import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.Navigation}>
      <nav>
        {ROUTES_CONFIG.map((obj) => (
          <NavLink key={obj.path} to={obj.path}>
            {obj.asset}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
