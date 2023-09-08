import { useState } from 'react';

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleNextStep = () => {
    setStep(currentStep => currentStep + 1);
  };

  const handlePreviousStep = () => {
    setStep(currentStep => currentStep - 1);
  };

  const handleNextCount = () => {
    setCount(currentCount => currentCount + step);
  };

  const handlePreviousCount = () => {
    setCount(currentCount => currentCount - step);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <div>
        <button onClick={handlePreviousStep}>-</button>
        <span> Step: {step} </span>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div>
        <button onClick={handlePreviousCount}>-</button>
        <span> Count: {count} </span>
        <button onClick={handleNextCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count === 1
            ? `${count} day from today is `
            : count > 0
            ? `${count} days from today is `
            : count === -1
            ? `${Math.abs(count)} day ago was `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
