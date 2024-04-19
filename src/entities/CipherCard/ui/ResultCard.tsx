import { useState } from 'react';
import cls from './ResultCard.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ToastMessage from 'shared/ui/ToastMessage/ToastMessage';
import { useScramble } from 'use-scramble';

interface CipherCardProps {
  isError?: boolean;
  heading?: string;
  value: string;
  textButton?: string;
  onButtonClick: () => void;
}

export const ResultCard = ({ value, isError, heading, textButton, onButtonClick }: CipherCardProps) => {
  const [toastMessage, setToastMessage] = useState('');
  const { ref } = useScramble({
    text: value,
    // range: [65, 125],
    speed: 1,
    tick: 1,
    step: 5,
    scramble: 5,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: false,
  });

  return (
    <div className={cls.ResultCard}>
      <h2>{heading}</h2>
      <div className={cls.resultGroup}>
        <div className={`${cls.resultText} ${isError ? cls.error : ''}`}>
          <div className={cls.visibleAnimatedText} ref={ref}></div>
          <p className={cls.invisibleStaticText}>{value}</p>
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
