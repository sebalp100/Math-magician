import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="main-container">
        <table cellSpacing="0">
          <tbody>
            <tr>
              <td className="input">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">AC</button>
                <button type="submit">+/-</button>
                <button type="submit">%</button>
                <button className="orange" type="submit">÷</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">7</button>
                <button type="submit">8</button>
                <button type="submit">9</button>
                <button className="orange" type="submit">x</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">4</button>
                <button type="submit">5</button>
                <button type="submit">6</button>
                <button className="orange" type="submit">-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">1</button>
                <button type="submit">2</button>
                <button type="submit">3</button>
                <button className="orange" type="submit">+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="zero" type="submit">0</button>
                <button type="submit">.</button>
                <button className="orange" type="submit">=</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
