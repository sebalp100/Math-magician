import './App.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="calc-wrapper">
        <Calculator />
      </div>
    );
  }
}

export default App;
