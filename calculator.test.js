const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toEqual(5);
    });

    test('should add a positive number and zero correctly', () => {
      expect(calculator.add(2, 0)).toEqual(2);
    });

    test('should add a positive number and a negative number correctly', () => {
      expect(calculator.add(2, -3)).toEqual(-1);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(5, 2)).toEqual(3);
    });

    test('should subtract a positive number and zero correctly', () => {
      expect(calculator.subtract(2, 0)).toEqual(2);
    });

    test('should subtract a positive number and a negative number correctly', () => {
      expect(calculator.subtract(2, -3)).toEqual(5);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divide(10, 2)).toEqual(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide a negative number by a positive number correctly', () => {
      expect(calculator.divide(-10, 2)).toEqual(-5);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(6, 7)).toEqual(42);
    });

    test('should multiply a positive number and zero correctly', () => {
      expect(calculator.multiply(2, 0)).toEqual(0);
    });

    test('should multiply a positive number and a negative number correctly', () => {
      expect(calculator.multiply(2, -3)).toEqual(-6);
    });
  });
});
