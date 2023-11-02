import { useRouteError } from 'react-router-dom';

import { renderErrorMessage } from 'src/utils/utils';
import { PageTitle, ResponsiveWrapper } from 'src/components';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <ResponsiveWrapper>
      <PageTitle text='Oops, something went wrong!' />

      <p>{renderErrorMessage(error)}</p>
    </ResponsiveWrapper>
  );
}
