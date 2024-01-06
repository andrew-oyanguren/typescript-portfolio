import { useState, ReactNode } from 'react';
import UserContext from 'src/context/userContext';

type UserContextProps = {
  children: ReactNode;
};

export default function UserContextProvider({ children }: UserContextProps) {
  const [userSession, setUserSession] = useState(0);

  const initUserSession = () => {
    setUserSession(1);
  };

  return (
    <UserContext.Provider value={{ userSession, initUserSession }}>
      {children}
    </UserContext.Provider>
  );
}
