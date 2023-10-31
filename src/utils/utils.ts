import { isRouteErrorResponse } from 'react-router-dom';

type RenderErrorMessageType = {
  data: string;
  error: {
    message: string;
    stack: string;
  };
  internal: string;
  status: number;
  statusText: string;
};

export const renderErrorMessage = (error: RenderErrorMessageType | unknown) => {
  if (isRouteErrorResponse(error)) {
    console.log(error);
    return error.statusText;
  } else {
    return 'something went wrong!';
  }
};
