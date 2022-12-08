import '@testing-library/jest-dom';
import operate from './operate';

const one = 10;
const two = 20;
const operat = '+';
const operat2 = 'x';
const operat3 = '-';
const operat4 = '÷';

const funct = operate(one, two, operat);
const funct2 = operate(one, two, operat2);
const funct3 = operate(one, two, operat3);
const funct4 = operate(one, two, operat4);

test('pluss sign', () => {
  expect(funct).toBe('30');
});

test('multiplication sign', () => {
  expect(funct2).toBe('200');
});

test('minus sign', () => {
  expect(funct3).toBe('-10');
});

test('division sign', () => {
  expect(funct4).toBe('0.5');
});
