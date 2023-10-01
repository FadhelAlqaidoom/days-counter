import './App.css';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  const incDate = () => {
    const newDate = new Date();
    newDate.setDate(currentDate.getDate() + step);
    setCurrentDate(newDate);
  };
  const decDate = () => {
    const newDate = new Date();
    newDate.setDate(currentDate.getDate() - step);
    setCurrentDate(newDate);
  };

  const stepInc = () => {
    setStep(step + 1);
  };
  const stepDec = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const countInc = () => {
    setCount(count + step);
    incDate();
  };
  const countDec = () => {
    setCount(count - step);
    decDate();
  };

  return (
    <div>
      <div>
        <button onClick={stepDec}>-</button>
        step: {step}
        <button onClick={stepInc}>+</button>
      </div>
      <div>
        <button onClick={countDec}>-</button>
        count: {count}
        <button onClick={countInc}>+</button>
      </div>
      <div>
        {count === 0
          ? 'Today is'
          : count < 0
          ? `${count * -1} day ago was `
          : `${count} day from today is `}{' '}
        {currentDate.toDateString()}
      </div>
    </div>
  );
}

export default App;
