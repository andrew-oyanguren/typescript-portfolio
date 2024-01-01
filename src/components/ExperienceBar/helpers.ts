import {
  BALL_POSITION,
  BallPositionType,
} from 'src/constants/experienceBarConstants';

const getBallVariant = (circlePosition: BallPositionType) => {
  switch (circlePosition) {
    case BALL_POSITION.TOP:
      return 'var(--color-primary)';
    case BALL_POSITION.MIDDLE:
      return 'var(--color-secondary)';
    case BALL_POSITION.BOTTOM:
      return 'var(--color-dark)';
    default:
      return '';
  }
};

export { getBallVariant };
