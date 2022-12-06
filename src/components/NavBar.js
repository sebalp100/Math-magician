import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <div className="link">
        <li><Link to="/" style={{ textDecoration: 'none', color: 'azure' }}>Home</Link></li>
        <li><Link to="/calculator" style={{ textDecoration: 'none', color: 'azure' }}>Calculator</Link></li>
        <li><Link to="/quote" style={{ textDecoration: 'none', color: 'azure' }}>Quote</Link></li>
      </div>
    </nav>
  );
}

export default Nav;
