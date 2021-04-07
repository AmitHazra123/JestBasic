const isCity = require('./city');
const {
  initializeCityDatabase,
  clearCityDatabase,
  initializeFoodDatabase,
  clearFoodDatabase
} = require('./database');

// Applies to all tests in this file
beforeAll(() => {
  return initializeCityDatabase();
});

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

// test('city database has Vienna', () => {
//   expect(isCity('Kolkata')).toBeTruthy();
// });

test('city database has San Juan', () => {
  expect(true).toBeTruthy();
});

describe('mathing cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 sausage', () => {
    expect(true).toBe(true);
  });
});

// order of execution
describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});

// test.only('this will be the only test that runs', () => {
//   expect(true).toBe(false);
// });