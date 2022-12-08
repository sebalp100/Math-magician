import * as React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

test('First Snapshot test', () => {
  const component = renderer
    .create(<Quote />)
    .toJSON();

  expect(component).toMatchSnapshot();
});
