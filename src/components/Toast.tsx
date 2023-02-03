import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export const Toast = () => (
  <div className="toast">
    <div className="alert alert-error">
      <div className="px-2">
        <ExclamationCircleIcon className="w-6 h-6 mr-1" />
        <span>New message arrived.</span>
      </div>
    </div>
  </div>
);
