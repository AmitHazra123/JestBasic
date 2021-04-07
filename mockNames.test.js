test('should be match the cases', () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(scaler => 42 + scaler)
    .mockName('add42');
  // to identify error quickly with mock name
  // expect(myMockFn()).toBe(25);
  expect(myMockFn()).toBe(NaN);
});