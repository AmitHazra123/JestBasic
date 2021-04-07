const axios = require('axios').default;
const fetch = require('node-fetch');

function fetchData() {
  return fetch('https://order-pizza-api.herokuapp.com/api/orders', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  });
}

jest.mock('axios');

test('should fetch data', () => {
  let data = [
    {
      "Crust": "NORMAL",
      "Flavor": "BEEF-NORMAL",
      "Order_ID": 1,
      "Size": "M",
      "Table_No": 1,
      "Timestamp": "2019-12-03T18:21:08.669365"
    },
    {
      "Crust": "THIN",
      "Flavor": "CHEESE",
      "Order_ID": 2,
      "Size": "S",
      "Table_No": 5,
      "Timestamp": "2019-12-03T18:21:08.708470"
    },
    {
      "Crust": "NORMAL",
      "Flavor": "CHICKEN-FAJITA",
      "Order_ID": 3,
      "Size": "L",
      "Table_No": 3,
      "Timestamp": "2019-12-03T18:21:08.710006"
    }
  ];
  let resp = {data: data};
  axios.mockResolvedValue(resp);
  return fetchData().then(response => response.json()).then(respData => {
    expect(respData).toEqual(data);
  });
});