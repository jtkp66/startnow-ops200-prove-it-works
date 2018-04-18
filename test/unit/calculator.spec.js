const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should have an add function', () => {
    expect(calculator.add).to.exist;
  });

  it('should have a subtract function', () => {
    expect(calculator.subtract).to.exist;
  });

  it('should have a multiply function', () => {
    expect(calculator.multiply).to.exist;
  });

  it('should have a divide function', () => {
    expect(calculator.divide).to.exist;
  });

  it('should add 2 + 2 together correctly', () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });

  it('should subtract 3 - 2 correctly', () => {
    expect(calculator.subtract(3, 2)).to.equal(1);
  });

  it('should multiply 3 * 2 correctly', () => {
    expect(calculator.multiply(3, 2)).to.equal(6);
  });

  it('should divide 4 / 2 correctly', () => {
    expect(calculator.divide(4, 2)).to.equal(2);
  });

  it('should multiply 7 * 2 correctly', () => {
    expect(calculator.multiply(7, 2)).to.equal(14);
  });

  it('should add 300 + 22 correctly', () => {
    expect(calculator.add(300, 22)).to.equal(322);
  });

  it('should subtract 20 - 14 correctly', () => {
    expect(calculator.subtract(20, 14)).to.equal(6);
  });
});