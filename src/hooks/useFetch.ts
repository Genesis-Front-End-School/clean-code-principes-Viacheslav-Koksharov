import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ICourseItem } from 'interfaces/CoursesItem.interface';
import { IFetchOptions } from 'interfaces/FetchOptions.interface';

const useFetch = (url: string, token: string | null = null) => {
  const [response, setResponse] = useState<ICourseItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const duration = 5_000;

  useEffect(() => {
    let URL = url;

    if (id) {
      URL += `/${id}`;
    }

    const options: IFetchOptions = {
      signal: AbortSignal.timeout(duration),
    };

    if (token) {
      options.headers = {};
      options.headers.Authorization = `Bearer ${token}`;
    }

    axios
      .get(URL, options)
      .then(response => setResponse(response.data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [url, token, id]);

  return { response, isLoading, error };
};

export default useFetch;
