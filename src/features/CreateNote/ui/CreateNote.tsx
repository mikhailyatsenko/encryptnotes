import { type AxiosResponse } from 'axios';
import { ResultCard } from 'entities/CipherCard';
import { NoteForm } from 'entities/NoteForm';
import { type FormEvent, useState } from 'react';
import { instance } from 'shared/api';

interface BackendResponse {
  cipher: string;
}

interface NotePostData {
  note: string;
}

export const CreateNote = () => {
  const [cipher, setCipher] = useState('');

  const createCipher = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textarea = e.target as HTMLFormElement;
    const note: string = textarea.note.value;

    instance
      .post<NotePostData, AxiosResponse<BackendResponse>>('/create', { note })
      .then((response) => {
        setCipher(response.data.cipher);
      })
      .catch((error) => {
        console.error('Request error:', error);
      });
  };

  return (
    <section id="create">
      <div className="container">
        <NoteForm onSubmit={createCipher} />
        <ResultCard value={cipher} />
      </div>
    </section>
  );
};
