// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('lodash', () => {
  return {
    throttle: jest.fn((fn) => fn),
  };
});

describe('throttledGetDataFromApi', () => {
  let getSpy: jest.SpyInstance;

  beforeEach(() => {
    getSpy = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValueOnce({ data: { response: 'response' } });
  });

  test('should create instance with provided base url', async () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const spy = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi(baseURL);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ baseURL });
  });

  test('should perform request to correct provided url', async () => {
    await throttledGetDataFromApi('test data');
    expect(getSpy).toHaveBeenCalledWith('test data');
  });

  test('should return response data', async () => {
    const expectedResponse = { response: 'response' };
    const data = await throttledGetDataFromApi('test data');

    expect(data).toEqual(expectedResponse);
  });
});
