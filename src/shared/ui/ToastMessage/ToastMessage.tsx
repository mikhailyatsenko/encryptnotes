import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cls from './ToastMessage.module.scss';

interface ToastMessageProps {
  message?: string;
  doAfterHide?: () => void;
}

const ToastMessage = ({ message, doAfterHide }: ToastMessageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        if (doAfterHide) doAfterHide();
      }, 2800);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [doAfterHide, message]);

  return createPortal(
    <div className={`${cls.ToastMessage} ${isVisible ? cls.show : ''}`}>
      <div className="toast-content">{message}</div>
    </div>,
    document.body,
  );
};

export default ToastMessage;
