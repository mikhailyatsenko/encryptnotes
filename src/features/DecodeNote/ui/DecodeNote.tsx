import { type AxiosResponse } from 'axios';
import { ResultCard } from 'entities/CipherCard';
import { CipherForm } from 'entities/CipherForm';
import { useState } from 'react';

import { type FormEvent } from 'react';
import { instance } from 'shared/api';
import Spinner from 'shared/ui/Spinner/Spinner';

interface BackendResponse {
  note: string;
}

interface CipherPostData {
  cipher: string;
}

export const DecodeNote = () => {
  const [noteText, setNoteText] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const getDecodedNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.target as HTMLFormElement;
    const cipher: string = input.cipher.value;

    setIsloading(true);

    instance
      .post<CipherPostData, AxiosResponse<BackendResponse>>('/getnote', { cipher })
      .then((response) => {
        setIsloading(false);
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
        {noteText ? (
          <>
            <ResultCard value={noteText} />
            <button
              onClick={() => {
                setNoteText('');
              }}
            >
              Decode another note
            </button>
          </>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <CipherForm onSubmit={getDecodedNote} />
        )}
      </div>
    </section>
  );
};
