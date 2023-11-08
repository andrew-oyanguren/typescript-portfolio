import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

const LOADER_BALLS = [1, 2, 3, 4];

export default function Loader() {
  const [activeBall, setActiveBall] = useState(LOADER_BALLS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBall((prevBall) => {
        const currentActiveBallIndex = LOADER_BALLS.indexOf(prevBall);
        const nextActiveBallIndex =
          currentActiveBallIndex + 1 === LOADER_BALLS.length
            ? 0
            : currentActiveBallIndex + 1;
        return LOADER_BALLS[nextActiveBallIndex];
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.Loader}>
      <div className={styles.container}>
        {LOADER_BALLS.map((obj) => {
          const ballStyles = `${styles.ball} ${
            obj === activeBall ? styles.bounce : styles.pulse
          }`;

          return <span key={obj} className={ballStyles} />;
        })}
      </div>
    </div>
  );
}
