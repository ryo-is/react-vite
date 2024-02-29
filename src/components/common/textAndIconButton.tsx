import { ReactNode } from 'react';

import {
  textAndIconButton,
  textAndIconButtonIcon,
} from './textAndIconButton.css';

type TextAndIconButtonProps = {
  label: string;
  icon: ReactNode;
  clickHandler: () => void;
};

export const TextAndIconButton = ({
  label,
  icon,
  clickHandler,
}: TextAndIconButtonProps) => (
  <button
    type="button"
    className={textAndIconButton}
    onClick={() => clickHandler()}
  >
    <div className={textAndIconButtonIcon}>{icon}</div>
    {label}
  </button>
);
