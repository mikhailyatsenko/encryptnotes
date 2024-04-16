import { type FormEvent } from 'react';
import cls from './NoteForm.module.scss';

interface NoteFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const NoteForm = ({ onSubmit }: NoteFormProps) => {
  return (
    <>
      <form className={cls.NoteForm} onSubmit={onSubmit}>
        <textarea id="note" name="note" rows={7} required></textarea>
        <button>Encrypt note</button>
      </form>
    </>
  );
};
