import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  const handleSubtraction = () => {
    setResult(number1 - number2);
  };

  const handleMultiplication = () => {
    setResult(number1 * number2);
  };

  const handleDivision = () => {
    setResult(number1 / number2);
  };

  return (

       <div className="card">
        <h1>Calculator</h1>
        <input
                    type="number"
                    className="form-control"
                    id="number1"
                    value={number1}
                    onChange={handleNumber1Change}
                  />
<input
                    type="number"
                    className="form-control"
                    id="number2"
                    value={number2}
                    onChange={handleNumber2Change}
                  />        
                  <br>
                  </br>
                  <div className="text-center">
                <button className="btn btn-primary mx-2" onClick={handleAddition}>
                  Add
                </button>
                <button className="btn btn-primary mx-2" onClick={handleSubtraction}>
                  Subtract
                </button>
                <button className="btn btn-primary mx-2" onClick={handleMultiplication}>
                  Multiply
                </button>
                <button className="btn btn-primary mx-2" onClick={handleDivision}>
                  Divide
                </button>
              </div>

        <p id="result">                <strong>Result: {result}</strong>
</p>
        </div>
   
  );
};

export default Calculator;
