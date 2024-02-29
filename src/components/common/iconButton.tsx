import { ReactNode } from 'react';

import { iconButton, iconButtonIcon } from './iconButton.css';

type IconButton = {
  icon: ReactNode;
  clickHandler: () => void;
};

export const IconButton = ({ icon, clickHandler }: IconButton) => (
  <button type="button" className={iconButton} onClick={() => clickHandler()}>
    <div className={iconButtonIcon}>{icon}</div>
  </button>
);
