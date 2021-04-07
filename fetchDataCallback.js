const fetch = require("node-fetch");

function fetchData(callback) {

  fetch('https://order-pizza-api.herokuapp.com/api/orders', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json()).then(data => {
    let filteredData = data.filter(element => element.Order_ID === 3)[0];
    callback(filteredData.Flavor);
  }).catch(error => {
    callback(error);
  });
}

// fetchData(data => console.log(data));

module.exports = fetchData;