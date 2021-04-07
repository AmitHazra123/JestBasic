const mongoose = require('mongoose');
const Q = require('q');

async function initializeCityDatabase() {
  const db = await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
  return db;
}

function clearCityDatabase() {
  const deffered = Q.defer();
  if(3 < 4) deffered.resolve({});
  else deffered.reject({});
  return deffered.promise;
}

async function initializeFoodDatabase() {
  // const db = await mongoose.connect('mongodb://localhost:27017/test1', {useNewUrlParser: true, useUnifiedTopology: true});
  return null;
}

function clearFoodDatabase() {
  const deffered = Q.defer();
  if(3 < 4) deffered.resolve({});
  else deffered.reject({});
  return deffered.promise;
}

module.exports = {
  initializeCityDatabase,
  clearCityDatabase,
  initializeFoodDatabase,
  clearFoodDatabase
};