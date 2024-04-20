import { type FormEvent } from 'react';
import cls from './CipherForm.module.scss';

interface NoteFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const CipherForm = ({ onSubmit }: NoteFormProps) => {
  return (
    <form className={cls.CipherForm} onSubmit={onSubmit}>
      <input id="cipher" name="cipjer" autoComplete="off" required />
      <button>Decode</button>
    </form>
  );
};
