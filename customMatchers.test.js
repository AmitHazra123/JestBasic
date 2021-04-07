test('should be match the cases', () => {
  const mockFunc = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementationOnce((err, val) => true)
    .mockImplementationOnce((err, val1, val2) => false)
    .mockName('a mock name');

  mockFunc(null, 5);
  mockFunc(null, 7, 9);
  
  // The mock function was called at least once
  expect(mockFunc).toHaveBeenCalled();

  // The mock function was called at least once with the specified args
  expect(mockFunc).toHaveBeenCalledWith(null, 5);

  // The last call to the mock function was called with the specified args
  expect(mockFunc).toHaveBeenLastCalledWith(null, 7, 9);

  // All calls and the name of the mock is written as a snapshot
  expect(mockFunc).toMatchSnapshot();


  // The mock function was called at least once
  expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

  // The mock function was called at least once with the specified args
  expect(mockFunc.mock.calls).toContainEqual([null, 5]);

  // The last call to the mock function was called with the specified args
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
    null,
    7,
    9
  ]);

  // The first arg of the last call to the mock function was `42`
  // (note that there is no sugar helper for this specific of an assertion)
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(null);

  // A snapshot will check that a mock was invoked the same number of times,
  // in the same order, with the same arguments. It will also assert on the name.
  expect(mockFunc.mock.calls).toEqual([[null, 5], [null, 7, 9]]);
  expect(mockFunc.getMockName()).toBe('a mock name');
});