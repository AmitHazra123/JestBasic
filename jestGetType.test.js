const getType = require('jest-get-type');

test('should match the case', () => {
  const array = [1, 2, 3];
  const nullValue = null;
  const undefinedValue = undefined;

  // prints 'array'
  console.log(getType(array));
  console.log(getType(nullValue));
  console.log(getType(undefinedValue));

  expect(true).toBeTruthy();
});