import cls from './CipherCard.module.scss';

interface CipherCardProps {
  isError?: boolean;
  value: string;
}

export const ResultCard = ({ value }: CipherCardProps) => {
  return <div className={cls.CipherCard}>{value}</div>;
};
