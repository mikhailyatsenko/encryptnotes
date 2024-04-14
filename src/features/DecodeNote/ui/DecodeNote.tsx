import { type AxiosResponse } from 'axios';
import { ResultCard } from 'entities/CipherCard';
import { CipherForm } from 'entities/CipherForm';
import { useState } from 'react';

import { type FormEvent } from 'react';
import { instance } from 'shared/api';

interface BackendResponse {
  note: string;
}

interface CipherPostData {
  cipher: string;
}

export const DecodeNote = () => {
  const [noteText, setNoteText] = useState('');

  const getDecodedNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.target as HTMLFormElement;
    const cipher: string = input.cipher.value;
    console.log(cipher);

    instance
      .post<CipherPostData, AxiosResponse<BackendResponse>>('/getnote', { cipher })
      .then((response) => {
        setNoteText(response.data.note);
      })
      .catch((error) => {
        console.error('Request error:', error);
      });
  };
  console.log(noteText);
  return (
    <section id="decode">
      <div className="container">
        <CipherForm onSubmit={getDecodedNote} />
        <ResultCard value={noteText} />
      </div>
    </section>
  );
};
