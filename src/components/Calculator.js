import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, changeState] = useState({ // declare constant with state object and function
    total: '0',
    next: null,
    operation: null,
  });

  const HandleClick = (event) => {
    const values = calculate(state, event.target.innerText);
    changeState(values);
  };

  const { total, next, operation } = state;

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
              <button onClick={(e) => HandleClick(e)} type="submit">AC</button>
              <button onClick={(e) => HandleClick(e)} type="submit">+/-</button>
              <button onClick={(e) => HandleClick(e)} type="submit">%</button>
              <button onClick={(e) => HandleClick(e)} className="orange" type="submit">÷</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(e) => HandleClick(e)} type="submit">7</button>
              <button onClick={(e) => HandleClick(e)} type="submit">8</button>
              <button onClick={(e) => HandleClick(e)} type="submit">9</button>
              <button onClick={(e) => HandleClick(e)} className="orange" type="submit">x</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(e) => HandleClick(e)} type="submit">4</button>
              <button onClick={(e) => HandleClick(e)} type="submit">5</button>
              <button onClick={(e) => HandleClick(e)} type="submit">6</button>
              <button onClick={(e) => HandleClick(e)} className="orange" type="submit">-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(e) => HandleClick(e)} type="submit">1</button>
              <button onClick={(e) => HandleClick(e)} type="submit">2</button>
              <button onClick={(e) => HandleClick(e)} type="submit">3</button>
              <button onClick={(e) => HandleClick(e)} className="orange" type="submit">+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(e) => HandleClick(e)} className="zero" type="submit">0</button>
              <button onClick={(e) => HandleClick(e)} type="submit">.</button>
              <button onClick={(e) => HandleClick(e)} className="orange" type="submit">=</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
