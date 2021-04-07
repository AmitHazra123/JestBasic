const Q = require('q');
const fetch = require("node-fetch");

function fetchData() {
  let deffered = Q.defer();
  fetch('https://order-pizza-api.herokuapp.com/api/orders', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json()).then(data => {
    let filteredData = data.filter(element => element.Order_ID === 3)[0];
    deffered.resolve(filteredData.Flavor);
  }).catch(error => {
    deffered.reject(error);
  });
  return deffered.promise;
}

// fetchData().then(data => console.log(data)).catch(oError => console.log(oError));

module.exports = fetchData;