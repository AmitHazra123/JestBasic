const fetchData = require('./fetchDataCallback');

// Don't do this!
// test('the data is CHICKEN-FAJITA', () => {
//   function callback(data) {
//     expect(data).toMatch(/CHICKEN-FAJITA/);
//   }
//   fetchData(callback);
// });

test('the data is CHICKEN-FAJITA', done => {
  function callback(data) {
    try {
      expect(data).toMatch(/CHICKEN-FAJITA/);
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});