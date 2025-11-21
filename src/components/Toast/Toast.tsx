import { ReactNode } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose?: () => void;
  children?: ReactNode;
}

export const Toast = ({ message, type = 'info', onClose, children }: ToastProps) => {
  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        {children || <span className="toast-message">{message}</span>}
      </div>
      {onClose && (
        <button className="toast-close" onClick={onClose} aria-label="Close">
          ×
        </button>
      )}
    </div>
  );
};

