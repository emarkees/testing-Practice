const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toEqual(5);
    });

    it('should add a positive number and zero correctly', () => {
      expect(calculator.add(2, 0)).toEqual(2);
    });

    it('should add a positive number and a negative number correctly', () => {
      expect(calculator.add(2, -3)).toEqual(-1);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(5, 2)).toEqual(3);
    });

    it('should subtract a positive number and zero correctly', () => {
      expect(calculator.subtract(2, 0)).toEqual(2);
    });

    it('should subtract a positive number and a negative number correctly', () => {
      expect(calculator.subtract(2, -3)).toEqual(5);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(calculator.divide(10, 2)).toEqual(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should divide a negative number by a positive number correctly', () => {
      expect(calculator.divide(-10, 2)).toEqual(-5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(6, 7)).toEqual(42);
    });

    it('should multiply a positive number and zero correctly', () => {
      expect(calculator.multiply(2, 0)).toEqual(0);
    });

    it('should multiply a positive number and a negative number correctly', () => {
      expect(calculator.multiply(2, -3)).toEqual(-6);
    });
  });
});
