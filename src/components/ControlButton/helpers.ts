import NextIcon from 'src/assets/svgs/chevron-right.svg';
import BackIcon from 'src/assets/svgs/chevron-left.svg';

export type ControlType = 'Next' | 'Back';

const getIconVariant = (controlType: ControlType) => {
  switch (controlType) {
    case 'Back':
      return BackIcon;
    default:
      return NextIcon;
  }
};

export { getIconVariant };
