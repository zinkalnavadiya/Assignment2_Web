import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" onChange={(e) => setNum1(+e.target.value)} />
      <input type="number" onChange={(e) => setNum2(+e.target.value)} />
      <button onClick={() => setResult(num1 + num2)}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;