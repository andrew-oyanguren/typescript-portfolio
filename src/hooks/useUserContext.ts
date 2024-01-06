import { useContext } from 'react';
import UserContext from 'src/context/userContext';

const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('userContext must be used inside a UserContextProvider');
  }

  return userContext;
};

export default useUserContext;
