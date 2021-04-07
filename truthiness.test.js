test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  // expect(n).toBeUndefined();
  // expect(n).toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const n = 0;
  // expect(n).toBeNull();
  expect(n).toBeDefined();
  // expect(n).toBeUndefined();
  // expect(n).toBeTruthy();
  expect(n).toBeFalsy();
});