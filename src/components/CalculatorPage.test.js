import * as React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from './CalculatorPage';

test('Firstt Snapshot test', () => {
  const component = renderer
    .create(<CalculatorPage />)
    .toJSON();

  expect(component).toMatchSnapshot();
});
