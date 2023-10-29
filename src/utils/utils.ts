import { isRouteErrorResponse } from 'react-router-dom';

export const renderErrorMessage = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    console.log(error);
    return error.statusText;
  } else {
    return 'something went wrong!';
  }
};
