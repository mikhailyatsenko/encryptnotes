import { type AxiosResponse } from 'axios';
import { ResultCard } from 'entities/CipherCard';
import { CipherForm } from 'entities/CipherForm';
import { useState } from 'react';

import { type FormEvent } from 'react';
import { instance } from 'shared/api';
import Spinner from 'shared/ui/Spinner/Spinner';

interface BackendResponse {
  result: string;
  note: string;
}

interface CipherPostData {
  cipher: string;
}

export const DecodeNote = () => {
  const [noteText, setNoteText] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [resultHeading, setResultHeading] = useState('');
  const [isError, setIsError] = useState(false);

  const getDecodedNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.target as HTMLFormElement;
    const cipher: string = input.cipher.value;

    setIsloading(true);

    instance
      .post<CipherPostData, AxiosResponse<BackendResponse>>('/getnote', { cipher })
      .then((response) => {
        if (response.data.result === 'ok') {
          setIsloading(false);
          setResultHeading('Deciphered. Your note:');
          setNoteText('«' + response.data.note + '»');
        } else if (response.data.result === '404') {
          setIsloading(false);
          setResultHeading('Please check your cipher');
          setNoteText(response.data.note);
        } else {
          setIsloading(false);
          setIsError(true);
          setResultHeading('Something wrong :(');
          setNoteText('Server error. Try later.');
          console.error('Request error:', response.data.note);
        }
      })
      .catch((error) => {
        setIsloading(false);
        setIsError(true);
        setResultHeading('Something wrong :(');
        setNoteText('Server error. Try later.');
        console.error('Request error:', error);
      });
  };

  return (
    <section id="decode">
      <div className="container">
        {noteText ? (
          <>
            <ResultCard
              isError={isError}
              heading={resultHeading}
              value={noteText}
              textButton={'Decode another note'}
              onButtonClick={() => {
                setResultHeading('');
                setNoteText('');
                setIsError(false);
              }}
            />
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
