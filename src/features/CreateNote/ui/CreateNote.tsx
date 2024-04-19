import { type AxiosResponse } from 'axios';
import { ResultCard } from 'entities/CipherCard';
import { NoteForm } from 'entities/NoteForm';
import { type FormEvent, useState } from 'react';
import { instance } from 'shared/api';
import Spinner from 'shared/ui/Spinner/Spinner';

interface BackendResponse {
  result: string;
  cipher: string;
}

interface NotePostData {
  note: string;
}

export const CreateNote = () => {
  const [cipher, setCipher] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [resultHeading, setResultHeading] = useState('');

  const createCipher = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textarea = e.target as HTMLFormElement;
    const note: string = textarea.note.value;

    setIsloading(true);

    instance
      .post<NotePostData, AxiosResponse<BackendResponse>>('/create', { note })
      .then((response) => {
        if (response.data.result === 'ok') {
          setIsloading(false);
          setResultHeading('The note is encrypted. Save your decryption key:');
          setCipher(response.data.cipher);
        } else {
          setIsloading(false);
          setIsError(true);
          setResultHeading('Something wrong :(');
          setCipher('Server error. Try later.');
          console.error('Request error:', response.data.cipher);
        }
      })
      .catch((error) => {
        setIsloading(false);
        setIsError(true);
        setResultHeading('Something wrong :(');
        setCipher('Server error. Try later');
        console.error('Request error:', error);
      });
  };

  return cipher ? (
    <>
      <ResultCard
        heading={resultHeading}
        isError={isError}
        value={cipher}
        textButton={'Encrypt another note'}
        onButtonClick={() => {
          setCipher('');
          setResultHeading('');
          setIsError(false);
        }}
      />
    </>
  ) : isLoading ? (
    <Spinner />
  ) : (
    <NoteForm onSubmit={createCipher} />
  );
};
