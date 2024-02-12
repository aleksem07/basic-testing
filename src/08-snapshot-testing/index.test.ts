// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

const elements = (length: number) => Array.from({ length }, (_, i) => i);

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    expect(generateLinkedList(elements(3))).toStrictEqual({
      value: 0,
      next: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: null,
            next: null,
          },
        },
      },
    });
  });

  test('should generate linked list from values 2', () => {
    const result = generateLinkedList(['a', 'b', 'c']);
    expect(result).toMatchSnapshot();
  });
});
