import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const values = calculate(this.state, event.target.innerText);
    this.setState(values);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="main-container">
        <table cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <div className="output">
                  <div className="input">
                    {`${total || ''} ${operation || ''} ${next || ''}`}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.handleClick} type="submit">AC</button>
                <button onClick={this.handleClick} type="submit">+/-</button>
                <button onClick={this.handleClick} type="submit">%</button>
                <button onClick={this.handleClick} className="orange" type="submit">÷</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.handleClick} type="submit">7</button>
                <button onClick={this.handleClick} type="submit">8</button>
                <button onClick={this.handleClick} type="submit">9</button>
                <button onClick={this.handleClick} className="orange" type="submit">x</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.handleClick} type="submit">4</button>
                <button onClick={this.handleClick} type="submit">5</button>
                <button onClick={this.handleClick} type="submit">6</button>
                <button onClick={this.handleClick} className="orange" type="submit">-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.handleClick} type="submit">1</button>
                <button onClick={this.handleClick} type="submit">2</button>
                <button onClick={this.handleClick} type="submit">3</button>
                <button onClick={this.handleClick} className="orange" type="submit">+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.handleClick} className="zero" type="submit">0</button>
                <button onClick={this.handleClick} type="submit">.</button>
                <button onClick={this.handleClick} className="orange" type="submit">=</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
