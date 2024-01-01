import useWindowDim from 'src/hooks/useWindowDim';
import { BALL_POSITION, DEVICE_WIDTHS } from 'src/constants';
import { getBallVariant } from './helpers';

import styles from './ExperienceBar.module.css';

export default function ExperienceBar({ circlePosition = BALL_POSITION.TOP }) {
  const { windowDim } = useWindowDim();
  const isLargeDevice = windowDim.width >= DEVICE_WIDTHS.LARGE;

  return (
    <div className={styles.ExperienceBar}>
      <div
        style={{
          gridArea: circlePosition,
          backgroundColor: isLargeDevice
            ? getBallVariant(circlePosition)
            : 'var(--color-secondary)',
        }}
        className={styles.Circle}
      />
      <div className={styles.Line} />
      <div className={styles.Line} />
    </div>
  );
}
