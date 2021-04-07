const Q = require('q');
const JestWorker = require('jest-worker').default;

async function main() {
  const worker = new JestWorker(require.resolve('./heavy-task.js'));

  try {
    // run 2 tasks in parallel with different arguments
    const results = await Q.all([
      worker.myHeavyTask({foo: 'bar'}),
      worker.myHeavyTask({bar: 'foo'})
    ]);

    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

test('should match the case', async () => {
  await main();
  expect(true).toBeTruthy();
});