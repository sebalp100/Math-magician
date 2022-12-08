import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorPage from './CalculatorPage';

test('First Snapshot test', () => {
  const component = renderer
    .create(<CalculatorPage />)
    .toJSON();

  expect(component).toMatchSnapshot();
});