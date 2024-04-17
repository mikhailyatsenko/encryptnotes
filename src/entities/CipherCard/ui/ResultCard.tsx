import { useState } from 'react';
import cls from './ResultCard.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ToastMessage from 'shared/ui/ToastMessage/ToastMessage';

interface CipherCardProps {
  isError?: boolean;
  heading?: string;
  value: string;
  textButton?: string;
  onButtonClick: () => void;
}

export const ResultCard = ({ value, isError, heading, textButton, onButtonClick }: CipherCardProps) => {
  const [toastMessage, setToastMessage] = useState('');
  return (
    <div className={cls.ResultCard}>
      <h2>{heading}</h2>
      <div className={cls.resultGroup}>
        <div className={`${cls.resultText} ${isError ? cls.error : ''}`}>
          <p>{value}</p>
        </div>

        {isError ? (
          ''
        ) : (
          <CopyToClipboard
            text={value}
            onCopy={() => {
              setToastMessage('Copied');
            }}
          >
            <div className={cls.copy}>Copy to clipboard</div>
          </CopyToClipboard>
        )}
      </div>

      <button onClick={onButtonClick}>{textButton}</button>
      <ToastMessage
        message={toastMessage}
        doAfterHide={() => {
          setToastMessage('');
        }}
      />
    </div>
  );
};
