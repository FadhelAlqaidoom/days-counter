import './App.css';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        step: {step}
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        count: {count}
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
    </div>
  );
}

export default App;
