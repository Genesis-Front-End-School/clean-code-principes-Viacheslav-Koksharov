import Router from 'react-router-dom';
import { act, renderHook } from '@testing-library/react';
import axios from 'axios';
import useFetch from 'hooks/useFetch';

// @ts-ignore
global.AbortSignal.timeout = jest.fn(() => ({
  signal: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedUrl = 'https://api.wisey.app/api/v1';

describe('useFetch custom hook', () => {
  it('should add id parameter to the url', async () => {
    const mockedOptions = {
      signal: AbortSignal.timeout(5000),
    };
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1234' });
    mockedAxios.get.mockResolvedValue({ data: {} });
    const { result } = renderHook(() => useFetch(`${mockedUrl}`));
    await act(async () => result);
    expect(axios.get).toHaveBeenCalledWith(`${mockedUrl}/1234`, mockedOptions);
  });

  it('should add options object to the request', async () => {
    const mockedOptions = {
      signal: AbortSignal.timeout(5000),
      headers: {
        Authorization: 'Bearer 123',
      },
    };
    jest.spyOn(Router, 'useParams').mockReturnValue({});
    mockedAxios.get.mockResolvedValue({ data: {} });
    const { result } = renderHook(() => useFetch(`${mockedUrl}`, '123'));
    await act(async () => result);
    expect(axios.get).toHaveBeenCalledWith(`${mockedUrl}`, mockedOptions);
  });

  it('should return valid response', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({});
    mockedAxios.get.mockResolvedValue({ data: {} });
    const mockedData = {
      response: {},
      isLoading: false,
      error: null,
    };
    const { result } = renderHook(() => useFetch(mockedUrl));
    await act(async () => result);
    expect(result.current).toStrictEqual(mockedData);
  });

  it('should return error', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({});
    mockedAxios.get.mockRejectedValue({ message: 'error message' });
    const mockedData = {
      response: null,
      isLoading: false,
      error: 'error message',
    };
    const { result } = renderHook(() => useFetch(mockedUrl));
    await act(async () => result);
    expect(result.current).toStrictEqual(mockedData);
  });
});
