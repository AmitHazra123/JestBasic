function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

// mock a function
test('should match the tests', () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

// using .mock property
test('should match the tests', () => {
  const myMock = jest.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();

  console.log(myMock.mock.instances);
  console.log(myMock.mock.instances[1].name);
});

// mock return values
// example 1
const myMock = jest.fn();
console.log(myMock());

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
console.log(myMock(), myMock(), myMock(), myMock());

// example 2
const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));
console.log(result);
console.log(filterTestFn.mock.calls);