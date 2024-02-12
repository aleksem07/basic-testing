// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = {
      a: 1,
      b: 2,
      action: Action.Add,
    };
    const ans = 3;

    const res = simpleCalculator(input);

    expect(res).toBe(ans);
  });

  test('should subtract two numbers', () => {
    const input = {
      a: 3,
      b: 2,
      action: Action.Subtract,
    };
    const ans = 1;

    const res = simpleCalculator(input);

    expect(res).toBe(ans);
  });

  test('should multiply two numbers', () => {
    const input = {
      a: 2,
      b: 2,
      action: Action.Multiply,
    };
    const ans = 4;

    const res = simpleCalculator(input);

    expect(res).toBe(ans);
  });

  test('should divide two numbers', () => {
    const input = {
      a: 10,
      b: 5,
      action: Action.Divide,
    };
    const ans = 2;

    const res = simpleCalculator(input);

    expect(res).toBe(ans);
  });

  test('should exponentiate two numbers', () => {
    const input = {
      a: 2,
      b: 5,
      action: Action.Exponentiate,
    };
    const ans = 32;

    const res = simpleCalculator(input);

    expect(res).toBe(ans);
  });

  test('should return null for invalid action', () => {
    const input = {
      a: 2,
      b: 5,
      action: 'Error',
    };

    const res = simpleCalculator(input);

    expect(res).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const input = {
      a: '2',
      b: 'err',
      action: Action.Subtract,
    };

    const res = simpleCalculator(input);

    expect(res).toBeNull();
  });
});
