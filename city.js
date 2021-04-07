const mongoose = require('mongoose');
const Q = require('q');
const Schema = mongoose.Schema;
const CitiesSchema = new Schema({}, {strict: false})
const Cities = mongoose.model('cities', CitiesSchema, 'cities');

function isCity(city) {
  let deffered = Q.defer();
  Cities.findOne({city: city}).then(data => {
    if(data) deffered.resolve(true);
    else deffered.resolve(false);
  }).catch(error => {
    deffered.reject(error);
  });
  return deffered.promise;
}

module.exports = isCity;