test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Chistoph', () => {
  expect('Chistoph').toMatch(/stop/);
});