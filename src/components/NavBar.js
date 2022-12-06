import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </div>
    </nav>
  );
}

export default Nav;
