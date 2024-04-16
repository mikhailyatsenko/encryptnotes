import cls from './ResultCard.module.scss';

interface CipherCardProps {
  isError?: boolean;
  heading?: string;
  value: string;
  textButton?: string;
  onButtonClick: () => void;
}

export const ResultCard = ({ value, isError, heading, textButton, onButtonClick }: CipherCardProps) => {
  return (
    <div className={cls.ResultCard}>
      <h2>{heading}</h2>
      <div className={`${cls.resultText} ${isError ? cls.error : ''}`}>{value}</div>
      <button onClick={onButtonClick}>{textButton}</button>
    </div>
  );
};
