const {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers} = require('./exercise-1');

describe('addNumbers', () => {
  it('adds 10 and 20 correctly', () => {
    const result = addNumbers(10, 20);
    expect(result).toBe(30);
  });

  it('adds 10 and -10 correctly', () => {
    const result = addNumbers(10, -10);
    expect(result).toBe(0);
  });

  it('adds 100 and -10 correctly', () => {
    const result = addNumbers(100, -10);
    expect(result).toBe(90);
  });
});

describe('subtractNumbers', () => {
  it('subtracts 20 and 10 correctly', () => {
    const result = subtractNumbers(20, 10);
    expect(result).toBe(10);
  });

  it('subtracts 20 and 20 correctly', () => {
    const result = subtractNumbers(20, 20);
    expect(result).toBe(0);
  });

  it('subtracts 10 and 20 correctly', () => {
    const result = subtractNumbers(10, 20);
    expect(result).toBe(-10);
  });
});

describe('multiplyNumbers', () => {
  it('multiplies 1 and 2 correctly', () => {
    const result = multiplyNumbers(1, 2);
    expect(result).toBe(2);
  });

  it('multiplies 5 and -5 correctly', () => {
    const result = multiplyNumbers(5, -5);
    expect(result).toBe(-25);
  });

  it('multiplies 10 and 20 correctly', () => {
    const result = multiplyNumbers(10, 20);
    expect(result).toBe(200);
  });
});

describe('divideNumbers', () => {
  it('divides 2 and 1 correctly', () => {
    const result = divideNumbers(2, 1);
    expect(result).toBe(2);
  });

  it('divides 2 and 2 correctly', () => {
    const result = divideNumbers(2, 2);
    expect(result).toBe(1);
  });

  it('divides 10 and 20 correctly', () => {
    const result = divideNumbers(10, 20);
    expect(result).toBe(0.5);
  });
});