import { createContext } from 'react';

const UserContext = createContext({
  userSession: 0,
  initUserSession: () => {},
});

export default UserContext;
