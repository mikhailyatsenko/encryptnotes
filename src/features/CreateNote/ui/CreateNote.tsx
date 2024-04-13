import { type AxiosResponse } from 'axios';
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
    console.log(textarea.note);
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
    <section id="create" className="bg-color-main height85 d-flex align-items-center">
      <div className="container">
        <form onSubmit={createCipher}>
          <textarea id="note" name="note" rows={7}></textarea>
          <button>send</button>
        </form>

        {cipher}
      </div>
    </section>
  );
};
