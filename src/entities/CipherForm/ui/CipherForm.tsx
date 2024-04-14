import { type FormEvent } from 'react';
import cls from './CipherForm.module.scss';

interface NoteFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const CipherForm = ({ onSubmit }: NoteFormProps) => {
  return (
    <form className={cls.NoteForm} onSubmit={onSubmit}>
      <input id="cipher" name="cipjer" required />
      <button className="default-button">Decode</button>
    </form>
  );
};
