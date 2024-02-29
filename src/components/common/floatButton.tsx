import { container, floatButton } from './floatButton.css';

type FloatButtonProps = {
  label: string;
  clickandler: () => void;
};

export const FloatButton = ({ label, clickandler }: FloatButtonProps) => (
  <div className={container}>
    <button type="button" className={floatButton} onClick={() => clickandler()}>
      {label}
    </button>
  </div>
);
