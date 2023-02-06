import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { useAtom } from 'jotai';
import { useToast } from '../stores/jotai/toast/atom';

export const Toast = () => {
  const [toast] = useAtom(useToast);

  if (toast.status === 'hidden') {
    return <div className="hidden" />;
  }

  return (
    <div className="toast">
      <div className={`alert alert-${toast.status}`}>
        <div className="px-2">
          <ExclamationCircleIcon className="w-6 h-6 mr-1" />
          <span>{toast.message}</span>
        </div>
      </div>
    </div>
  );
};
