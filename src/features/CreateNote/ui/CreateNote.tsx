import { type AxiosResponse } from 'axios';
import { ResultCard } from 'entities/CipherCard';
import { NoteForm } from 'entities/NoteForm';
import { type FormEvent, useState } from 'react';
import { instance } from 'shared/api';
import Spinner from 'shared/ui/Spinner/Spinner';

interface BackendResponse {
  cipher: string;
}

interface NotePostData {
  note: string;
}

export const CreateNote = () => {
  const [cipher, setCipher] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const createCipher = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textarea = e.target as HTMLFormElement;
    const note: string = textarea.note.value;

    setIsloading(true);

    instance
      .post<NotePostData, AxiosResponse<BackendResponse>>('/create', { note })
      .then((response) => {
        setIsloading(false);
        setCipher(response.data.cipher);
      })
      .catch((error) => {
        console.error('Request error:', error);
      });
  };

  return (
    <section id="create">
      <div className="container">
        {cipher ? (
          <>
            <ResultCard value={cipher} />
            <button
              onClick={() => {
                setCipher('');
              }}
            >
              Encript another note
            </button>
          </>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <NoteForm onSubmit={createCipher} />
        )}
      </div>
    </section>
  );
};
