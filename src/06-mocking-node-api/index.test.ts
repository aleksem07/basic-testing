// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  const callback = jest.fn();
  const timeout = 222;

  beforeEach(() => {
    jest.spyOn(global, 'setTimeout');
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    doStuffByTimeout(callback, timeout);
    expect(setTimeout).toHaveBeenCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    const timeout = 100;
    doStuffByTimeout(callback, timeout);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(timeout);
    expect(callback).toBeCalled();
  });
});

describe('doStuffByInterval', () => {
  const callback = jest.fn();
  const interval = 222;

  beforeEach(() => {
    jest.spyOn(global, 'setInterval');
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    doStuffByInterval(callback, interval);
    expect(setInterval).toHaveBeenCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const numOfCalls = 2;
    doStuffByInterval(callback, interval);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(interval * numOfCalls);
    expect(callback).toHaveBeenCalledTimes(numOfCalls);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    const nonExistentFile = 'non-exist-file.txt';
    const result = await readFileAsynchronously(nonExistentFile);
    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
