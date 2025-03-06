import React, { useState } from 'react';
// import * as math from 'mathjs'; // Use math.js for safety

function ScientificCalculator() {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = math.evaluate(display); // Use math.js's evaluate
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('0');
    } else if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleFunctionClick = (func) => {
    try {
      let result;
      const currentValue = math.evaluate(display); // Evaluate first
  
      if (func === '^') {
          result = currentValue;
          setDisplay(result + '^');
      } else if (func === 'mod') { // Correct modulo handling
        setDisplay(currentValue + '%'); // Display the modulo operator
      } else if (func === 'log10') {
          result = math.log10(currentValue);
          setDisplay(result.toString());
      } else {
          result = math[func](currentValue);
          setDisplay(result.toString());
      }
    } catch (error) {
      setDisplay('Error: ' + error.message);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <table className="buttons">
      <tbody>
        <tr>
            <td><button onClick={() => handleButtonClick('1')}>1</button></td>
            <td><button onClick={() => handleButtonClick('2')}>2</button></td>
            <td><button onClick={() => handleButtonClick('3')}>3</button></td>
            <td><button className="operator" onClick={() => handleButtonClick('-')}>-</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonClick('4')}>4</button></td>
            <td><button onClick={() => handleButtonClick('5')}>5</button></td>
            <td><button onClick={() => handleButtonClick('6')}>6</button></td>
            <td><button className="operator" onClick={() => handleButtonClick('')}></button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonClick('7')}>7</button></td>
            <td><button onClick={() => handleButtonClick('8')}>8</button></td>
            <td><button onClick={() => handleButtonClick('9')}>9</button></td>
            <td><button className="operator" onClick={() => handleButtonClick('/')}>/</button></td>
          </tr>
          
          <tr>
            <td><button onClick={() => handleButtonClick('0')}>0</button></td>
            <td><button onClick={() => handleButtonClick('.')}>.</button></td>
            <td><button className="operator" onClick={() => handleButtonClick('+')}>+</button></td>
            <td><button onClick={() => handleFunctionClick('^')}>^</button></td>
          </tr>
        </tbody>

        {/* Scientific Function Buttons */}
        <tr>
            <td> <button onClick={() => handleFunctionClick('mod')}>mod</button>  {/* Modulo */}</td>
            <td><button onClick={() => handleFunctionClick('sqrt')}>sqrt</button> {/* Square Root */}</td>
            <td><button onClick={() => handleFunctionClick('log10')}>log10</button></td>
            <td><button className="clear" onClick={() => handleButtonClick('C')}>C</button></td>
            
        
        </tr>
        <tr>
            <td><button onClick={() => handleFunctionClick('sin')}>sin</button></td>
            <td><button onClick={() => handleFunctionClick('cos')}>cos</button></td>
            <td><button onClick={() => handleFunctionClick('tan')}>tan</button></td>
            <td colSpan="2"><button className="equals" onClick={() => handleButtonClick('=')}>=</button></td>
        </tr>
              
          </table>
      </div>
  );
}

export default ScientificCalculator;