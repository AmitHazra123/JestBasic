const fetchData = require('./fetchDataPromise');

test('the data is CHICKEN-FAJITA', async () => {
  expect.assertions(1);
  try {
    const data = await fetchData();
    expect(data).toBe('CHICKEN-FAJITA');
  } catch (error) {
    expect(error).toMatch('error');
  }
});

test('the data is CHICKEN-FAJITA', async () => {
  await expect(fetchData()).resolves.toBe('CHICKEN-FAJITA');
});

// test('the data is CHICKEN-FAJITA', async () => {
//   await expect(fetchData()).rejects.toMatch('error');
// });