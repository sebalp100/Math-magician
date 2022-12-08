// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import React from 'react';
// import '@testing-library/jest-dom';
// import { BrowserRouter, MemoryRouter } from 'react-router-dom';
// import Nav from './NavBar';

// test('full app rendering/navigating', async () => {
//   render(<Nav />, { wrapper: BrowserRouter });
//   const user = userEvent.setup();

//   // verify page content for default route
//   expect(screen.getByText(/Home/i)).toBeInTheDocument();

//   // verify page content for expected route after navigating
//   await user.click(screen.getByText(/quote/i));
//   expect(screen.getByText(/Albert/i)).toBeInTheDocument();
// });
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from './NavBar';

describe('Test header component', () => {
  it('header renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
