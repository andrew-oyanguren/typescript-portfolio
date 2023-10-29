import { NavLink } from 'react-router-dom';

import { ROUTES_CONFIG } from '../../constants';

export default function Navigation() {
  return (
    <div className='Navigation'>
      <nav>
        {ROUTES_CONFIG.map((obj) => (
          <NavLink to={obj.path}>{obj.asset}</NavLink>
        ))}
      </nav>
    </div>
  );
}
