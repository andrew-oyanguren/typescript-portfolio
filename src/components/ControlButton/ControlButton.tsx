import styles from './ControlButton.module.css';

import { getIconVariant, ControlType } from './helpers';

type ControlButtonProps = {
  onClick: () => void;
  controlType: ControlType;
  altText: string;
  isDisabled: boolean;
};

export default function ControlButton({
  onClick = () => {},
  controlType = 'Next',
  altText = 'control button',
  isDisabled = false,
}: ControlButtonProps) {
  return (
    <button
      className={styles.ControlButton}
      onClick={onClick}
      disabled={isDisabled}
    >
      <img src={getIconVariant(controlType)} alt={altText} />
    </button>
  );
}
