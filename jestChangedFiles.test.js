const {getChangedFilesForRoots} = require('jest-changed-files');

test('should matches the case', done => {

  getChangedFilesForRoots(['./'], {
    lastCommit: true
  }).then(result => {
    console.log(result.changedFiles);
    done();
  });

  expect(true).toBeTruthy();
});