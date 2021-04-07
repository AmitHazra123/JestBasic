const diff = require('jest-diff').default;

test('should match the case', () => {
  const a = {a: {b: {c: 5}}};
  const b = {a: {b: {c: 6}}};
  const result = diff(a, b);

  // print diff
  console.log(result);
});