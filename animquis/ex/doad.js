test('example test', () => {
  const mockFunction = jest.fn();
  mockFunction('arg1', 'arg2');

  expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2');
});
