import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { useAtom } from 'jotai';
import { useToast } from '../stores/jotai/toast/atom';

const alertLevel: Record<'info' | 'error' | 'success' | 'hidden', string> = {
  info: 'alert-info',
  error: 'alert-error',
  success: 'alert-success',
  hidden: '',
};

export const Toast = () => {
  const [toast] = useAtom(useToast);

  if (toast.status === 'hidden') {
    return <div className="hidden" />;
  }

  return (
    <div className="toast">
      <div className={`alert ${alertLevel[toast.status]}`}>
        <div className="flex gap-x-1 px-2">
          {toast.status === 'error' && (
            <ExclamationCircleIcon className="mr-1 h-6 w-6" />
          )}
          <span>{toast.message}</span>
        </div>
      </div>
    </div>
  );
};
