/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { DevicePhoneMobileIcon, XMarkIcon } from '@heroicons/react/24/solid';

import {
  buttonAreaContainer,
  container,
  hiddenContaier,
  modal,
  modalTitle,
  overlay,
  closeButtonContainer,
} from './modal.css';
import { IconButton } from '../common/iconButton';
import { TextAndIconButton } from '../common/textAndIconButton';

import {
  useEditorContentValue,
  useEditorModalIsOpen,
} from '@/stores/jotai/editor/atom';

export const Modal = () => {
  const { isOpen, setIsOpen } = useEditorModalIsOpen();
  const { setIosContent, setAndroidContent } = useEditorContentValue();

  if (!isOpen) return <div className={hiddenContaier} />;

  return (
    <div className={container}>
      <div className={modal}>
        <div className={modalTitle}>Apply Template</div>
        <div className={buttonAreaContainer}>
          <TextAndIconButton
            label="iOS"
            icon={<DevicePhoneMobileIcon />}
            clickHandler={() => {
              setIosContent();
              setIsOpen(false);
            }}
          />
          <TextAndIconButton
            label="Android"
            icon={<DevicePhoneMobileIcon />}
            clickHandler={() => {
              setAndroidContent();
              setIsOpen(false);
            }}
          />
        </div>
        <div className={closeButtonContainer}>
          <IconButton
            icon={<XMarkIcon />}
            clickHandler={() => setIsOpen(false)}
          />
        </div>
      </div>
      <div className={overlay} onClick={() => setIsOpen(false)} />
    </div>
  );
};
