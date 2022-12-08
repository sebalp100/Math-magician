import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {
  it('renders home component', () => {
    render(<Home />);

    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });
});

test('First Snapshot test', () => {
  const component = renderer
    .create(<Home />)
    .toJSON();

  expect(component).toMatchSnapshot();
});