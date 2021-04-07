const fetchData = require('./fetchDataPromise');

test('the data is CHICKEN-FAJITA', () => {
  expect.assertions(1);
  return fetchData().then(data =>
    expect(data).toMatch(/CHICKEN-FAJITA/)
  ).catch(error =>
    expect(error).toMatch('error')
  );
});

test('the data is CHICKEN-FAJITA', () => {
  return expect(fetchData()).resolves.toMatch(/CHICKEN-FAJITA/);
});

// test('the data is CHICKEN-FAJITA', () => {
//   return expect(fetchData()).rejects.toMatch('error');
// });