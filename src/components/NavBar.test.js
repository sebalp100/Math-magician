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
