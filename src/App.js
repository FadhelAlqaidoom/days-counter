import './App.css';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleOnChangeStep(e) {
    setStep(Number(e.target.value));
  }
  function handleOnChangecount(e) {
    setCount(Number(e.target.value));
  }
  function handleOnClickReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={handleOnChangeStep}
        />
        {step}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={handleOnChangecount}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        {count === 0
          ? 'Today is'
          : count < 0
          ? `${count * -1} day ago was `
          : `${count} day from today is `}{' '}
        {date.toDateString()}
      </div>
      <button onClick={handleOnClickReset}>Reset</button>
    </div>
  );
}

export default App;
