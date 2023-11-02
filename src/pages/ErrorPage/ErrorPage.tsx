import { useRouteError } from 'react-router-dom';

import { renderErrorMessage } from 'src/utils/utils';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className={styles.ErrorTitle}>
        <h1>Oops!</h1>
      </div>

      <p>{renderErrorMessage(error)}</p>
    </>
  );
}
