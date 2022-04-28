import getDataType from './src/getDataType.js';

test('sum(2 + 2) 等于 4', () => {
  expect(getDataType(2)).toBe(number);
})