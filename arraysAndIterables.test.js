const shoppingList = [
  'diapears',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});