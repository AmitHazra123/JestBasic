const Q = require('q');

module.exports = {
  myHeavyTask: args => {
    // long running CPU intensive task.
    let deffered = Q.defer();
    deffered.resolve(args);
    return deffered.promise;
  }
};