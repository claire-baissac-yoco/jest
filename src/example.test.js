const { addNumbers } = require('./example');

describe('addNumbers', () => {
  it('adds numbers correctly', () => {
    const result = addNumbers(10, 20);
    expect(result).toBe(30);
  });
});
