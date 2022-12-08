import '@testing-library/jest-dom';
import calculate from './calculate';

const obj = {
  total: 10,
  next: null,
  operation: '+',
};

const buttonName = 'AC';
const funct = calculate(obj, buttonName);

test('clear button', () => {
  expect(funct.total).toBe('0');
});

const buttonName2 = '5';
const funct2 = calculate(obj, buttonName2);

test('add 5', () => {
  expect(funct2.total).toBe(10);
  expect(funct2.next).toBe('5');
  expect(funct2.operation).toBe('+');
});

const obj3 = {
  total: 10,
  next: 40,
  operation: '+',
};

const buttonName3 = '=';
const funct3 = calculate(obj3, buttonName3);

test('10 + 40', () => {
  expect(funct3.total).toBe('50');
  expect(funct3.next).toBe(null);
  expect(funct3.operation).toBe(null);
});

const obj4 = {
  total: 100,
  next: 40,
  operation: '-',
};

const buttonName4 = '=';
const funct4 = calculate(obj4, buttonName4);

test('100 - 40', () => {
  expect(funct4.total).toBe('60');
  expect(funct4.next).toBe(null);
  expect(funct4.operation).toBe(null);
});
