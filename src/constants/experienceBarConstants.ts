export const BALL_POSITION = Object.freeze({
  TOP: 'top',
  MIDDLE: 'middle',
  BOTTOM: 'bottom',
});

export type BallPositionType =
  (typeof BALL_POSITION)[keyof typeof BALL_POSITION];
