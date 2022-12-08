import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Quote from './components/Quote';
import CalculatorPage from './components/CalculatorPage';

describe('App', () => {
  it('renders home component', () => {
    render(<App />);

    expect(screen.getByText(/Home/)).toBeInTheDocument();
    screen.debug();
  });
});

describe('Quote', () => {
  it('renders Qoute component', () => {
    render(<Quote />);
  });
});

describe('Calculator', () => {
  it('renders CalculatorPage component', () => {
    render(<CalculatorPage />);
  });
});

test('First Snapshot test', () => {
  const component = renderer
    .create(<App />)
    .toJSON();

  expect(component).toMatchSnapshot();
});
