import { useRouteError } from 'react-router-dom';

import { renderErrorMessage } from '../../utils/utils';
import { PageWrapper } from '../../components';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <PageWrapper>
      <div className={styles.ErrorTitle}>
        <h1>Oops!</h1>
      </div>

      <p>{renderErrorMessage(error)}</p>
    </PageWrapper>
  );
}
