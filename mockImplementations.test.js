test('should match the case', () => {
  const myMockFn = jest.fn(cb => cb(null, true));
  myMockFn((err, val) => console.log(val));

  jest.mock('./foo');
  const foo = require('./foo');

  // foo is a mock function
  foo.mockImplementation(() => 42);
  console.log(foo());

  expect(true).toBeTruthy();
});

test('should match the case', () => {
  const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));

  myMockFn((err, val) => console.log(val));
  myMockFn((err, val) => console.log(val));

  expect(true).toBeTruthy();
});

test('should match the case', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');
  
  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
  expect(true).toBeTruthy();
});

test('should match the case', () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis(),
  };
  // same as
  const otherObj = {
    myMethod: jest.fn(function () {
      return this;
    }),
  };
  console.log(myObj.myMethod());
  console.log(otherObj.myMethod());
  expect(true).toBeTruthy();
});